/** @module FacetsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

class FacetsConfig {
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
    this.resetFacet = config.resetFacet || false;

    /**
     * The label to show for the reset button
     * @type {string}
     */
    this.resetFacetLabel = config.resetFacetLabel || 'reset';

    /**
     * If true, show a "reset all" button to reset all facets
     * @type {boolean}
     */
    this.resetFacets = config.resetFacets === undefined ? true : config.resetFacets;

    /**
     * The label to show for the "reset all" button
     * @type {string}
     */
    this.resetFacetsLabel = config.resetFacetsLabel || 'reset all';

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
     * The controls to use for each field. Each type of filter has a default
     * $eq : multioption (checkbox)
     * @type {Object}
     */
    this.fieldControls = config.fieldControls || {};

    /**
     * The selector of the apply button
     * @type {string}
     * @private
     */
    this.applyButtonSelector = config.applyButtonSelector || null;

    this.validate();
  }

  validate () {
  }
}

/**
 * Displays a set of dynamic filters returned from the backend
 * @extends Component
 */
export default class FacetsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    this.config = new FacetsConfig(config);

    /**
     * The vertical key for the search
     * @type {string}
     * @private
     */
    this._verticalKey = config.verticalKey;

    // config.verticalKey || null;

    /**
     * The selector of the apply button
     * @type {string}
     * @private
     */
    this._applyButtonSelector = config.applyButtonSelector || null;

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
    this.needsInitialSearch = true;
  }

  static get type () {
    return 'Facets';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'filters/facets';
  }

  remove () {
    if (this._filterbox) {
      this._filterbox.remove();
    }
    super.remove();
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
        control: this.config.fieldControls[f.fieldId] || 'multioption'
      });
    });

    this._filterbox = this.componentManager.create(
      'FilterBox',
      Object.assign({}, this.config, {
        parentContainer: this._container,
        name: `${this.name}.filterbox`,
        container: '.js-yxt-Facets',
        verticalKey: this._verticalKey,
        resetFilter: this.config.resetFacet,
        resetFilters: this.config.resetFacets,
        resetFilterLabel: this.config.resetFacetLabel,
        resetFiltersLabel: this.config.resetFacetsLabel,
        isDynamic: true,
        filters
      })
    );

    this._filterbox.mount();
    if (this.needsInitialSearch) {
      this.needsInitialSearch = false;
      this._filterbox.search();
      this.setState();
    }
  }

  setState (data) {
    return super.setState({ ...data,
      needsInitialSearch: this.needsInitialSearch
    });
  }
}
