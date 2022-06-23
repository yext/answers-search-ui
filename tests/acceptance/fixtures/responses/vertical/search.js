import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';
import { generateKMVerticalSearchResponse } from './KM/generateKMResponse';
import { generatePeopleVerticalSearchResponse } from './people/generatePeopleResponse';
import { basicResponseData } from './sharedData';

function generateVerticalSearchResponse (verticalKey, input, offset, facetFilters) {
  switch (verticalKey) {
    case 'people':
      return generatePeopleVerticalSearchResponse(input, offset, facetFilters);
    case 'KM':
      return generateKMVerticalSearchResponse(input, offset);
    default:
      return basicResponseData;
  }
}

export const MockedVerticalSearchRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/liveapi.yext.com\/v2\/accounts\/me\/answers\/vertical\/query/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);
    res.body = JSON.stringify(generateVerticalSearchResponse(
      parsedUrl.searchParams.get('verticalKey'),
      parsedUrl.searchParams.get('input'),
      parsedUrl.searchParams.get('offset'),
      JSON.parse(parsedUrl.searchParams.get('facetFilters'))
    ));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
