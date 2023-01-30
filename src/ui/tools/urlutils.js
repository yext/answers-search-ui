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
 * @param {HTMLAnchorElement} anchorEl reference to anchor tag to be updated
 * @param {string} parentUrl URL of the _parent document sent from event
 */
export function updateAnchorToTargetParent (parentUrl, anchorEl = document.createElement('a')) {
  const parentUrlWithoutParams = parentUrl.split('?')[0];

  anchorEl.target = '_parent';

  const params = new SearchParams(anchorEl.search);
  const verticalUrl = anchorEl.pathname.replace(/^\//, '');
  params.set('verticalUrl', verticalUrl);
  const url = parentUrlWithoutParams + '?' + params.toString();
  anchorEl.href = url;

  return url;
}
