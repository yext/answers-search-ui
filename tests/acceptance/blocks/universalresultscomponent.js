import { Selector, RequestLogger, t } from 'testcafe';
import VerticalResultsComponentBlock from './verticalresultscomponent';
import { registerIE11NoCacheHook } from '../utils';
/**
 * This class models interactions with the {@link UniversalResultsComponent}.
 */
export default class UniversalResultsComponentBlock {
  constructor () {
    this._searchComplete = Selector('.yxt-Results--searchComplete');
    this._searchQueryUrl = /v2\/accounts\/me\/answers\/query/;
  }

  /**
     * Returns the {@link VerticalResultsComponentBlock}s associated
     * with each vertical section. These are wrapped in a {@link Promise}.
     *
     * @returns {Promise} A {@link Promise} containing the various
     *                    {@link VerticalResultsComponentBlock}s.
     */
  async getSections () {
    const selector = Selector('.yxt-Results');
    const sectionCount = await selector.count;

    const sections = [];
    for (let i = 0; i < sectionCount; i++) {
      sections.push(new VerticalResultsComponentBlock(selector.nth(i)));
    }

    return sections;
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
  isLoggerResultsPresent () {
    return this._queryRequestLogger.contains(r => r.response.statusCode === 200);
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
