/** @module IconComponent */

import Component from '../component';
import Icons from '../../icons';

export default class IconComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.iconName = opts.iconName || 'default';
    this.customIcon = opts.customIcon || null;
    this.iconUrl = opts.iconUrl || null;
  }

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

  setState (data) {
    return super.setState(Object.assign(data, {
      image: this.image,
      name: this.iconName ? this.iconName : 'custom'
    }));
  }
}
