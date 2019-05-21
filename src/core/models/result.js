export default class Result {
  constructor(data = {}) {
    Object.assign(this, data);
  }

  /**
   * resultsData expected format: { data: { ... }, highlightedFields: { ... }}
   */
  static from(resultsData) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.

      // Check for new data format, otherwise fallback to legacy
      results.push(new Result(resultsData[i].data || resultsData[i]));
    }

    return results;
  }
}
