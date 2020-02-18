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
    this.callsToAction = this.resolveCTAMapping(this._config.result, ...callsToAction);
  }

  /**
   * Handles resolving ctas from a cta mapping which is either
   * 1. a function that returns a cta's config
   * 2. an object that has a per-attribute mapping of either a
   *    a) static value
   *    b) function that takes in resut data and returns the given attributes value
   * 3. an api field name that keys into the result data which contains the cta config as a json string
   * Note: Intentionally does not allow nesting functions.
   * @param {Object} result
   * @param {Function|...(Object|string)} ctaMapping
   * @returns {Array<Object>}
   */
  resolveCTAMapping (result, ...ctas) {
    return ctas.map(ctaMapping => {
      if (typeof ctaMapping === 'function') {
        return ctaMapping(result);
      }
      if (typeof ctaMapping === 'object') {
        const ctaObject = { ...ctaMapping };
        for (let [ctaAttribute, attributeMapping] of Object.entries(ctaMapping)) {
          if (typeof attributeMapping === 'function') {
            ctaObject[ctaAttribute] = attributeMapping(result);
          }
        }
        return ctaObject;
      }
      // If cta is specified through an API Field Name
      if (typeof ctaMapping === 'string') {
        return { ...JSON.parse(result[ctaMapping]) };
      }
    });
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
