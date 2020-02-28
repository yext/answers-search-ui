/** @module AccordionCardComponent */

import Component from '../component';
import CardComponent from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';

class AccordionCardConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * The result data
     * @type {Result}
     */
    this.result = config.data || {};

    /**
     * The templateMappings attribute of the config
     * is either a function that returns additional config for
     * a card or an object that is the additional config.
     */
    let cardMappings = config.cardMappings || {};
    Object.assign(this, CardComponent.applyCardMappings(this.result, cardMappings));

    /**
     * Vertical key for the vertical the card is a part of.
     * @type {string}
     */
    this.verticalKey = config.verticalKey;

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
     * Subtitle
     * @type {string}
     */
    this.subtitle = this.subtitle;

    /**
     * Details for the card
     * @type {string}
     */
    this.details = this.details || this.result.details || rawResult.description || '';

    /**
     * Whether the accordion is initialized expanded.
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
  }
}

export default class AccordionCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new AccordionCardConfig(config), systemConfig);

    /**
     * Whether the accordion is collapsed or not.
     * @type {boolean}
     */
    this.isExpanded = false;
  }

  setState (data) {
    const id = this._config.result.id || this._config.result.ordinal;
    return super.setState({
      ...data,
      result: this._config.result,
      isExpanded: this.isExpanded,
      id: `${this.name}-${id}-${this._config.verticalKey}`
    });
  }

  /**
   * Click handler for the accordion toggle button
   * This is used over set state because it's a lot smoother, since
   * it doesn't rip the whole component off of the page and remount it.
   * Also reports an analytics event.
   * @param {HTMLElement} toggleEl the toggle element
   * @param {HTMLElement} iconEl the icon element
   * @param {HTMLElement} contentEl the content element
   * @param {HTMLElement} accordionEl the root accordion element
   */
  handleClick (toggleEl, iconEl, contentEl, accordionEl) {
    this.isExpanded = !this.isExpanded;
    iconEl.classList.toggle('yxt-AccordionCard-icon-expanded');
    contentEl.classList.toggle('yxt-AccordionCard-content-expanded');
    accordionEl.classList.toggle('yxt-AccordionCard-expanded');

    contentEl.style.height = `${this.isExpanded ? contentEl.scrollHeight : 0}px`;

    toggleEl.setAttribute('aria-expanded', this.isExpanded ? 'true' : 'false');
    contentEl.setAttribute('aria-hidden', this.isExpanded ? 'false' : 'true');
    const event = new AnalyticsEvent(this.isExpanded ? 'ROW_COLLAPSE' : 'ROW_EXPAND')
      .addOptions({
        verticalKey: this._config.verticalKey,
        entityId: this._config.result._raw.id
      });
    this.analyticsReporter.report(event);
  }

  onMount () {
    const toggleEl = DOM.query(this._container, '.yxt-AccordionCard-toggle');
    const iconEl = DOM.query(this._container, '.yxt-AccordionCard-icon');
    const contentEl = DOM.query(this._container, '.yxt-AccordionCard-content');
    const accordionEl = DOM.query(this._container, '.yxt-AccordionCard');

    DOM.on(toggleEl, 'click', () => this.handleClick(toggleEl, iconEl, contentEl, accordionEl));
  }

  /**
   * For passing functions to the config of children {@link CTACollectionComponent}
   */
  addChild (data, type, opts) {
    return super.addChild(data, type, {
      callsToAction: this._config.callsToAction,
      callsToActionFields: this._config.callsToActionFields,
      ...opts
    });
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
