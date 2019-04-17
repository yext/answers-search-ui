import Component from '../component';

export default class UniversalResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 'universalResults';

    this._templateName = 'results/universalresults';

    this._limit = opts.limit || 10;
  }

  static get type() {
    return 'UniversalResults';
  }

  init(opts) {
    super.init(opts);
    return this;
  }

  addChild(data, type) {
    return super.addChild(data, type);
  }
}