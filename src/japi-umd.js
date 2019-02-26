import * as Core from './core/index';
import * as UI from './ui/index';

/**
 * Our API should only be instantiable once
 * @type {JAPI} The instance of JAPI
 */
const instance = null;

export default class JAPI {
  constructor(opts) {
    if (instance) {
      return instance;
    }

    opts = opts || {};

    this._components = new UI.ComponentManager();

    return this;
  }

  static init(opts) {
    return new JAPI(opts);
  }

  addComponent(){
    console.log('Add Component');
    return this;
  }

  createComponent(){
    console.log('Create Custom Component');
    return;
  }
}