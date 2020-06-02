import ApiRequest from '../http/apirequest';

/**
 * This class provides access to the Answers Status page. This page indicates
 * if the front-end for a particular experience should be temporarily disabled
 * due to back-end issues.
 */
export default class MasterSwitchApi {
  constructor (requestConfig, globalStorage) {
    this._request = new ApiRequest(requestConfig, globalStorage);
  }

  /**
   * Checks if the front-end for the given experience should be temporarily disabled.
   * Note that this check errs on the side of enabling the front-end. If there are any
   * issues with the resultant network call, those failures are caught. In this failure
   * case, the assumption is that things are enabled.
   *
   * @returns {Promise<boolean>} A Promise containing a boolean indicating if the front-end
   *                             should be disabled.
   */
  isDisabled () {
    return new Promise((resolve, reject) => {
      this._request.get({ credentials: 'omit' })
        .then(response => response.json())
        .then(status => status && status.disabled)
        .then(isDisabled => resolve(!!isDisabled))
        .catch(() => resolve(false));
    });
  }

  /**
   * Creates a new {@link MasterSwitchApi} from the provided parameters.
   *
   * @param {string} apiKey The apiKey of the experience.
   * @param {string} experienceKey The identifier of the experience.
   * @param {GlobalStorage} globalStorage The {@link GlobalStorage} instance.
   * @returns {MasterSwitchApi} The new {@link MasterSwitchApi} instance.
   */
  static from (apiKey, experienceKey, globalStorage) {
    const requestConfig = {
      apiKey,
      baseUrl: 'https://answersstatus.pagescdn.com/',
      endpoint: `${apiKey}/${experienceKey}/status.json`
    };
    return new MasterSwitchApi(requestConfig, globalStorage);
  }
}
