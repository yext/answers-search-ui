/** @module AlexisComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import { DOM } from '../..';

export default class AlexisComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      let event = [r.searchState, new Date().toTimeString()];
      this.timelineEvents.push(event);
      this.setState();
    });
  }

  /**
   * The aliased used by the component manager for creation.
   */
  static get type () {
    return 'Alexis';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'search/alexis';
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => `${event[0]} - ${event[1]}`)
    });
  }

  onMount () {
    DOM.on('.js-Alexis-testButton', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }
}
