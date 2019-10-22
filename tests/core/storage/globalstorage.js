import GlobalStorage from '../../../src/core/storage/globalstorage';
import StorageKeys from '../../../src/core/storage/storagekeys';

let storage;

beforeEach(() => {
  storage = new GlobalStorage();
});

describe('storing, retrieving and deleting', () => {
  it('stores data by the provided key', () => {
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.set(StorageKeys.NAVIGATION, { test: 'test navigation data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
    expect(storage.getState(StorageKeys.NAVIGATION).test).toBe('test navigation data');
  });

  it('overwrites old data', () => {
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test navigation data' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).test).toBe('test navigation data');
  });

  it('replaces data with set method', () => {
    storage.set(StorageKeys.AUTOCOMPLETE, { one: 'test data one' });
    storage.set(StorageKeys.AUTOCOMPLETE, { two: 'test data two' });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).one).toBeUndefined();
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).two).toBe('test data two');
  });

  it('returns all data with a key prefix with getAll()', () => {
    storage.set(`${StorageKeys.AUTOCOMPLETE}.one`, { test: 'test data one' });
    storage.set(`${StorageKeys.AUTOCOMPLETE}.two`, { test: 'test data two' });
    storage.set(`${StorageKeys.AUTOCOMPLETE}.three`, { test: 'test data three' });

    const allData = storage.getAll(StorageKeys.AUTOCOMPLETE);
    expect(allData).toHaveLength(3);
    expect(allData).toContainEqual({ test: 'test data one' });
    expect(allData).toContainEqual({ test: 'test data two' });
    expect(allData).toContainEqual({ test: 'test data three' });
  });

  it('returns null for unset state', () => {
    expect(storage.getState(StorageKeys.QUERY)).toBeNull();
  });

  it('correctly stores primitives', () => {
    storage.set(StorageKeys.QUERY, 'tested');

    expect(storage.getState(StorageKeys.QUERY)).toBe('tested');
  });

  it('sets all data with setAll()', () => {
    storage.setAll({ key1: 'val1', key2: 'val2' });

    expect(storage.getState('key1')).toBe('val1');
    expect(storage.getState('key2')).toBe('val2');
  });

  it('remove data with delete()', () => {
    storage.setAll({ key1: 'val1', key2: 'val2' });
    storage.delete('key1');
    expect(storage.getState('key1')).toBe(null);
    expect(storage.getState('key2')).toBe('val2');
  });
});

describe('publishing and subscribing', () => {
  it('publishes to subscribers when a new key is added', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to subscribers on existing keys', () => {
    const spy = jest.fn();
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to all subscribers', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy1);
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy2);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('only publishes to listeners on the key', () => {
    const key1Spy = jest.fn();
    const key2Spy = jest.fn();
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.set(StorageKeys.UNIVERSAL_RESULTS, { test: 'test results data' });
    storage.on('update', StorageKeys.AUTOCOMPLETE, key1Spy);
    storage.on('update', StorageKeys.UNIVERSAL_RESULTS, key2Spy);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(key1Spy).toHaveBeenCalled();
    expect(key2Spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from a new key', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from an existing key', () => {
    const spy = jest.fn();
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'new test results data' });
    expect(spy).not.toHaveBeenCalled();
  });
});
