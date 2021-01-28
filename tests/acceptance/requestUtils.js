import { t } from 'testcafe';

/**
 * Gets the query params from the url of the most recent request
 * for the given logger.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @returns {URLSearchParams} the query params of the last request
 */
function getMostRecentQueryParamsFromLogger (logger) {
  await waitForFirstRequest(logger);
  const url = logger.requests[logger.requests.length - 1].request.url;
  return new URLSearchParams(url);
}

async function waitForFirstRequest(logger) {
  for (let i = 0; i < 50; i++) {
    await t.wait(100);
    if (logger.requests.length > 0 ) {
      return;  
    }
  }
  throw new Error('No requests found for logger');
}

/**
 * Tests whether the last request for the given logger has the expected
 * filters query params.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @param {Object} expectedFilters the expected filters object
 */
export async function expectRequestFiltersToEql (logger, expectedFilters) {
  const urlParams = getMostRecentQueryParamsFromLogger(logger);
  const filtersParam = urlParams.get('filters');
  const expectedValue = typeof expectedFilters === 'object'
    ? JSON.stringify(expectedFilters)
    : expectedFilters;
  return t.expect(filtersParam).eql(expectedValue);
}

/**
 * Tests whether the last request for the given logger has the expected
 * filters query params.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @param {number} expectedLocationRadius the expected location radius e.g. 123.45
 */
export async function expectRequestLocationRadiusToEql (logger, expectedLocationRadius) {
  const urlParams = getMostRecentQueryParamsFromLogger(logger);
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
  const urlParams = getMostRecentQueryParamsFromLogger(logger);
  return t.expect(urlParams.has(paramName)).notOk;
}
