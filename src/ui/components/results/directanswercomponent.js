/** @module DirectAnswerComponent */

import Component from '../component';

export default class DirectAnswerComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = 'directAnswer';
    this._templateName = 'results/directanswer';
  }

  beforeMount () {
    if (!this.hasState('answer')) {
      return false;
    }

    return true;
  }

  static get type () {
    return 'DirectAnswer';
  }
}
