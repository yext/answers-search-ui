import { RequestMock } from 'testcafe';
import { CORSHeaders } from '../cors';

function generateVerticalSearchResponse (input, offset) {
  const meta = {
    uuid: '018163fe-e697-6ffc-6346-d01618241911',
    errors: []
  };

  const nyData = {
    data: {
      id: '637478382857487577',
      type: 'location',
      website: 'https://locations.yext.com/us/ny/new-york/1-madison-ave.html',
      address: {
        line1: '1 Madison Ave',
        line2: '5th Floor',
        city: 'New York',
        region: 'NY',
        postalCode: '10010',
        countryCode: 'US'
      },
      addressHidden: false,
      description: 'Yext is the global digital knowledge management leader, and our Knowledge Engine puts businesses in control of their digital knowledge.',
      hours: {
        monday: {
          openIntervals: [
            {
              start: '01:00',
              end: '14:00'
            }
          ]
        },
        tuesday: {
          openIntervals: [
            {
              start: '03:00',
              end: '16:00'
            }
          ]
        },
        wednesday: {
          openIntervals: [
            {
              start: '04:00',
              end: '17:00'
            },
            {
              start: '18:00',
              end: '19:00'
            }
          ]
        },
        thursday: {
          isClosed: true
        },
        friday: {
          isClosed: true
        },
        saturday: {
          isClosed: true
        },
        sunday: {
          isClosed: true
        }
      },
      name: 'NY Office Space',
      cityCoordinate: {
        latitude: 40.708601,
        longitude: -73.876717
      },
      c_features: [
        'Open Now',
        'Dog Friendly'
      ],
      displayCoordinate: {
        latitude: 40.7410895,
        longitude: -73.9875092
      },
      geocodedCoordinate: {
        latitude: 40.7410895,
        longitude: -73.98750919999999
      },
      isoRegionCode: 'NY',
      localPhone: '+12128136543',
      mainPhone: '+18884442988',
      priceRange: '$$',
      routableCoordinate: {
        latitude: 40.7411641,
        longitude: -73.9878306
      },
      services: [
        'Dogs',
        'Cats',
        'Sleep'
      ],
      timezone: 'America/New_York',
      websiteUrl: {
        url: 'https://locations.yext.com/us/ny/new-york/1-madison-ave.html',
        preferDisplayUrl: false
      },
      yextDisplayCoordinate: {
        latitude: 40.7410895,
        longitude: -73.9875092
      },
      yextRoutableCoordinate: {
        latitude: 40.7411641,
        longitude: -73.9878306
      },
      categoryIds: [
        '668'
      ],
      timeZoneUtcOffset: '-04:00',
      uid: '18714997'
    },
    highlightedFields: {},
    distance: 333778
  };

  const vaData = {
    data: {
      id: '2917513710699998040',
      type: 'location',
      website: 'https://locations.yext.com/us/va/mclean/7900-westpark-drive.html',
      address: {
        line1: '7900 Westpark Drive',
        line2: 'Suite T200',
        city: 'McLean',
        region: 'VA',
        postalCode: '22102',
        countryCode: 'US'
      },
      addressHidden: false,
      description: 'Yext is the global digital knowledge management leader, and our Knowledge Engine puts businesses in control of their digital knowledge.',
      hours: {
        monday: {
          openIntervals: [
            {
              start: '01:00',
              end: '14:00'
            }
          ]
        },
        tuesday: {
          openIntervals: [
            {
              start: '02:00',
              end: '15:00'
            },
            {
              start: '16:00',
              end: '17:00'
            }
          ]
        },
        wednesday: {
          openIntervals: [
            {
              start: '00:00',
              end: '23:59'
            }
          ]
        },
        thursday: {
          isClosed: true
        },
        friday: {
          openIntervals: [
            {
              start: '12:00',
              end: '14:00'
            }
          ]
        },
        saturday: {
          openIntervals: [
            {
              start: '12:00',
              end: '13:00'
            }
          ]
        },
        sunday: {
          isClosed: true
        }
      },
      name: 'VA Office Space',
      cityCoordinate: {
        latitude: 38.936519622802734,
        longitude: -77.18428039550781
      },
      c_names: [
        'my name is Steve',
        'your name is Rose'
      ],
      displayCoordinate: {
        latitude: 38.9246498,
        longitude: -77.2169181
      },
      facebookPageUrl: 'https://www.facebook.com/Yext-Cafe-2073644659328705/',
      geocodedCoordinate: {
        latitude: 38.9246498,
        longitude: -77.2169181
      },
      isoRegionCode: 'VA',
      localPhone: '+16467624579',
      mainPhone: '+18884442988',
      routableCoordinate: {
        latitude: 38.9243984,
        longitude: -77.2178386
      },
      services: [
        'Dogs',
        'Cats',
        'Sleep'
      ],
      timezone: 'America/New_York',
      websiteUrl: {
        url: 'https://locations.yext.com/us/va/mclean/7900-westpark-drive.html',
        preferDisplayUrl: false
      },
      yextDisplayCoordinate: {
        latitude: 38.9246498,
        longitude: -77.2169181
      },
      yextRoutableCoordinate: {
        latitude: 38.9243984,
        longitude: -77.2178386
      },
      categoryIds: [
        '668'
      ],
      timeZoneUtcOffset: '-04:00',
      uid: '18714998'
    },
    highlightedFields: {},
    distance: 13128
  };

  const ukData = {
    data: {
      id: '7941089580646240971',
      type: 'location',
      website: 'https://locations.yext.com/gb/gt-lon/london/48-warwick-st-.html',
      address: {
        line1: '48 Warwick St.',
        line2: 'Office 410',
        city: 'London',
        region: 'Gt Lon',
        postalCode: 'W1B 5AW',
        countryCode: 'GB'
      },
      addressHidden: false,
      description: 'Yext is the global digital knowledge management leader, and our Knowledge Engine puts businesses in control of their digital knowledge.',
      hours: {
        monday: {
          isClosed: true
        },
        tuesday: {
          openIntervals: [
            {
              start: '15:00',
              end: '16:00'
            }
          ]
        },
        wednesday: {
          isClosed: true
        },
        thursday: {
          isClosed: true
        },
        friday: {
          isClosed: true
        },
        saturday: {
          isClosed: true
        },
        sunday: {
          isClosed: true
        }
      },
      name: 'UK Office Space',
      cityCoordinate: {
        latitude: 51.50642013549805,
        longitude: -0.12721000611782074
      },
      c_features: [
        'Open Now'
      ],
      displayCoordinate: {
        latitude: 51.5107139,
        longitude: -0.1377914
      },
      geocodedCoordinate: {
        latitude: 51.5106898,
        longitude: -0.1378107
      },
      isoRegionCode: 'LND',
      mainPhone: '+442037052290',
      priceRange: '$$$$',
      routableCoordinate: {
        latitude: 51.51076,
        longitude: -0.13767
      },
      services: [
        'Dogs',
        'Cats',
        'Sleep'
      ],
      timezone: 'Europe/London',
      websiteUrl: {
        url: 'https://locations.yext.com/gb/gt-lon/london/48-warwick-st-.html',
        preferDisplayUrl: false
      },
      yextDisplayCoordinate: {
        latitude: 51.5107139,
        longitude: -0.1377914
      },
      yextRoutableCoordinate: {
        latitude: 51.51076,
        longitude: -0.13767
      },
      categoryIds: [
        '668'
      ],
      timeZoneUtcOffset: '+01:00',
      uid: '18714999'
    },
    highlightedFields: {},
    distance: 5900224
  };

  const locationBias = {
    latitude: 38.890396,
    longitude: -77.084159,
    locationDisplayName: 'Arlington, Virginia, United States',
    accuracy: 'DEVICE'
  };

  const appliedQueryFilters = [
    {
      displayKey: 'Location',
      displayValue: 'Virginia',
      filter: {
        'builtin.location': {
          $eq: 'P-region.7919684583758790'
        }
      },
      type: 'PLACE',
      details: {
        latitude: 37.677592044,
        longitude: -78.6190526172645,
        placeName: 'Virginia, United States',
        featureTypes: [
          'region'
        ],
        boundingBox: {
          minLatitude: 36.540855,
          minLongitude: -83.6753959969438,
          maxLatitude: 39.4660129984577,
          maxLongitude: -75.165704098375
        }
      }
    }
  ];

  const basicResponseData = {
    businessId: 3350634,
    queryId: '018163fe-e6b4-af13-36e8-91d629a343d4',
    facets: [],
    source: 'KNOWLEDGE_MANAGER',
    searchIntents: []
  };

  const spellCheckResponse = {
    meta,
    response: {
      ...basicResponseData,
      resultsCount: 0,
      results: [],
      appliedQueryFilters: [],
      spellCheck: {
        originalQuery: 'varginia',
        correctedQuery: {
          value: 'virginia',
          matchedSubstrings: [
            {
              offset: 0,
              length: 8
            }
          ]
        },
        type: 'SUGGEST'
      },
      locationBias,
      allResultsForVertical: {
        ...basicResponseData,
        resultsCount: 3,
        results: [
          nyData
        ],
        appliedQueryFilters: []
      },
      alternativeVerticals: {
        modules: [
          {
            verticalConfigId: 'healthcare_professionals',
            resultsCount: 0,
            encodedState: '',
            results: [],
            appliedQueryFilters: [],
            queryDurationMillis: 67,
            facets: [],
            source: 'KNOWLEDGE_MANAGER'
          }
        ],
        failedVerticals: []
      }
    }
  };

  if (input === 'varginia') {
    if (offset === '1') {
      spellCheckResponse.response.allResultsForVertical.results = [
        vaData
      ];
    }
    return spellCheckResponse;
  }

  const verticalSearchResponse = {
    meta,
    response: {
      ...basicResponseData,
      resultsCount: 3,
      results: [
        nyData
      ],
      locationBias
    }
  };

  if (input === '') {
    if (offset === '1') {
      verticalSearchResponse.response.results = [
        vaData
      ];
    }
  } else if (input === 'virginia') {
    verticalSearchResponse.response.appliedQueryFilters = appliedQueryFilters;
    verticalSearchResponse.response.results = [
      {
        ...vaData,
        distanceFromFilter: 184935
      }
    ];
    if (offset === '1') {
      verticalSearchResponse.response.results = [
        {
          ...nyData,
          distanceFromFilter: 486363
        }
      ];
    } else if (offset === '2') {
      verticalSearchResponse.response.results = [
        {
          ...ukData,
          distanceFromFilter: 9863632
        }
      ];
    }
  }

  return verticalSearchResponse;
}

export const MockedVerticalSearchRequest = RequestMock()
  .onRequestTo(async request => {
    const urlRegex = /^https:\/\/liveapi.yext.com\/v2\/accounts\/me\/answers\/vertical\/query/;
    return urlRegex.test(request.url) && request.method === 'get';
  })
  .respond((req, res) => {
    const parsedUrl = new URL(req.url);
    res.body = JSON.stringify(generateVerticalSearchResponse(
      parsedUrl.searchParams.get('input'),
      parsedUrl.searchParams.get('offset')
    ));
    res.headers = CORSHeaders;
    res.statusCode = 200;
  });
