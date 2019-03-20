import * as Core from './core/index';
import {
  TemplateLoader,
  COMPONENTS
} from './ui/index';

/**
 * Our API should only be instantiable once
 * @type {JAPI} The instance of JAPI
 */
export default class JAPI {
  constructor(opts) {
    if (!JAPI.setInstance(this)) {
      return JAPI.getInstance();
    }

    opts = opts || {};

    this.storage = new Core.Storage();

    this.components = COMPONENTS.useStorage(this.storage);

    this.storage.insert({
      1: {
        totalResults: 2,
        results: [
          {
            title: 'Result Item',
            body: 'This is the result body for item'
          }
        ]
      }
    })

    setInterval(() => {
      let results = [];
      let numResults = Math.floor((Math.random() * 5) + 1);
      for (let i = 1; i <= numResults; i ++) {
        results.push({
          title: 'Result Item #' + i,
          body: 'This is the result body for item #' + i
        })
      }

      this.storage.insert({
        1: {
          totalResults: numResults,
          results: results
        }
      })
    }, 1000)



    this.templates = new TemplateLoader();

    return this;
  }

  static setInstance(instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance(opts) {
    return this.instance;
  }

  static get templates() {
    return this.instance.templates;
  }

  static init(opts) {
    return new JAPI(opts);
  }

  addComponent(type, opts) {
    console.log('Adding Standard Component...');
    this.components.create(type, opts).init().mount();
    return this;
  }

  createComponent(type, opts) {
    console.log('Create Custom Component...');
    this.components.create('Component', opts).init().mount();
    return;
  }
}

