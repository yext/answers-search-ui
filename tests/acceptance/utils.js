import { ClientFunction } from 'testcafe';

/* global location */

const getPageUrl = ClientFunction(() => window.location.href);

exports.getURLSearchParams = async () => {
  const pageUrl = await getPageUrl();
  const indexOfQuestionMark = pageUrl.indexOf('?');
  const queryString = pageUrl.substring(indexOfQuestionMark);

  return new URLSearchParams(queryString);
};

exports.reloadPage = ClientFunction(() => location.reload());
