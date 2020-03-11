/** @module CTACollectionComponent */

import Component from '../component';

export default class CTACollectionComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    const data = this._config.data || {};

    /**
     * Result data
     * @type {Result}
     */
    this.result = data.result || {};

    /**
     * Vertical key for the search.
     * @type {string}
     */
    this.verticalKey = data.verticalKey;

    /**
     * Whether this cta is part of a universal search.
     * @type {boolean}
     */
    this.isUniversal = this._config.isUniversal || false;

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    let callsToAction = this._config.callsToAction || [];

    /**
     * Additional css modifier classNames for the cta.
     * @type {Array<string>}
     */
    this._config._ctaModifiers = this._config._ctaModifiers;

    callsToAction = this.resolveCTAMapping(this.result, ...callsToAction);
    callsToAction.forEach(cta => {
      if (!cta.label && !cta.url) {
        console.warn('Call to Action:', cta, 'is missing both a label and url attribute and is being automatically hidden');
      } else if (!cta.label) {
        console.warn('Call to Action:', cta, 'is missing a label attribute and is being automatically hidden');
      } else if (!cta.url) {
        console.warn('Call to Action:', cta, 'is missing a url attribute and is being automatically hidden');
      }
    });
    callsToAction = callsToAction.filter(cta => cta.url && cta.label);
    this.callsToAction = callsToAction.map(cta => {
      const _ctaModifiers = this._config._ctaModifiers;
      if (callsToAction.length === 1) {
        _ctaModifiers.push('solo');
      }
      return {
        eventOptions: this.defaultEventOptions(this.result),
        _ctaModifiers: _ctaModifiers,
        ...cta
      };
    });
  }

  /**
   * Handles resolving ctas from a cta mapping which are either
   * 1. a function that returns a cta's config
   * 2. an object that has a per-attribute mapping of either a
   *    a) static value
   *    b) function that takes in resut data and returns the given attributes value
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
    });
  }

  defaultEventOptions (result) {
    const eventOptions = {
      verticalKey: this.verticalKey,
      searcher: this._config.isUniversal ? 'UNIVERSAL' : 'VERTICAL'
    };
    if (result._raw.id) {
      eventOptions.entityId = result._raw.id;
    }
    return eventOptions;
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
