/** @module RangeFilterComponent */

import Component from '../component';
import BasicFilterView from '../../../core/models/basicfilterview';
import Filter from '../../../core/models/filter';
import FilterMetadata from '../../../core/models/filtermetadata';
import DOM from '../../dom/dom';

export default class RangeFilterComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

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
      } catch (e) {
        minVal = null;
        console.error(e);
      }
    }
    let maxVal = this.core.globalStorage.getState(`${this.name}.max`);
    if (typeof maxVal === 'string') {
      try {
        maxVal = Number.parseInt(maxVal);
      } catch (e) {
        maxVal = null;
        console.error(e);
      }
    }

    /**
     * The current range represented.
     * A null value means the the value should be unset.
     * @type {object}
     * @private
     */
    this._range = {};
    for (const value of [minVal, config.initialMin, 0]) {
      if (value || value === null) {
        this._range.min = value;
        break;
      }
    }
    for (const value of [maxVal, config.initialMax, 10]) {
      if (value || value === null) {
        this._range.max = value;
        break;
      }
    }

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

    this.core.setFilterView(this.name, this._buildFilterView());
  }

  setMin (value) {
    this._updateRange('min', value);
  }

  setMax (value) {
    this._updateRange('max', value);
  }

  getFilterView () {
    return this._buildFilterView();
  }

  /**
   * Update the current range state
   * @param {string} key The range key to update
   * @param {number} value The new value for the key
   */
  _updateRange (key, value) {
    this._range = Object.assign({}, this._range, { [key]: value });
    this.setState();

    const filterView = this._buildFilterView();
    if (this._storeOnChange) {
      this.core.setFilterView(this.name, filterView);
    }
    this.core.persistentStorage.set(`${this.name}.min`, this._range.min);
    this.core.persistentStorage.set(`${this.name}.max`, this._range.max);

    this._onChange(filterView);
  }

  /**
   * Build the filter representation of the current state
   * @returns {BasicFilterView}
   */
  _buildFilterView () {
    const { min, max } = this._range;
    const metadata = FilterMetadata.range(min, max, true, {
      fieldName: this._title
    });
    const filter = Filter.range(this._field, min, max, true);
    return new BasicFilterView(filter, metadata);
  }
}
