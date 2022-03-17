import Core from '../../src/core/core';
import SearchConfig from '../../src/core/models/searchconfig';
import Storage from '../../src/core/storage/storage';
import StorageKeys from '../../src/core/storage/storagekeys';

jest.mock('../../src/core/utils/uuid');
const uuid = require('../../src/core/utils/uuid');
// uuid is a mock function
uuid.generateUUID = jest.fn(() => '42');

describe('Search requests are created properly', () => {
  window.performance.mark = jest.fn();
  const context = {
    str: 'string',
    num: 123,
    bool: true
  };

  it('context is passed as an object for universal search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.API_CONTEXT, JSON.stringify(context));
    mockCore.search('test');
    expect(mockCore._coreLibrary.universalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ context })
    );
  });

  it('context is passed as an object for vertical search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.API_CONTEXT, JSON.stringify(context));
    mockCore.verticalSearch('verticalKey', 'test');
    expect(mockCore._coreLibrary.verticalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ context })
    );
  });

  it('search limit is passed properly for core init', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.SEARCH_CONFIG, new SearchConfig({ universalLimit: { lim: 4 } }));
    mockCore.search();
    expect(mockCore._coreLibrary.universalSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        limit: { lim: 4 }
      })
    );
  });
});

describe('sessionId is passed properly', () => {
  it('sessionId is passed in universal search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: true });
    mockCore.search();
    expect(mockCore._coreLibrary.universalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ sessionId: '42' })
    );
  });

  it('sessionId is passed in vertical search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: true });
    mockCore.verticalSearch();
    expect(mockCore._coreLibrary.verticalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ sessionId: '42' })
    );
  });

  it('sessionId is not passed in universal search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: false });
    mockCore.search();
    expect(mockCore._coreLibrary.universalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ sessionId: null })
    );
  });

  it('sessionId is not passed in vertical search', () => {
    const mockCore = getMockCore();
    mockCore.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: false });
    mockCore.verticalSearch();
    expect(mockCore._coreLibrary.verticalSearch).toHaveBeenCalledWith(
      expect.objectContaining({ sessionId: null })
    );
  });
});

describe('additionalHttpHeaders are passed correctly', () => {
  const mockCore = getMockCore({
    additionalHttpHeaders: {
      'Client-SDK': {
        TEST: '1.3.5'
      }
    }
  });

  it('verticalSearch', () => {
    mockCore.verticalSearch();
    expectCorrectAdditionalHttpHeaders('verticalSearch');
  });

  it('universalSearch', () => {
    mockCore.search();
    expectCorrectAdditionalHttpHeaders('universalSearch');
  });

  it('submitQuestion', () => {
    mockCore.submitQuestion();
    expectCorrectAdditionalHttpHeaders('submitQuestion');
  });

  it('autoCompleteVertical', () => {
    mockCore.autoCompleteVertical();
    expectCorrectAdditionalHttpHeaders('verticalAutocomplete');
  });

  it('autoCompleteUniversal', () => {
    mockCore.autoCompleteUniversal();
    expectCorrectAdditionalHttpHeaders('universalAutocomplete');
  });

  it('autoCompleteFilter', () => {
    mockCore.autoCompleteFilter('input', {
      searchParameters: {
        fields: [{
          fieldId: 'builtin.location',
          entityTypeId: 'ce_person'
        }],
        sectioned: false
      }
    });
    expectCorrectAdditionalHttpHeaders('filterSearch');
  });

  function expectCorrectAdditionalHttpHeaders (coreLibMethod) {
    expect(mockCore._coreLibrary[coreLibMethod]).toHaveBeenCalledWith(
      expect.objectContaining({
        additionalHttpHeaders: {
          'Client-SDK': expect.objectContaining({
            TEST: '1.3.5',
            ANSWERS_SEARCH_UI_SDK: '@@LIB_VERSION'
          })
        }
      })
    );
  }
});

function getMockCore (config = {}) {
  const core = new Core({
    storage: new Storage().init(),
    ...config
  });
  core.init();
  core._coreLibrary.universalSearch = jest.fn(() => Promise.resolve());
  core._coreLibrary.verticalSearch = jest.fn(() => Promise.resolve());
  core._getUrls = jest.fn();
  core.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: false });
  return core;
}
