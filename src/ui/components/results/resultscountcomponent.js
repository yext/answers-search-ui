import Component from '../component';

export default class ResultsCountComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = 'results-header';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  setState (data) {
    const verticalResults = this.core.globalStorage.getState('vertical-results') || {};

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

    const offset = this.core.globalStorage.getState('search-offset');
    return super.setState({
      ...data,
      noResults: resultsCount === 0,
      total: resultsCount,
      pageStart: offset + 1,
      pageEnd: offset + resultsLength
    });
  }

  static get type () {
    return 'ResultsCount';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/resultscount';
  }
}
