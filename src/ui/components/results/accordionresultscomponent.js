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
  }

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

  isCollapsed () {
    if (!this.wrapperEl) {
      return false;
    }

    return this.wrapperEl.classList.contains(this.collapsedClass);
  }

  handleClick () {
    this.wrapperEl.classList.toggle(this.collapsedClass);
    this.changeHeight();
    this.toggleEl.setAttribute('aria-expanded', this.isCollapsed() ? 'false' : 'true');
  }

  changeHeight () {
    this.contentEl.style.height = `${this.isCollapsed() ? 0 : this.contentEl.scrollHeight}px`;
  }

  buildSelector (child) {
    return `${this._selectorBase}${child}`;
  }

  toggleSelector () {
    return this.buildSelector('-toggle');
  }

  bodySelector () {
    return this.buildSelector('-body');
  }
}
