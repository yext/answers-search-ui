/** @module EventResultsItemComponent */

import ResultsItemComponent from './resultsitemcomponent';

export default class EventResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);
  }

  static get type () {
    return 'EventResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/eventresultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
