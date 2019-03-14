import Component from './component';

export default class ResultItemComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._container = '[data-component="' + this._templateName + '"]';
  }

  static get TemplateName() {
    return 'results/resultitem'
  }
}