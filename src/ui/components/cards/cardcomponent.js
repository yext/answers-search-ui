/** @module CardComponent */

import Component from '../component';
import { cardTypes } from './consts';
import { AnswersConfigError } from '../../../core/errors/errors';

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
     * Vertical key for the vertical the card is a part of.
     * @type {string}
     */
    this.verticalKey = config.verticalKey;

    /**
     * Card mappings is a function specified in the config
     * that returns config based on the data passed into card
     * @type {Function}
     */
    this.cardMappings = config.cardMappings || (() => {});

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    this.callsToAction = config.callsToAction || [];

    /**
     * An array of cta custom field names, whose custom field data are expected
     * to contain CTA configuration.
     * @type {Array<string>}
     */
    this.callsToActionFields = config.callsToActionFields || [];

    /**
     * The index of the card.
     * @type {number}
     */
    this._index = config._index || 0;
  }
}

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);
  }

  setState (data) {
    const cardType = this._config.cardType;
    if (!cardTypes[cardType]) {
      const validCards = `["${Object.keys(cardTypes).join('", "')}"]`;
      const msg = `Card type "${cardType}" is not recognized as a valid built-in card type.` +
      ` Valid types include ${validCards}`;
      throw new AnswersConfigError(msg, 'CardComponent');
    }
    return super.setState({
      ...data,
      result: this._config.result,
      cardType: cardTypes[cardType]
    });
  }

  addChild (data, type, opts) {
    return super.addChild(data, type, {
      cardMappings: this._config.cardMappings,
      callsToAction: this._config.callsToAction,
      callsToActionFields: this._config.callsToActionFields,
      verticalKey: this._config.verticalKey,
      _index: this._config._index,
      ...opts
    });
  }

  /**
   * Used by children card components like StandardCardComponent to
   * apply given template mappings as config.
   * @param {Result} result
   * @param {Object|Function} cardMappings
   */
  static applyCardMappings (result, cardMappings) {
    const config = {};
    if (typeof cardMappings === 'function') {
      cardMappings = cardMappings(result);
    }
    Object.entries(cardMappings).forEach(([attribute, value]) => {
      if (typeof value === 'function') {
        config[attribute] = value(result);
      } else {
        config[attribute] = value;
      }
    });
    return config;
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
