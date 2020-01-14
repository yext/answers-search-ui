/** @module RangeFilterComponent */

import Component from '../component';
import Filter from '../../../core/models/filter';
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
    this._storeOnChange = config.storeOnChange || true;

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

  getFilter () {
    return this._buildFilter();
  }

  /**
   * Update the current range state
   * @param {string} key The range key to update
   * @param {number} value The new value for the key
   */
  _updateRange (key, value) {
    this._range = Object.assign({}, this._range, { [key]: value });
    this.setState();

    const filter = this._buildFilter();
    if (this._storeOnChange) {
      this.core.setFilter(this.name, filter);
    }
    this.core.persistentStorage.set(`${this.name}.min`, this._range.min);
    this.core.persistentStorage.set(`${this.name}.max`, this._range.max);

    this._onChange(filter);
  }

  /**
   * Build the filter representation of the current state
   * @returns {Filter}
   */
  _buildFilter () {
    return Filter.inclusiveRange(this._field, this._range.min, this._range.max);
  }
}
