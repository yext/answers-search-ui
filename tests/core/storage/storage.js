import GlobalStorage from '../../../src/core/storage/storage';
import StorageListener from '../../../src/core/storage/storagelistener';
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
  storage = new GlobalStorage({ update: stateUpdateListener, reset: stateResetListener });
  window.dispatchEvent(new CustomEvent('popstate'));
  expect(stateUpdateListener).toBeCalled();
  expect(stateResetListener).toBeCalled();
});

describe('init', () => {
  it('should be initialized with empty map w/o init', () => {
    expect(storage.getAll()).toEqual(new Map());
  });

  it('should be initialized with empty map with empty string', () => {
    storage.init('');
    expect(storage.getAll()).toEqual(new Map());
  });

  const expectedResult = new Map([
    ['key1', 'val1'],
    ['key2', 'val2']
  ]);

  it('should be initialized with an absolute url', () => {
    storage = new GlobalStorage();
    storage.init('https://www.yext.com/?key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);
  });

  it('should be initialized with a query param string w/ ?', () => {
    storage = new GlobalStorage();
    storage.init('?key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);
  });

  it('should be initialized with a query param string w/o ?', () => {
    storage = new GlobalStorage();
    storage.init('key1=val1&key2=val2');
    expect(storage.getAll()).toEqual(expectedResult);
  });
});

describe('set', () => {
  describe('vanilla set', () => {
    describe('correctly stores various data types', () => {
      it('correctly stores primitive string', () => {
        storage.set(StorageKeys.QUERY, 'tested');
        expect(storage.get(StorageKeys.QUERY)).toEqual('tested');
      });

      it('correctly stores primitive boolean', () => {
        storage.set(StorageKeys.QUERY, true);
        expect(storage.get(StorageKeys.QUERY)).toEqual(true);
      });

      it('correctly stores primitive number', () => {
        storage.set(StorageKeys.QUERY, 100);
        expect(storage.get(StorageKeys.QUERY)).toEqual(100);
      });

      it('correctly stores js object', () => {
        storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
        storage.set(StorageKeys.NAVIGATION, { test: 'test navigation data' });
        expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
        expect(storage.get(StorageKeys.NAVIGATION).test).toBe('test navigation data');
      });

      it('correct stores nested js object', () => {
        storage.set(StorageKeys.QUERY, { key1: { key2: 'val2' } });
        expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });
      });

      it('correctly stores javascript array', () => {
        storage.set(StorageKeys.QUERY, [1, 2, 3, 4, 5, 6]);
        expect(storage.get(StorageKeys.QUERY)).toEqual([1, 2, 3, 4, 5, 6]);
      });

      it('correctly stores javascript map', () => {
        storage.set(StorageKeys.QUERY, new Map());
        expect(storage.get(StorageKeys.QUERY)).toEqual(new Map());
      });

      it('correctly handles null value', () => {
        storage.set(StorageKeys.QUERY, null);
        expect(storage.get(StorageKeys.QUERY)).toEqual(null);
      });

      it('correctly handles undefined value', () => {
        expect(() => storage.set(StorageKeys.QUERY, undefined)).toThrow();
      });

      it('correctly handles empty string value', () => {
        storage.set(StorageKeys.QUERY, '');
        expect(storage.get(StorageKeys.QUERY)).toEqual('');
      });

      it('correctly handles null key', () => {
        expect(() => storage.set(null, 'string')).toThrow();
      });

      it('correctly handles undefined key', () => {
        expect(() => storage.set(undefined, 'string')).toThrow();
      });

      it('correctly handles non-string key', () => {
        expect(() => storage.set({}, 'string')).toThrow();
      });
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
      describe('correctly stores various data types', () => {
        it('correctly stores primitive string', () => {
          storage.setWithPersist(StorageKeys.QUERY, 'tested');
          expect(storage.get(StorageKeys.QUERY)).toEqual('tested');
        });

        it('correctly stores primitive boolean', () => {
          storage.setWithPersist(StorageKeys.QUERY, true);
          expect(storage.get(StorageKeys.QUERY)).toEqual(true);
        });

        it('correctly stores primitive number', () => {
          storage.setWithPersist(StorageKeys.QUERY, 100);
          expect(storage.get(StorageKeys.QUERY)).toEqual(100);
        });

        it('correctly stores js object', () => {
          storage.setWithPersist(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
          storage.setWithPersist(StorageKeys.NAVIGATION, { test: 'test navigation data' });
          expect(storage.get(StorageKeys.AUTOCOMPLETE).test).toBe('test autocomplete data');
          expect(storage.get(StorageKeys.NAVIGATION).test).toBe('test navigation data');
        });

        it('correct stores nested js object', () => {
          storage.setWithPersist(StorageKeys.QUERY, { key1: { key2: 'val2' } });
          expect(storage.get(StorageKeys.QUERY)).toEqual({ key1: { key2: 'val2' } });
        });

        it('correctly stores javascript array', () => {
          storage.setWithPersist(StorageKeys.QUERY, [1, 2, 3, 4, 5, 6]);
          expect(storage.get(StorageKeys.QUERY)).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it('correctly stores javascript map', () => {
          storage.setWithPersist(StorageKeys.QUERY, new Map());
          expect(storage.get(StorageKeys.QUERY)).toEqual(new Map());
        });

        it('correctly handles null', () => {
          storage.setWithPersist(StorageKeys.QUERY, null);
          expect(storage.get(StorageKeys.QUERY)).toEqual(null);
        });

        it('correctly handles undefined', () => {
          expect(() => storage.set(StorageKeys.QUERY, undefined)).toThrow();
        });

        it('correctly handles empty string', () => {
          storage.setWithPersist(StorageKeys.QUERY, '');
          expect(storage.get(StorageKeys.QUERY)).toEqual('');
        });
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

    it('stringifies non-strings for persistent storage', () => {
      const val = { test: 'val1' };
      storage.setWithPersist(StorageKeys.AUTOCOMPLETE, val);
      expect(storage.persistentStorage.get(StorageKeys.AUTOCOMPLETE)).toEqual(JSON.stringify(val));
    });

    it('changes persistent storage', () => {
      storage.setWithPersist(StorageKeys.AUTOCOMPLETE, 'val1');
      expect(storage.persistentStorage.get(StorageKeys.AUTOCOMPLETE)).toEqual('val1');
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
  it('returns undefined for unset state', () => {
    expect(storage.get(StorageKeys.QUERY)).toBeUndefined();
  });
});

describe('getAll', () => {
  it('returns the expected format', () => {
    storage.set('key1', 'val1');
    storage.set('key2', 'val2');
    storage.set('key3', '');
    storage.set('key4', null);
    storage.set('key5', {});
    storage.set('key6', []);

    expect(storage.getAll()).toEqual(new Map([
      ['key1', 'val1'],
      ['key2', 'val2'],
      ['key3', ''],
      ['key4', null],
      ['key5', {}],
      ['key6', []]
    ]));
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
    storage.pushStateToHistory();
    expect(storage.get('key1')).toBeUndefined();
    expect(storage.get('key2')).toEqual('val2');
  });

  it('deletes data from persistent storage', () => {
    storage.setWithPersist('key1', 'val1');
    storage.setWithPersist('key2', 'val2');
    storage.delete('key1');
    storage.pushStateToHistory();
    expect(storage.persistentStorage.get('key1')).toBeUndefined();
    expect(storage.persistentStorage.get('key2')).toEqual('val2');
  });

  it('deletes data from persistent storage buffer', () => {
    storage.setWithPersist('key1', 'val1');
    storage.setWithPersist('key2', 'val2');
    storage.delete('key1');
    expect(storage.persistentStorage.get('key1')).toBeUndefined();
    expect(storage.persistentStorage.get('key2')).toEqual('val2');
  });

  it('correctly handles null key', () => {
    expect(() => storage.delete(null, 'string')).toThrow();
  });

  it('correctly handles undefined key', () => {
    expect(() => storage.delete(undefined, 'string')).toThrow();
  });

  it('correctly handles non-string key', () => {
    expect(() => storage.delete({}, 'string')).toThrow();
  });
});

describe('registerListener', () => {
  it('publishes to subscribers when a new key is added', () => {
    const spy = jest.fn();
    const listener = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.registerListener(listener);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to subscribers on existing keys', () => {
    const spy = jest.fn();
    const listener = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.registerListener(listener);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to all subscribers', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    const listener1 = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy1);
    const listener2 = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy2);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.registerListener(listener1);
    storage.registerListener(listener2);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('only publishes to listeners on the key', () => {
    const key1Spy = jest.fn();
    const key2Spy = jest.fn();
    const listener1 = new StorageListener('update', StorageKeys.AUTOCOMPLETE, key1Spy);
    const listener2 = new StorageListener('update', StorageKeys.UNIVERSAL_RESULTS, key2Spy);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'test autocomplete data' });
    storage.set(StorageKeys.UNIVERSAL_RESULTS, { test: 'test results data' });
    storage.registerListener(listener1);
    storage.registerListener(listener2);
    storage.set(StorageKeys.AUTOCOMPLETE, { test: 'new test autocomplete data' });
    expect(key1Spy).toHaveBeenCalled();
    expect(key2Spy).not.toHaveBeenCalled();
  });

  it('throws on incorrect event type', () => {
    const listener1 = new StorageListener(null, StorageKeys.QUERY, jest.fn());
    const listener2 = new StorageListener(undefined, StorageKeys.QUERY, jest.fn());
    expect(() => storage.registerListener(listener1)).toThrow();
    expect(() => storage.registerListener(listener2)).toThrow();
  });

  it('throws on incorrect storage key', () => {
    const listener1 = new StorageListener('update', null, jest.fn());
    const listener2 = new StorageListener('update', undefined, jest.fn());
    expect(() => storage.registerListener(listener1)).toThrow();
    expect(() => storage.registerListener(listener2)).toThrow();
  });

  it('throws on incorrect callback', () => {
    const listener1 = new StorageListener('update', 'QUERY', undefined);
    const listener2 = new StorageListener('update', 'AUTOCOMPLETE', null);
    expect(() => storage.registerListener(listener1)).toThrow();
    expect(() => storage.registerListener(listener2)).toThrow();
  });

  it('throws on non-function callback', () => {
    const listener = new StorageListener('update', 'QUERY', 'string');
    expect(() => storage.registerListener(listener)).toThrow();
  });
});

describe('removeListener', () => {
  it('can be unsubscribed from a new key', () => {
    const spy = jest.fn();
    const listener = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.registerListener(listener);
    storage.removeListener(listener);
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    expect(spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from an existing key', () => {
    const spy = jest.fn();
    const listener = new StorageListener('update', StorageKeys.AUTOCOMPLETE, spy);
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'test results data' });
    storage.registerListener(listener);
    storage.removeListener(listener);
    storage.set(StorageKeys.VERTICAL_RESULTS, { test: 'new test results data' });
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('pushStateToHistory', () => {
  it('can flush the persistent storage buffer', () => {
    storage.setWithPersist('key1', 'val1');
    storage.setWithPersist('key2', 'val2');
    expect(storage.persistentStorage.get('key1')).toEqual('val1');
    expect(storage.persistentStorage.get('key2')).toEqual('val2');
    storage.pushStateToHistory();
    expect(storage.persistentStorage.get('key1'));
  });

  it('can push state when nothing has been set', () => {
    expect(() => storage.pushStateToHistory()).not.toThrow();
  });

  it('calls update listeners on push', () => {
    storage = new GlobalStorage({ update: stateUpdateListener, reset: stateResetListener });
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    storage.pushStateToHistory();
    expect(stateUpdateListener).toBeCalled();
    expect(stateResetListener).not.toBeCalled();
  });
});

describe('getUrlWithCurrentState', () => {
  it('passes from persistent storage', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    storage.pushStateToHistory();
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
  });

  it('adds buffer entries to the url', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
    storage.pushStateToHistory();

    storage.setWithPersist(StorageKeys.AUTOCOMPLETE, 'val2');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1&autocomplete=val2');
  });

  it('overrides params from persistent storage with buffer', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'val1');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val1');
    storage.pushStateToHistory();

    storage.setWithPersist(StorageKeys.QUERY, 'val2');
    expect(storage.getUrlWithCurrentState()).toEqual('query=val2');
  });
});
