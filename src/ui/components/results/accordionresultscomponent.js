/** @module AccordionResultsComponent */
import ResultsComponent from './resultscomponent.js';

const selectorBase = '.js-yxt-Accordion';

export default class AccordionResultsComponent extends ResultsComponent {
  constructor (opts = {}) {
    super(opts);
    this._templateName = opts.templateName || 'results/resultsaccordion';
  }

  static get type () {
    return 'AccordionResults';
  }

  onMount () {
    this.bindAccordionToggles();

    return super.onMount();
  }

  bindAccordionToggles () {
    for (const accordion of document.querySelectorAll(selectorBase)) {
      for (const item of accordion.querySelectorAll(this.itemSelector())) {
        this.setupAnimations(accordion, item);
      }
    }
  }

  setupAnimations (accordion, item) {
    // TODO: (bmcginnis) decide if we need to collapse other results
    const toggle = item.querySelector(this.toggleSelector());
    const body = item.querySelector(this.bodySelector());
    item.isCollapsed = item.classList.contains('is-collapsed');
    this.changeHeight(item, body);

    toggle.addEventListener('click', () => {
      item.classList.toggle('is-collapsed');
      item.isCollapsed = !item.isCollapsed;
      this.changeHeight(item, body);
      toggle.setAttribute('aria-expanded', item.isCollapsed ? 'false' : 'true');
    });
  }

  changeHeight (item, content) {
    content.style.height = item.isCollapsed ? 0 : `${content.scrollHeight}px`;
  }

  buildSelector (child) {
    return `${selectorBase}${child}`;
  }

  itemSelector () {
    return this.buildSelector('-item');
  }

  toggleSelector () {
    return this.buildSelector('Result-toggle');
  }

  bodySelector () {
    return this.buildSelector('Result-body');
  }
}
