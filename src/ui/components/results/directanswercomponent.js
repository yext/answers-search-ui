/** @module DirectAnswerComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

export default class DirectAnswerComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = StorageKeys.DIRECT_ANSWER;
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
