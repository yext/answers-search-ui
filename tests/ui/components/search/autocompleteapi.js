import AutoCompleteApi from '../../../../src/core/search/autocompleteapi';
import AutoCompleteData from '../../../../src/core/models/autocompletedata';
import HttpRequester from '../../../../src/core/http/httprequester';
import { LIB_VERSION } from '../../../../src/core/constants';
import GlobalStorage from '../../../../src/core/storage/globalstorage';
jest.mock('../../../../src/core/http/httprequester');
jest.mock('../../../../src/core/storage/globalstorage');

const baseUrl = 'https://liveapi-cached.yext.com/v2/accounts/me';
const filtersBaseUrl = 'https://liveapi.yext.com/v2/accounts/me';

describe('querying and responding', () => {
  const apiKey = 'abc123';
  const experienceKey = '123456';
  const verticalKey = 'unittests';
  const input = 'test';
  const version = 20190101;
  const locale = 'fr_CA';
  const sessionTrackingEnabled = false;

  const expectedResponse = {
    response: {
      businessId: 1234,
      input: {
        queryIntents: []
      },
      sections: [
        {
          label: 'Watson',
          results: [
            {
              key: 'name',
              value: 'Bret Quiqley',
              filter: { name: { $eq: 'Bret Quiqley' } },
              queryIntents: []
            }
          ]
        }
      ]
    }
  };

  let autocomplete;
  const mockedGet = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(expectedResponse) }));

  const mockedGetState = jest.fn(() => { return { value: sessionTrackingEnabled }; });
  GlobalStorage.mockImplementation(() => {
    return {
      getState: mockedGetState
    };
  });
  const globalStorage = new GlobalStorage();

  beforeEach(() => {
    mockedGet.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        get: mockedGet
      };
    });
    autocomplete = new AutoCompleteApi({ apiKey, experienceKey, locale }, globalStorage);
  });

  describe('queryFilter', () => {
    const expectedUrl = `${filtersBaseUrl}/answers/filtersearch`;
    const searchParameters = {
      sectioned: true,
      fields: [
        {
          fieldId: 'c_featuredSpeakers.name',
          entityTypeId: 'event',
          fetchEntities: false
        }
      ]
    };
    const expectedData = {
      experienceKey,
      api_key: apiKey,
      jsLibVersion: LIB_VERSION,
      verticalKey: verticalKey,
      input,
      v: version,
      locale: locale,
      sessionTrackingEnabled,
      search_parameters: JSON.stringify(searchParameters)
    };

    it('calls the get method with the filter url', () => {
      autocomplete.queryFilter('test', {
        verticalKey: verticalKey,
        searchParameters: searchParameters
      });
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData, undefined);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryFilter('test', {
        verticalKey: verticalKey,
        searchParameters: searchParameters
      }).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });

  describe('queryVertical', () => {
    const expectedUrl = `${baseUrl}/answers/vertical/autocomplete`;
    const expectedData = {
      experienceKey,
      api_key: apiKey,
      jsLibVersion: LIB_VERSION,
      verticalKey: verticalKey,
      input,
      v: version,
      locale: locale,
      sessionTrackingEnabled
    };

    it('creates a proper GET request for vertical search', () => {
      autocomplete.queryVertical('test', verticalKey);
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData, undefined);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryVertical('test', verticalKey).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });

  describe('queryUniversal', () => {
    const expectedUrl = `${baseUrl}/answers/autocomplete`;
    const expectedData = {
      experienceKey,
      api_key: apiKey,
      jsLibVersion: LIB_VERSION,
      input,
      v: version,
      locale: locale,
      sessionTrackingEnabled
    };

    it('creates a proper GET request for vertical search', () => {
      autocomplete.queryUniversal('test');
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData, undefined);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryUniversal('test', verticalKey).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });
});
