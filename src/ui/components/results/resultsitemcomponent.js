/** @module ResultsItemComponent */

import Component from '../component';

export default class ResultsItemComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this._templateName = 'results/resultsitem';
  }

  static get type () {
    return 'ResultsItemComponent';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
