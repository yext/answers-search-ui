/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

const DEFAULT_CONFIG = {
  showResultCount: true,
  showAppliedFilters: true,
  showFieldNames: false,
  resultsCountSeparator: '|',
  verticalURL: undefined,
  showChangeFilters: false,
  removable: false, // TODO implement
  delimiter: '|',
  isUniversal: false
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
     * Array of filterNodes to display in the applied filters bar.
     * @type {Array<FilterNode>}
     */
    this.appliedFilterNodes = data.appliedFilterNodes || [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  /**
   * Combine all of the applied filters into a format the handlebars
   * template can work with.
   * @param {Array<SimpleFilterNode>} appliedFilterNodes
   * @returns {Array<Object>}
   */
  getAppliedFiltersArray (appliedFilterNodes) {
    const groupedFilters = {};
    appliedFilterNodes.forEach(fn => {
      const { fieldName, displayValue } = fn.getMetadata();
      if (!groupedFilters[fieldName]) {
        groupedFilters[fieldName] = [];
      }
      groupedFilters[fieldName].push(displayValue);
    });
    // Has to be parsed into an array because our handlebars can only loop through arrays, not objects.
    return Object.keys(groupedFilters).map(label => ({
      label: label, displayValues: groupedFilters[label]
    }));
  }

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    const appliedFiltersArray = this.getAppliedFiltersArray(this.appliedFilterNodes);
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
