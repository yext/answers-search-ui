/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

const DEFAULT_CONFIG = {
  showResultCount: true,
  showAppliedFilters: true,
  showFieldNames: false,
  resultsCountSeparator: '|',
  verticalURL: undefined,
  showChangeFilters: false
};

export default class ResultsHeaderComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    const data = config.data || {};

    /**
     * Total number of results.
     * @type {number}
     */
    this.resultsCount = data.resultsCount || 0;

    /**
     * Number of results displayed on the page.
     * @type {number}
     */
    this.resultsLength = data.resultsLength || 0;

    /**
     * @type {Array<AppliedQueryFilter>}
     */
    this.appliedQueryFilters = data.appliedQueryFilters || [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  getAppliedFiltersArray () {
    const groupedFilters = {};
    this.appliedQueryFilters.forEach(filter => {
      if (!groupedFilters[filter.key]) {
        groupedFilters[filter.key] = [];
      }
      groupedFilters[filter.key].push(filter.value);
    });

    const sortOptions = this.core.getSortBys();
    const sortedByLabel = 'Sorted By:';
    sortOptions.forEach(sortBy => {
      if (!groupedFilters[sortedByLabel]) {
        groupedFilters[sortedByLabel] = [];
      }
      groupedFilters[sortedByLabel].push(sortBy.label);
    });

    // Has to be parsed into an array because our handlebars can only loop through arrays, not objects.
    return Object.keys(groupedFilters).map(label => ({
      label: label, displayValues: groupedFilters[label]
    }));
  }

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    const appliedFiltersArray = this.getAppliedFiltersArray();
    const shouldShowFilters = appliedFiltersArray.length > 0 && this._config.showAppliedFilters;
    return super.setState({
      ...data,
      resultsCount: this.resultsCount,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength,
      showResultSeparator: this._config.resultsCountSeparator && this._config.showResultCount && shouldShowFilters,
      shouldShowFilters: shouldShowFilters,
      appliedFiltersArray: appliedFiltersArray
    });
  }

  static get type () {
    return 'ResultsHeader';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/resultsheader';
  }
}
