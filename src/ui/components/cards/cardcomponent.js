/** @module CardComponent */

import Component from '../component';
import { cardTypes } from './consts';

class CardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * The card type to use
     * @type {string}
     */
    this.cardType = config.cardType || cardTypes.Standard;

    /**
     * config.data comes from the data-prop attribute passed in
     * from the parent component.
     * @type {Result}
     */
    this.result = config.data || {};

    /**
     * Template mappings is a function specified in the config
     * that returns config based on the data passed into card
     */
    this.templateMappings = config.templateMappings || (() => {});
  }
}

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);
  }

  setState (data) {
    return super.setState({
      ...data,
      result: this._config.result,
      cardType: this._config.cardType
    });
  }

  addChild (data, type, opts) {
    return super.addChild(data, type, {
      templateMappings: this._config.templateMappings,
      ...opts
    });
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
}
