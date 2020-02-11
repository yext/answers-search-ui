/** @module CTAComponent */

import Component from '../component';

class CTACollectionConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    this.result = config.data || {};

    this.callsToAction = config.callsToAction || [];

    /**
     * Either a function that spits out an array of CTA config objects or an array of CTA config objects
     * or api fieldnames
     * @type {Function|Array<Object|string>}
     */
    if (typeof this.callsToAction === 'function') {
      this.callsToAction = this.callsToAction(this.result);
    }
    if (Array.isArray(this.callsToAction)) {
      this.callsToAction = this.callsToAction.map(cta => {
        const _cta = this.handleCTA(cta);
        return {
          optsString: JSON.stringify(_cta),
          shouldRender: _cta.url && _cta.label
        };
      });
    }
  }

  handleCTA (cta) {
    if (typeof cta === 'function') {
      return cta(this.result);
    } else if (typeof cta === 'object') {
      const calculatedCTA = { ...cta };
      for (let [ctaOption, optionValue] of Object.entries(cta)) {
        if (typeof optionValue === 'function') {
          calculatedCTA[ctaOption] = optionValue(this.result);
        }
      }
      return calculatedCTA;
    } else if (typeof cta === 'string') {
      return JSON.parse(this.result[cta]);
    }
    return {};
  }
}

export default class CTACollectionComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new CTACollectionConfig(config), systemConfig);
  }

  setState (data) {
    return super.setState({
      ...data,
      callsToAction: this._config.callsToAction
    });
  }

  static get type () {
    return 'CTACollection';
  }

  static defaultTemplateName () {
    return 'ctas/ctacollection';
  }
}
