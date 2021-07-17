import { SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE } from '../constants';

/**
 * Transforms the given locale to a locale Microsoft Edge can understand.
 * This means changing the language/locale separating underscore to a dash,
 * and defaulting the locale to the 2 character language code if it is not
 * supported by Edge.
 *
 * @param {string} locale
 * @returns {string}
 */
export function transformSpeechRecognitionLocaleForEdge (locale) {
  const underscoreIndex = locale.indexOf('_');
  if (underscoreIndex === -1) {
    return locale;
  }
  locale = locale.replace('_', '-');
  const isCompatibleWithEdge = SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE.includes(locale.toLowerCase());
  if (isCompatibleWithEdge) {
    return locale;
  }
  return locale.substring(0, underscoreIndex);
}
