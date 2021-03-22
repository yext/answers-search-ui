import { Storage } from '../../../src/core';
import QueryTriggers from '../../../src/core/models/querytriggers';
import QueryUpdateListener from '../../../src/core/statelisteners/queryupdatelistener';
import StorageKeys from '../../../src/core/storage/storagekeys';

describe('registerMiddleware', () => {
  it('middleware is called before a search', async () => {
    const queryUpdateListener = initQueryUpdateListener();
    const middleware = jest.fn(() => new Promise(resolve => setTimeout(resolve, 5)));
    const middleware2 = jest.fn();
    queryUpdateListener.registerMiddleware(middleware);
    queryUpdateListener.registerMiddleware(middleware2);
    expect(middleware).toHaveBeenCalledTimes(0);
    expect(middleware2).toHaveBeenCalledTimes(0);
    await queryUpdateListener._debouncedSearch('a query');
    expect(middleware).toHaveBeenCalledTimes(1);
    expect(middleware2).toHaveBeenCalledTimes(1);
    expect(middleware).toHaveBeenCalledWith('a query');
    expect(middleware2).toHaveBeenCalledWith('a query');
  });
});

describe('_handleQueryUpdate', () => {
  it('is called when the query is updated', () => {
    const queryUpdateListener = initQueryUpdateListener();
    const _handleQueryUpdate = jest.fn();
    queryUpdateListener._handleQueryUpdate = _handleQueryUpdate;
    expect(_handleQueryUpdate).toHaveBeenCalledTimes(0);
    queryUpdateListener.core.storage.setWithPersist(StorageKeys.QUERY, 'a query');
    expect(_handleQueryUpdate).toHaveBeenCalledTimes(1);
    expect(_handleQueryUpdate).toHaveBeenCalledWith('a query');
  });
});

describe('_debouncedSearch', () => {
  it('debounces searches', async () => {
    const queryUpdateListener = initQueryUpdateListener();
    await Promise.all([
      queryUpdateListener._debouncedSearch('query1'),
      queryUpdateListener._debouncedSearch('query2'),
      queryUpdateListener._debouncedSearch('query3')
    ]);
    expect(queryUpdateListener.core.search).toHaveBeenCalledTimes(1);
  });

  it('makes a universal search when no verticalKey is set', async () => {
    const queryUpdateListener = initQueryUpdateListener();
    await queryUpdateListener._debouncedSearch('query1');
    expect(queryUpdateListener.core.search).toHaveBeenCalledTimes(1);
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(0);
    expect(queryUpdateListener.core.search).toHaveBeenCalledWith('query1', {
      setQueryParams: true,
      resetPagination: true
    });
  });

  it('makes a vertical search when there is a verticalKey set', async () => {
    const queryUpdateListener = initQueryUpdateListener({
      verticalKey: 'aVerticalKey'
    });
    await queryUpdateListener._debouncedSearch('query1');
    expect(queryUpdateListener.core.search).toHaveBeenCalledTimes(0);
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(1);
    const expectedSearchOptions = {
      setQueryParams: true,
      resetPagination: true
    };
    expect(queryUpdateListener.core.verticalSearch)
      .toHaveBeenCalledWith('aVerticalKey', expectedSearchOptions, { input: 'query1' });
  });
});

describe('empty searches', () => {
  it('can always be run if the QUERY_TRIGGER is FILTER_COMPONENT', async () => {
    const queryUpdateListener = initQueryUpdateListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: false
    });
    queryUpdateListener.core.storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.FILTER_COMPONENT);
    await queryUpdateListener._debouncedSearch('');
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });

  it('will not be run when no QUERY_TRIGGER is set, and allowEmptySearch is false', async () => {
    const queryUpdateListener = initQueryUpdateListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: false
    });
    await queryUpdateListener._debouncedSearch('');
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(0);
  });

  it('will be run when no QUERY_TRIGGER is set, and allowEmptySearch is true', async () => {
    const queryUpdateListener = initQueryUpdateListener({
      verticalKey: 'aVerticalKey',
      allowEmptySearch: true
    });
    await queryUpdateListener._debouncedSearch('');
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });

  it('will be run by default', async () => {
    const queryUpdateListener = initQueryUpdateListener({
      verticalKey: 'aVerticalKey'
    });
    await queryUpdateListener._debouncedSearch('');
    expect(queryUpdateListener.core.verticalSearch).toHaveBeenCalledTimes(1);
  });
});

function initQueryUpdateListener (config) {
  const mockCore = {
    verticalSearch: jest.fn(),
    search: jest.fn(),
    storage: new Storage().init()
  };

  return new QueryUpdateListener(mockCore, config);
}
