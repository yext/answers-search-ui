import { RequestHook } from 'testcafe';

/**
 * IE11NoCacheHook solves the problem of IE11 caching all ajax requests
 * by default by adding a 'no-store' header to requests in ie11.
 *
 * Without this hook, ajax requests cached by IE11 will be ignored
 * testcafe's RequestLogger. This is only a problem in IE11.
 */
export default class IE11NoCacheHook extends RequestHook {
  _onConfigureResponse (event) {
    super._onConfigureResponse(event);

    event.setHeader('cache-control', 'no-store');
  }

  /**
   * If the request is for IE11, add a 'no-store' cache control header.
   *
   * @param {Object} requestEvent
   */
  async onRequest (requestEvent) {
    // requestEvent.requestOptions.headers['Cache-Control'] = 'no-store';
  }

  async onResponse () {
    // We don't need to do anything here, but still need to override the method.
  }
}
