/** @module StandardCardComponent */

import Component from '../component';
import { cardTypes } from './consts';

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    if (typeof this._config.renderItem === 'function') {
      this.setRender(this._config.renderItem);
    }
    if (typeof this._config.itemTemplate === 'string') {
      this.setTemplate(this._config.itemTemplate);
    }
  }

  setState (data) {
    // we can't just pass all config because it will overwrite things like
    // parentContainer and name
    const childConfig = {
      verticalConfigId: this._config._verticalConfigId,
      isUniversal: this._config._isUniversal,
      data: data
    };
    return super.setState(Object.assign({}, data, {
      childConfig: JSON.stringify(childConfig),
      cardType: cardTypes.Standard
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
