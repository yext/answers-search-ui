import { SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE } from '../constants';

/**
 * Transforms the given locale to a locale Microsoft Edge can understand.
 * This means changing the language/locale separating underscore to a dash,
 * and defaulting the locale to the 2 character language code if it is not
 * supported by Edge.
 *
 * Expects the input locale to use an underscore separator as opposed to a dash
 * separator.
 *
 * @param {string} locale
 * @returns {string}
 */
export function transformSpeechRecognitionLocaleForEdge (locale) {
  const underscoreIndex = locale.indexOf('_');
  if (underscoreIndex === -1) {
    return locale;
  }
  const isCompatibleWithEdge = SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE.includes(locale.toLowerCase());
  if (isCompatibleWithEdge) {
    return locale.substring(0, underscoreIndex) + '-' + locale.substring(underscoreIndex + 1);
  }
  return locale.substring(0, underscoreIndex);
}
