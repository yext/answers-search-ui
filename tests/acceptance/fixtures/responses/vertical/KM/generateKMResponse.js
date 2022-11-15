import { basicResponseData, meta, locationBias } from '../sharedData';
import { nyData } from './nyData';
import { ukData } from './ukData';
import { vaData } from './vaData';

export function generateKMVerticalSearchResponse (input, offset) {
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
      spellCheckResponse.response.allResultsForVertical.results = [vaData];
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
