/** @module ResultsItemComponent */

import Component from '../component';

export default class ResultsItemComponent extends Component {
  constructor (opts = {}) {
    super(opts);
  }

  static get type () {
    return 'ResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/resultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
