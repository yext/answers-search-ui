import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';

function generateAutoCompleteResponse (prompt) {
  const mockedResponse = {
    meta: {
      uuid: '01802d71-9901-1b83-9d50-ff143088f1ab',
      errors: []
    },
    response: {
      input: {
        value: prompt,
        queryIntents: []
      },
      results: []
    }
  };

  if (prompt === '') {
    mockedResponse.response.results = [
      {
        value: 'a Rose by any other name',
        matchedSubstrings: [],
        queryIntents: [],
        verticalKeys: []
      }
    ];
  } else if (prompt.startsWith('vir')) {
    mockedResponse.response.results = [
      {
        value: 'virginia',
        matchedSubstrings: [],
        queryIntents: [],
        verticalKeys: []
      }
    ];
  }

  return mockedResponse;
}

export const MockedVerticalAutoCompleteRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /.*\.com\/v2\/accounts\/me\/search\/vertical\/autocomplete/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);
    res.body = JSON.stringify(generateAutoCompleteResponse(parsedUrl.searchParams.get('input')));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
