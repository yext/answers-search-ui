import { ClientFunction } from 'testcafe';

/* global location */

const getPageUrl = ClientFunction(() => window.location.href);

exports.getURLSearchParams = async () => {
  const pageUrl = await getPageUrl();
  const indexOfQuestionMark = pageUrl.indexOf('?');
  const queryString = pageUrl.substring(indexOfQuestionMark);

  return new URLSearchParams(queryString);
};

exports.browserRefreshPage = async () => {
  await ClientFunction(() => location.reload())();
  await new Promise(resolve => setTimeout(resolve, 2500));
};

exports.browserBackButton = async () => {
  await ClientFunction(() => window.history.back())();
  await new Promise(resolve => setTimeout(resolve, 2500));
};
