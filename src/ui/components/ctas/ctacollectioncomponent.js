/** @module CTAComponent */

import Component from '../component';

export default class CTACollectionComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * Result data
     * @type {Result}
     */
    this._config.result = this._config.data || {};

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    let callsToAction = this._config.callsToAction || [];

    /**
     * The computed calls to action array
     * @type {Array<Object>}
     */
    this.callsToAction = this.resolveCTAMapping(callsToAction, this._config.result);
  }

  /**
   * Handles resolving ctas from a cta mapping which is either
   * 1. a function that returns a cta's config
   * 3. an object that has a per-attribute mapping of either a
   *    a) static value
   *    b) function that takes in resut data and returns the given attributes value
   * 4. an api field name that keys into the result data which contains the cta config as a json string
   * Note: Intentionally does not allow nesting functions.
   * @param {Function|Array<Object|string>|Object|string} ctaMapping
   * @param {Object} result
   * @returns {Array<Object>}
   */
  resolveCTAMapping (ctaMapping, result) {
    if (typeof ctaMapping === 'function') {
      return ctaMapping(result);
    }
    if (Array.isArray(ctaMapping)) {
      return ctaMapping.flatMap(cta => this.resolveCTAMapping(cta, result));
    }
    if (typeof ctaMapping === 'object') {
      const ctaObject = { ...ctaMapping };
      for (let [ctaAttribute, attributeMapping] of Object.entries(ctaMapping)) {
        if (typeof attributeMapping === 'function') {
          ctaObject[ctaAttribute] = attributeMapping(result);
        }
      }
      return [ ctaObject ];
    }
    if (typeof cta === 'string') {
      return [{ ...JSON.parse(result[ctaMapping]) }];
    }
    return [];
  }

  setState (data) {
    return super.setState({
      ...data,
      callsToAction: this.callsToAction
    });
  }

  static get type () {
    return 'CTACollection';
  }

  static defaultTemplateName () {
    return 'ctas/ctacollection';
  }
}
