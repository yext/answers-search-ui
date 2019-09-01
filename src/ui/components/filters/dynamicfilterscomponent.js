/** @module DynamicFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * Displays a set of dynamic filters returned from the backend
 * @extends Component
 */
export default class DynamicFiltersComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

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
     * The selector of the apply button
     * @type {string}
     * @private
     */
    this._applyButtonSelector = config.applyButtonSelector || null;

    /**
     * The controls to use for each field. Each type of filter has a default
     * $eq : multioption (checkbox)
     * @type {Object}
     */
    this._fieldControls = config.fieldControls || {};

    /**
     * If true, stores the filter to storage on each change
     * @type {boolean}
     * @private
     */
    this._storeOnChange = config.storeOnChange || false;

    /**
     * The template to render
     * @type {string}
     * @private
     */
    this._templateName = 'filters/dynamic';

    /**
     * An internal reference for the data storage to listen for updates from the server
     * @type {string}
     */
    this.moduleId = StorageKeys.DYNAMIC_FILTERS;

    /**
     * The filter box that displays the dynamic filters
     * @type {FilterBoxComponent}
     * @private
     */
    this._filterbox = null;
  }

  static get type () {
    return 'DynamicFilters';
  }

  onMount () {
    this.core.enableDynamicFilters();

    if (this._filterbox) {
      this._filterbox.remove();
    }

    let { filters } = this._state.get();

    if (!filters) {
      return;
    }

    filters = filters.map(f => {
      return Object.assign({}, f, {
        type: 'FilterOptions',
        control: this._fieldControls[f.fieldId] || 'multioption'
      });
    });

    this._filterbox = this.componentManager.create(
      'FilterBox',
      Object.assign({}, {
        parentContainer: this._container,
        name: `${this.name}.filterbox`,
        container: '.js-yext-dynamic-filters',
        searchOnChange: this._searchOnChange,
        verticalKey: this._verticalKey,
        isDynamic: true,
        storeOnChange: this._storeOnChange,
        filters
      })
    );

    this._filterbox.mount();
  }
}
