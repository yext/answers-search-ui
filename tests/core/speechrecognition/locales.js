import { transformSpeechRecognitionLocaleForEdge } from '../../../src/core/speechrecognition/locales';

jest.mock('../../../src/core/constants', () => ({
  SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE:
    require('../../../conf/i18n/constants').SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE
}));

it('works for plain languages', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en')).toEqual('en');
  expect(transformSpeechRecognitionLocaleForEdge('ZH_Hans')).toEqual('zh-hans');
});

it('will recognize supported locales that have dashes', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en-US')).toEqual('en-us');
  expect(transformSpeechRecognitionLocaleForEdge('en-GB')).toEqual('en-gb');
  expect(transformSpeechRecognitionLocaleForEdge('zh-Hant-tw')).toEqual('zh-hant-tw');
});

it('defaults Edge incompatible locales to the language code', () => {
  expect(transformSpeechRecognitionLocaleForEdge('ja_FAKE')).toEqual('ja');
  expect(transformSpeechRecognitionLocaleForEdge('en_AI')).toEqual('en');
  expect(transformSpeechRecognitionLocaleForEdge('zH_hAns_fake')).toEqual('zh-hans');
  expect(transformSpeechRecognitionLocaleForEdge('ZH-HANS-FAKE')).toEqual('zh-hans');
});

it('replaces underscores with dashes for supported locales', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en_US')).toEqual('en-us');
  expect(transformSpeechRecognitionLocaleForEdge('en_GB')).toEqual('en-gb');
});

it('canonicalizes case', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en_uS')).toEqual('en-us');
  expect(transformSpeechRecognitionLocaleForEdge('EN_AI')).toEqual('en');
  expect(transformSpeechRecognitionLocaleForEdge('jA_AI')).toEqual('ja');
});
