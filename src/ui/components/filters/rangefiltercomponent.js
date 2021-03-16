/** @module RangeFilterComponent */

import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import Component from '../component';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import FilterMetadata from '../../../core/filters/filtermetadata';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';
import StorageKeys from '../../../core/storage/storagekeys';
import { getPersistedRangeFilterContents } from '../../tools/filterutils';
import Matcher from '../../../core/filters/matcher';

const DEFAULT_CONFIG = {
  minPlaceholderText: TranslationFlagger.flag({
    phrase: 'Min',
    context: 'Minimum'
  }),
  maxPlaceholderText: TranslationFlagger.flag({
    phrase: 'Max',
    context: 'Maximum'
  })
};

export default class RangeFilterComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    /**
     * The field to filter on
     * @type {string}
     * @private
     */
    this._field = config.field;

    /**
     * The callback function to call when the filter value changes
     * @type {function}
     * @private
     */
    this._onChange = config.onChange || function () {};

    /**
     * If true, stores the filter to storage on each change
     * @type {boolean}
     * @private
     */
    this._storeOnChange = config.storeOnChange === undefined ? true : config.storeOnChange;

    /**
     * The title to display for the range control
     * @type {string}
     * @private
     */
    this._title = config.title;

    /**
     * The optional label to display for the min input
     * @type {string}
     * @private
     */
    this._minLabel = config.minLabel || null;

    /**
     * The optional label to display for the max input
     * @type {string}
     * @private
     */
    this._maxLabel = config.maxLabel || null;

    this.seedFromPersistedFilter();

    this.core.storage.registerListener({
      storageKey: StorageKeys.HISTORY_POP_STATE,
      eventType: 'update',
      callback: () => {
        this.seedFromPersistedFilter();
        this.setState();
      }
    });
  }

  /**
   * Reseeds the component state from the PERSISTED_FILTER in storage.
   * If there is an active filter, store it in core.
   */
  seedFromPersistedFilter () {
    if (this.core.storage.has(StorageKeys.PERSISTED_FILTER)) {
      const persistedFilter = this.core.storage.get(StorageKeys.PERSISTED_FILTER);
      const persistedFilterContents = getPersistedRangeFilterContents(persistedFilter, this._field);
      const {
        [Matcher.GreaterThanOrEqualTo]: minVal,
        [Matcher.LessThanOrEqualTo]: maxVal
      } = persistedFilterContents;
      this._range = {
        min: minVal,
        max: maxVal
      };
    } else {
      this._range = {
        min: [this._config.initialMin, 0].find(v => v !== undefined),
        max: [this._config.initialMax, 10].find(v => v !== undefined)
      };
    }

    if (this._range.min != null || this._range.max != null) {
      const filterNode = this.getFilterNode();
      this.core.setStaticFilterNodes(this.name, filterNode);
    }
  }

  static get type () {
    return ComponentTypes.RANGE_FILTER;
  }

  static defaultTemplateName () {
    return 'controls/range';
  }

  setState (data) {
    super.setState(Object.assign({}, data, {
      name: this.name,
      title: this._title,
      minLabel: this._minLabel,
      maxLabel: this._maxLabel,
      minValue: this._range.min,
      maxValue: this._range.max
    }));
  }

  onCreate () {
    DOM.delegate(this._container, '.js-yext-range', 'change', event => {
      this._updateRange(event.target.dataset.key, Number.parseInt(event.target.value));
    });
  }

  setMin (value) {
    this._updateRange('min', value);
  }

  setMax (value) {
    this._updateRange('max', value);
  }

  _removeFilterNode () {
    this._range = {
      min: null,
      max: null
    };
    this.setState();
    this._onChange(FilterNodeFactory.from());
    this.core.clearStaticFilterNode(this.name);
    this.core.storage.delete(`${this.name}.min`);
    this.core.storage.delete(`${this.name}.max`);
  }

  /**
   * Returns this component's filter node.
   * This method is exposed so that components like {@link FilterBoxComponent}
   * can access them.
   * @returns {FilterNode}
   */
  getFilterNode () {
    return FilterNodeFactory.from({
      filter: this._buildFilter(),
      metadata: this._buildFilterMetadata(),
      remove: () => this._removeFilterNode()
    });
  }

  /**
   * Update the current range state
   * @param {string} key The range key to update
   * @param {number} value The new value for the key
   */
  _updateRange (key, value) {
    this._range = Object.assign({}, this._range, { [key]: value });
    this.setState();

    const filterNode = this.getFilterNode();
    if (this._storeOnChange) {
      this.core.setStaticFilterNodes(this.name, filterNode);
    }

    this._onChange(filterNode);
  }

  /**
   * Build the filter representation of the current state
   * @returns {Filter}
   */
  _buildFilter () {
    const { min, max } = this._range;
    const falsyMin = !min && min !== 0;
    const falsyMax = !max && max !== 0;
    const _min = falsyMin ? null : parseInt(min);
    const _max = falsyMax ? null : parseInt(max);
    return Filter.range(this._field, _min, _max, false);
  }

  /**
   * Helper method for creating range filter metadata
   * @returns {FilterMetadata}
   */
  _buildFilterMetadata () {
    const { min, max } = this._range;
    const falsyMin = !min && min !== 0;
    const falsyMax = !max && max !== 0;
    if (falsyMin && falsyMax) {
      return new FilterMetadata({
        fieldName: this._title
      });
    }
    // TODO add config option to range filter component for exclusive ranges.
    // Currently can only have inclusive ranges.
    const isExclusive = false;
    let displayValue;
    if (falsyMax) {
      displayValue = isExclusive
        ? `> ${min}`
        : `≥ ${min}`;
    } else if (falsyMin) {
      displayValue = isExclusive
        ? `< ${max}`
        : `≤ ${max}`;
    } else if (min === max) {
      displayValue = isExclusive ? '' : min;
    } else {
      displayValue = isExclusive
        ? `> ${min}, < ${max}`
        : `${min} - ${max}`;
    }
    return new FilterMetadata({
      fieldName: this._title,
      displayValue: displayValue
    });
  }
}
