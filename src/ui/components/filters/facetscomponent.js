/** @module FacetsComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import ResultsContext from '../../../core/storage/resultscontext';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

class FacetsConfig {
  constructor (config) {
    /**
     * The title to display above the controls
     * @type {string}
     */
    this.title = config.title || TranslationFlagger.flag({
      phrase: 'Filters',
      context: 'Plural noun, title for a group of controls that filter results'
    });

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
    this.resetFacetLabel = config.resetFacetLabel || TranslationFlagger.flag({
      phrase: 'reset',
      context: 'Button label, deselects one or more options'
    });

    /**
     * If true, show a "reset all" button to reset all facets
     * @type {boolean}
     */
    this.resetFacets = config.resetFacets;

    /**
     * The label to show for the "reset all" button
     * @type {string}
     */
    this.resetFacetsLabel = config.resetFacetsLabel || TranslationFlagger.flag({
      phrase: 'reset all',
      context: 'Button label, deselects all options'
    });

    /**
     * The max number of facets to show before displaying "show more"/"show less"
     * @type {number}
     */
    this.showMoreLimit = config.showMoreLimit || 5;

    /**
     * The label to show for displaying more facets
     * @type {string}
     */
    this.showMoreLabel = config.showMoreLabel || TranslationFlagger.flag({
      phrase: 'show more',
      context: 'Displays more options'
    });

    /**
     * The label to show for displaying less facets
     * @type {string}
     */
    this.showLessLabel = config.showLessLabel || TranslationFlagger.flag({
      phrase: 'show less',
      context: 'Displays less options'
    });

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
    this.applyLabel = config.applyLabel || TranslationFlagger.flag({
      phrase: 'apply',
      context: 'Button label, effectuates changes'
    });

    /**
     * The controls to use for each field. Each type of filter has a default
     * $eq : multioption (checkbox)
     *
     * DEPRECATED: prefer putting this in config.fields
     *
     * @type {Object}
     */
    this.fieldControls = config.fieldControls || {};

    /**
     * The placeholder text used for the filter option search input
     * @type {string}
     */
    this.placeholderText = config.placeholderText || TranslationFlagger.flag({
      phrase: 'Search here...',
      context: 'Placeholder text for input field'
    });

    /**
     * If true, display the filter option search input
     * @type {boolean}
     */
    this.searchable = config.searchable || false;

    /**
     * The form label text for the search input
     * @type {boolean}
     */
    this.searchLabelText = config.searchLabelText || TranslationFlagger.flag({
      phrase: 'Search for a filter option',
      context: 'Labels an input field'
    });

    /**
     * An object that maps field API names to their filter options overrides,
     * which have the same keys as the config options in FilterOptions component.
     * @type {Object}
     */
    this.fields = config.fields || {};

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
  }

  static get type () {
    return ComponentTypes.FACETS;
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'filters/facets';
  }

  setState (data) {
    return super.setState({
      ...data,
      isNoResults: data.resultsContext === ResultsContext.NO_RESULTS
    });
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

    let { filters, resultsContext } = this._state.get();

    if (!filters || resultsContext === ResultsContext.NO_RESULTS) {
      return;
    }

    filters = filters.map(f => {
      const fieldOverrides = this.config.fields[f.fieldId] || {};
      return Object.assign({}, f, {
        type: 'FilterOptions',
        control: this.config.fieldControls[f.fieldId] || 'multioption',
        searchable: this.config.searchable,
        searchLabelText: this.config.searchLabelText,
        placeholderText: this.config.placeholderText,
        showExpand: fieldOverrides.expand === undefined ? this.config.expand : fieldOverrides.expand,
        ...fieldOverrides
      });
    });

    // TODO: pass an apply() method to FilterBox, that will override its default behavior,
    // and remove the isDynamic config option.
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
    this.core.globalStorage.set(StorageKeys.FACETS_LOADED, true);
  }
}
