import { LIB_VERSION } from '../constants';

const CLIENT_SDK_HEADER = 'Client-SDK';

/**
 * Merges a given additionalHttpHeaders with the SDK's built in value,
 * and performs run-time validation.
 *
 * @param {Record<string, string>} additionalHttpHeaders
 * @returns {import('@yext/answers-core').AdditionalHttpHeaders}
 */
export function mergeAdditionalHttpHeaders (additionalHttpHeaders = {}) {
  const ignoredHeaders = Object.keys(additionalHttpHeaders).filter(v => v !== CLIENT_SDK_HEADER);
  ignoredHeaders.forEach(h => console.warn(
    `Found unknown HTTP header "${h}", ignoring it. ` +
    `Only the "${CLIENT_SDK_HEADER}" header is recognized in additionalHttpHeaders.`
  ));

  return {
    [CLIENT_SDK_HEADER]: {
      ...additionalHttpHeaders[CLIENT_SDK_HEADER],
      ANSWERS_SEARCH_UI_SDK: LIB_VERSION
    }
  };
}
