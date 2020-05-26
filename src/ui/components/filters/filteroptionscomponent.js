/** @module FilterOptionsComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import FilterMetadata from '../../../core/filters/filtermetadata';
import { groupArray } from '../../../core/utils/arrayutils';

/**
 * The currently supported controls
 * @type {string[]}
 */
const SUPPORTED_CONTROLS = [
  'singleoption',
  'multioption'
];

class FilterOptionsConfig {
  constructor (config) {
    /**
     * The type of control to display
     * @type {string}
     */
    this.control = config.control;

    /**
     * The list of filter options to display with checked status
     * @type {object[]}
     */
    this.options = config.options;

    /**
     * The label to be used in the legend
     * @type {string}
     */
    this.label = config.label || 'Filters';

    /**
     * The callback function to call when changed
     * @type {function}
     */
    this.onChange = config.onChange || function () {};

    /**
     * If true, stores the filter to storage on each change
     * @type {boolean}
     */
    this.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

    /**
     * If true, show a button to reset the current filter selection
     * @type {boolean}
     */
    this.showReset = config.showReset && this.options.length > 0;

    /**
     * The label to show for the reset button
     * @type {string}
     */
    this.resetLabel = config.resetLabel || 'reset';

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
     * If true, enable hiding excess facets with a "show more"/"show less" button
     * @type {boolean}
     */
    this.showMore = config.showMore === undefined ? true : config.showMore;
    this.showMore = this.showMore && this.options.length > this.showMoreLimit;

    /**
     * If true, allow expanding and collapsing the group of facets
     * @type {boolean}
     */
    this.showExpand = config.showExpand === undefined ? true : config.showExpand;

    /**
     * If true, display the number of currently applied filters when collapsed
     * @type {boolean}
     */
    this.showNumberApplied = config.showNumberApplied === undefined ? true : config.showNumberApplied;

    /**
     * The selector used for options in the template
     * @type {string}
     */
    this.optionSelector = config.optionSelector || '.js-yext-filter-option';

    this.validate();

    if (typeof config.previousOptions === 'string') {
      try {
        config.previousOptions = JSON.parse(config.previousOptions);
      } catch (e) {
        config.previousOptions = [];
      }
    }
    // previousOptions will be null if there were no previousOptions in persistentStorage
    const previousOptions = config.previousOptions;
    if (previousOptions) {
      this.options = this.setPreviousOptions(this.options, previousOptions || []);
    } else {
      this.options = this.setAppliedOnLoad(this.options);
    }
  }

  /**
   * Sets selected options on load based on options stored in persistent storage.
   * @param {Array<Object>} options
   * @param {Array<string>} previousOptions
   * @returns {Array<Object>}
   */
  setPreviousOptions (options, previousOptions) {
    return options.map(o => ({
      ...o,
      selected: previousOptions.includes(o.label)
    }));
  }

  /**
   * If no previous options were stored in persistentStorage, default to options marked
   * as appliedOnLoad.
   * @param {*} options
   */
  setAppliedOnLoad (options) {
    if (this.control === 'singleoption') {
      const _options = options.map(o => ({ ...o }));
      const firstAppliedOption = _options.find(o => o.appliedOnLoad);
      firstAppliedOption.selected = true;
      return _options;
    }
    return options.map(o => ({
      ...o,
      selected: o.appliedOnLoad || o.selected
    }));
  }

  getSelectedCount () {
    return this.options.reduce(
      (numSelected, option) => option.selected ? numSelected + 1 : numSelected,
      0);
  }

  validate () {
    if (!this.control || !SUPPORTED_CONTROLS.includes(this.control)) {
      throw new AnswersComponentError(
        'FilterOptions requires a valid "control" to be provided',
        'FilterOptions');
    }

    if (!this.options) {
      throw new AnswersComponentError(
        'FilterOptions component requires options to be provided',
        'FilterOptions');
    }
  }
}

/**
 * Renders a set of options, each one representing a filter in a search.
 */
