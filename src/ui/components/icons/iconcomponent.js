/** @module IconComponent */

import Component from '../component';
import Icons from '../../icons';

export default class IconComponent extends Component {
  /**
   * IconComponent
   * @param opts
   * @param opts.iconName {string}
   * @param opts.customIcon {string}
   * @param opts.iconUrl {string}
   */
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    /**
     * name of an icon from the default icon set
     * @type {string}
     */
    this.iconName = opts.iconName || 'default';

    /**
     * the markup for a fully custom icon
     * @type {*|null}
     */
    this.customIcon = opts.customIcon || null;
    /**
     * the url to a custom image icon
     * @type {null}
     */
    this.iconUrl = opts.iconUrl || null;
  }

  /**
   * getter for the image pasted to handlebars
   * @returns {string}
   */
  get image () {
    if (this.customIcon) {
      return this.customIcon;
    }

    if (this.iconUrl) {
      return `<img src="${this.iconUrl}" alt="" class="Icon-image">`;
    }

    if (Icons[this.iconName]) {
      return Icons[this.iconName];
    }

    return Icons.default;
  }

  static get type () {
    return 'IconComponent';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'icons/icon';
  }

  /**
   * allowing duplicates
   * @returns {boolean}
   * @override
   */
  static areDuplicateNamesAllowed () {
    return true;
  }

  /**
   * overrides default functionality to provide name and markup
   * @param data
   * @returns {IconComponent}
   */
  setState (data) {
    return super.setState(Object.assign(data, {
      image: this.image,
      name: this.iconName ? this.iconName : 'custom'
    }));
  }
}
