/** @module Result */

export default class Result {
  constructor (data = {}, index) {
    this._raw = data;
    // data.htmlTitle is from GSCE, but we want to strip html from it
    // before displaying, by default.
    this.title = data.name || data.htmlTitle.replace(/(<([^>]+)>)/ig, '') || null;
    // data.htmlSnippet is from GSCE
    this.details = data.description || data.htmlSnippet || null;
    // data.link is from GCSE;
    this.link = data.website || data.link || null;
    this.ordinal = index + 1 || null;
  }

  /**
   * resultsData expected format: { data: { ... }, highlightedFields: { ... }}
   */
  static from (resultsData) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.

      // Check for new data format, otherwise fallback to legacy
      results.push(new Result(resultsData[i].data || resultsData[i], i));
    }

    return results;
  }
}
