import { isMicrosoftEdge } from '../../../src/core/utils/useragent';

afterEach(() => {
  jest.restoreAllMocks();
  delete navigator.userAgentData;
});

describe('can detect edge using UserAgent client hints', () => {
  it('Chrome', () => {
    navigator.userAgentData = {
      brands: [
        { brand: ' Not;A Brand', version: '99' },
        { brand: 'Google Chrome', version: '91' },
        { brand: 'Chromium', version: '91' }
      ]
    };
    expect(isMicrosoftEdge()).toBeFalsy();
  });

  it('Edge', () => {
    navigator.userAgentData = {
      brands: [
        { brand: ' Not;A Brand', version: '99' },
        { brand: 'Microsoft Edge', version: '91' },
        { brand: 'Chromium', version: '91' }
      ]
    };
    expect(isMicrosoftEdge()).toBeTruthy();
  });
});

describe('can detect edge from the UserAgent string', () => {
  const userAgents = {
    macOS: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.67',
    'Windows 10': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.67',
    Android: 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36 EdgA/46.5.4.5158',
    iOS: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 EdgiOS/46.3.13 Mobile/15E148 Safari/605.1.15',
    'Windows 10 Mobile': 'Mozilla/5.0 (Windows Mobile 10; Android 10.0; Microsoft; Lumia 950XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36 Edge/40.15254.603'
  };
  for (const [scenario, userAgent] of Object.entries(userAgents)) {
    it(scenario, () => {
      mockUserAgent(userAgent);
      expect(isMicrosoftEdge()).toBeTruthy();
    });
  }
});

describe('can detect browsers as NOT edge from the UserAgent string', () => {
  const userAgents = {
    'Chrome + macOS': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Safari + macOS': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
    'Firefox + macOS': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
    'Chrome + Windows 10': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Firefox + Windows 10': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0'
  };
  for (const [scenario, userAgent] of Object.entries(userAgents)) {
    it(scenario, () => {
      mockUserAgent(userAgent);
      expect(isMicrosoftEdge()).toBeFalsy();
    });
  }
});

function mockUserAgent (userAgent) {
  jest.spyOn(navigator, 'userAgent', 'get').mockImplementation(() => userAgent);
}
