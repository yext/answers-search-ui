/** @module AppliedFiltersComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';

export default class ResultsHeaderComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * Display the count of results at the very top of the results
     * @type {boolean}
     */
    this._config.showResultsCount = config.showResultsCount === undefined ? true : config.showResultsCount;

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
     * If showResultsCount and showAppliedFilters are true,
     * display this a separator between the result count and the applied query filters
     * @type {string}
     */
    this._config.resultsCountSeparator = config.resultsCountSeparator || '|';

    const data = config.data || {};

    /**
     * Results count
     * @type {number}
     */
    this.resultsLength = data.resultsLength || 0;

    /**
     * @type {Array<AppliedQueryFilter>}
     */
    this.appliedQueryFilters = data.appliedQueryFilters || [];
  }

  static get duplicatesAllowed () {
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
    const hasFilters = this.appliedQueryFilters.length > 0;
    const shouldShowFilters = hasFilters && this._config.showAppliedFilters;
    return super.setState({
      ...data,
      resultsLength: this.resultsLength,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength,
      showResultSeparator: this._config.showResultsCount && shouldShowFilters,
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
