import { ClientFunction, Selector } from 'testcafe';

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

export async function waitForResults () {
  const resultsSelector = await Selector('.yxt-Results');
  await resultsSelector.with({ visibilityCheck: true })();
}
