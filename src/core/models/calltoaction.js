import { ANALYTICS_EVENT_TYPE, ANALYTICS_SEARCHER_TYPE } from '../constants.js';

/**
 * Encapsulates the view model of a Call To Action
 * @class
 */
export default class CallToAction {
  /**
   * call to action constructor
   * @param {Object} opts
   * @param {string} opts.label
   * @param {string} opts.iconName
   * @param {string} opts.customIconUrl
   * @param {string} opts.customIconMarkup
   * @param {string} opts.url
   * @param {string} opts.eventType
   * @param {Object} opts.eventOptions
   * @param {string} opts.eventOptions.entityId
   * @param {string} opts.eventOptions.ctaLabel
   * @param {string} opts.eventOptions.verticalConfigId
   * @param {string} opts.eventOptions.searcher
   */
  constructor (opts = {}) {
    /**
     * the visible text label of the CTA
     * @type {string}
     */
    this.label = opts.label;

    /**
     * the name of the built in icon to use
     * @type {string|null}
     */
    this.iconName = opts.iconName;

    /**
     * the url to a completely custom icon
     * @type {string|null}
     */
    this.customIconUrl = opts.customIconUrl;

    /**
     * custom icon markup, e.g. an <img> element or an <svg>
     * @type {string|null}
     */
    this.customIconMarkup = opts.customIconMarkup;

    /**
     * the destination url
     * @type {string}
     */
    this.url = opts.url;

    /**
     * the analytics event type
     * @type {string}
     */
    this.eventType = opts.eventType;

    /**
     * the analytics event options
     * @type {Object}
     */
    this._eventOptions = opts.eventOptions;
  }

  get eventOptions () {
    return JSON.stringify(this._eventOptions);
  }

  /**
   * returns a factory method to build a concrete CTA based on the template
   * and profile
   * @param template {Object} the template
   * @param template.verticalConfigId {String}
   * @param template.isUniversal {Boolean}
   * @param template.mappingFunction {Function}
   * @param template.eventType {string}
   * @param template.modifier
   * @returns {Function}
   */
  static buildCTA (template) {
    return (profile) => {
      const mappingResult = template.mappingFunction(profile);
      if (!mappingResult) {
        return null;
      }
      const {
        label,
        iconName,
        customIconUrl,
        customIconMarkup,
        url,
        target
      } = mappingResult;
      return new CallToAction({
        url,
        label,
        target,
        eventType: template.eventType,
        modifier: template.modifier,
        iconOptions: {
          iconName,
          iconUrl: customIconUrl,
          customIcon: customIconMarkup
        },
        eventOptions: {
          entityId: profile.id,
          verticalConfigId: template.verticalConfigId,
          searcher: template.isUniversal ? ANALYTICS_SEARCHER_TYPE.UNIVERSAL : ANALYTICS_SEARCHER_TYPE.VERTICAL,
          ctaLabel: label ? label.toUpperCase().replace(' ', '_') : 'UNKNOWN'
        }
      });
    };
  }

  static defaultConfigs () {
    return {
      'call': {
        eventType: ANALYTICS_EVENT_TYPE.TAP_TO_CALL,
        mappingFunction: (profile) => {
          if (!profile || !profile.mainPhone) {
            return null;
          }

          return {
            label: 'Call',
            iconName: 'phone',
            url: `tel:${profile.mainPhone}`
          };
        }
      },
      'rsvp': {
        eventType: ANALYTICS_EVENT_TYPE.RSVP,
        mappingFunction: (profile) => {
          if (!profile || !profile.ticketUrl) {
            return null;
          }

          return {
            label: 'RSVP',
            iconName: 'calendar',
            url: profile.ticketUrl
          };
        }
      },
      'directions': {
        eventType: ANALYTICS_EVENT_TYPE.DRIVING_DIRECTIONS,
        mappingFunction: (profile) => {
          if (!profile || !profile.yextDisplayCoordinate) {
            return null;
          }
          // TODO (bmcginnis): use injected formatter for the getDirectionsUrl if available
          return {
            label: 'Directions',
            iconName: 'directions',
            url: `https://www.google.com/maps/search/?api=1&query=${profile.yextDisplayCoordinate.latitude},${profile.yextDisplayCoordinate.longitude}`
          };
        }
      },
      'details': {
        eventType: ANALYTICS_EVENT_TYPE.VIEW_WEBSITE,
        mappingFunction: (profile) => {
          if (!profile || !profile.website) {
            return null;
          }

          return {
            label: 'Details',
            iconName: 'info',
            url: profile.website
          };
        }
      }
    };
  }

  static buildCTATemplatesFromConfig (config, verticalConfigId, isUniversal, modifier) {
    if (!config) {
      return [];
    }
    if (!Array.isArray(config)) {
      return this.buildCTATemplatesFromConfig([config], verticalConfigId, isUniversal);
    }

    return config.map((ctaConfig) => {
      switch (typeof ctaConfig) {
        case 'string':
          if (!this.defaultConfigs()[ctaConfig]) {
            throw new Error(`Unknown CTA type ${ctaConfig}`);
          }
          return this.defaultConfigs()[ctaConfig];
        case 'object':
          const hasDefaultType = ctaConfig.type && this.defaultConfigs()[ctaConfig.type];
          const hasMappingFn = ctaConfig.mappingFunction && typeof ctaConfig.mappingFunction === 'function';

          if (!hasMappingFn && !hasDefaultType) {
            throw new Error(`received object cta config with unknown CTA type ${ctaConfig.type} and no mapping function`);
          }

          if (!hasMappingFn && hasDefaultType) {
            return this.defaultConfigs()[ctaConfig.type];
          }

          if (hasMappingFn && !hasDefaultType) {
            return {
              eventType: ctaConfig.eventType || ANALYTICS_EVENT_TYPE.CTA_CLICK,
              mappingFunction: ctaConfig.mappingFunction
            };
          }

          return {
            eventType: ANALYTICS_EVENT_TYPE.CTA_CLICK,
            mappingFunction: (profile) => {
              const defaultMapping = this.defaultConfigs()[ctaConfig.type].mappingFunction(profile);
              const customMapping = ctaConfig.mappingFunction(profile);
              return Object.assign({}, defaultMapping, customMapping);
            }
          };
        default:
          throw new Error(`expected a string or object, received: ${typeof ctaConfig}`);
      }
    }).map(partialTemplate => Object.assign({}, partialTemplate, {
      verticalConfigId,
      isUniversal,
      modifier
    })).map(template => this.buildCTA(template));
  }
}
