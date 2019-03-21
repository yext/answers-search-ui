import Component from './component';

export default class ResultsItemComponent extends Component {
  constructor(opts = {}) {
    super(opts);
  }

  static get TemplateName() {
    return 'results/resultsitem'
  }

  static get type() {
    return 'ResultsItemComponent';
  }
}