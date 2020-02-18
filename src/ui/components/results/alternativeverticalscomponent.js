/** @module AlternativeVerticalsComponent */

import { AnswersComponentError } from '../../../core/errors/errors';
import AlternativeVertical from '../../../core/models/alternativevertical';
import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

export default class AlternativeVerticalsComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    this.moduleId = StorageKeys.ALTERNATIVE_VERTICALS;

    /**
     * Alternative verticals that have results for the current query
     * This gets updated based on the server results
     * @type {AlternativeVerticals}
     * @private
     */
    this._alternativeVerticals = (opts.data && opts.data.alternativeVerticals) || [];

    /**
     * Vertical pages config from global verticals config
     * @type {VerticalPagesConfig}
     * @private
     */
    this._verticalsConfig = opts.verticalsConfig || [];

    /**
     * The name of the vertical that is exposed for the link
     * @type {string}
     */
    this._currentVerticalLabel = this.getCurrentVerticalLabel(opts.verticalsConfig) || '';

    /**
     * The alternative vertical search suggestions, parsed from alternative verticals and
     * the global verticals config.
     * This gets updated based on the server results
     * @type {AlternativeVertical[]}
     */
    this.verticalSuggestions = AlternativeVerticalsComponent._buildVerticalSuggestions(
      this._alternativeVerticals,
      this._verticalsConfig
    );

    /**
     * The url to the universal page to link back to with current query
     * @type {string|null}
     */
    this._universalUrl = opts.universalUrl || '';
  }

  static get type () {
    return 'AlternativeVerticals';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/alternativeverticals';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  setState (data) {
    return super.setState(Object.assign({ verticalSuggestions: [] }, data, {
      universalUrl: this._universalUrl,
      verticalSuggestions: this.verticalSuggestions,
      hasVerticalSuggestions: this.verticalSuggestions && this.verticalSuggestions.length > 0,
      currentVerticalLabel: this._currentVerticalLabel,
      query: this.core.globalStorage.getState(StorageKeys.QUERY)
    }));
  }

  getCurrentVerticalLabel (verticalsConfig) {
    const thisVertical = verticalsConfig.find(config => {
      return config.isActive || false;
    });

    return thisVertical ? thisVertical.label : '';
  }

  /**
   * _buildVerticalSuggestions will construct an array of {AlternativeVertical}
   * from alternative verticals and verticalPages configuration
   * @param {object} alternativeVerticals alternativeVerticals server response
   * @param {object} verticalsConfig the configuration to use
   */
  static _buildVerticalSuggestions (alternativeVerticals, verticalsConfig) {
    let verticals = [];
    let queryParams = window.location.search;

    for (let alternativeVertical of alternativeVerticals) {
      const verticalKey = alternativeVertical.verticalConfigId;

      const matchingVerticalConfig = verticalsConfig.find(config => {
        return config.verticalKey === verticalKey;
      });

      if (!matchingVerticalConfig) {
        throw new AnswersComponentError(
          'no matching verticalPages config entry for ' + verticalKey,
          'AlternativeVerticalsComponent'
        );
      }

      verticals.push(new AlternativeVertical({
        label: matchingVerticalConfig.label,
        url: matchingVerticalConfig.url + queryParams,
        icon: matchingVerticalConfig.icon,
        resultsCount: alternativeVertical.resultsCount
      }));
    }

    return verticals;
  }
}
