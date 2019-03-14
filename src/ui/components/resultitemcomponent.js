import Component from './component';

export default class ResultItemComponent extends Component {
  constructor(opts = {}) {
    super(opts);
  }

  static get TemplateName() {
    return 'results/resultitem'
  }
}