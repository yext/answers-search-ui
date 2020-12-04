import GlobalStorage from '../../../src/core/storage/storage';
import StorageKeys from '../../../src/core/storage/storagekeys';

let storage;
let stateUpdateListener;
let stateResetListener;

beforeEach(() => {
  storage = new GlobalStorage();
  stateUpdateListener = jest.fn();
  stateResetListener = jest.fn();
});

it('calls update and reset listeners onpopstate', () => {
  storage = new GlobalStorage(stateUpdateListener, stateResetListener);
  window.onpopstate();
  expect(stateUpdateListener).toBeCalled();
  expect(stateResetListener).toBeCalled();
});

describe('init', () => {
  it('should be initialized with the correct formats', () => {
    expect(storage.getAll()).toEqual({});

    storage.init('');
    expect(storage.getAll()).toEqual({});

    const expectedResult = {
      key1: 'val1',
      key2: 'val2'
    };
    storage = new GlobalStorage();
    storage.init('https://www.yext.com/?key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);

    storage = new GlobalStorage();
    storage.init('?key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);

    storage = new GlobalStorage();
    storage.init('key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);
  });
});

describe('set', () => {
  describe('vanilla set', () => {
    it('correctly stores primitives', () => {
      storage.set(StorageKeys.QUERY, 'tested');
      expect(storage.get(StorageKeys.QUERY)).toEqual('tested');

      storage.set(StorageKeys.QUERY, true);
      expect(storage.get(StorageKeys.QUERY)).toEqual(true);

      storage.set(StorageKeys.QUERY, 100);
      expect(storage.get(StorageKeys.QUERY)).toEqual(100);
    });

    it('correctly stores structures', () => {
      storage.set(StorageKeys.QUERY, { key1: { key2: 'val2' } });
      expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });

      storage.set(StorageKeys.QUERY, [1, 2, 3, 4, 5, 6]);
      expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });

      storage.set(StorageKeys.QUERY, new Map());
      expect(storage.get(StorageKeys.QUERY)).toEqual(new Map());
    });

    it('correctly handles empties', () => {
      storage.set(StorageKeys.QUERY, null);
      expect(storage.get(StorageKeys.QUERY)).toEqual(null);

      storage.set(StorageKeys.QUERY, undefined);
      expect(storage.get(StorageKeys.QUERY)).toEqual(undefined);

      storage.set(StorageKeys.QUERY, '');
      expect(storage.get(StorageKeys.QUERY)).toEqual('');
    });

    it('stores data by the provided key', () => {
      storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
      storage.set(StorageKeys.NAVIGATION, { test: 'test navigation data' });
      expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
      expect(storage.get(StorageKeys.NAVIGATION).test).toBe('test navigation data');
    });

    it('overwrites old data', () => {
      storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
      expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
      storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test navigation data' });
      expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test navigation data');

      storage.set(StorageKeys.AUTOCOMPLETE, { one: 'test data one' });
      storage.set(StorageKeys.AUTOCOMPLETE, { two: 'test data two' });
      expect(storage.get(StorageKeys.AUTOCOMPLETE).one).toBeUndefined();
      expect(storage.get(StorageKeys.AUTOCOMPLETE).two).toBe('test data two');
    });
  });
  describe('set with persist', () => {
    describe('does everything set does', () => {
      it('correctly stores primitives', () => {
        storage.setWithPersist(StorageKeys.QUERY, 'tested');
        expect(storage.get(StorageKeys.QUERY)).toEqual('tested');

        storage.setWithPersist(StorageKeys.QUERY, true);
        expect(storage.get(StorageKeys.QUERY)).toEqual(true);

        storage.setWithPersist(StorageKeys.QUERY, 100);
        expect(storage.get(StorageKeys.QUERY)).toEqual(100);
      });

      it('correctly stores structures', () => {
        storage.setWithPersist(StorageKeys.QUERY, { key1: { key2: 'val2' } });
        expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });

        storage.setWithPersist(StorageKeys.QUERY, [1, 2, 3, 4, 5, 6]);
        expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });

        storage.setWithPersist(StorageKeys.QUERY, new Map());
        expect(storage.get(StorageKeys.QUERY)).toEqual(new Map());
      });

      it('correctly handles empties', () => {
        storage.setWithPersist(StorageKeys.QUERY, null);
        expect(storage.get(StorageKeys.QUERY)).toEqual(null);

        storage.setWithPersist(StorageKeys.QUERY, undefined);
        expect(storage.get(StorageKeys.QUERY)).toEqual(undefined);

        storage.setWithPersist(StorageKeys.QUERY, '');
        expect(storage.get(StorageKeys.QUERY)).toEqual('');
      });

      it('stores data by the provided key', () => {
        storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
        storage.setWithPersist(StorageKeys.NAVIGATION, { test: 'test navigation data' });
        expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
        expect(storage.get(StorageKeys.NAVIGATION).test).toBe('test navigation data');
      });

      it('overwrites old data', () => {
        storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
        expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
        storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { test: 'test navigation data' });
        expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test navigation data');

        storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { one: 'test data one' });
        storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { two: 'test data two' });
        expect(storage.get(StorageKeys.AUTOCOMPLETE).one).toBeUndefined();
        expect(storage.get(StorageKeys.AUTOCOMPLETE).two).toBe('test data two');
      });
    });

    it('does not push to persistent storage until flush', () => {
      storage.setWithPersist(StorageKeys.QUERY, 'something');
      storage.setWithPersist(StorageKeys.QUERY, 'else');
      storage.setWithPersist(StorageKeys.AUTOCOMPLETE, 'other');
      expect(storage.persistentStorage.get(StorageKeys.QUERY)).toBeUndefined();
      expect(storage.persistentStorage.get(StorageKeys.AUTOCOMPLETE)).toBeUndefined();
    });
  });

  it('accepts a combination of set and setWithPersist', () => {
    storage.set(StorageKeys.QUERY, 'val1');
    storage.setWithPersist(StorageKeys.QUERY, 'val2');
    expect(storage.get(StorageKeys.QUERY, 'val2')).toEqual('val2');

    storage.set(StorageKeys.QUERY, 'val3');
    expect(storage.get(StorageKeys.QUERY, 'val3')).toEqual('val3');
  });
});

