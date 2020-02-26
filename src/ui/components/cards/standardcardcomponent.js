/** @module StandardCardComponent */

import Component from '../component';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';

class StandardCardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * The result data
     * @type {Result}
     */
    this.result = config.data || {};

    /**
     * The cardMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     *
     * This additional config has attributes that are either static values
     * or functions.
     */
    let cardMappings = config.cardMappings || {};
    if (typeof cardMappings === 'function') {
      cardMappings = cardMappings(this.result);
    }
    if (typeof cardMappings === 'object') {
      Object.entries(cardMappings).forEach(([attribute, value]) => {
        if (typeof value === 'function') {
          this[attribute] = value(this.result);
        } else {
          this[attribute] = value;
        }
      });
    }

    /**
     * The raw profile data
     * @type {Object}
     */
    const rawResult = this.result._raw || {};

    /**
     * Title for the card
     * @type {string}
     */
    this.title = this.title || this.result.title || rawResult.name || '';

    /**
     * Details for the card
     * @type {string}
     */
    this.details = this.details || this.result.details || rawResult.description || '';

    /**
     * Url when you click the title
     * @type {string}
     */
    this.url = this.url || this.result.link || rawResult.website;

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
    this.callsToActionFields = config.callsToActionFields || [];
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
  }

  setState (data) {
    const details = this.hideExcessDetails
      ? `${this._config.details.substring(0, this._config.showMoreLimit)}...`
      : this._config.details;
    return super.setState({
      ...data,
      hideExcessDetails: this.hideExcessDetails,
      result: this._config.result,
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
    return super.addChild(data, type, {
      callsToAction: this._config.callsToAction,
      callsToActionFields: this._config.callsToActionFields,
      ...opts
    });
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
