import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';
import { generateKMVerticalSearchResponse } from './KM/generateKMResponse';
import { generatePeopleVerticalSearchResponse } from './people/generatePeopleResponse';
import { basicResponseData } from './sharedData';

function generateVerticalSearchResponse (verticalKey, input, offset, filterParams) {
  switch (verticalKey) {
    case 'people':
      return generatePeopleVerticalSearchResponse(input, offset, filterParams);
    case 'KM':
      return generateKMVerticalSearchResponse(input, offset);
    default:
      return basicResponseData;
  }
}

export const MockedVerticalSearchRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/prod-cdn.us.yextapis.com\/v2\/accounts\/me\/search\/vertical\/query/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);

    const filterParams = {
      facetFilters: JSON.parse(parsedUrl.searchParams.get('facetFilters')),
      locationRadius: parseFloat(parsedUrl.searchParams.get('locationRadius')) || null,
      filters: JSON.parse(parsedUrl.searchParams.get('filters') || 'null')
    };

    res.body = JSON.stringify(generateVerticalSearchResponse(
      parsedUrl.searchParams.get('verticalKey'),
      parsedUrl.searchParams.get('input'),
      parsedUrl.searchParams.get('offset'),
      filterParams
    ));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
