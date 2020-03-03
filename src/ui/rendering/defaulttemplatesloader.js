/** @module DefaultTemplatesLoader */

import DOM from '../dom/dom';
import { COMPILED_TEMPLATES_URL } from '../../core/constants';

/**
 * DefaultTemplatesLoader exposes an interface for loading the default set of compiled templates
 * asynchronously from the server. Note that this class cannot be repurposed to fetch custom
 * templates hosted by a client.
 */
export default class DefaultTemplatesLoader {
  constructor (onLoaded) {
    if (!DefaultTemplatesLoader.setInstance(this)) {
      return DefaultTemplatesLoader.getInstance();
    }
    this._templates = {};
    this._onLoaded = onLoaded || function () {};
    this._fetchTemplates();
  }

  static setInstance (instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance () {
    return this.instance;
  }

  _fetchTemplates () {
    // If template have already been loaded, do nothing
    let node = DOM.query('#yext-answers-templates');
    if (node) {
      return;
    }

    // Inject a script to fetch the compiled templates,
    // wrapping it a Promise for cleanliness
    return new Promise((resolve, reject) => {
      let script = DOM.createEl('script', {
        id: 'yext-answers-templates',
        onload: resolve,
        onerror: reject,
        async: true,
        src: COMPILED_TEMPLATES_URL
      });
      DOM.append('body', script);
    });
  }

  /**
   * register the templates internally so that they can be later consumed
   * (e.g. by components and renderers) with convienience.
   *
   * `fetchTemplates` will automatically call this, providing the compiled templates from the server.
   */
  register (templates) {
    this._templates = templates;

    // Notify our consumers that the templates are here :)
    this._onLoaded(this._templates);
    return this;
  }

  get (templateName) {
    return this._templates[templateName];
  }

  /**
   * @return The internal template collection
   */
  getTemplates () {
    return this._templates;
  }
}
