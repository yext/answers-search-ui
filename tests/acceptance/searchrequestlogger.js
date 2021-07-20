import { VERTICAL_SEARCH_URL_REGEX, UNIVERSAL_SEARCH_URL_REGEX } from './constants';
import { RequestLogger } from 'testcafe';

/**
 * Handles request logger creation and request/response data received during test execution.
 */
class SearchRequestLogger {
  /**
   * Create a RequestLogger that tracks vertical query requests to given test.
   *
   * @returns {import('testcafe').RequestLogger}
   */
  createVerticalSearchLogger () {
    this._queryRequestLogger = RequestLogger({
      url: VERTICAL_SEARCH_URL_REGEX
    });
    return this._queryRequestLogger;
  }

  /**
   * Create a RequestLogger that tracks universal query requests to given test.
   *
   * @returns {import('testcafe').RequestLogger}
   */
  createUniversalSearchLogger () {
    this._queryRequestLogger = RequestLogger({
      url: UNIVERSAL_SEARCH_URL_REGEX
    });
    return this._queryRequestLogger;
  }

  /**
   * Wait for results to load on page by checking query response status
   * (timeout is set to 10 seconds)
   *
   * @param {import('testcafe').TestController} testInstance
   * @returns {Promise<boolean>} true if a successful query response is present
   */
  async waitOnSearchComplete (testInstance) {
    const responseWaitTimeout = 10000;
    const waitTimeInterval = 200;
    let totalWaitTime = 0;
    while (totalWaitTime < responseWaitTimeout && !await this.isLoggerResultsPresent()) {
      await testInstance.wait(waitTimeInterval);
      totalWaitTime += waitTimeInterval;
    }
    const isResultsPresent = await this.isLoggerResultsPresent();
    this._queryRequestLogger.clear();
    return isResultsPresent;
  }

  /**
   * Returns true if there exists a query response from logger with status code 200
   * @returns {Promise<boolean>}
   */
  async isLoggerResultsPresent () {
    return await this._queryRequestLogger.contains(r => r.response.statusCode === 200);
  }
}

export default new SearchRequestLogger();
