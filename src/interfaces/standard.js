import * as Core from '../index';

export default class StandardAPI {
    constructor(opts) {
      if (this.constructor === StandardAPI) {
        console.log('Standard mode!');
      }
      this._search = new Core.Search();
      this._rendering = new Core.Rendering();
      this._analytics = new Core.Analytics();
    }

    init() {
      return this;
    }
  }
  