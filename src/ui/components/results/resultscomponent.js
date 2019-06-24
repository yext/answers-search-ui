import Component from '../component';

import ResultsItemComponent from './resultsitemcomponent';
import LocationResultsItemComponent from './locationresultsitemcomponent';
import EventResultsItemComponent from './eventresultsitemcomponent';
import PeopleResultsItemComponent from './peopleresultsitemcomponent';
import MapComponent from '../map/mapcomponent';
import { VERTICAL_RESULTS } from '../../../core/storage/storagekeys';

const ResultType = {
  EVENT: 'event',
  LOCATION: 'location',
  PEOPLE: 'people'
};

export default class ResultsComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = VERTICAL_RESULTS;
    this._templateName = 'results/results';
    this.limit = opts.limit || 5;
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

    if (opts.renderItem === undefined && opts._parentOpts !== undefined) {
      opts.renderItem = opts._parentOpts.renderItem;
    }

    if (opts.itemTemplate === undefined && opts._parentOpts !== undefined) {
      opts.itemTemplate = opts._parentOpts.itemTemplate;
    }

    this.configureItem({
      render: opts.renderItem,
      template: opts.itemTemplate
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
    if (Object.keys(data).length === 0) {
      return this;
    }

    return super.setState(Object.assign(data, {
      includeMap: this._opts.includeMap,
      mapConfig: this._opts.mapConfig
    }), val);
  }

  static get type () {
    return 'VerticalResults';
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
      opts = Object.assign(this._opts.mapConfig, opts);
      return super.addChild(data, type, opts);
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
