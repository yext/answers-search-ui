import { SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE } from '../constants';
import { parseLocale } from '../utils/i18nutils';

/**
 * Transforms the given locale to a locale Microsoft Edge can understand.
 * This means changing the language/locale separating underscore to a dash,
 * and defaulting the locale to the 2 character language code if it is not
 * supported by Edge.
 *
 * @param {string} locale
 * @returns {string}
 */
export function transformSpeechRecognitionLocaleForEdge (rawLocale) {
  const { language, modifier, region } = parseLocale(rawLocale);
  if (!modifier && !region) {
    return language;
  }
  const locale = formatLocaleForEdge(language, modifier, region);
  const isCompatibleWithEdge = SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE.includes(locale);
  if (isCompatibleWithEdge) {
    return locale;
  }
  if (modifier) {
    return formatLocaleForEdge(language, modifier);
  }
  return language;
}

/**
 * Formats a locale code given its constituent parts for Edge (which does not accept underscores).
 * Edge does not care about capitalization, but converting to full lowercase allows for easier lookup
 * within the SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE array.
 *
 * @param {string} language zh in zh-Hans_CH
 * @param {string?} modifier Hans in zh-Hans_CH
 * @param {string?} region CH in zh-Hans_CH
 * @returns
 */
function formatLocaleForEdge (language, modifier, region) {
  let result = language;
  if (modifier) {
    result += '-' + modifier;
  }
  if (region) {
    result += '-' + region;
  }
  return result.toLowerCase();
}