export default class FilterOptionsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    let previousOptions = this.core.globalStorage.getState(this.name);
    this.core.globalStorage.delete(this.name);

    /**
     * The component config
     * @type {FilterOptionsConfig}
     */
    this.config = new FilterOptionsConfig({
      previousOptions,
      ...config
    });

    const selectedCount = this.config.getSelectedCount();

    /**
     * True if the option list is expanded and visible
     * @type {boolean}
     */
    this.expanded = this.config.showExpand ? selectedCount > 0 : true;

    /**
     * True if all options are shown, false if some are hidden based on config
     * @type {boolean}
     */
    this.allShown = false;
  }

  static get type () {
    return 'FilterOptions';
  }

  /**
   * The template to render, based on the control
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return `controls/filteroptions`;
  }

  setState (data) {
    let options = this.config.options;
    if (this.config.showMore && !this.allShown) {
      options = this.config.options.slice(0, this.config.showMoreLimit);
    }
    const selectedCount = this.config.getSelectedCount();
    super.setState(Object.assign({}, data, {
      name: this.name.toLowerCase(),
      ...this.config,
      showReset: this.config.showReset && selectedCount > 0,
      expanded: this.expanded,
      allShown: this.allShown,
      selectedCount,
      isSingleOption: this.config.control === 'singleoption',
      options
    }));
  }

  onMount () {
    DOM.delegate(
      DOM.query(this._container, `.yxt-FilterOptions-options`),
      this.config.optionSelector,
      'click',
      event => {
        this._updateOption(parseInt(event.target.dataset.index), event.target.checked);
      });

    const selectedCount = this.config.getSelectedCount();

    // reset button
    if (this.config.showReset && selectedCount > 0) {
      DOM.on(
        DOM.query(this._container, '.yxt-FilterOptions-reset'),
        'click',
        this.clearOptions.bind(this));
    }

    // show more/less button
    if (this.config.showMore) {
      DOM.on(
        DOM.query(this._container, '.yxt-FilterOptions-showToggle'),
        'click',
        () => {
          this.allShown = !this.allShown;
          this.setState();
        });
    }

    // expand button
    if (this.config.showExpand) {
      const legend = DOM.query(this._container, '.yxt-FilterOptions-clickableLegend');
      DOM.on(
        legend,
        'mousedown',
        click => {
          if (click.button === 0) {
            this.expanded = !this.expanded;
            this.setState();
          }
        });

      DOM.on(
        legend,
        'keydown',
        key => {
          if (key.key === ' ' || key.key === 'Enter') {
            key.preventDefault();
            this.expanded = !this.expanded;
            this.setState();
          }
        });
    }
  }

  clearOptions () {
    this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    this.updateListeners();
    this.setState();
  }

  updateListeners () {
    const filterNode = this.getFilterNode();
    if (this.config.storeOnChange) {
      this.apply();
    }

    this.config.onChange(filterNode);
  }

  _updateOption (index, selected) {
    if (this.config.control === 'singleoption') {
      this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    }

    this.config.options[index] = Object.assign({}, this.config.options[index], { selected });
    this.updateListeners();
    this.setState();
  }

  apply () {
    const filterNode = this.getFilterNode();
    this.core.setStaticFilterNodes(this.name, filterNode);
  }

  apply () {
    const filter = this._buildFilter();
    this.core.setFilter(this.name, filter);
  }

  /**
   * Clear all options
   * TODO(oshi): Investigate removing this, this is not referenced anywhere,
   * even if you go back to the original commit (#42).
   * Same thing with this._applyFilter().
   */
  clear () {
    const elements = DOM.queryAll(this._container, this.config.optionSelector);
    elements.forEach(e => e.setAttribute('checked', 'false'));
    this._applyFilter();
  }

  _buildFilter (option) {
    return option.filter ? option.filter : Filter.equal(option.field, option.value);
  }

  _buildFilterMetadata (option) {
    return new FilterMetadata({
      fieldName: this.config.label,
      displayValue: option.label
    });
  }

  /**
   * Returns this component's filter node.
   * This method is exposed so that components like {@link FilterBoxComponent}
   * can access them.
   * @returns {FilterNode}
   */
  getFilterNode () {
    const filterNodes = this.config.options
      .filter(o => o.selected)
      .map(o => FilterNodeFactory.from({
        filter: this._buildFilter(o),
        metadata: this._buildFilterMetadata(o)
      }));

    this.core.persistentStorage.set(this.name, this.config.options.filter(o => o.selected).map(o => o.label));
    const fieldIdToFilterNodes = groupArray(filterNodes, fn => fn.getFilter().getFilterKey());

    // OR together filter nodes for the same field id.
    const totalFilterNodes = [];
    for (const sameIdNodes of Object.values(fieldIdToFilterNodes)) {
      totalFilterNodes.push(FilterNodeFactory.or(...sameIdNodes));
    }

    // AND all of the ORed together nodes.
    return FilterNodeFactory.and(...totalFilterNodes);
  }
}
