/** @module StandardCardComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import calculateCTAs from './ctas';
import { cardTemplates, templatesToComponents } from './consts';

const DEFAULT_CONFIG = {
  // If showMoreLimit is set, the text that displays beneath it
  showMoreText: 'Show More',

  // If showMoreLimit is set, the text that displays beneath it when all text is shown
  showLessText: 'Show Less',

  // Add a show more link if this number of characters is shown,
  // and truncate the last 3 characters with an ellipses.
  // Clicking show more should expand the results (but no “show less” link).
  showMoreLimit: null,

  // Shows to the left of the result
  image: null,

  // subtitle
  subtitle: null,

  // Template mappings
  templateMappings: () => {}
};

/**
 * Card components expect to receive a data config option, containing data regarding entity result
 * each card is assigned to, including all field data in data._raw.
 */
export default class StandardCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(Object.assign({}, DEFAULT_CONFIG, config), systemConfig);
    const data = this._config.data || {};
    const raw = data._raw || {};

    this.callsToAction = calculateCTAs(this._config.callsToAction, data);

    // Top heading
    this.title = this._config.title || data.title || raw.name || '';

    // Full description of the result
    this.details = this._config.details || data.details || raw.description || '';

    // If populated, link out the title field.
    this.url = this._config.url || data.link || raw.website;

    /**
     * A local reference to the analytics reporter, used to report events for this component
     * @type {AnalyticsReporter}
     */
    this.analyticsReporter = systemConfig.analyticsReporter || null;

    this.showToggle = !!(this._config.showMoreLimit && (this.details.length > this._config.showMoreLimit));
    this.hideExcessDetails = this.showToggle;
  }

  setState (data) {
    let details = this.details;
    if (this.hideExcessDetails) {
      details = details.substring(0, this._config.showMoreLimit);
      details = details.concat('...');
    }
    return super.setState(Object.assign({}, data, {
      details,
      title: this.title,
      url: this.url,
      showToggle: this.showToggle,
      hideExcessDetails: this.hideExcessDetails,
      callsToAction: this.callsToAction
    }));
  }

  bindShowMore () {
    if (this.showToggle) {
      const el = DOM.query(this._container, '.yxt-StandardCard-showToggle');
      DOM.on(el, 'click', () => {
        this.hideExcessDetails = !this.hideExcessDetails;
        this.setState();
      });
    }
  }

  bindCTA () {
    if (this.callsToAction) {
      for (let i = 0; i < this.callsToAction.length; i++) {
        const el = DOM.query(this._container, `.yxt-StandardCard-cta-${i}`);
        DOM.on(el, 'click', () => {
          let eventOptions = this.callsToAction[i].eventOptions;
          if (typeof eventOptions === 'string') {
            eventOptions = JSON.parse(eventOptions);
          }
          const type = this.callsToAction[i].analyticsEventType;
          this.reportAnalyticsEvent(type, eventOptions);
        });
      }
    }
  }

  onMount () {
    this.bindShowMore();
    this.bindCTA();
  }

  /**
   * @param {string} type
   * @param {Object} eventOptions
   */
  reportAnalyticsEvent (type, eventOptions) {
    if (this.analyticsReporter) {
      const analyticsEvent = new AnalyticsEvent(type);
      analyticsEvent.addOptions(eventOptions);
      this.analyticsReporter.report(analyticsEvent);
    }
  }

  static get type () {
    return templatesToComponents[this.defaultTemplateName()];
  }

  static defaultTemplateName () {
    return cardTemplates.Standard;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
