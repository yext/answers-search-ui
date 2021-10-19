class WcagReporter {
  /**
   * @param {PageNavigator} pageNavigator
   * @param {AxePuppeteer} analyzer
   */
  constructor (pageNavigator, analyzer) {
    this._pageNavigator = pageNavigator;
    this._analyzer = analyzer;
    this.results = [];
  }

  async analyze () {
    await this._analyzeUniversalPages();
    await this._analyzeVerticalPages();
    return this.results;
  }

  async _analyzeUniversalPages () {
    await this._pageNavigator.goto('universal');
    this.results.push(await this._analyzer.analyze());
    await this._pageNavigator.goto('universal', { query: 'virginia' });
    this.results.push(await this._analyzer.analyze());
  }

  async _analyzeVerticalPages () {
    await this._pageNavigator.goto('facets', { query: 'tom' });
    this.results.push(await this._analyzer.analyze());
    await this._pageNavigator.goto('filterbox', { query: 'sales' });
    this.results.push(await this._analyzer.analyze());
    await this._pageNavigator.click('#js-yext-checkbox-filterbox.filter0-2');
    await this._pageNavigator.click('#js-yext-checkbox-filterbox.filter2-0');
    this.results.push(await this._analyzer.analyze());
    await this._pageNavigator.goto('vertical');
    this.results.push(await this._analyzer.analyze());
    await this._pageNavigator.goto('vertical', { query: 'technology' });
    this.results.push(await this._analyzer.analyze());
  }
}

module.exports = WcagReporter;
