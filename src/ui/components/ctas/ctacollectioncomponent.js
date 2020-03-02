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
     * An array of cta custom field names, whose custom field data are expected
     * to contain CTA configuration.
     * @type {Array<string>}
     */
    const callsToActionFields = this._config.callsToActionFields || [];

    /**
     * Additional context for the cta.
     * @type {string}
     */
    this._config._context = this._config._context;

    /**
     * The computed calls to action array
     * @type {Array<Object>}
     */
    this.callsToAction = this.resolveCTAMapping(this._config.result, callsToActionFields, ...callsToAction);

    this.callsToAction = this.callsToAction.filter(cta => cta.url && cta.label).map(cta => ({
      ...cta,
      _context: this._config._context,
      _isSolo: this.callsToAction.length === 1
    }));
  }

  /**
   * Handles resolving ctas from a cta mapping which are either
   * 1. a function that returns a cta's config
   * 2. an object that has a per-attribute mapping of either a
   *    a) static value
   *    b) function that takes in resut data and returns the given attributes value
   * callsToAction can also be specified through callsToActionFields, which are:
   * 3. an api field name that keys into the result data which contains the cta config as a json string
   * If callToActionFields are present other ctas should be ignored.
   * Note: Intentionally does not allow nesting functions.
   * @param {Object} result
   * @param {Array<string>} callsToActionFields
   * @param {Function|...(Object|string)} ctaMapping
   * @returns {Array<Object>}
   */
  resolveCTAMapping (result, callsToActionFields, ...ctas) {
    // If entity has any fields that are designed as callsToActionFields, return those instead
    const filteredCTAFields = callsToActionFields.filter(ctaFieldName => result._raw[ ctaFieldName ]);
    if (filteredCTAFields.length > 0) {
      return filteredCTAFields.map(ctaFieldName => result._raw[ ctaFieldName ]);
    }
    // Otherwise, use given callsToAction if any
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
