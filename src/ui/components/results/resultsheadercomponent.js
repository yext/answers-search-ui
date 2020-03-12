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

  static get duplicatesAllowed () {
    return true;
  }

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    return super.setState({
      ...data,
      resultsCount: this.resultsCount,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength
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
