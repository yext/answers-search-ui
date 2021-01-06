import { ClientFunction } from 'testcafe';

/* global location */

const getPageUrl = ClientFunction(() => window.location.href);

export async function getURLSearchParams () {
  const pageUrl = await getPageUrl();
  const indexOfQuestionMark = pageUrl.indexOf('?');
  const queryString = pageUrl.substring(indexOfQuestionMark);

  return new URLSearchParams(queryString);
}

export async function browserRefreshPage () {
  await ClientFunction(() => location.reload())();
  await new Promise(resolve => setTimeout(resolve, 2500));
}

export async function browserBackButton () {
  await ClientFunction(() => window.history.back())();
  await new Promise(resolve => setTimeout(resolve, 2500));
}
