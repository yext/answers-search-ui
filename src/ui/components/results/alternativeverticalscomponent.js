/** @module AlternativeVerticalsComponent */

import { AnswersComponentError } from '../../../core/errors/errors';
import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * The VerticalSearchSuggestion is a model that is used to power the search
 * suggestions info box. It's initialized through the configuration provided
 * to the component.
 */
export class VerticalSearchSuggestion {
  constructor (config) {
    /**
     * The name of the vertical that is exposed for the link
     * @type {string}
     */
    this.label = config.label;
    if (typeof this.label !== 'string') {
      throw new AnswersComponentError('label is a required configuration option for verticalPage.', 'AlternativeVerticalsComponent');
    }

    /**
     * The complete URL, including the params
     * @type {string}
     */
    this.url = config.url;
    if (typeof this.url !== 'string') {
      throw new AnswersComponentError('url is a required configuration option for verticalPage.', 'AlternativeVerticalsComponent');
    }

    /**
     * The base URL used for constructing the URL with params
     * @type {string}
     */
    this.baseUrl = config.url;

    /**
     * name of an icon from the default icon set
     * @type {string}
     */
    this.icon = config.icon;

    /**
     * The number of results to display next to each alternative
     * vertical
     * @type {number}
     */
    this.resultsCount = config.resultsCount;
  }

  /**
   * from will construct an array of {VerticalSearchSuggestion} from
   * a configuration file
   * @param {object} tabsConfig the configuration to use
   */
  static from (alternativeVerticals, verticalsConfig) {
    let verticals = [];

    for (let alternativeVertical of alternativeVerticals) {
      const verticalKey = alternativeVertical.verticalConfigId;

      const matchingVerticalConfig = verticalsConfig.find(config => {
        return (config.verticalKey === verticalKey) ||
          (!config.verticalKey && !verticalKey);
      });

      if (!matchingVerticalConfig) {
        continue;
      }

      verticals.push(new VerticalSearchSuggestion({
        label: matchingVerticalConfig.label,
        url: matchingVerticalConfig.url,
        baseUrl: matchingVerticalConfig.url,
        icon: matchingVerticalConfig.icon,
        resultsCount: alternativeVertical.resultsCount
      }));
    }

    return verticals;
  }
}

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
     * @type {VerticalSearchSuggestion[]}
     */
    this.verticalSuggestions = VerticalSearchSuggestion.from(this._alternativeVerticals, this._verticalsConfig);

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
    for (let vertical of this.verticalSuggestions) {
      vertical.url = vertical.baseUrl + window.location.search;
    }

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
}
