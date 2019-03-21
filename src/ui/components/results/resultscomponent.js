import Component from '../component';
import ResultsItemComponent from './resultsitemcomponent';

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 1;

    this._limit = opts.limit || 10;

    this.setState(ResultsComponent.generateData(this._limit));
  }

  init() {
    super.init();
    return this;
  }

  static generateData(numResults) {
    let results = [];
    for (let i = 1; i <= numResults; i ++) {
      results.push({
        title: 'Result Item #' + i,
        body: 'This is the result body for item #' + i
      })
    }

    return {
      totalResults: numResults,
      results: results
    }
  }

  setState(data) {
    let limitedResults = [];
    if (data.results) {
      let count = 0;
      for (let i = 0; i < data.results.length; i++) {
        if (i > this._limit - 1) {
          break;
        }

        limitedResults.push(data.results[i]);
        count ++;
      }
      data = {
        totalResults: count,
        results: limitedResults
      }
    }
    super.setState(data);
  }

  static get type() {
    return 'ResultsComponent';
  }

  static get TemplateName() {
    return 'results/results'
  }
}