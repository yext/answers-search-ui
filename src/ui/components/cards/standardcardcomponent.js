/** @module StandardCardComponent */

import Component from '../component';
import { CardConfig } from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';
import CTACollectionComponent from '../ctas/ctacollectioncomponent';

/**
 * Card components expect to receive a data config option, containing data regarding entity result
 * each card is assigned to, including all field data in data._raw.
 */
export default class StandardCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);
    this.hideExcessDetails = this._config.showToggle;

    /**
     * @type {Object}
     */
    const data = config.data || {};

    /**
     * Vertical key for the search.
     * @type {string}
     */
    this.verticalKey = data.verticalKey;

    /**
     * The result data
     * @type {Result}
     */
    this.result = data.result || {};
  }

  setState (data) {
    const details = this.hideExcessDetails
      ? `${this._config.details.substring(0, this._config.showMoreLimit)}...`
      : this._config.details;
    return super.setState({
      ...data,
      hideExcessDetails: this.hideExcessDetails,
      result: this.result,
      details
    });
  }

  onMount () {
    if (this._config.showToggle) {
      const el = DOM.query(this._container, '.yxt-StandardCard-toggle');
      DOM.on(el, 'click', () => {
        this.hideExcessDetails = !this.hideExcessDetails;
        this.setState();
      });
    }
  }

  addChild (data, type, opts) {
    if (type === CTACollectionComponent.type) {
      const updatedData = {
        verticalKey: this.verticalKey,
        result: data
      };
      return super.addChild(updatedData, type, {
        callsToAction: this._config.callsToAction,
        callsToActionFields: this._config.callsToActionFields,
        isUniversal: this._config.isUniversal,
        _ctaModifiers: ['StandardCard'],
        ...opts
      });
    }
    return super.addChild(data, type, opts);
  }

  static get type () {
    return cardTypes.Standard;
  }

  static defaultTemplateName () {
    return cardTemplates.Standard;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
