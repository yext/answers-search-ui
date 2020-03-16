/** @module UniversalResultsComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import VerticalResultsComponent from '../results/verticalresultscomponent';

export default class UniversalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;

    const { ...verticals } = config.verticals || config.config || {};

    /**
     * verticals is an object of verticalKey to config for vertical results.
     * @type {Object}
     */
    this.verticals = APPLY_VERTICAL_SYNONYMS(verticals);

    /**
     * Results data from the universal search.
     * @type {Array<Section>}
     */
    this.sections = [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  static get type () {
    return 'UniversalResults';
  }

  static defaultTemplateName (config) {
    return 'results/universalresults';
  }

  setState (data) {
    this.sections = data.sections || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign(data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: this.sections.length === 0,
      sections: this.sections
    }));
  }

  addChild (data, type, opts) {
    if (type === VerticalResultsComponent.type) {
      const verticalKey = opts.verticalKey;

      /** @type {Section} */
      const section = this.sections.find(section => section.verticalConfigId === verticalKey) || {};
      const verticalConfig = this.verticals[verticalKey] || {};
      const verticalResultsOpts = {
        ...DEFAULT_VERTICAL_CONFIG(verticalKey),
        ...verticalConfig,
        ...opts
      };
      return super.addChild(section, type, verticalResultsOpts);
    }
    return super.addChild(data, type, opts);
  }
}

const APPLY_VERTICAL_SYNONYMS = (config) => ({
  icon: config.sectionTitleIconName || config.sectionTitleIconUrl,
  title: config.sectionTitle,
  viewMoreLabel: config.viewAllText,
  verticalURL: config.url,
  ...config
});

const DEFAULT_VERTICAL_CONFIG = verticalKey => ({
  // Tells vertical results it is in a universal results page.
  isUniversal: true,
  // Label for the vertical in the titlebar.
  title: verticalKey,
  // Icon in the titlebar
  icon: 'star',
  // Url that links to the vertical search for this vertical.
  verticalURL: verticalKey + '.html',
  // Show a view more link by default, which also links to verticalURL.
  viewMore: true,
  // By default, the view more link has a label of 'View More'.
  viewMoreLabel: 'View More',
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
  showChangeFilters: true
});
