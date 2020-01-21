/** @module SortOptionsComponent */

import Component from '../component';
import { AnswersBasicError } from '../../../core/errors/errors';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';

/**
 * Renders configuration options for sorting Vertical Results.
 */
export default class SortOptionsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this._config = assignDefaults(config);

    // config needed in template
    this.defaultSortLabel = this._config.defaultSortLabel;
    this.options = this._config.options;
    this.showReset = this._config.showReset;
    this.showMore = this._config.showMore && (this.options.length > this._config.showMoreLimit);
    this.showMoreLabel = this._config.showMoreLabel;
    this.showLessLabel = this._config.showLessLabel;
    this.label = this._config.label;
    this.resetLabel = this._config.resetLabel;
    this.optionSelector = this._config.optionSelector;

    // Flag for whether all options are shown or if they are hidden behind a show more link
    this.hideExcessOptions = this.showMore;

    // Component has default option checked on init
    const optionIndex = parseInt(this.core.globalStorage.getState(`${this.name}`)) || 0;
    this.currentlySelectedOption = optionIndex;
    this.updateSortBys(optionIndex);
  }

  setState () {
    let options = this.options;
    if (this.hideExcessOptions) {
      options = this.options.slice(0, this._config.showMoreLimit);
    }
    super.setState(Object.assign({}, {
      defaultSortLabel: this.defaultSortLabel,
      options,
      showReset: this.showReset,
      showMore: this.showMore,
      showMoreLabel: this.showMoreLabel,
      showLessLabel: this.showLessLabel,
      label: this.label,
      hideExcessOptions: this.hideExcessOptions,
      resetLabel: this.resetLabel,
      optionSelector: this._config.optionSelector,
      name: this.name
    }));
  }

  updateSortBys (optionIndex) {
    // Change selected option to new optionIndex
    this.options[this.currentlySelectedOption].isSelected = false;
    this.options[optionIndex].isSelected = true;

    // Update selected option in component and persistentStorage
    const option = this.options[optionIndex];
    this.currentlySelectedOption = optionIndex;
    this.core.persistentStorage.set(`${this.name}`, optionIndex);

    // Update sortBys in global storage
    if (optionIndex === 0) {
      this.core.setSortBy(this.name, null);
    } else if (this._config.storeOnChange) {
      this.core.setSortBy(this.name, {
        type: option.type,
        field: option.field,
        direction: option.direction
      });
    }

    // If search on change, search
    if (this._searchOnChange) {
      this._search();
    }

    // Run additional on change function, either from user config or FilterBox
    this._config.onChange(undefined, option);
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
    if (this.showMore) {
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
    if (this.showReset) {
      DOM.on(
        DOM.query(this._container, '.yxt-SortOptions-reset'),
        'click',
        () => this.updateSortBys(0)
      );
    }
  }

  /**
   * Needed by FilterBox, but since this component modifies the sortBys parameter not the filter parameter of
   * a vertical search this return an empty filter.
   */
  getFilter () {
    return {};
  }

  /**
   * Needed by FilterBox, called when resetAll in the FilterBox is clicked.
   */
  clearOptions () {
    this.updateSortBys(0);
    this.setState();
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

function throwConfigError (message) {
  throw new AnswersBasicError(message, 'SortOptions');
}

function assignDefaults (config) {
  const updatedConfig = {};

  // Optional, The label used for the “default” sort (aka the sort specified by the experience config").
  updatedConfig.defaultSortLabel = config.defaultSortLabel || 'Best Match';

  // Array of search options, where an option has type, label, and if is type FIELD also a label and direction
  if (!config.options) {
    throwConfigError('config.options are required');
  }
  const OPTION_TYPES = ['FIELD', 'RELEVANCE', 'ENTITY_DISTANCE', 'RELEVANCE_RANDOM'];
  updatedConfig.options = config.options.map(option => {
    const newOption = { isSelected: false };
    newOption.type = option.type || throwConfigError('option.type is required for option: ' + option);
    const isField = OPTION_TYPES.indexOf(newOption.type) === 0;
    if (isField && option.field && option.direction) {
      newOption.field = option.field;
      newOption.direction = option.direction;
    } else if (isField) {
      throwConfigError('option.field and option.direction are required for option: ' + option);
    }
    if (!option.label) {
      switch (option.type) {
        case 'FIELD':
          newOption.label = 'Field';
          break;
        case 'RELEVANCE':
          newOption.label = 'Relevance';
          break;
        case 'ENTITY_DISTANCE':
          newOption.label = 'Distance';
          break;
        case 'RELEVANCE_RANDOM':
          newOption.label = 'Relevance';
          break;
        default:
          throwConfigError('Invalid option.type', option);
      }
    } else {
      newOption.label = option.label;
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

  // Optional, allow collapsing excess sort options after a limit
  updatedConfig.showMore = config.showMore === undefined ? true : config.showMore;

  // Optional, the max number of filter options to show before collapsing extras
  updatedConfig.showMoreLimit = config.showMoreLimit || 5;

  // Optional, the label to show for displaying more options
  updatedConfig.showMoreLabel = config.showMoreLabel || 'Show more';

  // Optional, the label to show for displaying less options
  updatedConfig.showLessLabel = config.showLessLabel || 'Show less';

  // Optional, the callback function to call when changed
  updatedConfig.onChange = config.onChange || function () {};

  // Optional, Top title for the sorting component
  updatedConfig.label = config.label || 'Sorting';

  // Optional, used to not immediately update globalStorage when this component
  // is part of a FilterBox
  updatedConfig.storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

  // note: showExpand and showNumberApplied explicitly not included, on the grounds that
  // sorting should always be exposed to the user if added.

  return updatedConfig;
}
