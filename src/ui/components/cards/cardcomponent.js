/** @module StandardCardComponent */

import Component from '../component';
import { cardTypes } from './consts';

class CardConfig {
  constructor (config) {
    Object.assign(this, config);

    /**
     * The card type to use
     * @type {string}
     */
    this.cardType = config.cardType || cardTypes.Standard;

    /**
     * Custom render method,
     * TODO(oshi) this feels like something a Component should just have in general?
     * @type {function|undefined}
     */
    this.renderItem = config.renderItem;

    /**
     * Custom template string
     * TODO(oshi) also something a Component might want in general
     * @type {string|undefined}
     */
    this.itemTemplate = config.itemTemplate;

    /**
     * Template mappings is a function specified in the config
     * that returns config based on the data passed into card
     */
    const data = config.data;
    const templateMappings = config.templateMappings || (() => {});
    try {
      Object.assign(this, templateMappings(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this._config = new CardConfig(this._config);
    if (typeof this._config.renderItem === 'function') {
      this.setRender(this._config.renderItem);
    }
    if (typeof this._config.itemTemplate === 'string') {
      this.setTemplate(this._config.itemTemplate);
    }
  }

  setState (data) {
    return super.setState(Object.assign({}, data, {
      cardType: this._config.cardType
    }));
  }

  static get type () {
    return 'Card';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'cards/card';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  addChild (data, type, opts) {
    return super.addChild(data, type, {
      ...this._config,
      ...opts
    });
  }
}
