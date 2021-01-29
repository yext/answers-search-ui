import { RequestHook } from 'testcafe';

/**
 * IE11NoCacheHook solves the problem of IE11 caching all ajax requests
 * by default by adding a 'no-store' header to requests in ie11.
 *
 * Without this hook, ajax requests cached by IE11 will be ignored
 * testcafe's RequestLogger. This is only a problem in IE11.
 */
export default class IE11NoCacheHook extends RequestHook {
  /**
   * This comes from the suggestion here on the testcafe github
   * https://github.com/DevExpress/testcafe/issues/3780#issuecomment-496955368
   * The --disable-page-caching flag did not work for ie11, and neither
   * did trying to set the header in onRequest(), so this workaround was used instead.
   *
   * @param {Object} event
   */
  _onConfigureResponse (event) {
    super._onConfigureResponse(event);
    event.setHeader('cache-control', 'no-store');
  }

  async onRequest () {
    // We don't need to do anything here, but still need to override the method.
  }

  async onResponse () {
    // We don't need to do anything here, but still need to override the method.
  }
}
