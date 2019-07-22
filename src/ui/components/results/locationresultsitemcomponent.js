/** @module LocationResultsItemComponent */

import ResultsItemComponent from './resultsitemcomponent';

export default class LocationResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);
  }

  static get type () {
    return 'LocationResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/locationresultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  getTitle (data) {
    if (data.geomidifier) {
      return `${data.name} ${data.geomidifier}`;
    }

    return data.name;
  }

  setState (data) {
    return super.setState(Object.assign({}, data, {
      modifier: data.type,
      title: this.getTitle(data)
    }));
  }
}
