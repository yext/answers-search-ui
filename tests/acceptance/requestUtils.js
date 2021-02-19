import { t } from 'testcafe';

/**
 * Gets the query params from the url of the most recent request
 * for the given logger.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @returns {Promise<URLSearchParams>} the query params of the last request
 */
export async function getMostRecentQueryParamsFromLogger (logger) {
  await t.expect(logger.contains(record => record.response.statusCode === 200)).ok();
  const url = logger.requests[logger.requests.length - 1].request.url;
  return new URLSearchParams(url);
}

/**
 * Returns the filters param from the last request.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @returns {Object} the filters param
 */
export async function getRequestFilters (logger) {
  const urlParams = await getMostRecentQueryParamsFromLogger(logger);
  return JSON.parse(urlParams.get('filters'));
}

/**
 * Tests whether the last request for the given logger has the expected
 * filters query params.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @param {number} expectedLocationRadius the expected location radius e.g. 123.45
 */
export async function expectRequestLocationRadiusToEql (logger, expectedLocationRadius) {
  const urlParams = await getMostRecentQueryParamsFromLogger(logger);
  const actualLocationRadius = urlParams.get('locationRadius');
  return t.expect(actualLocationRadius).eql(expectedLocationRadius.toString());
}

/**
 * Tests whether the last request for the given logger does not contain the given param
 *
 * @param {import('testcafe').RequestLogger} logger
 * @param {string} paramName the expected location radius e.g. 123.45
 */
export async function expectRequestDoesNotContainParam (logger, paramName) {
  const urlParams = await getMostRecentQueryParamsFromLogger(logger);
  return t.expect(urlParams.has(paramName)).notOk();
}
