/** @module Renderer */

/**
 * Renderer is an abstract class that all Renderers should extend and implement
 */
export default class Renderer {
  /**
   * render is a core method for all renderers.
   * All implementations should override this class
   * @param {string} template
   * @param {object} data
   */
  render (template, data) {
    return template;
  }

  registerHelper (name, cb) {

  }

  registerTemplate (templateName, template) {

  }

  compile (template) {

  }
}
