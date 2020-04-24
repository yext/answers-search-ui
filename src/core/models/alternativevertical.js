import { AnswersConfigError } from '../errors/errors';

/**
 * The AlternativeVertical is a model that is used to power the search
 * suggestions info box. It's initialized through the configuration provided
 * to the component.
 */
export default class AlternativeVertical {
  constructor (config) {
    /**
     * The name of the vertical that is exposed for the link
     * @type {string}
     */
    this.label = config.label;
    if (typeof this.label !== 'string') {
      throw new AnswersConfigError(
        'label is a required configuration option for verticalPage.',
        'AlternativeVertical'
      );
    }

    /**
     * The complete URL, including the params
     * @type {string}
     */
    this.url = config.url;
    if (typeof this.url !== 'string') {
      throw new AnswersConfigError(
        'url is a required configuration option for verticalPage.',
        'AlternativeVertical'
      );
    }

    /**
     * name of an icon from the default icon set
     * @type {string}
     */
    this.iconName = config.iconName;

    /**
     * URL of an icon
     * @type {string}
     */
    this.iconUrl = config.iconUrl;

    /**
     * Whether the vertical has an icon
     * @type {string}
     */
    this.hasIcon = this.iconName || this.iconUrl;

    /**
     * The number of results to display next to each alternative
     * vertical
     * @type {number}
     */
    this.resultsCount = config.resultsCount;
  }
}
