import Component from '../component';

import ResultsItemComponent from './resultsitemcomponent';
import LocationResultsItemComponent from './locationresultsitemcomponent';
import EventResultsItemComponent from './eventresultsitemcomponent';
import PeopleResultsItemComponent from './peopleresultsitemcomponent';

const ResultType = {
  EVENT: 'event',
  LOCATION: 'location',
  PEOPLE: 'people'
};

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._templateName = 'results/results';

    this.verticalSearchKey = opts.verticalSearchKey || null;

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
    }

    this.configureRenderItem(opts.renderItem);
  }

  static get type() {
    return 'Results';
  }

  configureRenderItem(config) {
    if (typeof config === 'function') {
      this._itemConfig.global.render = config;
      return;
    }

    for (let key in config) {
      this.setItemRender(key, config[key]);
    }
  }

  setItemTemplate(type, template) {
    let clazz = this.getItemComponent(type);
    this._itemConfig[clazz.type].template = template;
  }

  setItemRender(type, render) {
    let clazz = this.getItemComponent(type);
    this._itemConfig[clazz.type].render = render;
  }

  getItemComponent(type) {
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

  addChild(data, type) {
    let clazz = this.getItemComponent(data.type);
    if (clazz) {
      type = clazz.type;
    }

    // Apply the proper item renders to the the components
    // have just been constructed. Prioritize global over individual items.
    let comp = super.addChild(data, type),
        globalConfig = this._itemConfig.global,
        itemConfig = this._itemConfig[clazz.type];

    let hasGlobalRender = typeof globalConfig.render === 'function';
    if (hasGlobalRender) {
      comp.setRender(globalConfig.render);
    }

    if (!itemConfig) {
      return comp;
    }

    if (!hasGlobalRender && itemConfig.render) {
      comp.setRender(itemConfig.render)
    }

    // Apply template specific situation
    if (itemConfig.template) {
      comp.setTemplate(itemConfig.template)
    }
    return comp;
  }

  setState(data) {
    let limitedResults = [];
    if (data.results) {
      let count = 0;
      for (let i = 0; i < data.results.length; i++) {
        if (i > this._limit - 1) {
          break;
        }

        limitedResults.push(data.results[i]);
        count ++;
      }
      data = {
        resultsCount: count,
        results: limitedResults,
        verticalConfigId: data.verticalConfigId
      }
    }
    return super.setState(data);
  }
}