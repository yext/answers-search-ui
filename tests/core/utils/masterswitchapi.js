import MasterSwitchApi from '../../../src/core/utils/masterswitchapi';
import GlobalStorage from '../../../src/core/storage/globalstorage';
import HttpRequester from '../../../src/core/http/httprequester';

jest.mock('../../../src/core/http/httprequester');
jest.mock('../../../src/core/storage/globalstorage');

describe('checking Answers Status page', () => {
  GlobalStorage.mockImplementation(() => {
    return {
      getState: jest.fn(stateVar => true)
    };
  });

  it('behaves correctly when JSON is present and disabled is true', () => {
    const mockedResponse =
      { json: jest.fn(() => Promise.resolve({ disabled: true })) };
    const mockedRequest = jest.fn(() => Promise.resolve(mockedResponse));
    const masterSwitchApi = createMasterSwitchApi(mockedRequest);

    return masterSwitchApi.isDisabled('abc123', 'someexperience')
      .then(isDisabled => expect(isDisabled).toBeTruthy());
  });

  it('behaves correctly when JSON is present and disabled is false', () => {
    const mockedResponse =
      { json: jest.fn(() => Promise.resolve({ disabled: false })) };
    const mockedRequest = jest.fn(() => Promise.resolve(mockedResponse));
    const masterSwitchApi = createMasterSwitchApi(mockedRequest);

    return masterSwitchApi.isDisabled('abc123', 'someexperience')
      .then(isDisabled => expect(isDisabled).toBeFalsy());
  });

  it('behaves correctly when status page contains JSON of empty object', () => {
    const mockedResponse = { json: jest.fn(() => Promise.resolve({ })) };
    const mockedRequest = jest.fn(() => Promise.resolve(mockedResponse));
    const masterSwitchApi = createMasterSwitchApi(mockedRequest);

    return masterSwitchApi.isDisabled('abc123', 'someexperience')
      .then(isDisabled => expect(isDisabled).toBeFalsy());
  });

  it('behaves correctly when network call results in an error', () => {
    const mockedRequest =
      jest.fn(() => Promise.reject(new Error('Page does not exist')));
    const masterSwitchApi = createMasterSwitchApi(mockedRequest);

    return masterSwitchApi.isDisabled('abc123', 'someexperience')
      .then(isDisabled => expect(isDisabled).toBeFalsy());
  });

  it('behaves correctly when timeout is reached', () => {
    const mockedRequest =
      jest.fn(() => new Promise(resolve => setTimeout(resolve, 200)));
    const masterSwitchApi = createMasterSwitchApi(mockedRequest);

    return masterSwitchApi.isDisabled('abc123', 'someexperience')
      .then(isDisabled => expect(isDisabled).toBeFalsy());
  });
});

/**
 *
 * @param {Function} mockedRequest
 * @returns {MasterSwitchApi}
 */
function createMasterSwitchApi (mockedRequest) {
  HttpRequester.mockImplementation(() => {
    return {
      get: mockedRequest
    };
  });
  return MasterSwitchApi.from('apiKey', 'experienceKey', new GlobalStorage());
}
