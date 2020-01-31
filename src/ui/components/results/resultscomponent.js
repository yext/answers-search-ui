/** @module ResultsComponent */

import Component from '../component';

import ResultsItemComponent from './resultsitemcomponent';
import MapComponent from '../map/mapcomponent';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';

export default class ResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * verticalConfigId used for analytics and passed to children
     * @type {string}
     * @private
     */
    this._verticalConfigId = config.verticalConfigId;

    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this._isUniversal = config.isUniversal || false;

    this.moduleId = StorageKeys.VERTICAL_RESULTS;
    this._itemConfig = {
      global: {
        render: null,
        template: null
      }
    };

    if (config.renderItem === undefined && config._parentOpts !== undefined) {
      config.renderItem = config._parentOpts.renderItem;
    }

    if (config.itemTemplate === undefined && config._parentOpts !== undefined) {
      config.itemTemplate = config._parentOpts.itemTemplate;
    }

    this.configureItem({
      render: config.renderItem,
      template: config.itemTemplate
    });

    /**
     * The url to the universal page for the no results page to link back to with current query
     * @type {string|null}
     */
    this._universalUrl = config.universalUrl;
  }

  mount () {
    if (Object.keys(this.getState()).length > 0) {
      super.mount();
    }

    return this;
  }

  static get duplicatesAllowed () {
    return true;
  }

  setState (data, val) {
    const results = data.results || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      includeMap: this._config.includeMap,
      mapConfig: this._config.mapConfig,
      eventOptions: this.eventOptions(),
      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
      showNoResults: results.length === 0,
      query: this.core.globalStorage.getState(StorageKeys.QUERY)
    }), val);
  }

  /**
   * helper to construct the eventOptions object for the view all link
   * @returns {string}
   */
  eventOptions () {
    return JSON.stringify({
      verticalConfigId: this._verticalConfigId
    });
  }

  static get type () {
    return 'VerticalResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/results';
  }

  configureItem (config) {
    if (typeof config.render === 'function') {
      this._itemConfig.global.render = config.render;
    } else {
      for (let key in config.render) {
        this.setItemRender(config.render[key]);
      }
    }

    if (typeof config.template === 'string') {
      this._itemConfig.global.template = config.template;
    } else {
      for (let key in config.template) {
        this.setItemTemplate(config.template[key]);
      }
    }
  }

  setItemTemplate (template) {
    this._itemConfig[ResultsItemComponent.type].template = template;
  }

  setItemRender (render) {
    this._itemConfig[ResultsItemComponent.type].render = render;
  }

  addChild (data, type, opts) {
    if (type === MapComponent.type) {
      data = {
        map: data
      };
      const newOpts = Object.assign({}, this._config.mapConfig, opts);
      return super.addChild(data, type, newOpts);
    }

    // Apply the proper item renders to the the components
    // have just been constructed. Prioritize global over individual items.
    let comp = super.addChild(data, type, Object.assign(opts, {
      verticalConfigId: this._verticalConfigId,
      isUniversal: this._isUniversal
    }));

    let globalConfig = this._itemConfig.global;
    let itemConfig = this._itemConfig[comp.type] || {};
    let hasGlobalRender = typeof globalConfig.render === 'function';
    let hasGlobalTemplate = typeof globalConfig.template === 'string';

    if (hasGlobalRender) {
      comp.setRender(globalConfig.render);
    } else if (itemConfig.render) {
      comp.setRender(itemConfig.render);
    }
    if (hasGlobalTemplate) {
      comp.setTemplate(globalConfig.template);
    } else if (itemConfig.template) {
      comp.setTemplate(itemConfig.template);
    }
    return comp;
  }
}
