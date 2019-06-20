import Component from '../component';

export default class UniversalResultsComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = 'universalResults';

    this._templateName = 'results/universalresults';

    this._limit = opts.limit || 10;
  }

  static get type () {
    return 'UniversalResults';
  }

  init (opts) {
    super.init(opts);
    return this;
  }

  addChild (data = {}, type) {
    let opts = this.getChildConfig([data['verticalConfigId']]);
    return super.addChild(data, type, opts);
  }

  getChildConfig (configId) {
    let config = this._opts.config;
    if (config === undefined) {
      return {};
    }
    return this._opts['config'][configId] || this._opts['config'];
  }
}
