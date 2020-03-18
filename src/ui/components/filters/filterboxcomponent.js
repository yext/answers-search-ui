/** @module FilterBoxComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';
import FilterView from '../../../core/models/filterview';
import FacetView from '../../../core/models/facetview';

class FilterBoxConfig {
  constructor (config) {
    /**
     * The title to display above the controls
     * @type {string}
     */
    this.title = config.title || 'Filters';

    /**
     * If true, display the number of results next to each facet
     * @type {boolean}
     */
    this.showCount = config.showCount === undefined ? true : config.showCount;

    /**
     * If true, trigger a search on each change to a filter
     * @type {boolean}
     */
    this.searchOnChange = config.searchOnChange || false;

    /**
     * If true, show a button to reset for each facet group
     * @type {boolean}
     */
    this.resetFilter = config.resetFacet || false;

    /**
     * The label to show for the reset button
     * @type {string}
     */
    this.resetFilterLabel = config.resetFacetLabel || 'reset';

    /**
     * If true, show a "reset all" button to reset all facets
     * @type {boolean}
     */
    this.resetFilters = config.resetFacets === undefined ? true : config.resetFacets;

    /**
     * The label to show for the "reset all" button
     * @type {string}
     */
    this.resetFiltersLabel = config.resetFacetsLabel || 'reset all';

    /**
     * The max number of facets to show before displaying "show more"/"show less"
     * @type {number}
     */
    this.showMoreLimit = config.showMoreLimit || 5;

    /**
     * The label to show for displaying more facets
     * @type {string}
     */
    this.showMoreLabel = config.showMoreLabel || 'show more';

    /**
     * The label to show for displaying less facets
     * @type {string}
     */
    this.showLessLabel = config.showLessLabel || 'show less';

    /**
     * If true, enable hiding excess facets in each group with a "show more"/"show less" button
     * @type {boolean}
     */
    this.showMore = config.showMore === undefined ? true : config.showMore;

    /**
     * If true, allow expanding and collapsing each group of facets
     * @type {boolean}
     */
    this.expand = config.expand === undefined ? true : config.expand;

    /**
     * If true, display the number of currently applied filters when collapsed
     * @type {boolean}
     */
    this.showNumberApplied = config.showNumberApplied === undefined ? true : config.showNumberApplied;

    /**
     * Text to display on the apply button
     * @type {string}
     */
    this.applyLabel = config.applyLabel || 'apply';

    /**
     * The selector of the apply button
     * @type {string}
     */
    this.applyButtonSelector = config.applyButtonSelector || '.js-yext-filterbox-apply';

    /**
     * The list of filters to display and control, ignoring empty sections
     * @type {object[]}
     */
    this.filterConfigs = config.filters.filter(f => f.options.length !== 0);

    /**
     * Whether or not this filterbox contains facets. This affects the
     * the way the filters are used in the search
     * @type {boolean}
     */
    this.isDynamic = config.isDynamic || false;

    this.validate();
  }

  validate () {
  }
}

/**
 * Renders a set of filters, and searches with them when applied.
 * Multiple FilterBox components will AND together but will not share state.
 * @extends Component
 */
export default class FilterBoxComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    this.config = new FilterBoxConfig(config);

    if (!config.filters || !(config.filters instanceof Array)) {
      throw new AnswersComponentError(
        'FilterBox requires filters to be provided as an array',
        'FilterBox');
    }

    /**
     * The vertical key for the search
     * @type {string}
     * @private
     */
    this._verticalKey = config.verticalKey || null;

    /**
     * The components created for each filter config
     * @type {Component[]}
     * @private
     */
    this._filterComponents = [];

    /**
     * The current state of the filter components in the box
     * @type {FilterView}
     * @private
     */
    this._filterViews = [];

    if (!this.config.showCount) {
      this.config.filterConfigs.forEach(config => {
        config.options.forEach(option => {
          option.countLabel = null;
        });
      });
    }
  }

  static get type () {
    return 'FilterBox';
  }

  static defaultTemplateName () {
    return 'filters/filterbox';
  }

  setState (data) {
    super.setState(Object.assign({}, data, this.config, {
      showReset: this.config.resetFilters,
      resetLabel: this.config.resetFiltersLabel,
      showApplyButton: !this.config.searchOnChange
    }));
  }

  onMount () {
    if (this._filterComponents.length) {
      this._filterComponents.forEach(c => c.remove());
      this._filterComponents = [];
      this._filterViews = [];
    }

    // Initialize filters from configs
    for (let i = 0; i < this.config.filterConfigs.length; i++) {
      const config = this.config.filterConfigs[i];
      const component = this.componentManager.create(config.type, Object.assign({},
        config,
        this.config,
        {
          parentContainer: this._container,
          name: `${this.name}.filter${i}`,
          storeOnChange: false,
          container: `.js-yext-filterbox-filter${i}`,
          showReset: this.config.resetFilter,
          resetLabel: this.config.resetFilterLabel,
          showExpand: this.config.expand,
          isDynamic: true,
          onChange: (filter, metadata) => {
            this.onFilterChange(i, filter, metadata);
          }
        }));
      component.mount();
      this._filterComponents.push(component);
      this._filterViews[i] = component.getFilterView();
    }
    this._saveFilterViewsToStorage();

    // Initialize apply button
    if (!this.config.searchOnChange) {
      const button = DOM.query(this._container, this.config.applyButtonSelector);

      if (button) {
        DOM.on(button, 'click', () => {
          this._saveFilterViewsToStorage();
          this.search();
        });
      }
    }

    // Initialize reset button
    if (this.config.resetFilters) {
      DOM.on(
        DOM.query(this._container, '.js-yxt-FilterBox-reset'),
        'click',
        this.resetFilters.bind(this));
    }
  }

  resetFilters () {
    this._filterComponents.forEach(filter => filter.clearOptions());
  }

  /**
   * Handle changes to child filter components
   * @param {number} index The index of the changed filter
   * @param {Filter} filter The new filter
   * @param {FilterMetadata} metadata The new metadata
   */
  onFilterChange (index, filter, metadata) {
    this._filterViews[index] = new FilterView(filter, metadata);
    if (this.config.searchOnChange) {
      this._saveFilterViewsToStorage();
      this.search();
    }
  }

  /**
   * Remove all filter components along with this component
   */
  remove () {
    this._filterComponents.forEach(c => c.remove());
    super.remove();
  }

  /**
   * Save current filters to storage to be used in the next search
   * @private
   */
  _saveFilterViewsToStorage () {
    const validFilters = this._filterViews.filter(fv => Filter.getFilterKey(fv.filter));

    if (this.config.isDynamic) {
      const availableFieldIds = this.config.filterConfigs.map(config => config.fieldId);
      const combinedFilter = FacetView.fromFilterViews(availableFieldIds, ...validFilters);
      this.core.setFacetView(this.name, combinedFilter);
    } else if (validFilters.length !== 0) {
      this.core.setFilterView(this.name, FilterView.combineFilterViews(...validFilters));
    }
  }

  /**
   * Trigger a search with all filters in storage
   */
  search () {
    const query = this.core.globalStorage.getState(StorageKeys.QUERY);
    this.core.persistentStorage.delete(StorageKeys.SEARCH_OFFSET);
    this.core.globalStorage.delete(StorageKeys.SEARCH_OFFSET);
    this.core.verticalSearch(this._verticalKey, { input: query });
  }
}
