/** @module ResultsItemComponent */

import Component from '../component';

export default class ResultsItemComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    /**
     * verticalConfigId used for analytics and passed to children
     * @type {string}
     * @private
     */
    this._verticalConfigId = opts.verticalConfigId;

    /**
     * isUniversal is used for analytics and passed to children and is set to
     * true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this._isUniversal = opts.isUniversal || false;
  }

  static get type () {
    return 'ResultsItemComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/resultsitem';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
