import { SearchParams } from '../../../src/ui';
import { constructRedirectUrl, createParentAnchor } from '../../../src/ui/tools/urlutils';

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

describe('createParentAnchor', () => {
  it('properly sets target to _parent', () => {
    const anchor = createParentAnchor('https://yext.com/search', './locations.html?query=virginia');

    expect(anchor.getAttribute('target')).toEqual('_parent');
  });

  it('properly sets href to use parent domain with verticalUrl query param', () => {
    const anchor = createParentAnchor('https://yext.com/search', './locations.html');

    expect(anchor.getAttribute('href')).toEqual('https://yext.com/search?verticalUrl=locations.html');
  });

  it('properly sets href to use parent domain with additional query params', () => {
    const anchor = createParentAnchor('https://yext.com/search', './locations.html?query=virginia');

    expect(anchor.getAttribute('href')).toEqual('https://yext.com/search?query=virginia&verticalUrl=locations.html');
  });
});
