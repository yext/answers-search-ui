/** @module UniversalResultsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import AccordionResultsComponent from './accordionresultscomponent.js';

export default class UniversalResultsComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
    this._templateName = 'results/universalresults';
    this._limit = opts.limit || 10;
  }

  static get type () {
    return 'UniversalResults';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  init (opts) {
    super.init(opts);
    return this;
  }

  addChild (data = {}, type) {
    let opts = this.getChildConfig(data['verticalConfigId']);
    if (opts.useAccordion === true) {
      return super.addChild(data, AccordionResultsComponent.type, opts);
    }
    return super.addChild(data, type, opts);
  }

  getChildConfig (configId) {
    let config = this._opts.config;
    if (config === undefined) {
      return {};
    }
    return this._opts['config'][configId] || this._opts['config'];
  }

  setState (data) {
    if (data.sections) {
      data.sections = data.sections.map(section => {
        if (this._opts && this._opts.config && this._opts.config[section.verticalConfigId]) {
          return Object.assign(section, this._opts.config[section.verticalConfigId]);
        }
        return section;
      });
    }
    return super.setState(data);
  }
}
