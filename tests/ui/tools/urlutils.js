import { SearchParams } from '../../../src/ui';
import { constructRedirectUrl } from '../../../src/ui/tools/urlutils';

describe('constructRedirectUrl', () => {
  it('include answers params', () => {
    const userRedirectUrl = 'https://answers.yext.com/';
    const params = new SearchParams('?answers-param=rose');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl).toEqual('https://answers.yext.com/?answers-param=rose');
  });

  it('handle duplicate params', () => {
    const userRedirectUrl = 'https://answers.yext.com/?query=test';
    const params = new SearchParams('?query=rose');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl).toEqual('https://answers.yext.com/?query=test');
  });

  it('handle a mix of user-specified and answers params', () => {
    const userRedirectUrl = 'https://answers.yext.com/?query=test&context=abc';
    const params = new SearchParams('?query=rose&filter=manager');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl).toEqual('https://answers.yext.com/?query=test&context=abc&filter=manager');
  });

  it('handle relative url', () => {
    const userRedirectUrl = './people.html/?query=test';
    const params = new SearchParams('?another=param');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl).toEqual('http://localhost/people.html/?query=test&another=param');
  });

  it('handle relative url without starting with current directory "./"', () => {
    const userRedirectUrl = 'people.html/?query=test';
    const params = new SearchParams('?another=param');
    const newRedirectUrl = constructRedirectUrl(userRedirectUrl, params);
    expect(newRedirectUrl).toEqual('http://localhost/people.html/?query=test&another=param');
  });
});
