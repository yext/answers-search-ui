import Bowser from 'bowser';

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
  if (!(window.webkitSpeechRecognition && navigator.mediaDevices)) {
    return false;
  }

  const browserData = Bowser.parse(navigator.userAgent);
  if (browserData.platform.type === 'desktop') {
    return true;
  }

  const os = browserData.os.name;
  const browser = browserData.browser.name;

  return (browser === 'Safari' && os === 'iOS') ||
    (browser === 'Chrome' && os === 'Android') ||
    (browser === 'Samsung Internet for Android' && os === 'Android');
}
