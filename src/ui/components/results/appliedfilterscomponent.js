/** @module AppliedFiltersComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import FilterMetadata from '../../../core/models/filtermetadata';
import { DOM } from '../..';

export default class AppliedFiltersComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * If showAppliedFilters is true, show the field name in the string followed by a colon.
     * @type {boolean}
     */
    this._config.showFieldNames = config.showFieldNames || false;

    /**
     * If showAppliedFilters is true, this is list of filters
     * that should not be displayed (common one is entity type)
     * @type {Array<string>}
     */
    this._config.hiddenFields = config.hiddenFields || [ 'builtin.entityType' ];

    /**
     * NLP filters sent back from the backend
     * @type {Array<AppliedQueryFilter}
     */
    this.appliedQueryFilters = config.data || [];

    /**
     * Whether the filters are expanded.
     * @type {boolean}
     */
    this.isExpanded = false;

    /**
     * Line height of the applied filters box. Used to determine whether
     * the toggle can be hidden when the screen size is increased but
     * the filters were expanded.
     * @type {number}
     */
    this.lineHeight = 0;

    this.handleOverflow = this.handleOverflow.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  static get duplicatesAllowed () {
    return true;
  }

  onCreate () {
    window.addEventListener('resize', this.handleResize);
  }

  onDestroy () {
    window.removeEventListener('resize', this.handleResize);
  }

  onMount () {
    const toggleEl = DOM.query(this._container, '.js-yxt-AppliedFilters-toggle');
    const contentEl = DOM.query(this._container, '.js-yxt-AppliedFilters-content');
    this.lineHeight = contentEl.offsetHeight;
    this.handleOverflow();
    DOM.on(toggleEl, 'click', () => this.toggleExpand(toggleEl, contentEl));
  }

  /**
   * Expand or shrink the filters, also flip the carat icon.
   * @param {HTMLElement} toggleEl
   * @param {HTMLElement} contentEl
   */
  toggleExpand (toggleEl, contentEl) {
    this.isExpanded = !this.isExpanded;
    contentEl.style.maxHeight = `${this.isExpanded ? contentEl.scrollHeight : this.lineHeight}px`;
    if (this.isExpanded) {
      toggleEl.classList.add('yxt-AppliedFilters-toggle--up');
      toggleEl.classList.remove('yxt-AppliedFilters-toggle--down');
    } else {
      toggleEl.classList.remove('yxt-AppliedFilters-toggle--up');
      toggleEl.classList.add('yxt-AppliedFilters-toggle--down');
    }
  }

  /**
   * On resize, wait for 100ms for more resize events, then after 100ms of no resize
   * events, show or hide the show more toggle if needed.
   */
  handleResize () {
    if (this._handleResizeTimer) {
      clearTimeout(this._handleResizeTimer);
    }
    this._handleResizeTimer = setTimeout(this.handleOverflow, 100);
  }

  /**
   * Check whether the component is overflowing - if overflowing display the show more toggle, else hide it.
   */
  handleOverflow () {
    const toggleEl = DOM.query(this._container, '.js-yxt-AppliedFilters-toggle');
    const contentEl = DOM.query(this._container, '.js-yxt-AppliedFilters-content');
    if (!toggleEl || !contentEl) {
      return;
    }
    const isOverflowing = contentEl.scrollHeight - this.lineHeight > 1;
    if (isOverflowing) {
      toggleEl.classList.remove('yxt-AppliedFilters-toggle--hidden');
    } else {
      toggleEl.classList.add('yxt-AppliedFilters-toggle--hidden');
    }
  }

  /**
   * Combines {@link FilterView} and {@link FacetView}
   * into an object of label to displayValues.
   * This has to be parsed into an array of objects with displayField and displayValues
   * because currently we cannot loop through an object in handlebars, only arrays.
   * Ignore any filters filtering on a field in config.hiddenFields.
   * @returns {Array<Object>}
   */
  getAppliedFilters () {
    const facets = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER_VIEW);
    const facetMetadata = facets.length > 0 ? facets[0].metadata : {};
    const filterViews = this.core.globalStorage.getAll(StorageKeys.FILTER_VIEW);
    const filterMetadata = filterViews.map(fv => fv.metadata);
    const metadata = FilterMetadata.combine([...filterMetadata, facetMetadata]);
    const appliedFilters = {};

    Object.entries(metadata).forEach(([fieldId, labelToDisplayValues]) => {
      if (this._config.hiddenFields.includes(fieldId)) {
        return;
      }
      Object.entries(labelToDisplayValues).forEach(([label, displayValues]) => {
        if (!appliedFilters[label]) {
          appliedFilters[label] = [];
        }
        appliedFilters[label].push(...displayValues);
      });
    });

    // Also add nlp filters from the backend
    this.appliedQueryFilters
      .filter(f => !this._config.hiddenFields.includes(f.fieldId))
      .forEach(nlpFilter => {
        const { key, value } = nlpFilter;
        if (!appliedFilters[key]) {
          appliedFilters[key] = [];
        }
        appliedFilters[key].push(value);
      });

    return Object.entries(appliedFilters).map(([label, displayValues]) => ({
      label: label,
      displayValues: displayValues
    }));
  }

  setState (data) {
    return super.setState({
      ...data,
      appliedFilters: this.getAppliedFilters(),
      sortByOptions: this.core.globalStorage.getState(StorageKeys.SORT_BYS) || []
    });
  }

  static get type () {
    return 'AppliedFilters';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/appliedfilters';
  }
}
