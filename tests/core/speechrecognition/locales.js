import { transformSpeechRecognitionLocaleForEdge } from '../../../src/core/speechrecognition/locales';

jest.mock('../../../src/core/constants', () => ({
  SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE:
    require('../../../conf/i18n/constants').SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE
}));

it('does nothing when no underscore', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en')).toEqual('en');
});

it('defaults Edge incompatible locales to the language code', () => {
  expect(transformSpeechRecognitionLocaleForEdge('ja_FAKE')).toEqual('ja');
  expect(transformSpeechRecognitionLocaleForEdge('en_AI')).toEqual('en');
});

it('replaces underscores with dashes for supported locales', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en_US')).toEqual('en-US');
  expect(transformSpeechRecognitionLocaleForEdge('en_GB')).toEqual('en-GB');
});

it('is case insensitive', () => {
  expect(transformSpeechRecognitionLocaleForEdge('en_us')).toEqual('en-us');
  expect(transformSpeechRecognitionLocaleForEdge('EN_AI')).toEqual('EN');
  expect(transformSpeechRecognitionLocaleForEdge('jA_AI')).toEqual('jA');
});
