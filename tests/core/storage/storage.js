import Storage from '../../../src/core/storage/storage';
import { StorageKeys } from '../../../src/core/storage/storagekeys';

let storage;

beforeEach(() => {
  storage = new Storage();
});

describe('storing and retrieving', () => {
  it('stores data by the provided key', () => {
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.insert(StorageKeys.NAVIGATION, { test: 'test navigation data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
    expect(storage.getState(StorageKeys.NAVIGATION).test).toBe('test navigation data');
  });

  it('overwrites old data', () => {
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test navigation data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test navigation data');
  });

  it('returns all data with a key prefix with getAll()', () => {
    storage.insert(`${StorageKeys.AUTOCOMPLETE}.one`, { test: 'test data one' });
    storage.insert(`${StorageKeys.AUTOCOMPLETE}.two`, { test: 'test data two' });
    storage.insert(`${StorageKeys.AUTOCOMPLETE}.three`, { test: 'test data three' });

    const allData = storage.getAll(StorageKeys.AUTOCOMPLETE);
    expect(allData).toHaveLength(3);
    expect(allData).toContainEqual({ test: 'test data one' });
    expect(allData).toContainEqual({ test: 'test data two' });
    expect(allData).toContainEqual({ test: 'test data three' });
  });
});

describe('publishing and subscribing', () => {
  it('publishes to subscribers when a new key is added', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to subscribers on existing keys', () => {
    const spy = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to all subscribers', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy1);
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy2);
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('only publishes to listeners on the key', () => {
    const key1Spy = jest.fn();
    const key2Spy = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.insert(StorageKeys.UNIVERSAL_RESULTS, { test: 'test results data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, key1Spy);
    storage.on('update', StorageKeys.UNIVERSAL_RESULTS, key2Spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(key1Spy).toHaveBeenCalled();
    expect(key2Spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from a new key', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.insert(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from an existing key', () => {
    const spy = jest.fn();
    storage.insert(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.insert(StorageKeys.VERTICAL_RESULTS, { test: 'new test results data' });
    expect(spy).not.toHaveBeenCalled();
  });
});
