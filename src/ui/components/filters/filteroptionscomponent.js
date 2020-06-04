/** @module FilterOptionsComponent */

/* global Event */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import HighlightedValue from '../../../core/models/highlightedvalue';
import levenshtein from 'js-levenshtein';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import FilterMetadata from '../../../core/filters/filtermetadata';
import { groupArray } from '../../../core/utils/arrayutils';
import FilterType from '../../../core/filters/filtertype';

/**
 * The currently supported controls
 * @type {string[]}
 */
const SUPPORTED_CONTROLS = [
  'singleoption',
  'multioption'
];

/**
 * The currently supported option types.
 */
const OptionTypes = {
  RADIUS_FILTER: 'RADIUS_FILTER',
  STATIC_FILTER: 'STATIC_FILTER'
};

class FilterOptionsConfig {
  constructor (config) {
    /**
     * The type of control to display
     * @type {string}
     */
    this.control = config.control;

    /**
     * The type of filtering to apply to the options.
     * @type {string}
     */
    this.optionType = config.optionType || OptionTypes.STATIC_FILTER;

    /**
     * The list of filter options to display with checked status
     * @type {object[]}
     */
    this.options = config.options.map(o => ({ ...o }));

    /**
     * The label to be used in the legend
     * @type {string}
     */
    this.label = config.label || 'Filters';

    /**
     * The callback function to call when changed
     * @type {function}
     */
    this.onChange = config.onChange || function () { };

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
     * Whether this FilterOptions is part of a dynamic FilterBox component (i.e. is
     * part of a FacetsComponent). Used to correctly set the {@link FilterType} of
     * the created {@link FilterNode}.
     * @type {boolean}
     */
    this.isDynamic = config.isDynamic;

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

    /**
     * The placeholder text used for the filter option search input
     * @type {string}
     */
    this.placeholderText = config.placeholderText || 'Search here...';

    /**
     * If true, display the filter option search input
     * @type {boolean}
     */
    this.searchable = config.searchable || false;

    /**
     * The form label text for the search input
     * @type {boolean}
     */
    this.searchLabelText = config.searchLabelText || 'Search for a filter option';

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
    this.options = this.setSelectedOptions(this.options, previousOptions);
  }

  /**
   * Sets selected options on load based on options stored in persistent storage and options with selected: true.
   * If no previous options were stored in persistentStorage, default to options marked
   * as selected. If multiple options are marked as selected for 'singleoption', only the
   * first should be selected.
   * @param {Array<Object>} options
   * @param {Array<string>} previousOptions
   * @returns {Array<Object>}
   */
  setSelectedOptions (options, previousOptions) {
    if (previousOptions && this.control === 'singleoption') {
      let hasSeenSelectedOption = false;
      return options.map(o => {
        if (previousOptions.includes(o.label) && !hasSeenSelectedOption) {
          hasSeenSelectedOption = true;
          return { ...o, selected: true };
        }
        return { ...o, selected: false };
      });
    } else if (previousOptions && this.control === 'multioption') {
      return options.map(o => ({
        ...o,
        selected: previousOptions.includes(o.label)
      }));
    } else if (this.control === 'singleoption') {
      let hasSeenSelectedOption = false;
      return options.map(o => {
        if (hasSeenSelectedOption) {
          return { ...o, selected: false };
        } else if (o.selected) {
          hasSeenSelectedOption = true;
        }
        return { ...o };
      });
    }
    return options;
  }

