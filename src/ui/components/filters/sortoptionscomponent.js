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
    this.showMore = this._config.showMore;
    this.showMoreLabel = this._config.showMoreLabel;
    this.showLessLabel = this._config.showLessLabel;
    this.label = this._config.label;
    this.resetLabel = this._config.resetLabel;
    this.optionSelector = this._config.optionSelector;

    // Flag for whether all options are shown or if they are hidden behind a show more link
    this.allShown = false;

    // Component has default option checked on init
    this.currentlySelectedOption = -1;
  }

  setState () {
    let options = this.options;
    if (this.showMore && !this.allShown) {
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
      allShown: this.allShown,
      resetLabel: this.resetLabel,
      optionSelector: this._config.optionSelector
    }));
    this.updateSelectedOption();
  }

  updateSortBys (sortBys) {
    if (this._searchOnChange) {
      this._search();
    }
    this.core.setSortBys(sortBys);
  }

  updateSelectedOption () {
    const el = DOM.query(this._container, '#yxt-SortOptions-option_' + this.currentlySelectedOption);
    if (el) {
      el.checked = true;
    }
  }

  onMount () {
    // Handle radio button selections
    DOM.on(
      DOM.query(this._container, '#yxt-SortOptions-fieldSet'),
      'change',
      evt => {
        const index = parseInt(evt.target.value);
        if (index !== -1) {
          const option = this.options[index];
          this.updateSortBys([{
            type: option.type,
            field: option.field,
            direction: option.direction
          }]);
          this.currentlySelectedOption = index;
          this.setState();
        }
      }
    );

    // show more/less button
    if (this.showMore) {
      DOM.on(
        DOM.query(this._container, '.yxt-SortOptions-showToggle'),
        'click',
        () => {
          this.allShown = !this.allShown;
          this.setState();
        }
      );
    }

    if (this.showReset) {
      DOM.on(
        DOM.query(this._container, '.yxt-SortOptions-showReset'),
        'click',
        () => {
          this.updateSortBys([]);
          this.currentlySelectedOption = -1;
          this.setState();
        }
      );
    }

    this.updateSelectedOption();
  }

  /**
   * Trigger a search with all filters in storage
   * TODO(oshi): refactor all calls to core.verticalSearch to move global storage logic to core.
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

  // Optional, The label used for the “default” sort (aka sort the order provided by the config).
  updatedConfig.defaultSortLabel = config.defaultSortLabel || 'Best Match';

  // Array of search options, where an option has type, label, and if is type FIELD also a label and direction
  updatedConfig.options = config.options || throwConfigError('Options are required in config');
  const OPTION_TYPES = ['RELEVANCE', 'ENTITY_DISTANCE', 'RELEVANCE_RANDOM'];
  for (let i = 0; i < updatedConfig.options.length; i++) {
    const option = updatedConfig.options[i];
    option.type = option.type || throwConfigError('option.type is required for option: ' + option);
    const isField = OPTION_TYPES.indexOf(option.type) === -1;
    if (isField && !option.field) {
      throwConfigError('option.field is required for option: ' + option);
    } else if (isField && !option.direction) {
      throwConfigError('option.direction is required for option: ' + option + ', valid values are "ASC" or "DESC"');
    }
    option.label = option.label || (isField ? 'FIELD' : option.type);
  }

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

  return updatedConfig;
}
