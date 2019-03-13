import Component from './component';

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._limit = opts.limit || 10;

    this._data = ResultsComponent.generateData(this._limit)
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

  static get type() {
    return 'Results';
  }

  static get TemplateName() {
    return 'results'
  }
}