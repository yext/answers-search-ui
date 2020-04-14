/** @module RangeFilterComponent */

import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import Component from '../component';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import FilterMetadata from '../../../core/filters/filtermetadata';

const DEFAULT_CONFIG = {
  minPlaceholderText: 'Min',
  maxPlaceholderText: 'Max'
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

    let minVal = this.core.globalStorage.getState(`${this.name}.min`);
    if (typeof minVal === 'string') {
      try {
        minVal = Number.parseInt(minVal);
      } catch (e) {}
    }
    let maxVal = this.core.globalStorage.getState(`${this.name}.max`);
    if (typeof minVal === 'string') {
      try {
        maxVal = Number.parseInt(maxVal);
      } catch (e) {}
    }

    /**
     * The current range represented
     * @type {object}
     * @private
     */
    this._range = {
      min: minVal || config.initialMin || 0,
      max: maxVal || config.initialMax || 10
    };

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

    /**
     * The template to render
     * @type {string}
     * @private
     */
    this._templateName = `controls/range`;
  }

  static get type () {
    return 'RangeFilter';
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
    DOM.delegate(this._container, '.js-yext-range', 'change', (event) => {
      this._updateRange(event.target.dataset.key, Number.parseInt(event.target.value));
    });
  }

  setMin (value) {
    this._updateRange('min', value);
  }

  setMax (value) {
    this._updateRange('max', value);
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
      metadata: this._buildFilterMetadata()
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
      this.core.setFilterNode(this.name, filterNode);
    }
    this.core.persistentStorage.set(`${this.name}.min`, this._range.min);
    this.core.persistentStorage.set(`${this.name}.max`, this._range.max);

    this._onChange(filterNode);
  }

  /**
   * Build the filter representation of the current state
   * @returns {Filter}
   */
  _buildFilter () {
    const { min, max } = this._range;
    const _min = isNaN(min) ? null : min;
    const _max = isNaN(max) ? null : max;
    return Filter.range(this._field, _min, _max, false);
  }

  /**
   * Helper method for creating range filter metadata
   * @returns {FilterMetadata}
   */
  _buildFilterMetadata () {
    const { min, max } = this._range;
    const falsyMin = isNaN(min);
    const falsyMax = isNaN(max);
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
      displayValue = min;
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
