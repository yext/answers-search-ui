import Storage from '../../../src/core/storage/storage';

let storage;

beforeEach(() => {
  storage = new Storage();
  storage.init();
});

describe('storing and retrieving', () => {
  it('stores data by moduleID', () => {
    const data = {
      module1: { key: 'module1value' },
      module2: { key: 'module2value' },
    };
    storage.insert(data);
    expect(storage.getState('module1').key).toBe('module1value');
    expect(storage.getState('module2').key).toBe('module2value');
  });

  it('overwrites old data', () => {
    const oldData = {
      module1: { key: 'module1value' },
      module2: { key: 'module2value' },
    }
    storage.insert(oldData);
    const newData = {
      module2: { key: 'newmodule2value' },
    }
    storage.insert(newData);
    expect(storage.getState('module2').key).toBe('newmodule2value');
  });

  it('merges data (doesn\'t remove missing keys)', () => {
    const oldData = {
      module1: { key: 'module1value' },
      module2: { key: 'module2value' },
    }
    storage.insert(oldData);
    const newData = {
      module3: { key: 'module3value' },
    }
    storage.insert(newData);
    expect(storage.getState('module1').key).toBe('module1value');
    expect(storage.getState('module2').key).toBe('module2value');
    expect(storage.getState('module3').key).toBe('module3value');
  });
});

describe('publishing and subscribing', () => {
  it('publishes to subscribers when a new key is added', () => {
    const spy = jest.fn();
    storage.on('update', 'module1', spy);
    const data = {
      module1: { key: 'module1value' },
    }
    storage.insert(data);
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to subscribers on existing keys', () => {
    const spy = jest.fn();
    const data = {
      module1: { key: 'module1value' },
    }
    storage.insert(data);
    storage.on('update', 'module1', spy);
    const newData = {
      module1: { key: 'newmodule1value' },
    }
    storage.insert(newData);
    expect(spy).toHaveBeenCalled();
  });

  it('publishes to all subscribers', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    const data = {
      module1: { key: 'module1value' },
    }
    storage.insert(data);
    storage.on('update', 'module1', spy1);
    storage.on('update', 'module1', spy2);
    const newData = {
      module1: { key: 'newmodule1value' },
    }
    storage.insert(newData);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('only publishes to listeners on the module', () => {
    const module1Spy = jest.fn();
    const module2Spy = jest.fn();
    const data = {
      module1: { key: 'module1value' },
      module2: { key: 'module2value' },
    }
    storage.insert(data);
    storage.on('update', 'module1', module1Spy);
    storage.on('update', 'module2', module2Spy);
    const newData = {
      module1: { key: 'newmodule1value' },
    }
    storage.insert(newData);
    expect(module1Spy).toHaveBeenCalled();
    expect(module2Spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from a new key', () => {
    const spy = jest.fn();
    storage.on('update', 'module1', spy);
    storage.off('update', 'module1', spy);
    const data = {
      module1: { key: 'module1value' },
    }
    storage.insert(data);
    expect(spy).not.toHaveBeenCalled();
  });

  it('can be unsubscribed from an existing key', () => {
    const spy = jest.fn();
    const data = {
      module1: { key: 'module1value' },
    }
    storage.insert(data);
    storage.on('update', 'module1', spy);
    storage.off('update', 'module1', spy);
    const newData = {
      module1: { key: 'newmodule1value' },
    }
    storage.insert(newData);
    expect(spy).not.toHaveBeenCalled();
  });
});
