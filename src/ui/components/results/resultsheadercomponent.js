/** @module AppliedFiltersComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import AppliedFiltersComponent from './appliedfilterscomponent';

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
     * If showResultsCount and showAppliedFilters are true,
     * display this a separator between the result count and the applied query filters
     * @type {string}
     */
    this._config.resultsCountSeparator = config.resultsCountSeparator || '|';

    /**
     * Config to send to the applied filters component.
     * @type {Object}
     */
    this._config.appliedFiltersOpts = config.appliedFiltersOpts || {};

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

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    const facets = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER_VIEW);
    const filterViews = this.core.globalStorage.getAll(StorageKeys.FILTER_VIEW);
    const sortBys = this.core.globalStorage.getState(StorageKeys.SORT_BYS) || [];
    const hasFilters = sortBys.length > 0 ||
      facets.length > 0 ||
      this.appliedQueryFilters.length > 0 ||
      filterViews.length > 0;
    const shouldShowFilters = hasFilters && this._config.showAppliedFilters;
    return super.setState({
      ...data,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength,
      showResultSeparator: this._config.showResultsCount && shouldShowFilters,
      shouldShowFilters: shouldShowFilters
    });
  }

  static get type () {
    return 'ResultsHeader';
  }

  addChild (data, type, opts) {
    if (type === AppliedFiltersComponent.type) {
      return super.addChild(this.appliedQueryFilters, type, opts);
    }
    return super.addChild(data, type, opts);
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