  getInitialSelectedCount () {
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

    if (!(this.optionType in OptionTypes)) {
      const possibleTypes = Object.values(OptionTypes).join(', ');
      throw new AnswersComponentError(
        `Invalid optionType ${this.optionType} passed to FilterOptions. Expected one of ${possibleTypes}`,
        'FilterOptions');
    }

    if (this.optionType === OptionTypes.RADIUS_FILTER && this.control !== 'singleoption') {
      throw new AnswersComponentError(
        `FilterOptions of optionType ${OptionTypes.RADIUS_FILTER} requires control "singleoption"`,
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

    const selectedCount = this.config.getInitialSelectedCount();

    /**
     * True if the option list is expanded and visible
     * @type {boolean}
     */
    this.expanded = this.config.showExpand ? selectedCount > 0 : true;

    /**
     * Whether the current is currently showing more or less. If true, is currently "show more".
     * Only used if config.showMore is true.
     * @type {boolean}
     */
    this.showMoreState = this.config.showMore;

    if (this.config.storeOnChange) {
      this.apply();
    }
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
    const selectedCount = this._getSelectedCount();
    super.setState(Object.assign({}, data, {
      name: this.name.toLowerCase(),
      ...this.config,
      showMoreState: this.showMoreState,
      displayReset: this.config.showReset && selectedCount > 0,
      expanded: this.expanded,
      selectedCount,
      isSingleOption: this.config.control === 'singleoption'
    }));
  }

  onMount () {
    DOM.delegate(
      DOM.query(this._container, `.yxt-FilterOptions-options`),
      this.config.optionSelector,
      'click',
      event => {
        let selectedCountEl = DOM.query(this._container, '.js-yxt-FilterOptions-selectedCount');
        if (selectedCountEl) {
          selectedCountEl.innerText = this._getSelectedCount();
        }
        this._updateOption(parseInt(event.target.dataset.index), event.target.checked);
      });

    // Initialize reset element if present
    const resetEl = DOM.query(this._container, '.js-yxt-FilterOptions-reset');
    if (resetEl) {
      DOM.on(resetEl, 'click', this.clearOptions.bind(this));
    }

    // show more/less button
    if (this.config.showMore) {
      const showLessEl = DOM.query(this._container, '.js-yxt-FilterOptions-showLess');
      const showMoreEl = DOM.query(this._container, '.js-yxt-FilterOptions-showMore');
      const optionsOverLimitEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-aboveShowMoreLimit');
      DOM.on(
        showLessEl,
        'click',
        () => {
          this.showMoreState = true;
          showLessEl.classList.add('hidden');
          showMoreEl.classList.remove('hidden');
          for (let optionEl of optionsOverLimitEls) {
            optionEl.classList.add('hidden');
          }
        });
      DOM.on(
        showMoreEl,
        'click',
        () => {
          this.showMoreState = false;
          showLessEl.classList.remove('hidden');
          showMoreEl.classList.add('hidden');
          for (let optionEl of optionsOverLimitEls) {
            optionEl.classList.remove('hidden');
          }
        });
    }

    // searchable option list
    if (this.config.searchable) {
      const clearSearchEl = DOM.query(this._container, '.js-yxt-FilterOptions-clearSearch');
      const searchInputEl = DOM.query(this._container, '.js-yxt-FilterOptions-filter');
      const filterOptionEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-option');
      const filterContainerEl = DOM.query(this._container, '.js-yxt-FilterOptions-container');

      // On clearSearchEl click, clear search input
      if (clearSearchEl && searchInputEl) {
        DOM.on(clearSearchEl, 'click', event => {
          searchInputEl.value = '';
          searchInputEl.dispatchEvent(new Event('input', {
            'bubbles': true,
            'cancelable': true
          }));
          searchInputEl.focus();
        });
      }

      DOM.on(
        searchInputEl,
        'input',
        event => {
          const filter = event.target.value;

          if (!filter) {
            filterContainerEl.classList.remove('yxt-FilterOptions-container--searching');
            clearSearchEl.classList.add('js-hidden');
          } else {
            filterContainerEl.classList.add('yxt-FilterOptions-container--searching');
            clearSearchEl.classList.remove('js-hidden');
          }

          for (let filterOption of filterOptionEls) {
            const labelEl = DOM.query(filterOption, '.js-yxt-FilterOptions-optionLabel--name');
            let labelText = labelEl.textContent || labelEl.innerText || '';
            labelText = labelText.trim();
            if (!filter) {
              filterOption.classList.remove('hiddenSearch');
              filterOption.classList.remove('displaySearch');
              labelEl.innerHTML = labelText;
            } else {
              let matchedSubstring = this._getMatchedSubstring(labelText.toLowerCase(), filter.toLowerCase());
              if (matchedSubstring) {
                filterOption.classList.add('displaySearch');
                filterOption.classList.remove('hiddenSearch');
                labelEl.innerHTML = new HighlightedValue({
                  value: labelText,
                  matchedSubstrings: [matchedSubstring]
                }).get();
              } else {
                filterOption.classList.add('hiddenSearch');
                filterOption.classList.remove('displaySearch');
                labelEl.innerHTML = labelText;
              }
            }
          }
        }
      );
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

  /**
   * Returns the count of currently selected options
   * @returns {number}
   * @private
   */
  _getSelectedCount () {
    return this.config.options.filter(o => o.selected).length;
  }

  /**
   * Toggles the display of the reset element based on the selected count. If there are selected
   * options, show the reset element, if not, hide it.
   *
   * Note: this will not have any effect if the reset element isn't in the DOM.
   *
   * @returns {number}
   * @private
   */
  _toggleReset () {
    const resetEl = DOM.query(this._container, '.js-yxt-FilterOptions-reset');
    const selectedCount = this._getSelectedCount();
    if (selectedCount > 0) {
      resetEl.classList.remove('js-hidden');
    } else if (!resetEl.classList.contains('js-hidden')) {
      resetEl.classList.add('js-hidden');
    }
  }

  /**
   * Finds the length and offset of the substring where (string) option and
   * (string) filter "match".
   *
   * "Match" is defined as an exact text match, or -- if the length of filter
   * is greater than the `minFilterSizeForLevenshtein` -- a "match" can occur if
   * any "n length" substring of option (where "n length" is the length of filter)
   * is within the `maxLevenshteinDistance` levenshtein distance of the filter.
   *
   * Note: this is case sensitive.
   *
   * @returns {Object}
   * @private
   */
  _getMatchedSubstring (option, filter) {
    let offset = this._getOffset(option, filter);
    if (offset > -1) {
      return {
        length: filter.length,
        offset: offset
      };
    }

    const minFilterSizeForLevenshtein = 3;
    const maxLevenshteinDistance = 1;
    if (filter.length > minFilterSizeForLevenshtein) {
      // Break option into X filter.length size substrings
      let substrings = [];
      for (let start = 0; start <= (option.length - filter.length); start++) {
        substrings.push(option.substr(start, filter.length));
      }

      // Find the substring that is the closest in levenshtein distance to filter
      let minLevDist = filter.length;
      let minLevSubstring = filter;
      for (let substring of substrings) {
        let levDist = this._calcLevenshteinDistance(substring, filter);
        if (levDist < minLevDist) {
          minLevDist = levDist;
          minLevSubstring = substring;
        }
      }

      // If the min levenshtein distance is below the max, count it as a match
      if (minLevDist <= maxLevenshteinDistance) {
        offset = this._getOffset(option, minLevSubstring);
        if (offset > -1) {
          return {
            length: filter.length,
            offset: offset
          };
        }
      }
    }
  }

  /**
   * Calculate the levenshtein distance for two strings
   * @returns {number}
   * @private
   */
  _calcLevenshteinDistance (a, b) {
    return levenshtein(a, b);
  }

  /**
   * Returns the starting index of first occurance of the (string) filter in
   * the (string) option, or -1 if not present
   * @returns {number}
   * @private
   */
  _getOffset (option, filter) {
    return (option && filter) ? option.indexOf(filter) : -1;
  }

  /**
   * Clears all selected options.
   */
  clearOptions () {
    this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    this.updateListeners();
    this.setState();
  }

  /**
   * Call the config.onChange callback with the FilterNode corresponding to the
   * component state.
   * @param {boolean} alwaysSaveFilterNodes
   * @param {boolean} blockSearchOnChange
   */
  updateListeners (alwaysSaveFilterNodes, blockSearchOnChange) {
    const filterNode = this.getFilterNode();
    if (this.config.storeOnChange) {
      this.apply();
    }

    this.config.onChange(filterNode, alwaysSaveFilterNodes, blockSearchOnChange);
  }

  _updateOption (index, selected) {
    if (this.config.control === 'singleoption') {
      this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    }

    this.config.options[index] = Object.assign({}, this.config.options[index], { selected });

    if (this.config.showReset) {
      this._toggleReset();
    }
    this.updateListeners();
  }

  apply () {
    switch (this.config.optionType) {
      case OptionTypes.RADIUS_FILTER:
        this.core.setLocationRadiusFilterNode(this.getLocationRadiusFilterNode());
        break;
      case OptionTypes.STATIC_FILTER:
        this.core.setStaticFilterNodes(this.name, this.getFilterNode());
        break;
      default:
        throw new AnswersComponentError(`Unknown optionType ${this.config.optionType}`, 'FilterOptions');
    }
  }

  floatSelected () {
    this.config.options = this.config.options.sort((a, b) => b.selected - a.selected);
  }

  _buildFilter (option) {
    return option.filter ? option.filter : Filter.equal(option.field, option.value);
  }

  _getFilterType () {
    if (this.config.isDynamic) {
      return FilterType.FACET;
    }
    return this.config.optionType === 'RADIUS_FILTER'
      ? FilterType.RADIUS
      : FilterType.STATIC;
  }

  _buildFilterMetadata (option) {
    return new FilterMetadata({
      fieldName: this.config.label,
      displayValue: option.label,
      filterType: this._getFilterType()
    });
  }

  /**
   * Return the FilterNode when this is a RADIUS_FILTER.
   * @type {FilterNode}
   */
  getLocationRadiusFilterNode () {
    const selectedOption = this.config.options.find(o => o.selected);
    if (!selectedOption) {
      return FilterNodeFactory.from();
    }
    const filterNode = {
      metadata: this._buildFilterMetadata(selectedOption),
      filter: { value: selectedOption.value },
      remove: () => this._clearSingleOption(selectedOption)
    };
    if (selectedOption.value === 0) {
      return FilterNodeFactory.from({
        ...filterNode,
        filter: Filter.empty()
      });
    } else {
      return FilterNodeFactory.from(filterNode);
    }
  }

  _clearSingleOption (option) {
    option.selected = false;
    this.updateListeners(true, true);
    this.setState();
  }

  /**
   * Returns this component's filter node when it is a STATIC_FILTER.
   * This method is exposed so that components like {@link FilterBoxComponent}
   * can access them.
   * @returns {FilterNode}
   */
  getFilterNode () {
    const filterNodes = this.config.options
      .filter(o => o.selected)
      .map(o => FilterNodeFactory.from({
        filter: this._buildFilter(o),
        metadata: this._buildFilterMetadata(o),
        remove: () => this._clearSingleOption(o)
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
