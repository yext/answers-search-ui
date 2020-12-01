/** @module SortOptionsComponent */

import Component from '../component';
import { AnswersBasicError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import ResultsContext from '../../../core/storage/resultscontext';
import SearchStates from '../../../core/storage/searchstates';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

/**
 * Renders configuration options for sorting Vertical Results.
 * TODO: how to deal with multiple instances of this component (and filters in general),
 * ideally "identical" filters/sorts would be synced up.
 */
export default class SortOptionsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(assignDefaults(config), systemConfig);
    // TODO SPR-1929 centralize this logic
    this._config.verticalKey = config.verticalKey || this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;
    this.options = this._config.options;
    this.selectedOptionIndex = parseInt(this.core.globalStorage.getState(this.name)) || 0;
    this.options[this.selectedOptionIndex].isSelected = true;
    this.hideExcessOptions = this._config.showMore && this.selectedOptionIndex < this._config.showMoreLimit;
    this.searchOnChangeIsEnabled = this._config.searchOnChange;
    this.showResetIsEnabled = this._config.showReset;
    this.showReset = this.showResetIsEnabled && this.selectedOptionIndex !== 0;
    this.isNoResults = false;

    /**
     * This component should only render if there are search results, so it should listen
     * to updates to vertical results and handle them accordingly.
     */
    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, verticalResults => {
      const isSearchComplete = verticalResults.searchState === SearchStates.SEARCH_COMPLETE;

      if (isSearchComplete) {
        const isNoResults = verticalResults.resultsContext === ResultsContext.NO_RESULTS;
        this.handleVerticalResultsUpdate(isNoResults);
      }
    });
  }

  /**
   * Handle updates to vertical results and trigger a re-render if necessary
   *
   * @param {boolean} isNoResults
   */
  handleVerticalResultsUpdate (isNoResults) {
    const wasNoResults = this.isNoResults;
    this.isNoResults = isNoResults;

    // Call setState (and therefore trigger a re-render) if the presence of search
    // results has changed. By not always re-rendering, we maintain focus on the selected
    // selected sort option
    if (isNoResults !== wasNoResults) {
      this.setState();
    }
  }

  setState (data = {}) {
    let options = this.options;
    if (this.hideExcessOptions) {
      options = this.options.slice(0, this._config.showMoreLimit);
    }
    super.setState(Object.assign({}, data, {
      options,
      hideExcessOptions: this.hideExcessOptions,
      name: this.name,
      showReset: this.showReset,
      isNoResults: this.isNoResults
    }));
  }

  onMount () {
    // Handle radio button selections
    const containerEl = DOM.query(this._container, '.yxt-SortOptions-fieldSet');
    containerEl && DOM.on(
      containerEl,
      'change',
      evt => this.handleOptionSelection(parseInt(evt.target.value))
    );

    // Register more/less button
    if (this._config.showMore) {
      const toggleEl = DOM.query(this._container, '.yxt-SortOptions-showToggle');
      toggleEl && DOM.on(
        toggleEl,
        'click', () => {
          this.hideExcessOptions = !this.hideExcessOptions;
          this.setState();
        }
      );
    }

    // Register show reset button
    if (this.showResetIsEnabled) {
      const resetEl = DOM.query(this._container, '.yxt-SortOptions-reset');
      resetEl && DOM.on(
        resetEl,
        'click',
        () => {
          this.handleOptionSelection(0);
          this.setState();
        }
      );
    }

    // Register apply button
    if (!this.searchOnChangeIsEnabled) {
      const applyEl = DOM.query(this._container, '.yxt-SortOptions-apply');
      applyEl && DOM.on(
        applyEl,
        'click',
        () => this._sortResults()
      );
    }
  }

  handleOptionSelection (selectedOptionIndex) {
    this._updateSelectedOption(selectedOptionIndex);
    this._updateCheckedAttributes();

    if (this.showResetIsEnabled) {
      this.showReset = (selectedOptionIndex !== 0);
      this._showOrHideResetButton();
    }

    if (this.searchOnChangeIsEnabled) {
      this._sortResults();
    }
  }

  _updateSelectedOption (optionIndex) {
    this.options[this.selectedOptionIndex].isSelected = false;
    this.options[optionIndex].isSelected = true;
    this.selectedOptionIndex = optionIndex;
  }

  /**
   * Set the 'checked' attribute for the selected option and remove it for all others
   */
  _updateCheckedAttributes () {
    this.options.forEach((option, optionIndex) => {
      const optionId = `#yxt-SortOptions-option_SortOptions_${optionIndex}`;
      const optionEl = DOM.query(this._container, optionId);

      if (this.selectedOptionIndex === optionIndex) {
        optionEl && optionEl.setAttribute('checked', '');
      } else {
        optionEl && optionEl.removeAttribute('checked', '');
      }
    });
  }

  /**
   * Show or hide the reset button based on this.showReset
   */
  _showOrHideResetButton () {
    const resetEl = DOM.query(this._container, '.yxt-SortOptions-reset');

    if (this.showReset) {
      resetEl.classList.remove('js-hidden');
    } else if (!resetEl.classList.contains('js-hidden')) {
      resetEl.classList.add('js-hidden');
    }
  }

  _sortResults () {
    const optionIndex = this.selectedOptionIndex;
    const option = this.options[optionIndex];

    // searchOnChange really means sort on change here, just that the sort is done through a search,
    // This was done to have a consistent option name between filters.
    this.core.persistentStorage.set(this.name, optionIndex);
    if (this._config.storeOnChange && optionIndex === 0) {
      this.core.clearSortBys();
    } else if (this._config.storeOnChange) {
      this.core.setSortBys(option);
    }
    this._search();
    this._config.onChange(option);
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

  static get type () {
    return ComponentTypes.SORT_OPTIONS;
  }

  static defaultTemplateName () {
    return 'controls/sortoptions';
  }
}

