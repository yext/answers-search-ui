import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';

function generateFilterSearchResponse (input) {
  const filterSearchResponse = {
    meta: {
      uuid: '01818675-b843-7a70-a198-e78a25c253c9',
      errors: []
    },
    response: {
      businessId: 3350634,
      sections: [],
      failedVerticals: [],
      queryId: '01818675-b853-337d-b514-a999148a3c47'
    }
  };

  const nyDataSections = [
    {
      results: [
        {
          key: 'builtin.location',
          value: 'New York City, New York, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.2618194975855570'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 3 },
            { offset: 4, length: 4 },
            { offset: 9, length: 4 },
            { offset: 15, length: 3 },
            { offset: 19, length: 4 },
            { offset: 25, length: 6 },
            { offset: 32, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'New York, New York, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.2618194975855571'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 3 },
            { offset: 4, length: 4 },
            { offset: 10, length: 3 },
            { offset: 14, length: 4 },
            { offset: 20, length: 6 },
            { offset: 27, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'New York County, New York, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-district.12113562209855570'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 3 },
            { offset: 4, length: 4 },
            { offset: 17, length: 3 },
            { offset: 21, length: 4 },
            { offset: 27, length: 6 },
            { offset: 34, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'York, New York, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.7548732089697590'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 4 },
            { offset: 6, length: 3 },
            { offset: 10, length: 4 },
            { offset: 16, length: 6 },
            { offset: 23, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Cork, New York, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.10000148015185230'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 4 },
            { offset: 6, length: 3 },
            { offset: 10, length: 4 },
            { offset: 16, length: 6 },
            { offset: 23, length: 6 }
          ]
        }
      ]
    }
  ];

  const vaDataSections = [
    {
      results: [
        {
          key: 'builtin.location',
          value: 'Virginia, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-region.7919684583758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 10, length: 6 },
            { offset: 17, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Minnesota, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.16071886618758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 21, length: 6 },
            { offset: 28, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Illinois, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.6439139614758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 20, length: 6 },
            { offset: 27, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Missouri, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.10000147694758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 20, length: 6 },
            { offset: 27, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Nebraska, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-place.8464566402758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 20, length: 6 },
            { offset: 27, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Kentucky, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.14961075060758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 20, length: 6 },
            { offset: 27, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, South Dakota, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.10000038934758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 24, length: 6 },
            { offset: 31, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virginia, Idaho, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.10000153938758790'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 17, length: 6 },
            { offset: 24, length: 6 }
          ]
        },
        {
          key: 'builtin.location',
          value: 'Virgilia, California, United States',
          filter: {
            'builtin.location': {
              $eq: 'P-locality.10000098529111390'
            }
          },
          matchedSubstrings: [
            { offset: 0, length: 8 },
            { offset: 22, length: 6 },
            { offset: 29, length: 6 }
          ]
        }
      ]
    }
  ];

  if (input.startsWith('Virginia')) {
    filterSearchResponse.response.sections = vaDataSections;
  } else if (input.startsWith('New York City')) {
    filterSearchResponse.response.sections = nyDataSections;
  }

  return filterSearchResponse;
}

export const MockedFilterSearchRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/prod-cdn.us.yextapis.com\/v2\/accounts\/me\/search\/filtersearch/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);
    res.body = JSON.stringify(generateFilterSearchResponse(
      parsedUrl.searchParams.get('input')
    ));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
