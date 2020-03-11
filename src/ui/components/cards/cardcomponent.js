/** @module CardComponent */

import Component from '../component';
import { cardTemplates } from './consts';

export class CardConfig {
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
     * The cardMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */
    let cardMappings = config.cardMappings || {};
    Object.assign(this, CardComponent.applyCardMappings(result, cardMappings));

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
    this.details = this.details || result.details || rawResult.description || '';

    /**
     * Url when you click the title
     * @type {string}
     */
    this.url = this.url || result.link || rawResult.website;

    /**
     * If showMoreLimit is set, the text that displays beneath it
     * @type {string}
     */
    this.showMoreText = this.showMoreText || 'Show More';

    /**
     * If showMoreLimit is set, the text that displays beneath it when all text is shown
     * @type {string}
     */
    this.showLessText = this.showLessText || 'Show Less';

    /**
     * Add a show more link if this number of characters is shown,
     * and truncate the last 3 characters with an ellipses.
     * Clicking show more should expand the results (but no “show less” link).
     * @type {number}
     */
    this.showMoreLimit = this.showMoreLimit || 350;

    /**
     * Whether the click should open in a new window
     * @type {boolean}
     */
    this.newWindow = this.newWindow;

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
     * Whether a 'show more' toggle button needs to be rendered at all
     */
    const detailsOverLimit = this.details.length > this.showMoreLimit;
    this.showToggle = this.showMoreLimit && detailsOverLimit;

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    this.callsToAction = this.callsToAction || [];

    /**
     * An array of cta custom field names, whose custom field data are expected
     * to contain CTA configuration.
     * @type {Array<string>}
     */
    this.callsToActionFields = this.callsToActionFields || [];

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
export class CardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);

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

  /**
   * Used by children card components like CardComponent to
   * apply given template mappings as config.
   * @param {Result} result
   * @param {Object|Function} cardMappings
   */
  static applyCardMappings (result, cardMappings) {
    const config = {};
    if (typeof cardMappings === 'function') {
      cardMappings = cardMappings(result);
    }
    if (typeof cardMappings === 'object') {
      Object.entries(cardMappings).forEach(([attribute, value]) => {
        if (typeof value === 'function') {
          config[attribute] = value(result);
        } else {
          config[attribute] = value;
        }
      });
    }
    return config;
  }

  addCTACollectionComponent (data, type, opts, ctaModifiers) {
    const updatedData = {
      verticalKey: this.verticalKey,
      result: data
    };
    return super.addChild(updatedData, type, {
      callsToAction: this._config.callsToAction,
      callsToActionFields: this._config.callsToActionFields,
      isUniversal: this._config.isUniversal,
      _ctaModifiers: ctaModifiers,
      ...opts
    });
  }

  static defaultTemplateName () {
    return cardTemplates.Standard;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
