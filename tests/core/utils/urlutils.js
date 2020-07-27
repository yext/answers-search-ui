import SearchParams from '../../../src/ui/dom/searchparams';
import { PRODUCTION, SANDBOX } from '../../../src/core/constants';
import {
  getLiveApiUrl,
  getCachedLiveApiUrl,
  getKnowledgeApiUrl,
  getAnalyticsUrl,
  replaceUrlParams,
  urlWithoutQueryParamsAndHash,
  equivalentParams,
  removeParamsWithPrefixes
} from '../../../src/core/utils/urlutils';

const baseUrl = 'https://yext.com/';

describe('getUrlFunctions work', () => {
  it('differentiates sandbox from prod', () => {
    expect(getLiveApiUrl()).not.toEqual(expect.stringContaining('sandbox'));
    expect(getCachedLiveApiUrl()).not.toEqual(expect.stringContaining('sandbox'));
    expect(getKnowledgeApiUrl()).not.toEqual(expect.stringContaining('sandbox'));
    expect(getAnalyticsUrl()).not.toEqual(expect.stringContaining('sandbox'));

    expect(getLiveApiUrl(SANDBOX)).toEqual(expect.stringContaining('sandbox'));
    expect(getCachedLiveApiUrl(SANDBOX)).toEqual(expect.stringContaining('sandbox'));
    expect(getKnowledgeApiUrl(SANDBOX)).toEqual(expect.stringContaining('sandbox'));
    expect(getAnalyticsUrl(SANDBOX)).toEqual(expect.stringContaining('sandbox'));
  });

  it('differentiates conversion tracking in analytics url', () => {
    expect(getAnalyticsUrl(PRODUCTION, true)).toEqual(expect.stringContaining('realtimeanalytics'));
    expect(getAnalyticsUrl(SANDBOX, true)).toEqual(expect.stringContaining('realtimeanalytics'));

    expect(getAnalyticsUrl(PRODUCTION)).not.toEqual(expect.stringContaining('realtimeanalytics'));
    expect(getAnalyticsUrl(SANDBOX)).not.toEqual(expect.stringContaining('realtimeanalytics'));
  });
});

describe('replaceUrlParams works', () => {
  it('adds params to a url without query params', () => {
    expect(replaceUrlParams(baseUrl, new SearchParams('?referrerPageUrl=')))
      .toEqual(baseUrl + '?referrerPageUrl=');
  });

  it('replaces params when params already exist in url', () => {
    const params = 'page=10&facets=true&query=all&referrerPageUrl=';
    expect(replaceUrlParams(
      'https://yext.com/?query=test&page=5&context=%7B%7D',
      new SearchParams(params)
    )).toEqual(`https://yext.com/?${params}`);
  });

  it('adds params when new params are empty', () => {
    expect(replaceUrlParams(baseUrl, new SearchParams())).toEqual(`${baseUrl}?`);
  });

  it('encodes new params correctly', () => {
    const params = new SearchParams('?page=10&facets=true');
    params.set('query', 'all');
    params.set('referrerPageUrl', 'https://www.yext.com/');
    expect(replaceUrlParams('https://yext.com/', params))
      .toEqual('https://yext.com/?page=10&facets=true&query=all&referrerPageUrl=https%3A%2F%2Fwww.yext.com%2F');
  });
});

describe('urlWithoutQueryParamsAndHash works', () => {
  it('removes query params and hashes', () => {
    expect(urlWithoutQueryParamsAndHash(baseUrl + '?query=hello&referrerPageUrl=#Footer'))
      .toEqual(baseUrl);
  });

  it('handles urls without params and hashes', () => {
    expect(urlWithoutQueryParamsAndHash(baseUrl)).toEqual(baseUrl);
  });
});

describe('equivalentParams works', () => {
  const params1 = new SearchParams('?query=hello');
  it('checks when one or both params is an empty SearchParams', () => {
    expect(equivalentParams(params1, new SearchParams())).toEqual(false);
    expect(equivalentParams(new SearchParams(), params1)).toEqual(false);
    expect(equivalentParams(new SearchParams(), new SearchParams())).toEqual(true);
  });

  it('checks when they have different # of params', () => {
    const params2 = new SearchParams('?query=hello&referrerPageUrl=');
    expect(equivalentParams(params1, params2)).toEqual(false);
    expect(equivalentParams(params2, params1)).toEqual(false);
  });

  it('checks when they have different param values', () => {
    const paramsString = '?query=hello&referrerPageUrl=';
    const params2 = new SearchParams(paramsString);
    const params3 = new SearchParams(paramsString);
    params3.set('referrerPageUrl', 'https%3A%2F%2Fwww.yext.com%2F');
    expect(equivalentParams(params2, params3)).toEqual(false);
    expect(equivalentParams(params3, params2)).toEqual(false);
  });

  it('checks when they are the exact same', () => {
    const paramsString = 'query=all&referrerPageUrl=&Facets.filterbox.filter0=%5B%5D&Facets.filterbox.filter1=%5B%5D&Facets.filterbox.filter2=%5B%5D&Facets.filterbox.filter3=%5B%5D&Facets.filterbox.filter4=%5B%5D&Facets.filterbox.filter5=%5B%5D&Facets.filterbox.filter6=%5B%5D&Facets.filterbox.filter7=%5B%5D&Facets.filterbox.filter8=%5B%5D&Facets.filterbox.filter9=%5B%5D&Facets.filterbox.filter10=%5B%5D&context=%7B"state"%3A"hx"%7D&tabOrder=index.html%2CKM%2Cevents%2Cfaq%2Cjob%2Clinks%2Cpeople%2Crestaurant';
    const params2 = new SearchParams(paramsString);
    const params3 = new SearchParams(paramsString);
    expect(equivalentParams(params2, params3)).toEqual(true);
    expect(equivalentParams(params3, params2)).toEqual(true);
  });
});

describe('removeParamsWithPrefixes works', () => {
  const baseParams = new SearchParams('?query=all&referrerPageUrl=&search-offset=10&Facets.filterbox.filter1=hello&Facets.filterbox.filter2=bye&FilterBox.filter1=what');

  it('does not blow up on empty function parameters', () => {
    const params2 = removeParamsWithPrefixes(new SearchParams(baseParams.toString()), []);
    expect(params2).toEqual(baseParams);

    const params3 = removeParamsWithPrefixes(new SearchParams(), ['query', 'Facets']);
    expect(params3).toEqual(new SearchParams());

    const params4 = removeParamsWithPrefixes(new SearchParams(), []);
    expect(params4).toEqual(new SearchParams());
  });

  it('removes params with multiple prefixes', () => {
    const params2 = removeParamsWithPrefixes(new SearchParams(baseParams.toString()), ['search', 'Facets', 'referrer']);
    expect(params2).toEqual(new SearchParams('?query=all&FilterBox.filter1=what'));

    const params3 = removeParamsWithPrefixes(new SearchParams(baseParams.toString()), ['search', 'Facets', 'referrer', 'search']);
    expect(params3).toEqual(new SearchParams('?query=all&FilterBox.filter1=what'));
  });
});
