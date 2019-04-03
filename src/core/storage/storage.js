import ModuleData from './moduledata';

export default class Storage {
  constructor() {
    this._moduleDataContainer = {}

    this._futureListeners = {};
  };

  init() {

  }

  insert(data) {
    let moduleIds = Object.keys(data);
    for (let i = 0; i < moduleIds.length; i ++) {
      let moduleId = moduleIds[i];
      console.log(data[moduleId]);
      if (this._moduleDataContainer[moduleId] === undefined) {
        this._moduleDataContainer[moduleId] = new ModuleData(moduleId);
        this._applyFutureListeners(moduleId);
      }

      this._moduleDataContainer[moduleId].set(data[moduleId]);
    }
  }

  getState(moduleId) {
    if (this._moduleDataContainer[moduleId]) {
      return this._moduleDataContainer[moduleId].raw();
    }
    return {};
  }

  remove() {

  }

  on(evt, moduleId, cb) {
    let moduleData = this._moduleDataContainer[moduleId];
    if (moduleData === undefined) {
      if (this._futureListeners[moduleId] === undefined) {
        this._futureListeners[moduleId] = [];
      }

      this._futureListeners[moduleId].push({
        event: evt,
        cb: cb
      })

      return;
    }

    this._moduleDataContainer[moduleId].on(evt, cb);
  }

  _applyFutureListeners(moduleId) {
    let futures = this._futureListeners[moduleId];
    if (!futures) {
      return;
    }

    for (let i = 0; i < futures.length; i ++) {
      let future = futures[i];
      this.on(future.event, moduleId, future.cb);
    }
    delete this._futureListeners[moduleId];
  }
}

class ModuleDataDelegator {
  constructor() {
    this.data = {
      // MODULEID: DataTransformer
    }
  }
}