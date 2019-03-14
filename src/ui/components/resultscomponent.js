import Component from './component';

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._limit = opts.limit || 10;

    // TODO(billy) There should just be a global registry of components
    // Instead of having to manually register in each of the dependant classes
    this._childComponents.register(ResultItem);

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

  static get TemplateName() {
    return 'results'
  }
}

class ResultItem extends Component {
  constructor(opts = {}) {
    super(opts);

    this._container = '[data-component="' + this._templateName + '"]';
  }

  static get TemplateName() {
    return 'results/resultitem'
  }
}