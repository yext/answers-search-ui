import SearchApi from '../../../src/core/search/searchapi';
import HttpRequester from '../../../src/core/http/httprequester';
import { AnswersCoreError } from '../../../src/core/errors/errors';

jest.mock('../../../src/core/http/httprequester');

describe('vertical searching', () => {
  const mockedRequest = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ test: 'value' }) }));
  let searchApi;

  beforeEach(() => {
    mockedRequest.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        get: mockedRequest
      };
    });
    searchApi = new SearchApi({
      apiKey: '1234abcd',
      experienceKey: 'abc123',
      locale: 'en'
    });
  });

  it('searches with input', () => {
    const result = searchApi.verticalSearch('vertical', { input: 'query' });
    expect.assertions(2);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'query', verticalKey: 'vertical' }));

      expect(results.test).toBe('value');
    });
  });

  it('searches with filters', () => {
    const filter = '{ "thing": { "$eq": "cool" } }';
    const result = searchApi.verticalSearch('vertical', { filter });
    expect.assertions(2);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ filters: filter, verticalKey: 'vertical' }));

      expect(results.test).toBe('value');
    });
  });

  it('searches with input and filter', () => {
    const filter = '{ "thing": { "$eq": "cool" } }';
    const result = searchApi.verticalSearch('vertical', { input: 'word', filter });
    expect.assertions(2);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'word', filters: filter, verticalKey: 'vertical' }));

      expect(results.test).toBe('value');
    });
  });

  it('searches with limit and offset', () => {
    const result = searchApi.verticalSearch('vertical', { input: 'query', limit: 25, offset: 10 });
    expect.assertions(2);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'query', limit: 25, offset: 10, verticalKey: 'vertical' }));

      expect(results.test).toBe('value');
    });
  });

  it('throws error if limit exceeds 50', () => {
    expect(() => {
      searchApi.verticalSearch('vertical', { input: 'query', limit: 150, offset: 10 });
    }).toThrow(AnswersCoreError);
  });

  it('searches with queryId if provided', () => {
    const result = searchApi.verticalSearch('vertical', { input: 'query', limit: 25, offset: 10, id: '12345' });
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'query', limit: 25, offset: 10, verticalKey: 'vertical', queryId: '12345' }));
    });
  });
});

describe('codelab people searches', () => {
  const mockedRequest = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ test: 'value' }) }));
  let searchApi;

  beforeEach(() => {
    mockedRequest.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        get: mockedRequest
      };
    });
    searchApi = new SearchApi({
      apiKey: '1234abcd',
      experienceKey: 'abc123',
      locale: 'en'
    });
  });

  it('searches with kelly full name and no additional text', () => {
    const result = searchApi.kellySearch(true, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Kelly Yu ' }));
    });
  });

  it('searches with kelly username and additional text', () => {
    const result = searchApi.kellySearch(false, true, 'additional');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'kyu additional' }));
    });
  });

  it('searches with julian full name and no additional text', () => {
    const result = searchApi.julianSearch(true, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Julian Brown ' }));
    });
  });

  it('searches with julian username and additional text', () => {
    const result = searchApi.julianSearch(false, true, 'additional');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'jbrown additional' }));
    });
  });

  it('performs a search for Connor', () => {
    const result = searchApi.connorSearch();
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Connor' }));
    });
  });

  it('searches for Connor number 9398', () => {
    const result = searchApi.connorNumberSearch(9398);
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Connor9398' }));
    });
  });

  describe('chrisSearch', () => {
    const mockedRequest = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ test: 'value' }) }));
    let searchApi;

    beforeEach(() => {
      mockedRequest.mockClear();
      HttpRequester.mockImplementation(() => {
        return {
          get: mockedRequest
        };
      });
      searchApi = new SearchApi({
        apiKey: '1234abcd',
        experienceKey: 'abc123',
        locale: 'en'
      });
    });

    it('searches full name and additional text', () => {
      const result = searchApi.chrisSearch(true, false, 'likes cheese');
      expect.assertions(1);
      result.then(results => {
        expect(mockedRequest).toBeCalledWith(
          expect.anything(),
          expect.objectContaining({ input: 'Chris Jiang likes cheese' }));
      });
    });

    it('searches username and no additional text', () => {
      const result = searchApi.chrisSearch(true, true, '');
      expect.assertions(1);
      result.then(results => {
        expect(mockedRequest).toBeCalledWith(
          expect.anything(),
          expect.objectContaining({ input: 'cjiang' }));
      });
    });
  });

  it('searches with Nan first name and no additional text', () => {
    const result = searchApi.nanSearch(false, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything,
        expect.objectContaining({ input: 'Nan ' }));
    });
  });

  it('searches with Nan full name and no additional text', () => {
    const result = searchApi.nanSearch(true, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything,
        expect.objectContaining({ input: 'Nan Hu ' }));
    });
  });

  it('searches with Nan username and additional text', () => {
    const result = searchApi.nanSearch(false, true, 'extra text');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything,
        expect.objectContaining({ input: 'nhu extra text ' }));
    });
  });

  it('searches yen using full name and no additional text', () => {
    const result = searchApi.yenSearch(true, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Yen Truong' }));
    });
  });

  it('searches yen using username and additional text', () => {
    const result = searchApi.yenSearch(false, true, 'extra');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'ytruong extra' }));
    });
  });

  it('searches with Nidhi first name and no additional text', () => {
    const result = searchApi.nidhiSearch(false, false, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Nidhi' }));
    });
  });

  it('searches with Nidhi full name and additional text', () => {
    const result = searchApi.nidhiSearch(true, false, 'additional');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'Nidhi Manu additional' }));
    });
  });

  it('searches with Nidhi username and no additional text', () => {
    const result = searchApi.nidhiSearch(true, true, '');
    expect.assertions(1);
    result.then(results => {
      expect(mockedRequest).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({ input: 'nmanu' }));
    });
  });
});
