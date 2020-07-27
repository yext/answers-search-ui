/** @module TimelineComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';

export default class TimelineComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);
    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      this.timelineEvents.push([r.searchState, new Date().toLocaleString()]);
      this.setState();
    });
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => event[0].toUpperCase() + ' at ' + event[1].toString())
    });
  }

  onMount () {
    DOM.on('.js-Timeline-clearButton', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }

  static get type () {
    return 'Timeline';
  }

  static defaultTemplateName () {
    return 'search/timeline';
  }
}
