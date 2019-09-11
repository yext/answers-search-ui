/** @module UniversalResultsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import AccordionResultsComponent from './accordionresultscomponent.js';

export default class UniversalResultsComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
    this._limit = opts.limit || 10;
  }

  static get type () {
    return 'UniversalResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/universalresults';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  init (opts) {
    super.init(opts);
    return this;
  }

  setState (data, val) {
    const sections = data.sections || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ sections: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: sections.length === 0,
      query: this.core.globalStorage.getState(StorageKeys.QUERY)
    }), val);
  }

  addChild (data = {}, type) {
    let opts = this.getChildConfig([data['verticalConfigId']]);
    if (opts.useAccordion === true) {
      return super.addChild(data, AccordionResultsComponent.type, opts);
    }
    return super.addChild(data, type, opts);
  }

  getChildConfig (configId) {
    const defaultConfig = {
      verticalConfigId: configId,
      isUniversal: true
    };
    let config = this._config.config;
    if (config === undefined) {
      return defaultConfig;
    }
    return Object.assign(defaultConfig, this._config['config'][configId] || this._config['config']);
  }
}
