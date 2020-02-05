/** @module StandardCardComponent */

import Component from '../component';
import { cardTemplates, cardTypes } from './consts';

class StandardCardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    const data = config.data || {};
    const raw = data._raw || {};

    /**
     * Title for the card
     * @type {string}
     */
    this.title = config.title || data.title || raw.name || '';

    /**
     * Details for the card
     * @type {string}
     */
    this.details = config.details || data.details || raw.description || '';

    /**
     * Url when you click the title
     * @type {string}
     */
    this.url = config.url || data.link || raw.website;

    /**
     * If showMoreLimit is set, the text that displays beneath it
     * @type {string}
     */
    this.showMoreText = config.showMoreText || 'Show More';

    /**
     * If showMoreLimit is set, the text that displays beneath it when all text is shown
     * @type {string}
     */
    this.showLessText = config.showLessText || 'Show Less';

    /**
     * Add a show more link if this number of characters is shown,
     * and truncate the last 3 characters with an ellipses.
     * Clicking show more should expand the results (but no “show less” link).
     * @type {number}
     */
    this.showMoreLimit = config.showMoreLimit;

    /**
     * Image url to display
     * @type {string}
     */
    this.image = config.image;

    /**
     * Subtitle
     * @type {string}
     */
    this.subtitle = config.subtitle;
  }
}

/**
 * Card components expect to receive a data config option, containing data regarding entity result
 * each card is assigned to, including all field data in data._raw.
 */
export default class StandardCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new StandardCardConfig(config), systemConfig);
  }

  setState (data) {
    const { showMoreText, showLessText, showMoreLimit, details } = this._config;
    const showMoreOpts = { showMoreText, showLessText, showMoreLimit, details };
    return super.setState({
      ...data,
      showMoreOpts: JSON.stringify(showMoreOpts)
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
