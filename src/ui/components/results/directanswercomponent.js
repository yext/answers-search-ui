import Component from '../component';

export default class DirectAnswerComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 'directAnswer';

    this._templateName = 'results/directanswer';
  }

  mount() {
    if (!this.hasState('answer')) {
      this.unMount();
      return this;
    }

    super.mount();
  }

  static get type() {
    return 'DirectAnswer';
  }
}
