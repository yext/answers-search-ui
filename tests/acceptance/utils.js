import { ClientFunction, t } from 'testcafe';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  return t.wait(2500);
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  return t.wait(2500);
}
