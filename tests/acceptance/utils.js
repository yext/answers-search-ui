import { ClientFunction, t } from 'testcafe';

/* global location */

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  return t.wait(2500);
}

export async function browserBackButton (timeout=2500) {
  await ClientFunction(() => window.history.back())();
  return t.wait(timeout);
}

export async function browserForwardButton () {
  await ClientFunction(() => window.history.forward())();
  return t.wait(2500);
}
