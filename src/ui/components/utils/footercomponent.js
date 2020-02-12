/** @module VerticalResultsComponent */

import Component from '../component';
import Icons from '../../../ui/icons/index';

export default class FooterComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * Click through url for the logo
     * @type {string}
     */
    this._config.url = config.url || 'https://yext.com';

    /**
     * Whether the logo should open the link in a new window
     * @type {boolean}
     */
    this._config.newWindow = config.newWindow;

    /**
     * Either the name of an icon to display or a url to an image.
     * @type {string}
     */
    const logo = config.logo || 'yext';

    /**
     * Icon name of footer image
     * @type {string}
     */
    this._config.icon = Icons[logo] && logo;

    /**
     * Url of footer image
     * @type {string}
     */
    this._config.image = !this._config.icon && logo;
  }

  static get duplicatesAllowed () {
    return true;
  }

  static get type () {
    return 'Footer';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'utils/footer';
  }
}
