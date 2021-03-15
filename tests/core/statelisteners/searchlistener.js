import { Storage } from '../../../src/core';
import QueryTriggers from '../../../src/core/models/querytriggers';
import SearchListener from '../../../src/core/statelisteners/searchlistener';
import StorageKeys from '../../../src/core/storage/storagekeys';

describe('updateConfig', () => {
  it('overrides config', () => {
    const searchListener = initSearchListener();
    expect(searchListener.config).toMatchObject({
      searchCooldown: 300,
      verticalKey: undefined,
      allowEmptySearch: true,
      defaultInitialSearch: undefined
    });
    searchListener.updateConfig({
      searchCooldown: 200,
      verticalKey: 'people'
    });
    expect(searchListener.config).toMatchObject({
      searchCooldown: 200,
      verticalKey: 'people',
      allowEmptySearch: true,
      defaultInitialSearch: undefined
    });
  });
});

describe('registerMiddleware', () => {
  it('middleware is called before a search', async () => {
    const searchListener = initSearchListener();
    const middleware = jest.fn(() => new Promise(resolve => setTimeout(resolve, 5)));
    const middleware2 = jest.fn();
    searchListener.registerMiddleware(middleware);
    searchListener.registerMiddleware(middleware2);
    expect(middleware).toHaveBeenCalledTimes(0);
    expect(middleware2).toHaveBeenCalledTimes(0);
    await searchListener._debouncedSearch('a query');
    expect(middleware).toHaveBeenCalledTimes(1);
    expect(middleware2).toHaveBeenCalledTimes(1);
    expect(middleware).toHaveBeenCalledWith('a query');
    expect(middleware2).toHaveBeenCalledWith('a query');
  });
});

describe('_handleQueryUpdate', () => {
  it('is called when the query is updated', () => {
    const searchListener = initSearchListener();
    const _handleQueryUpdate = jest.fn();
    searchListener._handleQueryUpdate = _handleQueryUpdate;
    expect(_handleQueryUpdate).toHaveBeenCalledTimes(0);
    searchListener.storage.setWithPersist(StorageKeys.QUERY, 'a query');
    expect(_handleQueryUpdate).toHaveBeenCalledTimes(1);
    expect(_handleQueryUpdate).toHaveBeenCalledWith('a query');
  });
});

describe('_debouncedSearch', () => {
  it('debounces searches', async () => {
    const searchListener = initSearchListener();
    await Promise.all([
      searchListener._debouncedSearch('query1'),
      searchListener._debouncedSearch('query2'),
      searchListener._debouncedSearch('query3')
    ]);
    expect(searchListener.core.search).toHaveBeenCalledTimes(1);
  });

  it('makes a universal search when no verticalKey is set', async () => {
    const searchListener = initSearchListener();
    await searchListener._debouncedSearch('query1');
    expect(searchListener.core.search).toHaveBeenCalledTimes(1);
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(0);
    expect(searchListener.core.search).toHaveBeenCalledWith('query1', {
      setQueryParams: true,
      resetPagination: true
    });
  });

  it('makes a vertical search when there is a verticalKey set', async () => {
    const searchListener = initSearchListener({
      verticalKey: 'aVerticalKey'
    });
    await searchListener._debouncedSearch('query1');
    expect(searchListener.core.search).toHaveBeenCalledTimes(0);
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(1);
    const expectedSearchOptions = {
      setQueryParams: true,
      resetPagination: true
    };
    expect(searchListener.core.verticalSearch)
      .toHaveBeenCalledWith('aVerticalKey', expectedSearchOptions, { input: 'query1' });
  });
});

describe('empty searches', () => {
  it('can always be run if the QUERY_TRIGGER is FILTER_COMPONENT', async () => {
    const searchListener = initSearchListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: false
    });
    searchListener.storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.FILTER_COMPONENT);
    await searchListener._debouncedSearch('');
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });

  it('will not be run when no QUERY_TRIGGER is set, and allowEmptySearch is false', async () => {
    const searchListener = initSearchListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: false
    });
    await searchListener._debouncedSearch('');
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(0);
  });

  it('will be run when no QUERY_TRIGGER is set, and allowEmptySearch is true', async () => {
    const searchListener = initSearchListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: true
    });
    await searchListener._debouncedSearch('');
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });

  it('will be run by default', async () => {
    const searchListener = initSearchListener({
      verticalKey: 'aVerticalKey'
    });
    await searchListener._debouncedSearch('');
    expect(searchListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });
});

function initSearchListener (config) {
  const mockCore = {
    verticalSearch: jest.fn(),
    search: jest.fn()
  };

  const mockComponentManager = {
    getActiveComponent: jest.fn()
  };

  const storage = new Storage().init();

  return new SearchListener({
    core: mockCore,
    storage,
    componentManager: mockComponentManager
  }, config).init();
}
