/** @module LocationResultsItemComponent */

import ResultsItemComponent from './resultsitemcomponent';

export default class LocationResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}, systemConfig = {}) {
    super(opts, systemConfig);
  }

  static get type () {
    return 'LocationResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/locationresultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