describe('get', () => {
  it('returns null for unset state', () => {
    expect(storage.get(StorageKeys.QUERY)).toBeNull();
  });
});

describe('getAll', () => {
  it('returns the expected format', () => {
    storage.set('key1', 'val1');
    storage.set('key2', 'val2');
    storage.set('key3', '');
    storage.set('key4', undefined);
    storage.set('key5', null);
    storage.set('key6', {});
    storage.set('key7', []);

    expect(storage.getAll()).toEqual({
      key1: 'val1',
      key2: 'val2',
      key3: '',
      key4: undefined,
      key5: null,
      key6: {},
      key7: []
    });
  });

  it('returns empty map for empty get all', () => {
    expect(storage.getAll()).toEqual(new Map());
  });
});

describe('delete', () => {
  it('removes data with delete()', () => {
    storage.set('key1', 'val1');
    storage.set('key2', 'val2');
    storage.delete('key1');
    expect(storage.get('key1')).toBeNull();
    expect(storage.get('key2')).toEqual('val2');
  });

  it('deletes data from persistent storage', () => {
    storage.set('key1', 'val1');
    storage.set('key2', 'val2');
    storage.delete('key1');
    expect(storage.persistentStorage.get('key1')).toBeUndefined();
    expect(storage.persistentStorage.get('key2')).toEqual('val2');
  });

  it('deletes data from persistent storage buffer', () => {
    storage.setWithPersist('key1', 'val1');
    storage.setWithPersist('key2', 'val2');
    storage.delete('key1');
    expect(storage.persistentStorageBuffer.get('key1')).toBeUndefined();
    expect(storage.persistentStorageBuffer.get('key2')).toEqual('val2');
  });
});

describe('on', () => {
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
});

describe('off', () => {
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

describe('flushPersist', () => {
  it('can flush the persistent storage buffer', () => {
    storage.setWithPersist('key1', 'val1');
    storage.setWithPersist('key2', 'val2');
    expect(storage.persistentStorage.get('key1')).toBeUndefined();
    expect(storage.persistentStorage.get('key2')).toBeUndefined();
    storage.flushPersist();
    expect(storage.persistentStorage.get('key1')).toEqual('val1');
    expect(storage.persistentStorage.get('key2')).toEqual('val2');
    expect(storage.persistentStorageBuffer).toEqual(new Map());
  });

  it('can flush an empty buffer', () => {
    storage.flush();
  });

  it('calls update listeners on flush', () => {
    storage = new GlobalStorage(stateUpdateListener, stateResetListener);
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    expect(stateUpdateListener).toBeCalled();
    expect(stateResetListener).not.toBeCalled();
  });
});

describe('getUrlWithCurrentState', () => {
  it('passes from persistent storage', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    storage.flushPersist();
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
  });

  it('adds buffer entries to the url', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
    storage.flushPersist();

    storage.setWithPersist(StorageKeys.AUTOCOMPLETE, 'val2');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1&autocomplete=val2');
  });

  it('overrides params from persistent storage with buffer', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
    storage.flushPersist();

    storage.setWithPersist(StorageKeys.QUERY, 'val2');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val2');
  });
});
