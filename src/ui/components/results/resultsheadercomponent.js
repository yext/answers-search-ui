/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

export default class ResultsHeaderComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * Whether to display the number of results.
     * @type {boolean}
     */
    this._config.showResultCount = config.showResultCount === undefined ? true : config.showResultCount;

    /**
     * If present, show the filters that were ultimately applied to this query
     * @type {boolean}
     */
    this._config.showAppliedFilters = config.showAppliedFilters === undefined ? true : config.showAppliedFilters;

    /**
     * If showAppliedFilters is true, show the field name in the string followed by a colon.
     * @type {boolean}
     */
    this._config.showFieldNames = config.showFieldNames || false;

    /**
     * If showResultCount and showAppliedFilters are true,
     * display this separator between the result count and the applied query filters
     * @type {string}
     */
    this._config.resultsCountSeparator = config.resultsCountSeparator || '|';

    /**
     * The url to go to the vertical search for this result's vertical key
     * @type {string}
     */
    this._config.verticalURL = config.verticalURL;

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
    // Has to be parsed into an array because our handlebars can only loop through arrays, not objects.
    return Object.keys(groupedFilters).map(label => ({
      label: label, displayValues: groupedFilters[label]
    }));
  }

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    const shouldShowFilters = this.appliedQueryFilters.length > 0 && this._config.showAppliedFilters;
    return super.setState({
      ...data,
      resultsCount: this.resultsCount,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength,
      showResultSeparator: this._config.resultsCountSeparator && this._config.showResultCount && shouldShowFilters,
      shouldShowFilters: shouldShowFilters,
      appliedFiltersArray: this.getAppliedFiltersArray()
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
