/** @module UniversalResultsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import AccordionResultsComponent from './accordionresultscomponent.js';

export default class UniversalResultsComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
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
    const query = this.core.globalStorage.getState(StorageKeys.QUERY);
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ sections: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: sections.length === 0 && query,
      query: query
    }), val);
  }

  addChild (data = {}, type, opts) {
    const childOpts = { ...opts, ...this.getChildConfig([data['verticalConfigId']]) };
    if (childOpts.useAccordion === true) {
      return super.addChild(data, AccordionResultsComponent.type, childOpts);
    }
    return super.addChild(data, type, childOpts);
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
