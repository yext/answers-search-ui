const CTA_DEFAULTS = {
  /**
   * Label below the CTA icon
   * @type {string}
   */
  label: null,

  /**
   * CTA icon, maps to a set of icons.
   * @type {string}
   */
  icon: 'star',

  /**
   * Click through url for the icon and label
   * @type {string}
   */
  url: '.',

  /**
   * Analytics event that should fire:
   * @type {string}
   */
  analyticsEventType: 'CTA_CLICK',

  /**
   * Whether the click should open in a new window
   * @type {boolean}
   */
  newWindow: false,

  /**
   * The list of eventOptions needed for the event to fire.
   * @type {Object}
   */
  eventOptions: null
};

export default function calculateCTAs (configCTAs, data) {
  if (!configCTAs) {
    return null;
  }
  const callsToAction = configCTAs.map(cta => {
    if (typeof cta === 'function') {
      return Object.assign({}, CTA_DEFAULTS, cta(data));
    } else if (typeof cta === 'object') {
      const calculatedCTA = {};
      Object.entries(cta).forEach(([key, value]) => {
        if (typeof value === 'function') {
          try {
            calculatedCTA[key] = value(data);
          } catch (err) {
            console.debug('StandardCard - error parsing cta: ', value);
            console.debug(data);
            console.error(err);
          }
        } else {
          calculatedCTA[key] = value;
        }
      });
      return calculatedCTA;
    }
  });
  if (callsToAction.length === 0) {
    return null;
  }
  return callsToAction;
}
