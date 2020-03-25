/** @module IconComponent */

import Component from '../component';

export default class IconComponent extends Component {
  /**
   * IconComponent
   * @param opts
   * @param opts.iconName {string}
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
     * the url to a custom image icon
     * @type {null}
     */
    this.iconUrl = opts.iconUrl || null;

    /**
     * An additional string to append to the icon's css class. Multiple
     * classes should be space delimited.
     */
    this.classNames = opts.classNames || null;

    /**
     * A unique id to pass to the icon.
     * @type {Object}
     */
    this.complexContentsParams = opts.complexContentsParams || {};
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
      iconUrl: this.iconUrl,
      iconName: this.iconName,
      name: this.iconName ? this.iconName : 'custom',
      classNames: this.classNames,
      complexContentsParams: this.complexContentsParams
    }));
  }
}
