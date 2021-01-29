import { ClientFunction, t } from 'testcafe';
import IE11NoCacheHook from './ie11nocachehook';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  return t.wait(2500);
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  return t.wait(2500);
}

export async function browserForwardButton () {
  await ClientFunction(() => window.history.forward())();
  return t.wait(2500);
}

/**
 * Register the Ie11NoCacheHook, if the current browser is IE11.
 *
 * @param {TestController} testInstance
 */
export async function registerIE11NoCacheHook (testInstance) {
  const isIE11 = await ClientFunction(() => {
    return window.MSInputMethodContext && document.documentMode;
  })();
  if (isIE11) {
    const ie11Hook = new IE11NoCacheHook(/v2\/accounts\/me\/answers\/vertical\/query/);
    return testInstance.addRequestHooks(ie11Hook);
  }
}
