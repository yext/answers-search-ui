/** @module CardComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import { cardTypes } from './consts';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import { AnswersAnalyticsError } from '../../../core/errors/errors';

class CardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * The card type to use
     * @type {string}
     */
    this.cardType = config.cardType || 'Standard';

    /**
     * Data mappings is a function specified in the config
     * that returns config based on the data passed into card
     * @type {Function}
     */
    this.dataMappings = config.dataMappings || (() => {});

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    this.callsToAction = config.callsToAction || [];

    /**
     * The index of the card.
     * @type {number}
     */
    this._index = config._index || 0;

    /**
     * Whether this card is part of a universal search
     */
    this.isUniversal = config.isUniversal || false;
  }
}

export default class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);

    /**
     * config.data comes from the data-prop attribute passed in
     * from the parent component.
     * @type {Object}
     */
    const data = config.data || {};

    /**
     * The result data for this card.
     * @type {Result}
     */
    this.result = data.result || {};

    /**
     * Vertical key for the search.
     * @type {string}
     */
    this.verticalKey = data.verticalKey;
  }

  onMount () {
    const rtfElement = DOM.query(this._container, '.js-yxt-rtfValue');
    rtfElement && this._handleClickAnalytics(rtfElement);
  }

  /**
   * Creates a handler for the click analytics of a Rich Text attribute.
   *
   * @param {Node} rtfElement The Rich Text attribute.
   */
  _handleClickAnalytics (rtfElement) {
    const self = this;
    const eventHandler = event => {
      if (!event.target.hasAttribute('data-cta-type')) {
        return;
      }
      const ctaType = event.target.getAttribute('data-cta-type');
      const fieldName = rtfElement.getAttribute('data-field-name');
      if (!fieldName) {
        throw new AnswersAnalyticsError(
          'Field name not provided for RTF click analytics');
      }

      const analyticsOptions = {
        directAnswer: false,
        verticalKey: self._config.data.verticalKey,
        searcher: self._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL',
        entityId: self._config.data.result.id,
        fieldName
      };
      if (ctaType !== 'TAP_TO_CALL') {
        analyticsOptions.url = event.target.href;
      }

      const analyticsEvent = new AnalyticsEvent(ctaType);
      analyticsEvent.addOptions(analyticsOptions);
      self.analyticsReporter.report(analyticsEvent);
    };
    DOM.on(rtfElement, 'click', eventHandler);
  }

  setState (data) {
    const cardType = this._config.cardType;

    // Use the cardType as component name if it is not a built-in type
    const cardComponentName = cardTypes[cardType] || cardType;
    return super.setState({
      ...data,
      result: this.result,
      cardType: cardComponentName
    });
  }

  addChild (data, type, opts) {
    const updatedData = {
      verticalKey: this.verticalKey,
      result: data
    };
    const newOpts = {
      showOrdinal: this._config.showOrdinal,
      dataMappings: this._config.dataMappings,
      callsToAction: this._config.callsToAction,
      verticalKey: this._config.verticalKey,
      _index: this._config._index,
      isUniversal: this._config.isUniversal,
      modifier: this._config.modifier,
      ...opts
    };
    return super.addChild(updatedData, type, newOpts);
  }

  /**
   * Used by children card components like StandardCardComponent to
   * apply given template mappings as config.
   * @param {Result} result
   * @param {Object|Function} dataMappings
   */
  static applyDataMappings (result, dataMappings) {
    const config = {};
    if (typeof dataMappings === 'function') {
      dataMappings = dataMappings(result);
    }
    if (typeof dataMappings === 'object') {
      Object.entries(dataMappings).forEach(([attribute, value]) => {
        if (typeof value === 'function') {
          config[attribute] = value(result);
        } else {
          config[attribute] = value;
        }
      });
    }
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
