/** @module UniversalResultsComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import AccordionResultsComponent from './accordionresultscomponent.js';
import { defaultConfigOption } from '../../../core/utils/configutils';
import TranslationFlagger from '../../i18n/translationflagger';

export default class UniversalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
    this._appliedFilters = {
      show: true,
      showFieldNames: false,
      hiddenFields: ['builtin.entityType'],
      resultsCountSeparator: '|',
      showChangeFilters: false,
      delimiter: '|',
      labelText: TranslationFlagger.flag({
        phrase: 'Filters applied to this search:'
      }),
      ...config.appliedFilters
    };

    const reRender = () =>
      this.setState(this.core.globalStorage.getState(StorageKeys.UNIVERSAL_RESULTS) || {});
    this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, reRender);
    this.core.globalStorage.on('update', StorageKeys.SESSIONS_OPT_IN, reRender);
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
    const query = this.core.globalStorage.getState(StorageKeys.QUERY);
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign(data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: sections.length === 0 && query,
      query: query,
      sections: sections
    }, val));
  }

  addChild (data = {}, type, opts) {
    const verticals = this._config.verticals || this._config.config || {};
    const verticalKey = data.verticalConfigId;
    const childOpts = {
      ...opts,
      ...UniversalResultsComponent.getChildConfig(
        verticalKey, verticals[verticalKey] || {}, this._appliedFilters)
    };
    const childType = childOpts.useAccordion ? AccordionResultsComponent.type : type;
    return super.addChild(data, childType, childOpts);
  }

  /**
   * Applies synonyms and default config for a vertical in universal results.
   * @param {string} verticalKey
   * @param {Object} config
   * @param {Object} topLevelAppliedFilters
   * @returns {Object}
   */
  static getChildConfig (verticalKey, config, topLevelAppliedFilters) {
    return {
      // Tells vertical results it is in a universal results page.
      isUniversal: true,
      // Label for the vertical in the titlebar.
      title: config.sectionTitle || verticalKey,
      // Icon in the titlebar
      icon: config.sectionTitleIconName || config.sectionTitleIconUrl || 'star',
      // Url that links to the vertical search for this vertical.
      verticalURL: config.url,
      // Show a view more link by default, which also links to verticalURL.
      viewMore: true,
      // By default, the view more link has a label of 'View More'.
      viewMoreLabel: defaultConfigOption(
        config,
        ['viewMoreLabel', 'viewAllText'],
        TranslationFlagger.flag({
          phrase: 'View More',
          context: 'Button label, view more [results]'
        })
      ),
      // Whether to show a result count.
      showResultCount: false,
      // Whether to use AccordionResults (DEPRECATED)
      useAccordion: false,
      // Override vertical config defaults with user given config.
      ...config,
      // Config for the applied filters bar. Must be placed after ...config to not override defaults.
      appliedFilters: {
        // Whether to display applied filters.
        show: defaultConfigOption(config, ['appliedFilters.show', 'showAppliedFilters'], topLevelAppliedFilters.show),
        // Whether to show field names, e.g. Location in Location: Virginia.
        showFieldNames: defaultConfigOption(config,
          ['appliedFilters.showFieldNames', 'showFieldNames'], topLevelAppliedFilters.showFieldNames),
        // Hide filters with these field ids.
        hiddenFields: defaultConfigOption(config,
          ['appliedFilters.hiddenFields', 'hiddenFields'], topLevelAppliedFilters.hiddenFields),
        // Symbol placed between the result count and the applied filters.
        resultsCountSeparator: defaultConfigOption(config,
          ['appliedFilters.resultsCountSeparator', 'resultsCountSeparator'], topLevelAppliedFilters.resultsCountSeparator),
        // Whether to show a 'change filters' link, linking back to verticalURL.
        showChangeFilters: defaultConfigOption(config,
          ['appliedFilters.showChangeFilters', 'showChangeFilters'], topLevelAppliedFilters.showChangeFilters),
        // The text for the change filters link.
        changeFiltersText: defaultConfigOption(config,
          ['appliedFilters.changeFiltersText', 'changeFiltersText'], topLevelAppliedFilters.changeFiltersText),
        // The symbol placed between different filters with the same fieldName. e.g. Location: Virginia | New York | Miami.
        delimiter: defaultConfigOption(config, ['appliedFilters.delimiter'], topLevelAppliedFilters.delimiter),
        // The aria-label given to the applied filters bar.
        labelText: defaultConfigOption(config, ['appliedFilters.labelText'], topLevelAppliedFilters.labelText)
      }
    };
  }
}
