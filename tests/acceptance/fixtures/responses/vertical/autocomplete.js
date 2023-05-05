import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';
import { meta } from './sharedData';

function generateAutoCompleteResponse (prompt) {
  return {
    meta,
    response: {
      input: {
        value: prompt,
        queryIntents: []
      },
      results: []
    }
  };
}

export const MockedVerticalAutoCompleteRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/prod-cdn.us.yextapis.com\/v2\/accounts\/me\/search\/vertical\/autocomplete/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);
    res.body = JSON.stringify(generateAutoCompleteResponse(parsedUrl.searchParams.get('input')));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
