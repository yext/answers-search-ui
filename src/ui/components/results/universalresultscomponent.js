/** @module UniversalResultsComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import AccordionResultsComponent from './accordionresultscomponent.js';

export default class UniversalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
  }

  static get type () {
    return 'UniversalResults';
  }

  static defaultTemplateName (config) {
    return 'results/universalresults';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  setState (data, val) {
    const sections = data.sections || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign(data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: sections.length === 0,
      query: this.core.globalStorage.getState(StorageKeys.QUERY),
      sections: sections
    }, val));
  }

  addChild (data = {}, type, opts) {
    const verticals = this._config.verticals || this._config.config || {};
    const verticalKey = data.verticalConfigId;
    const childOpts = {
      ...opts,
      ...UniversalResultsComponent.getChildConfig(verticalKey, verticals[verticalKey] || {})
    };
    const childType = childOpts.useAccordion ? AccordionResultsComponent.type : type;
    return super.addChild(data, childType, childOpts);
  }

  /**
   * Applies synonyms and default config for a vertical in universal results.
   * @param {string} verticalKey
   * @param {Object} config
   */
  static getChildConfig (verticalKey, config) {
    return {
      // Tells vertical results it is in a universal results page.
      isUniversal: true,
      // Label for the vertical in the titlebar.
      title: config.sectionTitle || verticalKey,
      // Icon in the titlebar
      icon: config.sectionTitleIconName || config.sectionTitleIconUrl || 'star',
      // Url that links to the vertical search for this vertical.
      verticalURL: config.url || verticalKey + '.html',
      // Show a view more link by default, which also links to verticalURL.
      viewMore: true,
      // By default, the view more link has a label of 'View More'.
      viewMoreLabel: config.viewAllText || 'View More',
      // By default, do not show a change filters button next to the applied filters.
      // Also links to verticalURL
      changeFilters: false,
      // Whether to show the applied filters.
      showAppliedFilters: true,
      // Whether to show field names in the applied filters, e.g. 'Location: Virginia' vs just 'Virginia'.
      showFieldNames: false,
      // Field ids to hide in the applied filters.
      hiddenFields: ['builtin.entityType'],
      // Whether to show a result count.
      showResultCount: false,
      // Whether to show the change filters link.
      showChangeFilters: true,
      // Whether to use AccordionResults (DEPRECATED)
      useAccordion: false,
      ...config
    };
  }
}
