/** @module TimelineComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * TimelineComponent displays the timeline of searches and allows the user to clear it
 * @extends Component
 */
export default class TimelineComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      console.log(r);
      this.timelineEvents.push({
        state: r.searchState,
        timestamp: r.timestamp
      });
      this.setState();
    });
    this.moduleId = StorageKeys.TIMELINE;
  }

  static get type () {
    return 'TimelineComponent';
  }

  static defaultTemplateName () {
    return 'search/timeline';
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => {
        const formattedEvent = {};
        formattedEvent.state = event.state.toUpperCase();
        formattedEvent.timestamp = event.timestamp;
        return formattedEvent;
      })
    });
  }

  onMount () {
    DOM.on('.js-Timeline-clear', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }
}
