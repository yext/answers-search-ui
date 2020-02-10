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
    const result = config.data || {};
    const templateMappings = config.templateMappings || (() => {});
    Object.assign(this, templateMappings(result));

    /**
     * The raw profile data
     * @type {Object}
     */
    const rawResult = result._raw || {};

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
    this.newWindow = config.newWindow;

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
