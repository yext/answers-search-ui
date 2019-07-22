/** @module LocationResultsItemComponent */

import ResultsItemComponent from './resultsitemcomponent';

export default class LocationResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);

    this._templateName = 'results/locationresultsitem';
  }

  static get type () {
    return 'LocationResultsItemComponent';
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
