import SearchParams from '../dom/searchparams';

/**
 * Construct a new redirect url with params saved in answers storage.
 * In the case of duplicate params, priorize user-specified params.
 *
 * @param {string} redirectUrl user-specified redirect url
 * @param {SearchParams} params url params saved in answers storage
 * @returns {URL} new redirect url including params from answers storage
 */
export function constructRedirectUrl (redirectUrl, params) {
  const newRedirectUrl = new URL(redirectUrl);
  const redirectUrlParams = new SearchParams(newRedirectUrl.search);
  for (const [key, val] of params.entries()) {
    if (!redirectUrlParams.has(key)) {
      redirectUrlParams.set(key, val);
    }
  }
  newRedirectUrl.search = redirectUrlParams.toString();
  return newRedirectUrl;
}
