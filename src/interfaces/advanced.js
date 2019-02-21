import StandardAPI from './standard';

export default class AdvancedAPI extends StandardAPI {
  constructor(opts) {   
    console.log('\n\nAdvanced mode!');
    super(opts); 
  }

  init() {   
    return this;
  }

  widgets(template) {
    console.log('Initializing Widgets!\n\n');
    return this;
  }
}