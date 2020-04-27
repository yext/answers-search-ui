/** @module FilterOptionsComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import HighlightedValue from '../../../core/models/highlightedvalue';
import levenshtein from 'js-levenshtein';

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

    this.validate();

    if (typeof config.previousOptions === 'string') {
      try {
        config.previousOptions = JSON.parse(config.previousOptions);
      } catch (e) {
        config.previousOptions = [];
      }
    }
    let selectedOptions = config.previousOptions || [];
    this.options = this.setDefaultSelectedValues(this.options, selectedOptions);
  }

  setDefaultSelectedValues (options, selectedOptions) {
    return options.map(o => ({
      ...o,
      selected: selectedOptions.length
        ? selectedOptions.includes(o.label)
        : o.selected
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
    const selectedCount = this.config.getSelectedCount();
    super.setState(Object.assign({}, data, {
      name: this.name.toLowerCase(),
      ...this.config,
      showReset: this.config.showReset && selectedCount > 0,
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
      const showLessEl = DOM.query(this._container, '.js-yxt-FilterOptions-showLess');
      const showMoreEl = DOM.query(this._container, '.js-yxt-FilterOptions-showMore');
      const optionsOverLimitEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-aboveShowMoreLimit');
      DOM.on(
        showLessEl,
        'click',
        () => {
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
          showLessEl.classList.remove('hidden');
          showMoreEl.classList.add('hidden');
          for (let optionEl of optionsOverLimitEls) {
            optionEl.classList.remove('hidden');
          }
        });
    }

    // searchable option list
    if (this.config.searchable) {
      const filterOptionEls = DOM.queryAll(this._container, '.js-yxt-FilterOptions-option');
      const filterContainerEl = DOM.query(this._container, '.js-yxt-FilterOptions-container');
      DOM.on(
        DOM.query(this._container, '.js-yxt-FilterOptions-filter'),
        'keyup',
        event => {
          const filter = event.target.value;
          filterContainerEl.classList.add('yxt-FilterOptions-container--searching');

          for (let filterOption of filterOptionEls) {
            const labelEl = DOM.query(filterOption, '.js-yxt-FilterOptions-optionLabel--name');
            let labelText = labelEl.textContent || labelEl.innerText || '';
            labelText = labelText.trim();
            if (!filter) {
              filterContainerEl.classList.remove('yxt-FilterOptions-container--searching');
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

  clearOptions () {
    this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    this.updateListeners();
    this.setState();
  }

  updateListeners () {
    const filter = this._buildFilter();
    if (this.config.storeOnChange) {
      this.core.setFilter(this.name, filter);
    }

    this.config.onChange(filter);
  }

  _updateOption (index, selected) {
    if (this.config.control === 'singleoption') {
      this.config.options = this.config.options.map(o => Object.assign({}, o, { selected: false }));
    }

    this.config.options[index] = Object.assign({}, this.config.options[index], { selected });
    this.updateListeners();
    this.setState();
  }

  getFilter () {
    return this._buildFilter();
  }

  floatSelected () {
    this.config.options = this.config.options.sort((a, b) => b.selected - a.selected);
  }

  /**
   * Clear all options
   */
  clear () {
    const elements = DOM.queryAll(this._container, this.config.optionSelector);
    elements.forEach(e => e.setAttribute('checked', 'false'));
    this._applyFilter();
  }

  /**
   * Build and return the Filter that represents the current state
   * @returns {Filter}
   * @private
   */
  _buildFilter () {
    const filters = this.config.options
      .filter(o => o.selected)
      .map(o => o.filter
        ? o.filter
        : Filter.equal(o.field, o.value));

    this.core.persistentStorage.set(this.name, this.config.options.filter(o => o.selected).map(o => o.label));
    return filters.length > 0
      ? Filter.group(...filters)
      : {};
  }
}
