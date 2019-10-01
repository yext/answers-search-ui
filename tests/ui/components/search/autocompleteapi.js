import AutoCompleteApi from '../../../../src/core/search/autocompleteapi';
import AutoCompleteData from '../../../../src/core/models/autocompletedata';
import HttpRequester from '../../../../src/core/http/httprequester';
jest.mock('../../../../src/core/http/httprequester');

const baseUrl = 'https://liveapi.yext.com/v2/accounts/me';

describe('querying and responding', () => {
  const apiKey = 'abc123';
  const answersKey = '123456';
  const verticalKey = 'unittests';
  const barKey = 'testing';
  const input = 'test';
  const version = 20190101;
  const locale = 'fr_CA';

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

  let autocomplete;
  const mockedGet = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(expectedResponse) }));

  beforeEach(() => {
    mockedGet.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        get: mockedGet
      };
    });
    autocomplete = new AutoCompleteApi({
      apiKey,
      answersKey,
      locale
    });
  });

  describe('queryFilter', () => {
    const expectedUrl = `${baseUrl}/answers/filtersearch`;
    const searchParameters = {
      sectionded: true,
      fields: [
        {
          fieldId: 'c_featuredSpeakers.name',
          entityTypeId: 'event',
          fetchEntities: false
        }
      ]
    };
    const expectedData = {
      answersKey,
      api_key: apiKey,
      verticalKey: verticalKey,
      input,
      inputKey: barKey,
      v: version,
      locale: locale,
      search_parameters: JSON.stringify(searchParameters)
    };

    it('calls the get method with the filter url', () => {
      autocomplete.queryFilter('test', verticalKey, barKey, searchParameters);
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryFilter('test', verticalKey, barKey, searchParameters).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });

  describe('queryVertical', () => {
    const expectedUrl = `${baseUrl}/answers/vertical/autocomplete`;
    const expectedData = {
      answersKey,
      api_key: apiKey,
      barKey,
      verticalKey: verticalKey,
      input,
      v: version,
      locale: locale
    };

    it('creates a proper GET request for vertical search', () => {
      autocomplete.queryVertical('test', verticalKey, barKey);
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryVertical('test', verticalKey, barKey).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });

  describe('queryUniversal', () => {
    const expectedUrl = `${baseUrl}/answers/autocomplete`;
    const expectedData = {
      answersKey,
      api_key: apiKey,
      input,
      v: version,
      locale: locale
    };

    it('creates a proper GET request for vertical search', () => {
      autocomplete.queryUniversal('test');
      expect(mockedGet).toHaveBeenCalledTimes(1);
      expect(mockedGet).toHaveBeenCalledWith(expectedUrl, expectedData);
    });

    it('returns the right AutoCompleteData', () => {
      expect.assertions(3);
      return autocomplete.queryUniversal('test', verticalKey, barKey).then(d => {
        expect(d instanceof AutoCompleteData).toBeTruthy();
        expect(d.sections).toHaveLength(1);
        expect(d.sections[0].results).toHaveLength(1);
      });
    });
  });
});
