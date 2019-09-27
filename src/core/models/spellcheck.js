/** @module SpellCheck */

import HighlightedValue from './highlightedvalue';

/**
 * SpellCheck is the core state model
 * to power the SpellCheck component
 */
export default class SpellCheck {
  constructor (data) {
    /**
     * The original query
     * @type {string}
     */
    this.query = data.query || null;

    /**
     * The corrected query
     * @type {string}
     */
    this.correctedQuery = data.correctedQuery || null;

    /**
     * The corrected query with highlighted tags
     * @type {string}
     */
    this.correctedQueryDisplay = data.correctedQueryDisplay || null;

    /**
     * The spell check type
     * @type {string}
     */
    this.type = data.type || null;

    /**
     * Should show spell check or not
     * @type {boolean}
     */
    this.shouldShow = this.correctedQuery !== null;

    /**
     * The redirect url for the corrected query
     * @type {string}
     */
    this.correctedQueryUrl = this._buildRedirectQueryUrl(data.params, this.correctedQuery, this.type);

    /**
     * The help text such as Did you mean
     * @type {string}
     */
    this.helpText = this._getHelpText(this.type);
  }

  /**
   * Create a spell check model from the provided data
   * @param {Object} response The spell check response
   */
  static from (response, params) {
    if (!response) {
      return {};
    }

    return new SpellCheck({
      query: response.originalQuery,
      correctedQuery: response.correctedQuery,
      correctedQueryDisplay: new HighlightedValue(response.correctedQuery).get(),
      type: response.type,
      params: params
    });
  }

  _buildRedirectQueryUrl (params, query, type) {
    if (query === null) {
      return '';
    }
    params['query'] = query.value;
    params['skipSpellCheck'] = true;
    params['queryTrigger'] = type.toLowerCase();

    let url = '?';
    for (let key in params) {
      if (url.length > 1) {
        url += '&';
      }
      url += key + '=' + encodeURIComponent(params[key]);
    }
    return url;
  }

  _getHelpText (type) {
    switch (type) {
      case 'SUGGEST':
        return 'Did you mean:';
      default:
        return '';
    }
  }
}
