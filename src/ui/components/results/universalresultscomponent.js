import Component from '../component';

export default class UniversalResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 'universalResults';

    this._templateName = 'results/universalresults';

    this._limit = opts.limit || 10;
  }

  static get type() {
    return 'UniversalResultsComponent';
  }

  init() {
    super.init();
    return this;
  }

  addChild(data, type) {
    console.log(data, type);
    return super.addChild(data, type);
  }
}