import Component from './component';

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._data = {
      results: [
        {
          title: 'Item #1',
          body: 'This is my result for item #1'
        },
        {
          title: 'Item #2',
          body: 'This is my result for item #2'
        },
      ]

    }
  }

  static get type() {
    return 'Results';
  }

  static get TemplateName() {
    return 'results'
  }
}