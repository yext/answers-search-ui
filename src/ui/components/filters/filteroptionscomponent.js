import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import Filter from '../../../core/models/filter';
import DOM from '../../dom/dom';

/** @module FilterOptionsComponent */

const controls = {
  'singleoption': {
    inputs: '.js-yext-radio'
  },
  'multioption': {
    inputs: '.js-yext-checkbox'
  }
};

/**
 * Renders a set of options, each one representing a filter in a search.
 */
export default class FilterOptionsComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    if (!opts.control || controls[opts.control] === undefined) {
      throw new AnswersComponentError(
        'FilterOptions requires a valid "control" to be provided',
        'FilterOptions');
    }

    if (!opts.options) {
      throw new AnswersComponentError(
        'FilterOptions component requires options to be provided',
        'FilterOptions');
    }

    this._control = controls[opts.control];
    this._options = opts.options;
    this._templateName = `controls/${opts.control}`;
    this._storeOnChange = opts.storeOnChange || false;
    this._onChange = opts.onChange || function () {};
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
    const elements = DOM.queryAll(this._container, this._control.inputs);

    if (elements.length === 0) {
      throw new AnswersComponentError(
        `Could not initialize FilterOptions. Can not find inputs ${this._control.inputs}`,
        'FilterOptions');
    }

    elements.forEach(e => DOM.on(e, 'change', () => this._applyFilter()));
  }

  /**
   * Clear all options
   */
  clear () {
    const elements = DOM.queryAll(this._container, this._control.inputs);
    elements.forEach(e => e.setAttribute('checked', 'false'));
    this._applyFilter();
  }

  /**
   * Get the current option values and alert the parent of the change, optionally
   * committing to storage.
   * @private
   */
  _applyFilter () {
    const inputs = DOM.queryAll(this._container, this._control.inputs);
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
