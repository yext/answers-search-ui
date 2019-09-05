/** @module AccordionResultsComponent */
import ResultsComponent from './resultscomponent.js';
import DOM from '../../dom/dom';

export default class AccordionResultsComponent extends ResultsComponent {
  constructor (config = {}) {
    super(config);

    /**
     * base selector to use when finding DOM targets
     * @type {string}
     */
    this._selectorBase = config.selectorBase || '.js-yxt-AccordionResult';

    /**
     * collapsed state class
     * @type {string}
     */
    this.collapsedClass = config.collapsedClass || 'is-collapsed';

    /**
     * vertical config id is required for analytics
     * @type {string|null}
     */
    this.verticalConfigId = config.verticalConfigId || config._parentOpts.verticalConfigId || null;
  }

  /**
   * the component type
   * @returns {string}
   * @override
   */
  static get type () {
    return 'AccordionResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/resultsaccordion';
  }

  /**
   * overrides _onMount to add bindings to change the height on click
   * @returns {AccordionResultsComponent}
   * @override
   */
  _onMount () {
    super._onMount();

    const accordionEls = DOM.queryAll(this._container, this._selectorBase);
    accordionEls.forEach((accordionEl) => {
      const toggleEl = DOM.query(accordionEl, this.toggleSelector());
      const contentEl = DOM.query(accordionEl, this.bodySelector());
      this.changeHeight(contentEl, accordionEl);
      toggleEl.addEventListener('click', () => {
        this.handleClick(accordionEl, toggleEl, contentEl);
      });
    });

    return this;
  }

  setState (data) {
    // TODO (bmcginnis): this would be better handled if handleClick just hit analyticsReporter directly
    // but that seems too far a field for now.
    return super.setState(Object.assign({}, data, {
      modifier: this.verticalConfigId,
      results: data.results ? data.results.map((result) => {
        return Object.assign(result, {
          eventOptions: JSON.stringify({
            entityId: result.id,
            verticalConfigId: this.verticalConfigId
          })
        });
      }) : data.results
    }));
  }

  /**
   * click handler for the accordion toggle button
   * @param wrapperEl {HTMLElement} the toggle container
   * @param toggleEl {HTMLElement} the button
   * @param contentEl {HTMLElement} the toggle target
   */
  handleClick (wrapperEl, toggleEl, contentEl) {
    wrapperEl.classList.toggle(this.collapsedClass);
    this.changeHeight(contentEl, wrapperEl);
    toggleEl.setAttribute('aria-expanded', this.isCollapsed(wrapperEl) ? 'false' : 'true');
    toggleEl.dataset.eventtype = this.isCollapsed(wrapperEl) ? 'ROW_EXPAND' : 'ROW_COLLAPSE';
  }

  /**
   * returns true if the element is currently collapsed
   * @param wrapperEl {HTMLElement} the toggle container
   * @returns {boolean}
   */
  isCollapsed (wrapperEl) {
    if (!wrapperEl) {
      return false;
    }

    return wrapperEl.classList.contains(this.collapsedClass);
  }

  /**
   * toggles the height between 0 and the content height for smooth animation
   * @param targetEl {HTMLElement}
   * @param wrapperEl {HTMLElement}
   */
  changeHeight (targetEl, wrapperEl) {
    targetEl.style.height = `${this.isCollapsed(wrapperEl) ? 0 : targetEl.scrollHeight}px`;
  }

  /**
   * helper for composing child element selectors
   * @param child {string}
   * @returns {string}
   */
  buildSelector (child) {
    return `${this._selectorBase}${child}`;
  }

  /**
   * helper for the toggle button selector
   * @returns {string}
   */
  toggleSelector () {
    return this.buildSelector('-toggle');
  }

  /**
   * helper for the content element selector
   * @returns {string}
   */
  bodySelector () {
    return this.buildSelector('-body');
  }
}
