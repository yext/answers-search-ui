import { ClientFunction } from 'testcafe';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  await new Promise(resolve => setTimeout(resolve, 2500));
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  await new Promise(resolve => setTimeout(resolve, 2500));
}
