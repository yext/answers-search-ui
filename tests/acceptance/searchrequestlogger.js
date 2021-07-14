import { VERTICAL_SEARCH_URL_REGEX, UNIVERSAL_SEARCH_URL_REGEX } from './constants';
import { RequestLogger, t } from 'testcafe';
import { registerIE11NoCacheHook } from './utils';

/**
 * Handles search request logger registration and request/response data received during test execution.
 */
class SearchRequestLogger {
  /**
   * Register a RequestLogger that tracks vertical query requests to given test.
   * If browser is IE11, register an Ie11NoCacheHook.
   *
   * @param {import('testcafe').TestController} testInstance
   */
  async registerVerticalSearchLogger (testInstance) {
    this._queryRequestLogger = RequestLogger({
      url: VERTICAL_SEARCH_URL_REGEX
    });
    await testInstance.addRequestHooks(this._queryRequestLogger);
    await registerIE11NoCacheHook(testInstance, VERTICAL_SEARCH_URL_REGEX);
  }

  /**
   * Register a RequestLogger that tracks universal query requests to given test.
   * If browser is IE11, register an Ie11NoCacheHook.
   *
   * @param {import('testcafe').TestController} testInstance
   */
  async registerUniversalSearchLogger (testInstance) {
    this._queryRequestLogger = RequestLogger({
      url: UNIVERSAL_SEARCH_URL_REGEX
    });
    await testInstance.addRequestHooks(this._queryRequestLogger);
    await registerIE11NoCacheHook(testInstance, UNIVERSAL_SEARCH_URL_REGEX);
  }

  /**
   * Wait for results to load on page by checking query response status
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
    this._queryRequestLogger.clear();
  }

  /**
   * Returns true if there exists a query response from logger with status code 200
   * @returns {boolean}
   */
  async isLoggerResultsPresent () {
    return await this._queryRequestLogger.contains(r => r.response.statusCode === 200);
  }
}

export default new SearchRequestLogger();
