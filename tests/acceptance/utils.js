import { ClientFunction, t } from 'testcafe';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  return t.wait(2500);
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  return t.wait(2500);
}

/**
 * Gets the query params from the url of the most recent request
 * for the given logger.
 *
 * @param {import('testcafe').RequestLogger} logger
 * @returns {Object} the query params of the last request
 */
export function getMostRecentQueryParamsFromLogger (logger) {
  const url = logger.requests[logger.requests.length - 1].request.url;
  const params = new URLSearchParams(url);
  return Object.fromEntries(params.entries());
}
