/** @module UniversalResultsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';

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
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ sections: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE
    }), val);
  }

  addChild (data = {}, type) {
    let opts = this.getChildConfig([data['verticalConfigId']]);
    return super.addChild(data, type, opts);
  }

  getChildConfig (configId) {
    let config = this._config.config;
    if (config === undefined) {
      return {};
    }
    return this._config['config'][configId] || this._config['config'];
  }
}
