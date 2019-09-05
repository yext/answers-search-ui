import Component from '../component.js';
import { ANALYTICS_EVENT_TYPE } from 'src/core/constants.js';

export default class CallToActionComponent extends Component {
  constructor (config = {}) {
    super(config);

    this.verticalConfigId = config.verticalConfigId || null;
    this.searcher = config.isUniversal || null;
    this.eventTypeName = config.eventTypeName || ANALYTICS_EVENT_TYPE.CTA_CLICK;
  }

  /**
   * the component type
   * @returns {string}
   * @override
   */
  static get type () {
    return 'CallToAction';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/calltoaction';
  }
}
