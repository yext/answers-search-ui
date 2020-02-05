/** @module ShowMoreComponent */

import Component from '../component';
import DOM from '../../dom/dom';

class ShowMoreConfig {
  constructor (config = {}) {
    Object.assign(this, config);

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
     * If details contain more character than this, chop it off at
     * this point and add ellipses.
     * @type {number}
     */
    this.showMoreLimit = config.showMoreLimit;

    /**
     * Details for the card
     * @type {string}
     */
    this.details = config.details || '';

    /**
     * Whether a 'show more' toggle button needs to be rendered at all
     */
    const detailsOverLimit = this.details.length > this.showMoreLimit;
    this.showToggle = this.showMoreLimit && detailsOverLimit;
  }
}

/**
 * A simple component that displays text and has a show more/less button
 */
export default class ShowMoreComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new ShowMoreConfig(config), systemConfig);
    this.hideExcessDetails = this._config.showToggle;
  }

  setState (data) {
    const details = this.hideExcessDetails
      ? `${this._config.details.substring(0, this._config.showMoreLimit)}...`
      : this._config.details;
    super.setState({
      ...data,
      hideExcessDetails: this.hideExcessDetails,
      details
    });
  }

  onMount () {
    if (this._config.showToggle) {
      const el = DOM.query(this._container, '.yxt-ShowMore-toggle');
      DOM.on(el, 'click', () => {
        this.hideExcessDetails = !this.hideExcessDetails;
        this.setState();
      });
    }
  }

  static get type () {
    return 'ShowMore';
  }

  static defaultTemplateName () {
    return 'helper/showmore';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
