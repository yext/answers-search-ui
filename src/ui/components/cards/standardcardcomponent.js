/** @module StandardCardComponent */

import Component from '../component';
import { cardTemplates, cardTypes } from './consts';

export default class StandardCardComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * verticalConfigId used for analytics
     * @type {string}
     * @private
     */
    this._verticalConfigId = config.verticalConfigId;

    /**
     * isUniversal is used for analytics and is set to
     * true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this._isUniversal = config.isUniversal || false;
  }

  static get type () {
    return cardTypes.Standard;
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return cardTemplates.Standard;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  /**
   * helper to construct the eventOptions object for the title link
   * @param entityId The ID of the result item, if present
   * @param url The url of the result item, if present
   * @returns {string}
   */
  eventOptions (entityId, url) {
    const options = {
      verticalConfigId: this._verticalConfigId,
      searcher: this._isUniversal ? 'UNIVERSAL' : 'VERTICAL'
    };

    if (entityId) {
      options.entityId = entityId;
    } else {
      options.url = url;
    }

    return JSON.stringify(options);
  }

  /**
   * passes eventOptions to the viewModel
   * @override
   * @param data
   * @returns {StandardCardComponent}
   */
  setState (data) {
    return super.setState(Object.assign(data, {
      eventOptions: this.eventOptions(data.id, data.link)
    }));
  }
}
