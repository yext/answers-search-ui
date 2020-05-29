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
  hiddenFields: ['builtin.location'],
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
     * @type {Array<AppliedQueryFilter>}
     */
    this.appliedQueryFilters = data.appliedQueryFilters || [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  /**
   * Recursively get all of the root FilterNodes of the given array,
   * which will all be SimpleFilterNodes
   * @param {Array<FilterNode>} filterNodes
   * @returns {Array<SimpleFilterNode>}
   */
  _getSimpleFilterNodes (filterNodes) {
    return filterNodes.flatMap(fn =>
      fn.getChildren().length ? this._getSimpleFilterNodes(fn.getChildren()) : fn
    );
  }

  /**
   * Combine all of the applied filters into a format the handlebars
   * template can work with.
   * @param {Array<AppliedQueryFilter>} appliedQueryFilters
   * @param {Array<SimpleFilterNode>} simpleFilterNodes
   * @returns {Array<Object>}
   */
  getAppliedFiltersArray (appliedQueryFilters, simpleFilterNodes) {
    const groupedFilters = {};
    appliedQueryFilters.forEach(filter => {
      if (this._config.hiddenFields.includes(filter.fieldId)) {
        return;
      }
      if (!groupedFilters[filter.key]) {
        groupedFilters[filter.key] = [];
      }
      groupedFilters[filter.key].push(filter.value);
    });
    simpleFilterNodes.forEach(fn => {
      const metadata = fn.getMetadata();
      const { fieldName, displayValue } = metadata;
      if (!fieldName || !displayValue) {
        return;
      }
      const fieldId = fn.getFilter().getFilterKey();
      if (fieldId && this._config.hiddenFields.includes(fieldId)) {
        return;
      }
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
    const simpleFilterNodes = this._getSimpleFilterNodes([
      ...this.core.getStaticFilterNodes(),
      ...this.core.getFacetFilterNodes(),
      this.core.getLocationRadiusFilterNode()
    ]);
    const appliedFiltersArray = this.getAppliedFiltersArray(this.appliedQueryFilters, simpleFilterNodes);
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
