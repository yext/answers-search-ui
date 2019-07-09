/** @module FilterBoxComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import * as StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';

/**
 * Renders a set of filters, and searches with them when applied.
 * Multiple FilterBox components will AND together but will not share state.
 */
export default class FilterBoxComponent extends Component {
  constructor (config = {}) {
    super(config);

    if (!config.filters || !(config.filters instanceof Array)) {
      throw new AnswersComponentError(
        'FilterBox requires filters to be provided as an array',
        'FilterBox');
    }

    /**
     * The list of filters to display and control
     * @type {object[]}
     * @private
     */
    this._filterConfigs = config.filters;

    /**
     * The vertical key for the search
     * @type {string}
     * @private
     */
    this._verticalKey = config.verticalKey || null;

    /**
     * If true, trigger a search on each change to a filter
     * @type {boolean}
     * @private
     */
    this._searchOnChange = config.searchOnChange || false;

    /**
     * The components created for each filter config
     * @type {Component[]}
     * @private
     */
    this._filterComponents = [];

    /**
     * The current state of the filter components in the box
     * @type {Filter}
     * @private
     */
    this._filters = [];

    /**
     * The template to render
     * @type {string}
     * @private
     */
    this._templateName = `filters/filterbox`;
  }

  static get type () {
    return 'FilterBox';
  }

  setState (data) {
    super.setState(Object.assign(data, {
      filterConfigs: this._filterConfigs,
      showApplyButton: !this._searchOnChange
    }));
  }

  onMount () {
    // Initialize filters from configs
    for (let i = 0; i < this._filterConfigs.length; i++) {
      const config = this._filterConfigs[i];
      const component = this.componentManager.create(config.type, Object.assign({},
        config,
        {
          parent: this,
          name: `${this.name}.filter${i}`,
          storeOnChange: false,
          container: `.js-yext-filterbox-filter${i}`,
          onChange: (f) => {
            this.onFilterChange(i, f);
          }
        }));
      component.mount();
      this._filterComponents.push(component);
    }

    // Initialize apply button
    if (!this._searchOnChange) {
      const button = DOM.query(this._container, '.js-yext-filterbox-apply');
      DOM.on(button, 'click', () => this._applyFilters());
    }
  }

  /**
   * Handle changes to child filter components
   * @param {number} index The index of the changed filter
   * @param {Filter} filter The new filter
   */
  onFilterChange (index, filter) {
    this._filters[index] = filter;
    if (this._searchOnChange) {
      this._applyFilters();
    }
  }

  /**
   * Save current filters to storage and trigger a search with all filters
   * in storage
   * @private
   */
  _applyFilters () {
    const validFilters = this._filters.filter(f => f !== undefined && f !== null);
    const combinedFilter = validFilters.length > 1 ? Filter.and(...validFilters) : validFilters[0];
    this.core.setFilter(this.name, combinedFilter);

    const allFilters = this.core.storage.getAll(StorageKeys.FILTER);
    const totalFilter = allFilters.length > 1 ? Filter.and(...allFilters) : allFilters[0];

    this.core.verticalSearch('', this._verticalKey, JSON.stringify(totalFilter));
  }
}
