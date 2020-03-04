/** @module FooterComponent */

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
    this._config.newWindow = config.newWindow || false;

    /**
     * Either the name of an icon to display or a url to an image.
     * @type {string}
     */
    const logo = config.logo || 'yext';

    if (Icons[logo]) {
      /**
       * Icon name of footer image
       * @type {string}
       */
      this._config.icon = logo;
    } else {
      /**
       * Url of footer image
       * @type {string}
       */
      this._config.image = logo;
    }

    /**
     * Screen reader text that will only be displayed to screen readers.
     * @type {string}
     */
    this._config.screenReaderText = config.screenReaderText;
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
