/** @module FilterBoxComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

class FilterBoxConfig {
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
    this.resetFilter = config.resetFilter || false;

    /**
     * The label to show for the reset button
     * @type {string}
     */
    this.resetFilterLabel = config.resetFilterLabel || TranslationFlagger.flag({
      phrase: 'reset',
      context: 'Button label, deselects one or more options'
    });

    /**
     * If true, show a "reset all" button to reset all facets
     * @type {boolean}
     */
    this.resetFilters = config.resetFilters === undefined ? !config.searchOnChange : config.resetFilters;

    /**
     * The label to show for the "reset all" button
     * @type {string}
     */
    this.resetFiltersLabel = config.resetFiltersLabel || TranslationFlagger.flag({
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
     * The selector of the apply button
     * @type {string}
     */
    this.applyButtonSelector = config.applyButtonSelector || '.js-yext-filterbox-apply';

    /**
     * The list of filters to display and control, ignoring empty sections
     * @type {object[]}
     */
    this.filterConfigs = config.filters.filter(f => f.options.length);

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
     * @type {Array<FilterNode>}
     * @private
     */
    this._filterNodes = [];

    this.config.filterConfigs.forEach(config => {
      let hideCount = config.showCount === undefined ? !this.config.showCount : !config.showCount;

      if (hideCount) {
        config.options.forEach(option => {
          option.countLabel = null;
        });
      }
    });
  }

  static get type () {
    return ComponentTypes.FILTER_BOX;
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
      this._filterNodes = [];
    }

    // Initialize filters from configs
    for (let i = 0; i < this.config.filterConfigs.length; i++) {
      const config = this.config.filterConfigs[i];
      const component = this.componentManager.create(config.type, {
        ...this.config,
        parentContainer: this._container,
        name: `${this.name}.filter${i}`,
        storeOnChange: false,
        container: `.js-yext-filterbox-filter${i}`,
        showReset: this.config.resetFilter,
        resetLabel: this.config.resetFilterLabel,
        isDynamic: this.config.isDynamic,
        ...config,
        showExpand: config.showExpand === undefined ? this.config.expand : config.showExpand,
        onChange: (filterNode, alwaysSaveFilterNodes, blockSearchOnChange) => {
          const _saveFilterNodes = this.config.searchOnChange || alwaysSaveFilterNodes;
          const _searchOnChange = this.config.searchOnChange && !blockSearchOnChange;
          this.onFilterNodeChange(i, filterNode, _saveFilterNodes, _searchOnChange);
          config.onChange && config.onChange();
        }
      });
      if (this.config.isDynamic && typeof component.floatSelected === 'function') {
        component.floatSelected();
      }
      component.mount();
      this._filterComponents.push(component);
      this._filterNodes[i] = component.getFilterNode();
    }
    this._saveFilterNodesToStorage(this.config.isDynamic);

    // Initialize apply button
    if (!this.config.searchOnChange) {
      const button = DOM.query(this._container, this.config.applyButtonSelector);

      if (button) {
        DOM.on(button, 'click', () => {
          this._saveFilterNodesToStorage(false);
          this._search();
        });
      }
    }

    // Initialize reset button
    let resetEl = DOM.query(this._container, '.js-yxt-FilterBox-reset');

    if (resetEl) {
      DOM.on(resetEl, 'click', this.resetFilters.bind(this));
    }
  }

  _getValidFilterNodes () {
    return this._filterNodes.filter(fn => fn.getFilter().getFilterKey());
  }

  resetFilters () {
    this._filterComponents.forEach(filter => filter.clearOptions());
  }

  /**
   * Handle changes to child filter components
   * @param {number} index The index of the changed filter
   * @param {FilterNode} filterNode The new filter node
   * @param {boolean} saveFilterNodes Whether to save filternodes to storage
   * @param {boolean} searchOnChange Whether to conduct a search
   */
  onFilterNodeChange (index, filterNode, saveFilterNodes, searchOnChange) {
    this._filterNodes[index] = filterNode;
    if (saveFilterNodes || searchOnChange) {
      this._saveFilterNodesToStorage(false);
    }
    if (searchOnChange) {
      this._search();
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
   * @param {boolean} replaceHistory Whether we replace or push a new history
   *                                 state for the associated changes
   */
  _saveFilterNodesToStorage (replaceHistory) {
    if (this.config.isDynamic) {
      const availableFieldIds = this.config.filterConfigs.map(config => config.fieldId);
      this.core.setFacetFilterNodes(availableFieldIds, this._getValidFilterNodes());
      this._filterComponents.forEach(fc => fc.saveSelectedToPersistentStorage(replaceHistory));
    } else {
      this._filterComponents.forEach(fc => fc.apply(replaceHistory));
    }
  }

  /**
   * Trigger a search with all filters in storage
   */
  _search () {
    this.core.verticalSearch(this._config.verticalKey, {
      setQueryParams: true,
      resetPagination: true,
      useFacets: true
    });
  }
}
