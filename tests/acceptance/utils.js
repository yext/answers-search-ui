import { ClientFunction, Selector } from 'testcafe';
import IE11NoCacheHook from './ie11nocachehook';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  await waitForResults();
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  await waitForResults();
}

export async function browserForwardButton () {
  await ClientFunction(() => window.history.forward())();
  await waitForResults();
}

export async function getCurrentUrlParams () {
  const urlParams = await ClientFunction(() => window.location.search)();
  return new URLSearchParams(urlParams);
}

/**
 * Register the Ie11NoCacheHook, if the current browser is IE11.
 *
 * @param {import('testcafe').TestController} testInstance
 * @param {string} url
 */
export async function registerIE11NoCacheHook (testInstance, url) {
  const isIE11 = await ClientFunction(() => {
    return !!window.MSInputMethodContext && !!document.documentMode;
  })();
  if (isIE11) {
    const ie11Hook = new IE11NoCacheHook(url);
    return testInstance.addRequestHooks(ie11Hook);
  }
}

export async function waitForResults () {
  const resultsSelector = await Selector('.yxt-Results');
  await resultsSelector.with({ visibilityCheck: true })();
}
