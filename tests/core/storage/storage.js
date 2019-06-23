import Storage from '../../../src/core/storage/storage';
import * as StorageKeys from '../../../src/core/storage/storagekeys';

let storage;

beforeEach(() => {
  storage = new Storage();
});

describe('storing and retrieving', () => {
  it('stores data by the provided key', () => {
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    storage.insert(StorageKeys.NAVIGATION, { key: StorageKeys.NAVIGATION });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).key).toBe(StorageKeys.AUTOCOMPLETE);
    expect(storage.getState(StorageKeys.NAVIGATION).key).toBe(StorageKeys.NAVIGATION);
  });

  it('overwrites old data', () => {
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).key).toBe(StorageKeys.AUTOCOMPLETE);
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.NAVIGATION });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).key).toBe(StorageKeys.NAVIGATION);
  });

  it('merges data (doesn\'t remove missing keys)', () => {
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    storage.insert(StorageKeys.NAVIGATION, { key: StorageKeys.NAVIGATION });
    storage.insert(StorageKeys.DIRECT_ANSWER, { key: StorageKeys.DIRECT_ANSWER });
    expect(storage.getState(StorageKeys.AUTOCOMPLETE).key).toBe(StorageKeys.AUTOCOMPLETE);
    expect(storage.getState(StorageKeys.NAVIGATION).key).toBe(StorageKeys.NAVIGATION);
    expect(storage.getState(StorageKeys.DIRECT_ANSWER).key).toBe(StorageKeys.DIRECT_ANSWER);
  });
});

describe('publishing and subscribing', () => {
  it('publishes to subscribers when a new key is added', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to subscribers on existing keys', () => {
    const spy = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.NAVIGATION });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to all subscribers', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy1);
    storage.on('update', StorageKeys.AUTOCOMPLETE, spy2);
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.NAVIGATION });
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('only publishes to listeners on the module', () => {
    const module1Spy = jest.fn();
    const module2Spy = jest.fn();
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.AUTOCOMPLETE });
    storage.insert(StorageKeys.UNIVERSAL_RESULTS, { key: StorageKeys.UNIVERSAL_RESULTS });
    storage.on('update', StorageKeys.AUTOCOMPLETE, module1Spy);
    storage.on('update', StorageKeys.UNIVERSAL_RESULTS, module2Spy);
    storage.insert(StorageKeys.AUTOCOMPLETE, { key: StorageKeys.NAVIGATION });
    expect(module1Spy).toHaveBeenCalled();
    expect(module2Spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from a new key', () => {
    const spy = jest.fn();
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.insert(StorageKeys.VERTICAL_RESULTS, { key: StorageKeys.VERTICAL_RESULTS });
    expect(spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from an existing key', () => {
    const spy = jest.fn();
    storage.insert(StorageKeys.VERTICAL_RESULTS, { key: StorageKeys.VERTICAL_RESULTS });
    storage.on('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.off('update', StorageKeys.VERTICAL_RESULTS, spy);
    storage.insert(StorageKeys.VERTICAL_RESULTS, { key: StorageKeys.AUTOCOMPLETE });
    expect(spy).not.toHaveBeenCalled();
  });
});
