/** @module TimelineComponent */

import StorageKeys from '../../../core/storage/storagekeys';
import Component from '../component';
import DOM from '../../dom/dom';

export default class TimelineComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);
    console.log("CONSTRUCT");
    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      this.timelineEvents.push(r.searchState);
      console.log('pooooosh');
      console.log(this.timelineEvents);
      this.setState();
    });
  }

  onMount () {
    DOM.on('.js-TimeLine-clear', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => [event.toUpperCase(), new Date().toTimeString()]),
    })
  }

  static get type () {
    return 'TimelineComponent'
  }

  static defaultTemplateName() {
    return 'search/timeline'
  }
}