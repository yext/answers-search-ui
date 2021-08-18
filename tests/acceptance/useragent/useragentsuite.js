/* eslint-disable quote-props */
import { UNIVERSAL_PAGE } from '../constants';
import { ClientFunction } from 'testcafe';
import { isChrome, isSafari, isMicrosoftEdge } from '../../../src/core/utils/useragent';

fixture`User-Agent sniffing`
  .page`${UNIVERSAL_PAGE}`;

test('User-Agent sniffing works as expected', async t => {
  const browserNameToSniffingMethod = {
    'Chrome': isChrome,
    'Safari': isSafari,
    'Microsoft Edge': isMicrosoftEdge,
    'Firefox': () => t.browser.name === 'Firefox'
  };
  if (!(t.browser.name in browserNameToSniffingMethod)) {
    throw new Error(
      `Unexpected testcafe browser "${t.browser.name}".\n` +
      `Expected one of ${Object.keys(browserNameToSniffingMethod).join(', ')}`);
  }
  for (const [browserToTest, sniffer] of Object.entries(browserNameToSniffingMethod)) {
    const [userAgent, userAgentData] = await ClientFunction(() => {
      return [window.navigator.userAgent, window.navigator.userAgentData];
    })();
    global.navigator = { userAgent, userAgentData };
    const sniffingResult = sniffer();
    const expectedResult = t.browser.name === browserToTest;
    if (sniffingResult !== expectedResult) {
      console.error(`Sniffing ${t.browser.name} for ${browserToTest} should return ${expectedResult}, not ${sniffingResult}`);
    }
    await t.expect(sniffingResult).eql(expectedResult);
  }
});
