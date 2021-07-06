import Core from '../../src/core/core';
import SearchConfig from '../../src/core/models/searchconfig';
import Storage from '../../src/core/storage/storage';
import StorageKeys from '../../src/core/storage/storagekeys';

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

function getMockCore () {
  const core = new Core({
    storage: new Storage().init()
  });
  core.init();
  core._coreLibrary.universalSearch = jest.fn(() => Promise.resolve());
  core._coreLibrary.verticalSearch = jest.fn(() => Promise.resolve());
  core._getUrls = jest.fn();
  core.storage.set(StorageKeys.SESSIONS_OPT_IN, { value: false });
  return core;
}