function assignDefaults (config) {
  const updatedConfig = Object.assign({}, config);

  // Optional, The label used for the “default” sort (aka the sort specified by the experience config").
  updatedConfig.defaultSortLabel = config.defaultSortLabel || TranslationFlagger.flag({
    phrase: 'Best Match',
    context: 'Best match (i.e. most relevant), describing results'
  });

  // Array of search options, where an option has type, label, and if is type FIELD also a label and direction
  if (!config.options) {
    throw new AnswersBasicError('config.options are required', 'SortOptions');
  }
  const OPTION_TYPES = ['FIELD', 'RELEVANCE', 'ENTITY_DISTANCE'];
  if (!Array.isArray(config.options)) {
    throw new AnswersBasicError('options must be an array of objects', 'SortOptions');
  }
  updatedConfig.options = config.options.map(option => {
    if (!option.label || !option.type) {
      throw new AnswersBasicError(`option.label and option.type are required option ${option}`, 'SortOptions');
    }
    const newOption = { isSelected: false };
    newOption.label = option.label;
    newOption.type = option.type;
    const isField = OPTION_TYPES.indexOf(newOption.type) === 0;
    if (isField && option.field && option.direction) {
      newOption.field = option.field;
      newOption.direction = option.direction;
    } else if (isField) {
      throw new AnswersBasicError(`option.field and option.direction are required for option: ${option}`, 'SortOptions');
    }
    return newOption;
  });
  // Add default option to the front of the options array
  updatedConfig.options.unshift({
    label: updatedConfig.defaultSortLabel,
    isSelected: false
  });

  // Optional, the selector used for options in the template
  updatedConfig.optionSelector = config.optionSelector || 'yxt-SortOptions-optionSelector';

  // Optional, if true, triggers a search on each change to a filter,
  // if false the component also renders an apply button, defaults to false
  updatedConfig.searchOnChange = config.searchOnChange === undefined ? true : config.searchOnChange;

  // Optional, show a reset button. Clicking it will always return the user to the default sorting option.
  updatedConfig.showReset = config.showReset || false;

  // Optional, the label to use for the reset button
  updatedConfig.resetLabel = config.resetLabel || TranslationFlagger.flag({
    phrase: 'reset',
    context: 'Button label, deselects one or more options'
  });

  // Optional, the max number of filter options to show before collapsing extras
  updatedConfig.showMoreLimit = config.showMoreLimit || 5;

  // Optional, allow collapsing excess sort options after a limit
  updatedConfig.showMore = config.showMore === undefined ? true : config.showMore;
  updatedConfig.showMore = updatedConfig.showMore && (updatedConfig.options.length > updatedConfig.showMoreLimit);

  // Optional, the label to show for displaying more options
  updatedConfig.showMoreLabel = config.showMoreLabel || TranslationFlagger.flag({
    phrase: 'Show more',
    context: 'Displays more options'
  });

  // Optional, the label to show for displaying less options
  updatedConfig.showLessLabel = config.showLessLabel || TranslationFlagger.flag({
    phrase: 'Show less',
    context: 'Displays less options'
  });

  // Optional, the callback function to call when changed
  updatedConfig.onChange = config.onChange || function () {};

  // Optional, Top title for the sorting component
  updatedConfig.label = config.label || TranslationFlagger.flag({
    phrase: 'Sorting',
    context: 'Title for a group of controls that sort results'
  });

  // Optional, when true component does not update globalStorage
  // possibly delegating that to a higher-order/composite component
  updatedConfig.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

  updatedConfig.applyLabel = config.applyLabel || TranslationFlagger.flag({
    phrase: 'Apply',
    context: 'Button label, effectuates changes'
  });

  updatedConfig.verticalKey = config.verticalKey;
  if (!updatedConfig.verticalKey) {
    throw new AnswersBasicError('vertical key is required', 'SortOptions');
  }

  // note: showExpand and showNumberApplied explicitly not included, on the grounds that
  // sorting should always be exposed to the user if added.

  return updatedConfig;
}
