/** @module AccordionResultsComponent */
import ResultsItemComponent from './resultsitemcomponent';

export default class AccordionResultsComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);

    /**
     * base selector to use when finding DOM targets
     * @type {string}
     */
    this._selectorBase = opts.selectorBase || '.js-yxt-AccordionResult';

    /**
     * the entityId, used here for DOM binding
     * @type {string}
     */
    this.wrapperElementId = `accordion-${opts.data.id}`;

    /**
     * handle to the DOM element
     * @type {HTMLElement |null}
     */
    this.wrapperEl = null;

    /**
     * handle to the collapsible content element
     * @type {HTMLElement |null}
     */
    this.contentEl = null;

    /**
     * handle to the toggle button element
     * @type {HTMLElement |null}
     */
    this.toggleEl = null;

    /**
     * collapsed state class
     * @type {string}
     */
    this.collapsedClass = opts.collapsedClass || 'is-collapsed';

    /**
     * vertical config id is required for analytics
     * @type {string|null}
     */
    this.verticalConfigId = opts.verticalConfigId || opts._parentOpts.verticalConfigId || null;
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
   * overrides onMount to add bindings to change the height on click
   * @returns {AccordionResultsComponent}
   * @override
   */
  onMount () {
    super.onMount();

    this.wrapperEl = document.getElementById(this.wrapperElementId);
    if (!this.wrapperEl) {
      // it seems as part of the re-mounting process onMount() is called twice
      // the first time without the data changing and without anything rendered.
      // doing this to avoid throwing an exception while we figure out the issue.
      return this;
    }

    this.toggleEl = this.wrapperEl.querySelector(this.toggleSelector());
    this.contentEl = this.wrapperEl.querySelector(this.bodySelector());
    this.changeHeight();
    this.toggleEl.addEventListener('click', () => {
      this.handleClick();
    });

    return this;
  }

  setState (data) {
    // TODO (bmcginnis): this would be better handled if handClick just hit analyticsReporter directly
    // but that seems too far a field for now.
    return super.setState(Object.assign(data, {
      eventOptions: {
        entityId: data.id,
        verticalConfigId: this.verticalConfigId
      }
    }));
  }

  /**
   * returns true if the element is currently collapsed
   * @returns {boolean}
   */
  isCollapsed () {
    if (!this.wrapperEl) {
      return false;
    }

    return this.wrapperEl.classList.contains(this.collapsedClass);
  }

  /**
   * click handler for the accordion toggle button
   */
  handleClick () {
    this.wrapperEl.classList.toggle(this.collapsedClass);
    this.changeHeight();
    this.toggleEl.setAttribute('aria-expanded', this.isCollapsed() ? 'false' : 'true');
  }

  /**
   * toggles the height between 0 and the content height for smooth animation
   */
  changeHeight () {
    this.contentEl.style.height = `${this.isCollapsed() ? 0 : this.contentEl.scrollHeight}px`;
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
