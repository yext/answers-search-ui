/**
 * Parses a locale code into its constituent parts.
 * Performs case formatting on the result.
 *
 * @param {string} localeCode
 * @returns { language: string, modifier?: string, region?: string }
 */
export function parseLocale (localeCode) {
  const localeCodeSections = localeCode.replace(/-/g, '_').split('_');
  const language = localeCodeSections[0].toLowerCase();
  const parseModifierAndRegion = () => {
    const numSections = localeCodeSections.length;
    if (numSections === 1) {
      return {};
    } else if (numSections === 2 && language === 'zh') {
      const ambiguous = localeCodeSections[1].toLowerCase();
      if (['hans', 'hant'].includes(ambiguous)) {
        return { modifier: ambiguous };
      } else {
        return { region: ambiguous };
      }
    } else if (numSections === 2) {
      return { region: localeCodeSections[1] };
    } else if (numSections === 3) {
      return {
        modifier: localeCodeSections[1],
        region: localeCodeSections[2]
      };
    } else if (numSections > 3) {
      console.error(
        `Encountered unsupported locale "${localeCode}", ` +
        `with ${numSections} sections.`);
      return {};
    }
  };
  const capitalizeFirstLetterOnly = raw => {
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
  };
  const parsedLocale = {
    language,
    ...parseModifierAndRegion()
  };

  if (parsedLocale.modifier) {
    parsedLocale.modifier = capitalizeFirstLetterOnly(parsedLocale.modifier);
  }
  if (parsedLocale.region) {
    parsedLocale.region = parsedLocale.region.toUpperCase();
  }

  return parsedLocale;
}

/**
 * Object containing imperial units
 */
const IMPERIAL = {
  distance: 'mi'
};

/**
 * Object containing metric units
 */
const METRIC = {
  distance: 'km'
};

/**
 * This object is keyed by language and region. If a region isn't defined, it falls back
 * to 'default'
 * @type {Object}
 */
export const LOCALE_UNIT_MAP = {
  en: {
    GB: METRIC,
    AU: METRIC,
    default: IMPERIAL
  },
  es: {
    US: IMPERIAL
  }
};

const unitSystemFallback = METRIC;

/**
 * Convert distance given by liveAPI from meters to kilometers or miles
 * based on the given locale.
 *
 * @param {number} distance
 * @param {string} locale
 * @returns {string} localized distance with a unit of length
 */
export function localizedDistance (distance, locale) {
  if (!distance) {
    return null;
  }
  const distanceUnits = _getDistanceUnit(locale);
  switch (distanceUnits) {
    case 'mi':
      return _toMiles(distance, locale);
    case 'km':
      return _toKilometers(distance, locale);
    default:
      return _toMiles(distance, locale);
  }
}

/**
 * Convert distance from meters to kilometers
 *
 * @param {number} distance
 * @param {string} locale
 * @returns {string} a string consist of distance and km as unit of length
 */
function _toKilometers (distance, locale) {
  const distanceInKilometers = distance / 1000; // Convert meters to kilometers
  return new Intl.NumberFormat(locale,
    { style: 'decimal', maximumFractionDigits: 1, minimumFractionDigits: 1 })
    .format(distanceInKilometers) + ' ' + 'km';
}

/**
 * Convert distance from meters to miles
 *
 * @param {number} distance
 * @param {string} locale
 * @returns {string} a string consist of distance and mi as unit of length
 */
function _toMiles (distance, locale) {
  const distanceInMiles = distance / 1609.344; // Convert meters to miles
  return new Intl.NumberFormat(locale,
    { style: 'decimal', maximumFractionDigits: 1, minimumFractionDigits: 1 })
    .format(distanceInMiles) + ' ' + 'mi';
}

/**
 * Gets the distance unit for the specified locale
 * @param {string} locale
 * @returns {string} 'km' or 'mi'
 */
function _getDistanceUnit (locale) {
  const units = _getUnitsForLocale(locale);
  return units.distance;
}

/**
 * Gets a map of unit types for a specified locale
 * @param {string} locale
 * @returns {Object}
 */
function _getUnitsForLocale (locale) {
  const { language, region } = parseLocale(locale);
  const isKnownLanguage = (language in LOCALE_UNIT_MAP);
  if (!isKnownLanguage) {
    return unitSystemFallback;
  }

  const isKnownRegion = (region in LOCALE_UNIT_MAP[language]);
  if (!isKnownRegion) {
    return LOCALE_UNIT_MAP[language].default || unitSystemFallback;
  }
  return LOCALE_UNIT_MAP[language][region];
}
