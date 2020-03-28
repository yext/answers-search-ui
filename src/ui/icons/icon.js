export default class SVGIcon {
  /**
   * @param config
   * @param config.name
   * @param config.path
   * @param config.complexContents
   * @param config.viewBox
   * @constructor
   */
  constructor (config) {
    /**
     * the name of the icon
     */
    this.name = config.name;
    /**
     * an svg path definition
     */
    this.path = config.path;
    /**
     * if not using a path, a the markup for a complex SVG
     */
    this.complexContents = config.complexContents;
    /**
     * the view box definition, defaults to 24x24
     * @type {string}
     */
    this.viewBox = config.viewBox || '0 0 24 24';
    /**
     * actual contents used
     */
    this.contents = this.pathDefinition();
  }

  pathDefinition () {
    if (this.complexContents) {
      return this.complexContents;
    }

    return `<path d="${this.path}"></path>`;
  }

  parseContents (complexContentsParams) {
    let contents = this.contents;
    if (typeof contents === 'function') {
      contents = contents(complexContentsParams);
    }
    return `<svg viewBox="${this.viewBox}" xmlns="http://www.w3.org/2000/svg">${contents}</svg>`;
  }

  /**
   * returns the svg markup
   */
  markup () {
    if (typeof this.contents === 'function') {
      return complexContentsParams => this.parseContents(complexContentsParams);
    }
    return this.parseContents();
  }
}
