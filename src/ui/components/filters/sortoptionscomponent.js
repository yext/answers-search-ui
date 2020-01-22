/** @module SortOptionsComponent */

import Component from '../component';
import { AnswersBasicError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';

/**
 * Renders configuration options for sorting Vertical Results.
 * TODO: how to deal with multiple instances of this component (and filters in general),
 * ideally "identical" filters/sorts would be synced up.
 */
export default class SortOptionsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(assignDefaults(config), systemConfig);

    this.options = this._config.options;

    // Flag for whether all options are shown or if they are hidden behind a show more link
    this.hideExcessOptions = this._config.showMore;

    // Component has default option checked on init
    this.selectedOptionIndex = parseInt(this.core.globalStorage.getState(this.name)) || 0;
    this.updateSortBys(this.selectedOptionIndex);
  }

  setState (data) {
    let options = this.options;
    if (this.hideExcessOptions) {
      options = this.options.slice(0, this._config.showMoreLimit);
    }
    super.setState(Object.assign({}, data, {
      options,
      hideExcessOptions: this.hideExcessOptions,
      name: this.name
    }));
  }

  updateSortBys (optionIndex) {
    // Change selected option to new optionIndex
    this.options[this.selectedOptionIndex].isSelected = false;
    this.options[optionIndex].isSelected = true;

    // Update selected option in component and persistentStorage
    const option = this.options[optionIndex];
    this.selectedOptionIndex = optionIndex;
    this.core.persistentStorage.set(this.name, optionIndex);

    // Update sortBys in global storage
    if (this._config.storeOnChange && optionIndex === 0) {
      this.core.clearSortBys();
    } else if (this._config.storeOnChange) {
      this.core.setSortBys(option);
    }

    // Run additional on change function
    this._config.onChange(option);

    // If search on change, search
    if (this._config._searchOnChange) {
      this._search();
    }

    this.setState();
  }

  onMount () {
    // Handle radio button selections
    DOM.on(
      DOM.query(this._container, '.yxt-SortOptions-fieldSet'),
      'change',
      evt => this.updateSortBys(parseInt(evt.target.value))
    );

    // Register more/less button
    if (this._config.showMore) {
      DOM.on(
        DOM.query(this._container, '.yxt-SortOptions-showToggle'),
        'click',
        () => {
          this.hideExcessOptions = !this.hideExcessOptions;
          this.setState();
        }
      );
    }

    // Register show reset button
    if (this._config.showReset) {
      DOM.on(
        DOM.query(this._container, '.yxt-SortOptions-reset'),
        'click',
        () => this.updateSortBys(0)
      );
    }
  }

  /**
   * Trigger a search with all filters in storage
   * TODO(oshi): move global storage logic to core for all calls to core.verticalSearch.
   */
  _search () {
    const allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
    const totalFilter = allFilters.length > 1
      ? Filter.and(...allFilters)
      : allFilters[0];

    const query = this.core.globalStorage.getState(StorageKeys.QUERY);
    const facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
    this.core.verticalSearch(this._verticalKey, {
      input: query,
      filter: JSON.stringify(totalFilter),
      facetFilter: JSON.stringify(facetFilter)
    });
  }

  static get type () {
    return 'SortOptions';
  }

  static defaultTemplateName () {
    return 'controls/sortoptions';
  }
}

function assignDefaults (config) {
  const updatedConfig = Object.assign({}, config);

  // Optional, The label used for the “default” sort (aka the sort specified by the experience config").
  updatedConfig.defaultSortLabel = config.defaultSortLabel || 'Best Match';

  // Array of search options, where an option has type, label, and if is type FIELD also a label and direction
  if (!config.options) {
    throw new AnswersBasicError('config.options are required', 'SortOptions');
  }
  const OPTION_TYPES = ['FIELD', 'RELEVANCE', 'ENTITY_DISTANCE'];
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
    isSelected: true
  });

  // Optional, the selector used for options in the template
  updatedConfig.optionSelector = config.optionSelector || 'yxt-SortOptions-optionSelector';

  // Optional, if true, triggers a search on each change to a filter, default false
  updatedConfig.searchOnChange = config.searchOnChange || false;

  // Optional, show a reset button. Clicking it will always return the user to the default sorting option.
  updatedConfig.showReset = config.showReset || false;

  // Optional, the label to use for the reset button
  updatedConfig.resetLabel = config.resetLabel || 'reset';

  // Optional, the max number of filter options to show before collapsing extras
  updatedConfig.showMoreLimit = config.showMoreLimit || 5;

  // Optional, allow collapsing excess sort options after a limit
  updatedConfig.showMore = config.showMore === undefined ? true : config.showMore;
  updatedConfig.showMore = updatedConfig.showMore && (updatedConfig.options.length > updatedConfig.showMoreLimit);

  // Optional, the label to show for displaying more options
  updatedConfig.showMoreLabel = config.showMoreLabel || 'Show more';

  // Optional, the label to show for displaying less options
  updatedConfig.showLessLabel = config.showLessLabel || 'Show less';

  // Optional, the callback function to call when changed
  updatedConfig.onChange = config.onChange || function () {};

  // Optional, Top title for the sorting component
  updatedConfig.label = config.label || 'Sorting';

  // Optional, when true component does not update globalStorage
  // possibly delegating that to a higher-order/composite component
  updatedConfig.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

  // note: showExpand and showNumberApplied explicitly not included, on the grounds that
  // sorting should always be exposed to the user if added.

  return updatedConfig;
}
