/** @module LegacyCardComponent */

import Component from '../component';
import CardComponent from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import CTACollectionComponent from '../ctas/ctacollectioncomponent';

class LegacyCardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    const data = config.data || {};

    /**
     * The result data
     * @type {Result}
     */
    const result = data.result || {};

    /**
     * The raw profile data
     * @type {Object}
     */
    const rawResult = result._raw || {};

    /**
     * The dataMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */
    Object.assign(this, CardComponent.applyDataMappings(rawResult, config.dataMappings || {}));

    /**
     * The result data
     * @type {Result}
     */
    this.result = config.data || {};

    /**
     * Title for the card
     * @type {string}
     */
    this.title = this.title || result.title || rawResult.name || '';

    /**
     * Details for the card
     * @type {string}
     */
    this.details = this.details === null ? null : (this.details || result.details || rawResult.description || '');

    /**
     * Url when you click the title
     * @type {string}
     */
    this.url = this.url === null ? '' : (this.url || result.link || rawResult.website);

    /**
     * The target attribute for the title link.
     * @type {string}
     */
    this.target = this.target;

    /**
     * Image url to display
     * @type {string}
     */
    this.image = this.image;

    /**
     * Subtitle
     * @type {string}
     */
    this.subtitle = this.subtitle;

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    this.callsToAction = this.callsToAction || [];

    /**
     * Whether to show the ordinal of the card in the results.
     * @type {boolean}
     */
    this.showOrdinal = this.showOrdinal || false;

    /**
     * Whether this card is part of a universal search.
     * @type {boolean}
     */
    this.isUniversal = this.isUniversal || false;

    /**
     * The index of the card.
     * @type {number}
     */
    this._index = config._index || 0;
  }
}

/**
 * Card components expect to receive a data config option, containing data regarding entity result
 * each card is assigned to, including all field data in data._raw.
 */
export default class LegacyCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new LegacyCardConfig(config), systemConfig);
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
    return super.setState({
      ...data,
      eventOptions: this._legacyEventOptions(this.result._raw.id, this.result.link),
      result: this.result,
      hasCTAs: CTACollectionComponent.hasCTAs(this.result._raw, this._config.callsToAction),
      entityId: this.result._raw.id,
      verticalKey: this.verticalKey
    });
  }

  _legacyEventOptions (entityId, url) {
    const options = {
      verticalConfigId: this.verticalKey,
      searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL'
    };

    if (entityId) {
      options.entityId = entityId;
    } else {
      options.url = url;
    }

    return JSON.stringify(options);
  }

  addChild (data, type, opts) {
    if (type === CTACollectionComponent.type) {
      const updatedData = {
        verticalKey: this.verticalKey,
        result: data
      };
      return super.addChild(updatedData, type, {
        callsToAction: this._config.callsToAction,
        isUniversal: this._config.isUniversal,
        _ctaModifiers: ['LegacyCard'],
        includeLegacyClasses: true,
        ...opts
      });
    }
    return super.addChild(data, type, opts);
  }

  static get type () {
    return cardTypes.Legacy;
  }

  static defaultTemplateName () {
    return cardTemplates.Legacy;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
