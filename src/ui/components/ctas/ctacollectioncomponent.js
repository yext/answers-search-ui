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
     * Whether the DOM should include legacy class names
     * @type {boolean}
     */
    this.includeLegacyClasses = this._config.includeLegacyClasses || false;

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
    const callsToAction = this._config.callsToAction || [];

    /**
     * The config for each calls to action component to render.
     * @type {Array<Object>}
     */
    this.callsToAction = CTACollectionComponent.resolveCTAMapping(this.result._raw, ...callsToAction);

    // Assign any extra cta config that does not come from the cta mappings.
    const _ctaModifiers = this._config._ctaModifiers || [];
    if (this.callsToAction.length === 1) {
      _ctaModifiers.push('solo');
    }
    this.callsToAction = this.callsToAction.map(cta => ({
      eventOptions: this.defaultEventOptions(this.result),
      _ctaModifiers: _ctaModifiers,
      includeLegacyClasses: this.includeLegacyClasses,
      ...cta
    }));
  }

  /**
   * Handles resolving ctas from a cta mapping which are either
   * 1. a function that returns a cta's config
   * 2. an object that has a per-attribute mapping of either a
   *    a) static value
   *    b) function that takes in resut data and returns the given attributes value
   * Note: Intentionally does not allow nesting functions.
   * @param {Object} result
   * @param {Function|...(Object|string)} ctas
   * @returns {Array<Object>}
   */
  static resolveCTAMapping (result, ...ctas) {
    let parsedCTAs = [];
    ctas.map(ctaMapping => {
      if (typeof ctaMapping === 'function') {
        parsedCTAs = parsedCTAs.concat(ctaMapping(result));
      } else if (typeof ctaMapping === 'object') {
        const ctaObject = { ...ctaMapping };
        for (let [ctaAttribute, attributeMapping] of Object.entries(ctaMapping)) {
          if (typeof attributeMapping === 'function') {
            ctaObject[ctaAttribute] = attributeMapping(result);
          }
        }
        parsedCTAs.push(ctaObject);
      }
    });
    parsedCTAs = parsedCTAs.filter(cta => cta);

    parsedCTAs.forEach(cta => {
      if (!cta.label && !cta.url) {
        console.warn('Call to Action:', cta, 'is missing both a label and url attribute and is being automatically hidden');
      } else if (!cta.label) {
        console.warn('Call to Action:', cta, 'is missing a label attribute and is being automatically hidden');
      } else if (!cta.url) {
        console.warn('Call to Action:', cta, 'is missing a url attribute and is being automatically hidden');
      }
    });

    return parsedCTAs.filter(cta => cta.url && cta.url.trim() && cta.label && cta.label.trim());
  }

  static hasCTAs (result, ctas) {
    return CTACollectionComponent.resolveCTAMapping(result, ...ctas).length > 0;
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
      includeLegacyClasses: this.includeLegacyClasses,
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
