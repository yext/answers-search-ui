/**
 * Performs a translation at runtime which includes
 * interpolation, pluralization, or both
 * @param {string} translations The translations, or a stringified JSON of possible translations
 * @param {Object} interpolationParams Params to use during interpolation
 * @param {number} The count associated with the pluralization
 */
export default function translateJS (translations, interpolationParams, count) {
  let stringToInterpolate;

  try {
    translations = JSON.parse(translations);
    stringToInterpolate = count > 1 ? translations['plural'] : translations['1'];
  } catch (e) {
    stringToInterpolate = translations;
  }

  const interpolationRegex = new RegExp(/\{\{([a-zA-Z0-9]+)\}\}/, 'g');

  return stringToInterpolate.replace(interpolationRegex, (match, interpolationKey) => {
    return interpolationParams[interpolationKey];
  });
}
