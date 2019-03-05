const document = window.document;
const parser = new DOMParser();

export default class DOM {
  /**
   * create a HTMLElement from and HTML string
   * @param {string} html The HTML to parse to a DOM node.
   * @return {HTMLElement}
   */
  static create(html) {
    return this.parser.parseFromString(html, 'text/html');
  }

  /**
   * query the DOM for a given css selector
   * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
   * @param {string} selector the CSS selector to query for
   *
   * @returns {HTMLElement} the FIRST node it finds, if any
   */
  static query(parent, selector) {
    // Facade, shifting the selector to the parent argument if only one
    // argument is provided
    if (!selector) {
      selector = parent;
      parent = document;
    }

    return parent.querySelectorAll(selector)[0];
  }

  /**
   * createEle will create a {HTMLElement} and apply the properties attributes through an object provided.
   * @param {string} el The element `tag` name to construct
   * @param {Object} opts_data Optional attributes to apply to the new HTMLElement
   */
  static createEl(el, opts_data = {}) {
    let node = document.createElement(el),
        props = Object.keys(opts_data);

    for (let i = 0; i < props.length; i++) {
      node[props[i]] = opts_data[props[i]];
    }

    return node;
  }

  static append(parent, node) {
    if (!node) {
      node = parent;
      parent = document;
    }

    if (typeof parent === 'string') {
      parent = DOM.query(parent);
    }

    // Support HTML injection as well as HTMLElement appends
    if (typeof node === 'string') {
      parent.insertAdjacentHTML('afterBegin', node);
    } else {
      parent.appendChild(node);
    }
  }

  static addClass(node, className) {
    let classes = className.split(','),
        len = classes.length;

    for (let i = 0; i < len; i ++) {
      node.classList.add(classes[i]);
    }
  }

  static empty(parent) {
    parent.innerHTML = '';
  }
}