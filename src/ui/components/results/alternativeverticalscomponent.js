/** @module AlternativeVerticalsComponent */

import AlternativeVertical from '../../../core/models/alternativevertical';
import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import { replaceUrlParams } from '../../../core/utils/urlutils';
import SearchParams from '../../dom/searchparams';

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

    /**
     * Whether or not results are displaying, used to control language in the info box
     * @type {boolean}
     */
    this._isShowingResults = opts.isShowingResults || false;
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
      currentVerticalLabel: this._currentVerticalLabel,
      isShowingResults: this._isShowingResults,
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
    let queryParams = new SearchParams(window.location.search);

    for (let alternativeVertical of alternativeVerticals) {
      const verticalKey = alternativeVertical.verticalConfigId;

      const matchingVerticalConfig = verticalsConfig.find(config => {
        return config.verticalKey === verticalKey;
      });

      if (!matchingVerticalConfig || alternativeVertical.resultsCount < 1) {
        continue;
      }

      verticals.push(new AlternativeVertical({
        label: matchingVerticalConfig.label,
        url: replaceUrlParams(matchingVerticalConfig.url, queryParams),
        iconName: matchingVerticalConfig.icon,
        iconUrl: matchingVerticalConfig.iconUrl,
        resultsCount: alternativeVertical.resultsCount
      }));
    }

    return verticals;
  }
}
