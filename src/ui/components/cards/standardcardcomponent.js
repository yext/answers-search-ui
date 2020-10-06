/** @module StandardCardComponent */

import Component from '../component';
import CardComponent from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';
import CTACollectionComponent from '../ctas/ctacollectioncomponent';
import TranslationFlagger from '../../i18n/translationflagger';

class StandardCardConfig {
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
     * If showMoreLimit is set, the text that displays beneath it
     * @type {string}
     */
    this.showMoreText = this.showMoreText || TranslationFlagger.flag({
      phrase: 'Show More',
      context: 'Displays more details for the result'
    });

    /**
     * If showMoreLimit is set, the text that displays beneath it when all text is shown
     * @type {string}
     */
    this.showLessText = this.showLessText || TranslationFlagger.flag({
      phrase: 'Show Less',
      context: 'Displays less details for the result'
    });

    /**
     * Add a show more link if this number of characters is shown,
     * and truncate the last 3 characters with an ellipses.
     * Clicking show more should expand the results (but no “show less” link).
     * @type {number}
     */
    this.showMoreLimit = this.showMoreLimit;

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
export default class StandardCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new StandardCardConfig(config), systemConfig);
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
    let details = this._config.details;
    if (this._config.showMoreLimit) {
      details = this.hideExcessDetails
        ? `${this._config.details.substring(0, this._config.showMoreLimit)}...`
        : this._config.details;
    }
    return super.setState({
      ...data,
      hideExcessDetails: this.hideExcessDetails,
      result: this.result,
      hasCTAs: CTACollectionComponent.hasCTAs(this.result._raw, this._config.callsToAction),
      entityId: this.result._raw.id,
      verticalKey: this.verticalKey,
      details
    });
  }

  onMount () {
    if (this._config.showToggle) {
      const el = DOM.query(this._container, '.js-yxt-StandardCard-toggle');
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
