/**
 * Whether the SpeechRecognition API is supported by the current browser.
 *
 * Currently all languages in the SDK (en, es, fr, de, it, ja)
 * have SpeechRecognition support in browsers that support SpeechRecognition.
 * However, because browser specific SpeechRecognition documentation is poor to nonexistent,
 * new languages/locales will need to be manually tested for SpeechRecognition support.
 *
 * @returns {boolean}
 */
export function speechRecognitionIsSupported () {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}
