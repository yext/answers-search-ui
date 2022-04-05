import { SearchParams } from '../../../src/ui';
import { constructRedirectUrl } from '../../../src/ui/tools/urlutils';

describe('constructRedirectUrl', () => {
  it('include answers params', () => {
    const userRedirectUrl = 'https://answers.yext.com/';
    const params = new SearchParams('?answers-param=rose');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl.search).toEqual('?answers-param=rose');
  });

  it('handle duplicate params', () => {
    const userRedirectUrl = 'https://answers.yext.com/?query=test';
    const params = new SearchParams('?query=rose');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl.search).toEqual('?query=test');
  });

  it('handle a mix of user-specified and answers params', () => {
    const userRedirectUrl = 'https://answers.yext.com/?query=test&context=abc';
    const params = new SearchParams('?query=rose&filter=manager');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl.search).toEqual('?query=test&context=abc&filter=manager');
  });
});
