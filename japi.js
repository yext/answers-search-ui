import StandardAPI from './src/interfaces/standard';
import AdvancedAPI from './src/interfaces/advanced';

export default JAPI = {
  init: function(opts) {
    opts = opts || {};

    if (opts.advanced) {
      return new AdvancedAPI(opts).init();
    }

    return new StandardAPI(opts).init();
  }
}