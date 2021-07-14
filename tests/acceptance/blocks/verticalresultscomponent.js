import { Selector, RequestLogger, t } from 'testcafe';
import { registerIE11NoCacheHook } from '../utils';

/**
 * Models the user interaction with a {@link VerticalResultsComponent}.
 */
export default class VerticalResultsComponentBlock {
  /**
     * Creates a new instance of {@link VerticalResultsComponentBlock},
     * based on the provided {@link Selector}.
     *
     * @param {Selector} selector The {@link Selector} corresponding to
     *                            this new instance. If one is not provided,
     *                            a default is used.
     */
  constructor (selector = Selector('.yxt-Results')) {
    this._selector = selector;
    this._searchComplete = Selector('.yxt-Results--searchComplete');
    this._searchQueryUrl = /v2\/accounts\/me\/answers\/vertical\/query/;
  }

  /**
     * Returns the title of this vertical results section, wrapped in a
     * {@link Promise}.
     *
     * @returns {Promise} Title of the {@link VerticalResultsComponentBlock},
     *                    wrapped in a {@link Promise}.
     */
  async getTitle () {
    const title = await this._selector.find('.yxt-Results-title').innerText;
    return title;
  }

  async getResultsCountTotal () {
    const resultsCountTotal = Selector('.yxt-ResultsHeader-resultsCountTotal');
    const countText = await resultsCountTotal.innerText;
    return Number.parseInt(countText);
  }

  getSearchQueryUrl () {
    return this._searchQueryUrl;
  }

  /**
   * Wait for results to load on page by checking query response status and searchComplete state
   * (timeout is set to 10 seconds)
   */
  async waitOnSearchComplete () {
    const responseWaitTimeout = 10000;
    const waitTimeInterval = 200;
    let totalWaitTime = 0;
    while (totalWaitTime < responseWaitTimeout && !this.isLoggerResultsPresent()) {
      await t.wait(waitTimeInterval);
      totalWaitTime += waitTimeInterval;
    }
    await t.expect(this._searchComplete.exists).ok();
    this._queryRequestLogger.clear();
  }

  /**
   * Returns true if there exists a query response from logger with status code 200
   * @returns {boolean}
   */
  async isLoggerResultsPresent () {
    return await this._queryRequestLogger.contains(r => r.response.statusCode === 200);
  }

  /**
   * Register a RequestLogger that tracks vertical query requests to given test.
   * If browser is IE11, register an Ie11NoCacheHook.
   *
   * @param {import('testcafe').TestController} testInstance
   */
  async registerLogger (testInstance) {
    this._queryRequestLogger = RequestLogger({
      url: this._searchQueryUrl
    });
    await testInstance.addRequestHooks(this._queryRequestLogger);
    await registerIE11NoCacheHook(testInstance, this._searchQueryUrl);
  }
}
