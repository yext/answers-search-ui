import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';

export default class VerticalResultsCountComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, verticalResults => {
      if (verticalResults.searchState === SearchStates.SEARCH_COMPLETE) {
        this.setState(verticalResults);
      }
    });
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  setState (data) {
    const verticalResults = data || {};

    /**
     * Total number of results.
     * @type {number}
     */
    const resultsCount = verticalResults.resultsCount || 0;

    /**
     * Number of results displayed on the page.
     * @type {number}
     */
    const resultsLength = (verticalResults.results || []).length;

    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    return super.setState({
      ...data,
      total: resultsCount,
      pageStart: offset + 1,
      pageEnd: offset + resultsLength
    });
  }

  static get type () {
    return 'VerticalResultsCount';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/verticalresultscount';
  }
}
