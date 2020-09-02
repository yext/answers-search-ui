/** @module AlternativeVerticalsComponent */

import AlternativeVertical from '../../../core/models/alternativevertical';
import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import { replaceUrlParams, filterParamsForExperienceLink } from '../../../core/utils/urlutils';
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
    this.verticalSuggestions = this._buildVerticalSuggestions(
      this._alternativeVerticals,
      this._verticalsConfig,
      this.core.globalStorage.getState(StorageKeys.API_CONTEXT),
      this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL)
    );

    /**
     * The url to the universal page to link back to without query params
     * @type {string|null}
     */
    this._baseUniversalUrl = opts.baseUniversalUrl || '';

    /**
     * The url to the universal page to link back to with current query params
     * @type {string|null}
     */
    this._universalUrl = this._getUniversalURL(
      this._baseUniversalUrl,
      new SearchParams(window.location.search.substring(1))
    );

    /**
     * Whether or not results are displaying, used to control language in the info box
     * @type {boolean}
     */
    this._isShowingResults = opts.isShowingResults || false;

    const reRender = () => {
      this.verticalSuggestions = this._buildVerticalSuggestions(
        this._alternativeVerticals,
        this._verticalsConfig,
        this.core.globalStorage.getState(StorageKeys.API_CONTEXT),
        this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL)
      );
      this._universalUrl = this._getUniversalURL(
        this._baseUniversalUrl,
        new SearchParams(window.location.search.substring(1))
      );
      this.setState(this.core.globalStorage.getState(StorageKeys.ALERNATIVE_VERTICALS));
    };

    this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, reRender);
    this.core.globalStorage.on('update', StorageKeys.SESSIONS_OPT_IN, reRender);
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
  _buildVerticalSuggestions (alternativeVerticals, verticalsConfig, context, referrerPageUrl) {
    let verticals = [];

    const params = new SearchParams(window.location.search.substring(1));
    if (context) {
      params.set(StorageKeys.API_CONTEXT, context);
    }
    if (typeof referrerPageUrl === 'string') {
      params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
    }
    const sessionsOptIn = this.core.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN);
    if (sessionsOptIn && sessionsOptIn.setDynamically) {
      params[StorageKeys.SESSIONS_OPT_IN] = sessionsOptIn.value;
    }

    const filteredParams = filterParamsForExperienceLink(
      params,
      types => this.componentManager.getComponentNamesForComponentTypes(types)
    );

    for (const alternativeVertical of alternativeVerticals) {
      const verticalKey = alternativeVertical.verticalConfigId;

      const matchingVerticalConfig = verticalsConfig.find(config => {
        return config.verticalKey === verticalKey;
      });

      if (!matchingVerticalConfig || alternativeVertical.resultsCount < 1) {
        continue;
      }

      verticals.push(new AlternativeVertical({
        label: matchingVerticalConfig.label,
        url: replaceUrlParams(matchingVerticalConfig.url, filteredParams),
        iconName: matchingVerticalConfig.icon,
        iconUrl: matchingVerticalConfig.iconUrl,
        resultsCount: alternativeVertical.resultsCount
      }));
    }

    return verticals;
  }

  /**
   * Adds parameters that are dynamically set. Removes parameters for facets,
   * filters, and pagination, which should not persist across the experience.
   * @param {string} baseUrl The url append the appropriate params to. Note:
   *                         params already on the baseUrl will be stripped
   * @param {SearchParams} params The parameters to include in the experience URL
   * @return {string} The formatted experience URL with appropriate query params
   */
  _getUniversalURL (baseUrl, params) {
    if (!baseUrl) {
      return '';
    }

    params.set(StorageKeys.QUERY, this.core.globalStorage.getState(StorageKeys.QUERY));

    const context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);
    if (context) {
      params.set(StorageKeys.API_CONTEXT, context);
    }
    const referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);
    if (referrerPageUrl !== null) {
      params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
    }

    const filteredParams = filterParamsForExperienceLink(
      params,
      types => this.componentManager.getComponentNamesForComponentTypes(types)
    );

    return replaceUrlParams(baseUrl, filteredParams);
  }
}
