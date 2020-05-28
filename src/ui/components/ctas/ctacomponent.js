/** @module CTAComponent */

import Component from '../component';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import DOM from '../../dom/dom';

class CTAConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * Label below the CTA icon
     * @type {string}
     */
    this.label = config.label;

    /**
     * CTA icon, maps to a set of icons.
     * @type {string}
     */
    this.icon = config.icon;

    /**
     * Url to custom icon, has priority over icon.
     * @type {string}
     */
    this.iconUrl = config.iconUrl;

    /**
     * Whether the DOM should include legacy class names
     * @type {boolean}
     */
    this.includeLegacyClasses = config.includeLegacyClasses || false;

    /**
     * Click through url for the icon and label
     * @type {string}
     */
    this.url = config.url;

    /**
     * Analytics event that should fire:
     * @type {string}
     */
    this.analyticsEventType = config.analytics || config.eventType || 'CTA_CLICK';

    /**
     * The target attribute for the CTA link.
     * @type {boolean}
     */
    this.target = config.target || '_blank';

    /**
     * The eventOptions needed for the event to fire, passed as a string or Object
     * from config.dataMappings || {}.
     * @type {Object}
     */
    if (typeof config.eventOptions === 'string') {
      this.eventOptions = JSON.parse(config.eventOptions);
    }
    this.eventOptions = this.eventOptions;

    /**
     * Additional css className modifiers for the cta
     * @type {string}
     */
    this._ctaModifiers = config._ctaModifiers;

    /**
     * Whether the cta is the only one in its CTACollectionComponent
     * @type {boolean}
     */
    this._isSolo = config._isSolo || false;
  }
}

export default class CTAComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CTAConfig(config), systemConfig);
  }

  onMount () {
    const el = DOM.query(this._container, `.js-yxt-CTA`);
    if (el && this._config.eventOptions) {
      DOM.on(el, 'mousedown', e => {
        if (e.button === 0 || e.button === 1) {
          this.reportAnalyticsEvent();
        }
      });
    }
  }

  setState (data) {
    return super.setState({
      ...data,
      hasIcon: this._config.icon || this._config.iconUrl
    });
  }

  reportAnalyticsEvent () {
    const analyticsEvent = new AnalyticsEvent(this._config.analyticsEventType);
    analyticsEvent.addOptions(this._config.eventOptions);
    this.analyticsReporter.report(analyticsEvent);
  }

  static get type () {
    return 'CTA';
  }

  static defaultTemplateName (config) {
    return 'ctas/cta';
  }
}
