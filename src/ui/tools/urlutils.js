import SearchParams from '../dom/searchparams';

/**
 * Construct a new redirect url with params saved in answers storage.
 * In the case of duplicate params, priorize user-specified params.
 *
 * @param {string} redirectUrl user-specified redirect url
 * @param {SearchParams} params url params saved in answers storage
 * @returns {string} new redirect url including params from answers storage
 */
export function constructRedirectUrl (redirectUrl, params) {
  const urlParser = document.createElement('a');
  urlParser.href = redirectUrl;
  const redirectUrlParams = new SearchParams(urlParser.search);
  for (const [key, val] of params.entries()) {
    if (!redirectUrlParams.has(key)) {
      redirectUrlParams.set(key, val);
    }
  }
  urlParser.search = redirectUrlParams.toString();
  return urlParser.href;
}

/**
 * Modify an anchor tag to point to the _parent documents URL.
 *
 * @param {string} parentUrl URL of the _parent document sent from event
 * @param {string} relativeUrl URL of the _parent document sent from event
 */
export function createParentAnchor (parentUrl, relativeUrl) {
  const parentUrlWithoutParams = parentUrl.split('?')[0];

  const anchorEl = document.createElement('a');
  anchorEl.href = relativeUrl;
  anchorEl.target = '_parent';

  const params = new SearchParams(anchorEl.search);
  const verticalUrl = anchorEl.pathname.replace(/^\//, '');
  params.set('verticalUrl', verticalUrl);
  anchorEl.href = parentUrlWithoutParams + '?' + params.toString();

  return anchorEl;
}
