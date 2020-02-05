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
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this.isUniversal = config.isUniversal || false;

    /**
     * verticalConfigId used for analytics and passed to children
     * @type {string}
     * @private
     */
    this.verticalConfigId = config.verticalConfigId;
  }
}

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);
  }

  setState (data) {
    const { verticalConfigId, isUniversal } = this._config;
    return super.setState(Object.assign({}, data, {
      cardType: this._config.cardType,
      cardOpts: JSON.stringify({ verticalConfigId, isUniversal }),
      cardData: data
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
}
