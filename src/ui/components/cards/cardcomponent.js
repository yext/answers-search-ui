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
    this.cardType = config.cardType || 'Standard';

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

    const callsToAction = config.callsToAction || [];
    /**
     * Array of call to action configuration objects
     * @type {Array<Object>}
     */
    this.callsToAction = callsToAction.map(cta => this.handleCTA(cta));
  }

  handleCTA (cta) {
    if (typeof cta === 'function') {
      return cta(this.result);
    } else if (typeof cta === 'object') {
      return this.handleCTAObject(cta);
    }
    return {};
  }

  handleCTAObject (cta) {
    const calculatedCTA = { ...cta };
    for (let [ctaOption, optionValue] of Object.entries(cta)) {
      if (typeof optionValue === 'function') {
        calculatedCTA[ctaOption] = optionValue(this.result);
      }
    }
    return calculatedCTA;
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
      cardType: cardTypes[this._config.cardType]
    });
  }

  addChild (data, type, opts) {
    return super.addChild(data, type, {
      templateMappings: this._config.templateMappings,
      callsToAction: this._config.callsToAction,
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
