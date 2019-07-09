/** @module FilterOptionsComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';

const SUPPORTED_CONTROLS = [
  'singleoption',
  'multioption'
];

/**
 * Renders a set of options, each one representing a filter in a search.
 */
export default class FilterOptionsComponent extends Component {
  constructor (config = {}) {
    super(config);

    if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
      throw new AnswersComponentError(
        'FilterOptions requires a valid "control" to be provided',
        'FilterOptions');
    }

    if (!config.options) {
      throw new AnswersComponentError(
        'FilterOptions component requires options to be provided',
        'FilterOptions');
    }

    /**
     * The list of filter options to display
     * @type {object[]}
     * @private
     */
    this._options = config.options;

    /**
     * The selector used for options in the template
     * @type {string}
     * @private
     */
    this._optionSelector = config.optionSelector || '.js-yext-filter-option';

    /**
     * If true, stores the filter to storage on each change
     * @type {boolean}
     * @private
     */
    this._storeOnChange = config.storeOnChange || false;

    /**
     * The callback function to call when changed
     * @type {function}
     * @private
     */
    this._onChange = config.onChange || function () {};

    /**
     * The template to render, based on the control
     * @type {string}
     * @private
     */
    this._templateName = `controls/${config.control}`;
  }

  static get type () {
    return 'FilterOptions';
  }

  setState (data) {
    super.setState(Object.assign(data, {
      name: this.name,
      options: this._options
    }));
  }

  onMount () {
    const elements = DOM.queryAll(this._container, this._optionSelector);

    if (elements.length === 0) {
      throw new AnswersComponentError(
        `Could not initialize FilterOptions. Can not find inputs ${this._optionSelector}`,
        'FilterOptions');
    }

    elements.forEach(e => DOM.on(e, 'change', () => this._applyFilter()));
  }

  /**
   * Clear all options
   */
  clear () {
    const elements = DOM.queryAll(this._container, this._optionSelector);
    elements.forEach(e => e.setAttribute('checked', 'false'));
    this._applyFilter();
  }

  /**
   * Get the current option values and alert the parent of the change, optionally
   * committing to storage.
   * @private
   */
  _applyFilter () {
    const inputs = DOM.queryAll(this._container, this._optionSelector);
    const filters = [];
    inputs.forEach(i => {
      if (i.checked) {
        filters.push(Filter.equal(i.dataset.field, i.value));
      }
    });

    const totalFilter = filters.length > 0 ? Filter.group(...filters) : null;

    if (this._storeOnChange) {
      this.core.setFilter(this.name, totalFilter);
    }

    this._onChange(totalFilter);
  }
}
