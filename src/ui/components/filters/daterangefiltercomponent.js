/** @module DateFilterComponent */

import Component from '../component';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import FilterMetadata from '../../../core/filters/filtermetadata';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

/**
 * A filter for a range of dates
 */
export default class DateRangeFilterComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * The api field this filter controls
     * @type {string}
     * @private
     */
    this._field = config.field;

    /**
     * The title to display for the date range
     * @type {string}
     * @private
     */
    this._title = config.title;

    /**
     * The optional label to show for the min date input
     * @type {string}
     * @private
     */
    this._minLabel = config.minLabel || null;

    /**
     * The optional label to show for the max date input
     * @type {string}
     * @private
     */
    this._maxLabel = config.maxLabel || null;

    /**
     * The callback used when a date is changed
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
     * If true, this filter represents an exclusive range, rather than an inclusive one
     * @type {boolean}
     * @private
     */
    this._isExclusive = config.isExclusive;

    const today = new Date();
    const todayString = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, '0')}-${`${today.getDate()}`.padStart(2, '0')}`;
    const minDate = this.core.globalStorage.getState(`${this.name}.min`);
    const maxDate = this.core.globalStorage.getState(`${this.name}.max`);

    /**
     * The current date range
     * @private
     */
    this._date = {
      min: minDate || config.initialMin || todayString,
      max: maxDate || config.initialMax || todayString
    };
  }

  static defaultTemplateName () {
    return 'controls/date';
  }

  static get type () {
    return ComponentTypes.DATE_RANGE_FILTER;
  }

  setState (data) {
    super.setState(Object.assign({}, data, {
      name: this.name,
      title: this._title,
      minLabel: this._minLabel,
      maxLabel: this._maxLabel,
      dateMin: this._date.min,
      dateMax: this._date.max
    }));
  }

  onCreate () {
    DOM.delegate(this._container, '.js-yext-date', 'change', (event) => {
      this._updateRange(event.target.dataset.key, event.target.value);
    });
  }

  /**
   * Set the min date to the one provided
   * @param {string} date Date to set in yyyy-mm-dd string format
   */
  setMin (date) {
    this._updateRange('min', date);
  }

  /**
   * Set the max date to the one provided
   * @param {string} date Date to set in yyyy-mm-dd string format
   */
  setMax (date) {
    this._updateRange('max', date);
  }

  _removeFilterNode () {
    this._date = {
      min: null,
      max: null
    };
    this.setState();
    this._onChange(FilterNodeFactory.from());
    this.core.clearStaticFilterNode(this.name);
    this.core.persistentStorage.delete(`${this.name}.min`);
    this.core.persistentStorage.delete(`${this.name}.max`);
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
   * Updates the current state of the date range
   * @param {string} key The key for the date value
   * @param {string} value The string date value
   * @private
   */
  _updateRange (key, value) {
    this._date = Object.assign({}, this._date, { [key]: value });
    this.setState();

    const filterNode = this.getFilterNode();
    if (this._storeOnChange) {
      this.core.setStaticFilterNodes(this.name, filterNode);
    }
    this.core.persistentStorage.set(`${this.name}.min`, this._date.min);
    this.core.persistentStorage.set(`${this.name}.max`, this._date.max);

    this._onChange(filterNode);
  }

  /**
   * Construct an api filter with the current date state
   * @private
   */
  _buildFilter () {
    return Filter.range(this._field, this._date.min, this._date.max, this._isExclusive);
  }

  /**
   * Helper method for creating a date range filter metadata
   * @returns {FilterMetadata}
   */
  _buildFilterMetadata () {
    const { min, max } = this._date;

    if (!min && !max) {
      return new FilterMetadata({
        fieldName: this._title
      });
    }
    let displayValue;
    if (!max) {
      displayValue = this._isExclusive
        ? TranslationFlagger.flag({
          phrase: 'After [[date]]',
          context: 'After a date. Example: After [August 15th]',
          interpolationValues: {
            date: min
          }
        })
        : TranslationFlagger.flag({
          phrase: '[[date]] or later',
          context: 'Beginning at a date (with no end date). Example: [August 15th] or later',
          interpolationValues: {
            date: min
          }
        });
    } else if (!min) {
      displayValue = this._isExclusive
        ? TranslationFlagger.flag({
          phrase: 'Before [[date]]',
          context: 'Before a date. Example: Before [August 15th]',
          interpolationValues: {
            date: max
          }
        })
        : TranslationFlagger.flag({
          phrase: '[[date]] and earlier',
          context: 'Ending at a date with (no start date). Example: [August 15th] or earlier',
          interpolationValues: {
            date: max
          }
        });
    } else if (min === max) {
      displayValue = this._isExclusive ? '' : min;
    } else {
      displayValue = TranslationFlagger.flag({
        phrase: '[[start]] - [[end]]',
        context: 'Start date to end date. Example: [August 15th] - [August 16th]',
        interpolationValues: {
          start: min,
          end: max
        }
      });
    }
    return new FilterMetadata({
      fieldName: this._title,
      displayValue: displayValue
    });
  }
}
