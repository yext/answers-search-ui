import Component from '../component';

export default class ResultsItemComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._templateName = 'results/resultsitem';
  }

  static get type() {
    return 'ResultsItemComponent';
  }

  // render(data) {
  //   if (this._parent._renders[this.constructor.type]) {
  //     console.log('ah');
  //     this._render = this._parent._renders[this.constructor.type];
  //     return super.render(data);
  //   }
  // }
}