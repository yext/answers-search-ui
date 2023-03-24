import { LIB_VERSION } from '../constants';

const CLIENT_SDK_HEADER = 'Client-SDK';

const SEARCH_UI_HEADER_KEY = 'ANSWERS_SEARCH_UI_SDK';
const CORE_HEADER_KEY = 'ANSWERS_CORE';

const DEFAULT_CLIENT_SDK_VALUES = {
  [SEARCH_UI_HEADER_KEY]: LIB_VERSION
};

/**
 * Merges a given additionalHttpHeaders with the SDK's built in value,
 * and performs run-time validation.
 *
 * @param {Record<string, string>} additionalHttpHeaders
 * @returns {import('@yext/search-core').AdditionalHttpHeaders}
 */
export function mergeAdditionalHttpHeaders (additionalHttpHeaders = {}) {
  if (!validateAdditionalHeadersIsObj(additionalHttpHeaders)) {
    return {
      [CLIENT_SDK_HEADER]: DEFAULT_CLIENT_SDK_VALUES
    };
  }

  validateAdditionalHttpHeaders(additionalHttpHeaders);
  const clientSdkValues = additionalHttpHeaders[CLIENT_SDK_HEADER] || {};
  validateClientSdkValues(clientSdkValues);
  const {
    [CORE_HEADER_KEY]: _ignoredCoreValues,
    [SEARCH_UI_HEADER_KEY]: _ignoredSeachUiValues,
    ...additionalClientSDKHeaderValues
  } = clientSdkValues;

  return {
    [CLIENT_SDK_HEADER]: {
      ...additionalClientSDKHeaderValues,
      ...DEFAULT_CLIENT_SDK_VALUES
    }
  };
}

function validateAdditionalHeadersIsObj (additionalHttpHeaders) {
  if (typeof additionalHttpHeaders !== 'object') {
    console.error(
      'additionalHttpHeaders must be an "object", ' +
      `not a(n) "${typeof additionalHttpHeaders}".`);
    return false;
  }
  return true;
}

function validateAdditionalHttpHeaders (additionalHttpHeaders = {}) {
  const ignoredHeaders = Object.keys(additionalHttpHeaders).filter(v => v !== CLIENT_SDK_HEADER);
  ignoredHeaders.forEach(h => console.error(
    `Ignored unknown HTTP header "${h}". ` +
    `Only the "${CLIENT_SDK_HEADER}" header is recognized in additionalHttpHeaders.`
  ));
}

function validateClientSdkValues (clientSdkValues = {}) {
  const errorMsg = key =>
    `Ignoring "${key}" values for ${CLIENT_SDK_HEADER}. These values are automatically specified.`;
  if (CORE_HEADER_KEY in clientSdkValues) {
    console.error(errorMsg(CORE_HEADER_KEY));
  }
  if (SEARCH_UI_HEADER_KEY in clientSdkValues) {
    console.error(errorMsg(SEARCH_UI_HEADER_KEY));
  }
}
