import HttpRequester from '../../../src/core/http/httprequester';

const baseUrl = 'https://liveapi.yext.com/v2/accounts/me';

describe('resquesting and responding', () => {
  let requester;
  const apiKey = 'abc123';
  const input = 'test';
  const experienceKey = '123456';
  const verticalKey = 'unittests';
  const data = { apiKey, input, experienceKey, verticalKey };

  beforeEach(() => {
    requester = new HttpRequester();
  });

  describe('get', () => {
    const expectedUrl = `${baseUrl}/answers/query?apiKey=${apiKey}&input=${input}&experienceKey=${experienceKey}&verticalKey=${verticalKey}`;

    it('creates a proper GET request with params', () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.get(`${baseUrl}/answers/query`, data, {});
      expect(global.fetch).toHaveBeenCalledWith(
        expectedUrl,
        { method: 'get', credentials: 'include' }
      );
    });

    it('uses the provided options for the request', () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.get(`${baseUrl}/answers/query`, data, { credentials: 'omit', redirect: 'error' });
      expect(global.fetch).toHaveBeenCalledWith(
        expectedUrl,
        { method: 'get', credentials: 'omit', redirect: 'error' }
      );
    });

    it('returns the response in a promise', () => {
      const expectedResponse = {
        response: {
          businessId: 1234,
          sections: [
            {
              label: 'Watson',
              results: [
                {
                  key: 'name',
                  value: 'Bret Quiqley',
                  filter: { name: { $eq: 'Bret Quiqley' } }
                }
              ]
            }
          ]
        }
      };
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(expectedResponse) }));

      expect.assertions(1);
      return requester.get(`${baseUrl}/answers/query`, data, {})
        .then(r => r.json())
        .then(d => expect(d).toBe(expectedResponse));
    });
  });

  describe('post', () => {
    const expectedUrl = `${baseUrl}/answers/query`;

    it('creates a proper POST request with body', () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.post(`${baseUrl}/answers/query`, null, data, {});
      expect(global.fetch).toHaveBeenCalledWith(
        expectedUrl,
        { method: 'post', credentials: undefined, body: JSON.stringify(data) }
      );
    });

    it('uses the provided options for the request', () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.post(`${baseUrl}/answers/query`, null, data, { credentials: 'omit', redirect: 'error' });
      expect(global.fetch).toHaveBeenCalledWith(
        expectedUrl,
        { method: 'post', credentials: 'omit', redirect: 'error', body: JSON.stringify(data) }
      );
    });

    it('encodes urlparams into request', () => {
      const apiKey = 123;
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.post(`${baseUrl}/answers/query`, { api_key: apiKey }, data, { credentials: 'omit', redirect: 'error' });
      expect(global.fetch).toHaveBeenCalledWith(
        `${expectedUrl}?api_key=${apiKey}`,
        { method: 'post', credentials: 'omit', redirect: 'error', body: JSON.stringify(data) }
      );
    });

    it('returns the response in a promise', () => {
      const expectedResponse = {
        response: {
          businessId: 1234,
          sections: [
            {
              label: 'Watson',
              results: [
                {
                  key: 'name',
                  value: 'Bret Quiqley',
                  filter: { name: { $eq: 'Bret Quiqley' } }
                }
              ]
            }
          ]
        }
      };
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(expectedResponse) }));

      expect.assertions(1);
      return requester.post(`${baseUrl}/answers/query`, data, {})
        .then(r => r.json())
        .then(d => expect(d).toBe(expectedResponse));
    });
  });

  describe('request', () => {
    const expectedUrl = `${baseUrl}/answers/query`;

    it('creates a request with the provided method and options', () => {
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));

      requester.request('put', `${baseUrl}/answers/query`, { body: JSON.stringify(data) });
      expect(global.fetch).toHaveBeenCalledWith(
        expectedUrl,
        { method: 'put', credentials: 'include', body: JSON.stringify(data) }
      );
    });

    it('returns the response in a promise', () => {
      const expectedResponse = {
        response: {
          businessId: 1234,
          sections: [
            {
              label: 'Watson',
              results: [
                {
                  key: 'name',
                  value: 'Bret Quiqley',
                  filter: { name: { $eq: 'Bret Quiqley' } }
                }
              ]
            }
          ]
        }
      };
      global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(expectedResponse) }));

      expect.assertions(1);
      return requester.request('update', `${baseUrl}/answers/query`, { body: JSON.stringify(data) })
        .then(r => r.json())
        .then(d => expect(d).toBe(expectedResponse));
    });
  });

  describe('encodeParams', () => {
    const expectedUrl = `${baseUrl}/answers/query?apiKey=${apiKey}&input=${input}&experienceKey=${experienceKey}&verticalKey=${verticalKey}`;

    it('adds all params to the url', () => {
      const url = requester.encodeParams(`${baseUrl}/answers/query`, data);
      expect(url).toBe(expectedUrl);
    });

    it('properly escapes & and ? and =', () => {
      const data = {
        a: '&pizza',
        b: 'who is jsharps?',
        c: '1+2=3'
      };

      const url = requester.encodeParams(`${baseUrl}/answers/query`, data);
      expect(url).toBe(`${baseUrl}/answers/query?a=%26pizza&b=who%20is%20jsharps%3F&c=1%2B2%3D3`);
    });
  });

  describe('beacon', () => {
    const expectedUrl = `${baseUrl}/analytics`;
    const expectedData = { data: { eventType: 'test', queryId: '1234abc' } };

    it('sends a beacon to the url with stringified data', () => {
      const mockedSendBeacon = jest.fn();
      global.navigator.sendBeacon = mockedSendBeacon;

      requester.beacon(expectedUrl, expectedData);
      expect(mockedSendBeacon).toBeCalledWith(expectedUrl, JSON.stringify(expectedData));
    });
  });
});
