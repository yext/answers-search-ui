/** @module AccordionCardComponent */

import Component from '../component';
import CardComponent from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import CTACollectionComponent from '../ctas/ctacollectioncomponent';

class AccordionCardConfig {
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
     * The templateMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */
    const cardMappings = config.cardMappings || {};
    Object.assign(this, CardComponent.applyCardMappings(result, cardMappings));

    /**
     * Vertical key for the card, added to analytics events sent by this component.
     * @type {string}
     */
    this.verticalKey = config.verticalKey;

    /**
     * @type {string}
     */
    this.title = this.title || result.title || rawResult.name || '';

    /**
     * @type {string}
     */
    this.subtitle = this.subtitle;

    /**
     * @type {string}
     */
    this.details = this.details === undefined
      ? (this.details || result.details || rawResult.description || '')
      : '';

    /**
     * If expanded is true the accordion renders on page load expanded, the accordion is
     * closed on load by default.
     * @type {boolean}
     */
    this.expanded = this.expanded || false;

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

    /**
     * Whether this card is part of a universal search. Used in analytics.
     * @type {boolean}
     */
    this.isUniversal = config.isUniversal || false;
  }
}

export default class AccordionCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new AccordionCardConfig(config), systemConfig);

    /**
     * Whether the accordion is collapsed or not.
     * @type {boolean}
     */
    this.isExpanded = this._config.expanded;

    /**
     * @type {Object}
     */
    const data = config.data || {};

    /**
     * Vertical key for the card, added to analytics events sent by this component.
     * @type {string}
     */
    this.verticalKey = data.verticalKey;

    /**
     * The result data, sent to children CTA Components that need this.
     * @type {Result}
     */
    this.result = data.result || {};
  }

  setState (data) {
    const id = this.result.id || this.result.ordinal;
    return super.setState({
      ...data,
      result: this.result,
      isExpanded: this.isExpanded,
      id: `${this.name}-${id}-${this.verticalKey}`
    });
  }

  /**
   * Click handler for the accordion toggle button
   * This is used over set state because it's a lot smoother, since
   * it doesn't rip the whole component off of the page and remount it.
   * Also reports an analytics event.
   * @param {HTMLElement} toggleEl the toggle element
   * @param {HTMLElement} contentEl the content element
   * @param {HTMLElement} accordionEl the root accordion element
   */
  handleClick (toggleEl, contentEl, accordionEl) {
    this.isExpanded = !this.isExpanded;
    accordionEl.classList.toggle('yxt-AccordionCard--expanded');

    contentEl.style.height = `${this.isExpanded ? contentEl.scrollHeight : 0}px`;

    toggleEl.setAttribute('aria-expanded', this.isExpanded ? 'true' : 'false');
    contentEl.setAttribute('aria-hidden', this.isExpanded ? 'false' : 'true');
    const event = new AnalyticsEvent(this.isExpanded ? 'ROW_COLLAPSE' : 'ROW_EXPAND')
      .addOptions({
        verticalKey: this.verticalKey,
        entityId: this.result._raw.id
      });
    this.analyticsReporter.report(event);
  }

  onMount () {
    const toggleEl = DOM.query(this._container, '.js-yxt-AccordionCard-toggle');
    const contentEl = DOM.query(this._container, '.js-yxt-AccordionCard-content');
    const accordionEl = DOM.query(this._container, '.js-yxt-AccordionCard');

    contentEl.style.height = `${this.isExpanded ? contentEl.scrollHeight : 0}px`;

    DOM.on(toggleEl, 'click', () => this.handleClick(toggleEl, contentEl, accordionEl));
  }

  /**
   * For passing functions to the config of children {@link CTACollectionComponent}
   */
  addChild (data, type, opts) {
    if (type === CTACollectionComponent.type) {
      const updatedData = {
        verticalKey: this.verticalKey,
        result: data
      };
      return super.addChild(updatedData, type, {
        callsToAction: this._config.callsToAction,
        callsToActionFields: this._config.callsToActionFields,
        _ctaModifiers: ['AccordionCard'],
        isUniversal: this._config.isUniversal,
        ...opts
      });
    }
    return super.addChild(data, type, opts);
  }

  static get type () {
    return cardTypes.Accordion;
  }

  static defaultTemplateName () {
    return cardTemplates.Accordion;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
