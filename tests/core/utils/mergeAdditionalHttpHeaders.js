const { mergeAdditionalHttpHeaders } = require('../../../src/core/utils/mergeAdditionalHttpHeaders');

it('logs an error if an unrecognized header is found', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
  const headers = mergeAdditionalHttpHeaders({
    'Client-SDK': {
      TEST: '1.3.5'
    },
    makise: {},
    kurisu: {}
  });
  expect(errorSpy).toHaveBeenCalledTimes(2);
  expect(errorSpy).toHaveBeenCalledWith(
    'Ignored unknown HTTP header "makise". Only the "Client-SDK" header is recognized in additionalHttpHeaders.');
  expect(errorSpy).toHaveBeenCalledWith(
    'Ignored unknown HTTP header "kurisu". Only the "Client-SDK" header is recognized in additionalHttpHeaders.');
  errorSpy.mockRestore();
  expect(headers).toEqual({
    'Client-SDK': {
      ANSWERS_SEARCH_UI_SDK: '@@LIB_VERSION',
      TEST: '1.3.5'
    }
  });
});

it('logs an error if an additionalHttpHeaders is not an object', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
  const headers = mergeAdditionalHttpHeaders(123);
  expect(errorSpy).toHaveBeenCalledTimes(1);
  expect(errorSpy).toHaveBeenCalledWith(
    'additionalHttpHeaders must be an "object", not a(n) "number".');
  errorSpy.mockRestore();
  expect(headers).toEqual({
    'Client-SDK': {
      ANSWERS_SEARCH_UI_SDK: '@@LIB_VERSION'
    }
  });
});

it('logs an error if either ANSWERS_CORE or ANSWERS_SEARCH_UI_SDK are set in the user\'s Client-SDK', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
  const headers = mergeAdditionalHttpHeaders({
    'Client-SDK': {
      ANSWERS_CORE: 'answers-core',
      ANSWERS_SEARCH_UI_SDK: 'answers-search-ui-sdk'
    }
  });
  expect(errorSpy).toHaveBeenCalledTimes(2);
  expect(errorSpy).toHaveBeenCalledWith(
    'Ignoring "ANSWERS_SEARCH_UI_SDK" values for Client-SDK. These values are automatically specified.');
  expect(errorSpy).toHaveBeenCalledWith(
    'Ignoring "ANSWERS_CORE" values for Client-SDK. These values are automatically specified.');
  errorSpy.mockRestore();
  expect(headers).toEqual({
    'Client-SDK': {
      ANSWERS_SEARCH_UI_SDK: '@@LIB_VERSION'
    }
  });
});
