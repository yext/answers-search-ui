import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';

export default class TimelineComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    this.timelineEvents = [];
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, r => {
      this.timelineEvents.push((new Date().toLocaleTimeString()) + ' - ' + r.searchState);
      this.setState();
    });
  }

  static get type () {
    return 'Timeline';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'search/timeline';
  }

  setState () {
    return super.setState({
      events: this.timelineEvents.map(event => event.toUpperCase())
    });
  }

  onMount () {
    DOM.on('.js-TimeLine-clearButton', 'click', e => {
      this.timelineEvents = [];
      this.setState();
    });
  }
}
