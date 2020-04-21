/** @module DOM */

/* global HTMLElement, HTMLDocument, Window, Element */

let document = window.document;

/**
 * Static interface for interacting with the DOM API.
 * @namespace
 */
export default class DOM {
  static setup (d, p) {
    document = d;
  }

  /**
   * create a HTMLElement from and HTML string
   * @param {string} html The HTML to parse to a DOM node.
   * @return {HTMLElement}
   */
  static create (html) {
    if ('createRange' in document) {
      // prefer this implementation as it has wider browser support
      // and it's better performing.
      // see https://davidwalsh.name/convert-html-stings-dom-nodes
      const container = document.createElement('div');
      const frag = document.createRange().createContextualFragment(html);
      container.appendChild(frag);
      return container;
    }

    // fallback to this because of a bug in jsdom that causes tests to fail
    // see: https://github.com/jsdom/jsdom/issues/399
    return new DOMParser().parseFromString(html, 'text/html').body;
  }

  /**
   * query the DOM for a given css selector
   * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
   * @param {string} selector the CSS selector to query for
   *
   * @returns {HTMLElement} the FIRST node it finds, if any
   */
  static query (parent, selector) {
    // Facade, shifting the selector to the parent argument if only one
    // argument is provided
    if (selector === undefined) {
      selector = parent;
      parent = document;
    }

    if (selector instanceof HTMLElement || selector instanceof Window || selector instanceof HTMLDocument) {
      return selector;
    }

    return parent.querySelector(selector);
  }

  /**
   * query the DOM for a given css selector
   * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
   * @param {string} selector the CSS selector to query for
   *
   * @returns {Array} the FIRST node it finds, if any
   */
  static queryAll (parent, selector) {
    // Facade, shifting the selector to the parent argument if only one
    // argument is provided
    if (selector === undefined) {
      selector = parent;
      parent = document;
    }

    // handle the case where client code is using a pointer to a dom node and it's null, e.g. this._container
    if (parent == null) {
      parent = document;
    }

    if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
      return [selector];
    }

    return Array.from(parent.querySelectorAll(selector));
  }

  static onReady (cb) {
    if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
      cb();
      return;
    }

    DOM.on(document, 'DOMContentLoaded', cb);
  }

  /**
   * createEle will create a {HTMLElement} and apply the properties attributes through an object provided.
   * @param {string} el The element `tag` name to construct
   * @param {Object} opts_data Optional attributes to apply to the new HTMLElement
   */
  static createEl (el, opts_data = {}) {
    let node = document.createElement(el);
    let props = Object.keys(opts_data);

    for (let i = 0; i < props.length; i++) {
      if (props[i] === 'class') {
        DOM.addClass(node, opts_data[props[i]]);
        continue;
      }

      node[props[i]] = opts_data[props[i]];
    }

    return node;
  }

  static append (parent, node) {
    if (node === undefined) {
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

  static addClass (node, className) {
    if (!node) {
      return;
    }

    let classes = className.split(',');
    let len = classes.length;

    for (let i = 0; i < len; i++) {
      node.classList.add(classes[i]);
    }
  }

  static empty (parent) {
    parent.innerHTML = '';
  }

  static css (selector, styles) {
    let node = DOM.query(selector);

    for (let prop in styles) {
      node.style[prop] = styles[prop];
    }
  }

  static attr (selector, attr, val) {
    DOM.query(selector).setAttribute(attr, val);
  }

  static attributes (selector, attrs) {
    Object.entries(attrs)
      .forEach(([attr, val]) => this.attr(selector, attr, val));
  }

  static trigger (selector, event, settings) {
    let e = DOM._customEvent(event, settings);
    DOM.query(selector).dispatchEvent(e);
  }

  // TODO (agrow) investigate removing this
  // Event constructor polyfill
  static _customEvent (event, settings) {
    const _settings = {
      bubbles: true,
      cancelable: true,
      detail: null,
      ...settings
    };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, _settings.bubbles, _settings.cancelable, _settings.detail);
    return evt;
  }

  static on (selector, evt, handler) {
    DOM.query(selector).addEventListener(evt, handler);
  }

  static once (selector, evt, handler) {
    DOM.query(selector).addEventListener(evt, handler, { once: true });
  }

  static off (selector, evt, handler) {
    DOM.query(selector).removeEventListener(evt, handler);
  }

  static delegate (ctxt, selector, evt, handler) {
    let el = DOM.query(ctxt);
    el.addEventListener(evt, function (event) {
      let target = event.target;
      while (!target.isEqualNode(el)) {
        if (DOM.matches(target, selector)) {
          handler(event, target);
          break;
        }
        target = target.parentNode;
      }
    });
  }

  // TODO (agrow) investigate removing this
  // Element.matches polyfill
  static matches (element, potentialMatch) {
    if (Element.prototype.matches) {
      return element.matches(potentialMatch);
    }
    if (Element.prototype.msMatchesSelector) {
      return element.msMatchesSelector(potentialMatch);
    }
    if (Element.prototype.webkitMatchesSelector) {
      return element.webkitMatchesSelector(potentialMatch);
    }
  }
}
