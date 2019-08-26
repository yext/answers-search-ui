/** @module ResultsComponent */

import Component from '../component';

import ResultsItemComponent from './resultsitemcomponent';
import LocationResultsItemComponent from './locationresultsitemcomponent';
import EventResultsItemComponent from './eventresultsitemcomponent';
import PeopleResultsItemComponent from './peopleresultsitemcomponent';
import MapComponent from '../map/mapcomponent';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import { AnswersComponentError } from '../../../core/errors/errors';

const ResultType = {
  EVENT: 'event',
  LOCATION: 'location',
  PEOPLE: 'people'
};

export default class ResultsComponent extends Component {
  constructor (config = {}) {
    super(config);

    this.moduleId = StorageKeys.VERTICAL_RESULTS;
    this._itemConfig = {
      global: {
        render: null,
        template: null
      },
      [EventResultsItemComponent.type]: {
        render: null,
        template: null
      },
      [LocationResultsItemComponent.type]: {
        render: null,
        template: null
      },
      [PeopleResultsItemComponent.type]: {
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

    if (config.limit) {
      const limit = config.limit;
      console.log(limit);
      if (typeof limit !== 'number' || limit < 1 || limit > 50) {
        throw new AnswersComponentError('Search Limit must be between 1 and 50', 'VerticalResults');
      }
      this.core.setSearchLimit(limit);
    }

    this.configureItem({
      render: config.renderItem,
      template: config.itemTemplate
    });
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
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      includeMap: this._config.includeMap,
      mapConfig: this._config.mapConfig
    }), val);
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
        this.setItemRender(key, config.render[key]);
      }
    }

    if (typeof config.template === 'string') {
      this._itemConfig.global.template = config.template;
    } else {
      for (let key in config.template) {
        this.setItemTemplate(key, config.template[key]);
      }
    }
  }

  setItemTemplate (type, template) {
    let clazz = this.getItemComponent(type);
    this._itemConfig[clazz.type].template = template;
  }

  setItemRender (type, render) {
    let clazz = this.getItemComponent(type);
    this._itemConfig[clazz.type].render = render;
  }

  getItemComponent (type) {
    let comp = ResultsItemComponent;
    switch (type) {
      case ResultType.EVENT:
        comp = EventResultsItemComponent;
        break;
      case ResultType.LOCATION:
        comp = LocationResultsItemComponent;
        break;
      case ResultType.PEOPLE:
        comp = PeopleResultsItemComponent;
        break;
    }

    return comp;
  }

  addChild (data, type, opts) {
    // TODO(billy) Refactor the way configuration and data flows
    // through top level components to child components.
    if (type === ResultsItemComponent.type) {
      let clazz = this.getItemComponent(data.type);
      if (clazz) {
        type = clazz.type;
      }
    } else if (type === MapComponent.type) {
      data = {
        map: data
      };
      const newOpts = Object.assign({}, this._config.mapConfig, opts);
      return super.addChild(data, type, newOpts);
    }

    // Apply the proper item renders to the the components
    // have just been constructed. Prioritize global over individual items.
    let comp = super.addChild(data, type, opts);
    let globalConfig = this._itemConfig.global;
    let itemConfig = this._itemConfig[comp.type];
    let hasGlobalRender = typeof globalConfig.render === 'function';
    let hasGlobalTemplate = typeof globalConfig.template === 'string';

    if (hasGlobalRender) {
      comp.setRender(globalConfig.render);
    }

    if (hasGlobalTemplate) {
      comp.setTemplate(globalConfig.template);
    }

    if (!itemConfig) {
      return comp;
    }

    if (!hasGlobalRender && itemConfig.render) {
      comp.setRender(itemConfig.render);
    }

    // Apply template specific situation
    if (!hasGlobalTemplate && itemConfig.template) {
      comp.setTemplate(itemConfig.template);
    }
    return comp;
  }
}
