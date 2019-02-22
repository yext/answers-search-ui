import { StandardAPI, AdvancedAPI } from './index';

export default JAPI = {
  init: function(opts) {
    opts = opts || {};

    if (opts.advanced) {
      return new AdvancedAPI(opts).init();
    }

    return new StandardAPI(opts).init();
  }
}