/** @module TimelineComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * TimelineComponent will display the timeline of a search or set of searches.
 *
 * @extends Component
 */
export default class TimelineComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      this.timelineEvents.push(r.searchState);
      this.setState();
    });
  }

  static get type () {
    return 'SearchTimeline';
  }

  static defaultTemplateName () {
    return 'search/timeline';
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => event.toUpperCase())
    });
  }

  onMount () {
    DOM.on('.js-SearchTimeline-clearButton', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }
}
