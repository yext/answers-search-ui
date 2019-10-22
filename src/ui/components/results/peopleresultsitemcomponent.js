/** @module PeopleResultsItemComponent */

import ResultsItemComponent from './resultsitemcomponent';

export default class PeopleResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);
  }

  static get type () {
    return 'PeopleResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/peopleresultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
