/** @module AccordionCardComponent */

import { CardComponent, CardConfig } from './cardcomponent';
import { cardTemplates, cardTypes } from './consts';
import DOM from '../../dom/dom';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import CTACollectionComponent from '../ctas/ctacollectioncomponent';

export default class AccordionCardComponent extends CardComponent {
  constructor (config = {}, systemConfig = {}) {
    super(new CardConfig(config), systemConfig);
    /**
     * Whether the accordion is collapsed or not.
     * @type {boolean}
     */
    this.isExpanded = this._config.expanded;
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
      return super.addCTACollectionComponent(data, type, opts, [AccordionCardComponent.type]);
    }
    return super.addChild(data, type, opts);
  }

  static get type () {
    return cardTypes.Accordion;
  }

  static defaultTemplateName () {
    return cardTemplates.Accordion;
  }
}
