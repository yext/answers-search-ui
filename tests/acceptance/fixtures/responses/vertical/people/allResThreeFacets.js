export const allResThreeFacets = {
  meta: {
    uuid: '01818c2a-897f-bd57-cf2e-1439919d6ba0',
    errors: []
  },
  response: {
    businessId: 3350634,
    queryId: '01818c2a-8994-466e-e5f7-a55cdf353435',
    resultsCount: 1,
    results: [
      {
        data: {
          id: 'Employee-1162',
          type: 'ce_person',
          address: {
            line1: '1 Madison Ave',
            city: 'NEW YORK',
            region: 'NY',
            postalCode: '10010',
            countryCode: 'US'
          },
          name: 'Sophia Kleyman',
          cityCoordinate: {
            latitude: 40.708601,
            longitude: -73.876717
          },
          c_allstateLadyCTA: {
            label: 'Learn More',
            linkType: 'URL',
            link: 'http://yext.com'
          },
          c_employeeCity: 'Tysons Corner',
          c_employeeCountry: 'United States',
          c_employeeDepartment: 'Technology',
          c_employeeRegion: 'Virginia',
          c_employeeTitle: 'Software Engineer',
          c_puppyPreference: [
            'Frodo'
          ],
          c_startDate: '2015-06-02',
          displayCoordinate: {
            latitude: 40.7410895,
            longitude: -73.9875092
          },
          emails: [
            'skleyman@yext.com'
          ],
          firstName: 'Sophia',
          geocodedCoordinate: {
            latitude: 40.7410895,
            longitude: -73.98750919999999
          },
          headshot: {
            url: 'https://a.mktgcdn.com/p/WO_ADrscoMVTrJg9niQgwMORGrlrDzfhQzzku6GRORY/304x406.png',
            width: 304,
            height: 406,
            sourceUrl: 'http://a.mktgcdn.com/p/WO_ADrscoMVTrJg9niQgwMORGrlrDzfhQzzku6GRORY/304x406.png',
            thumbnails: [
              {
                url: 'https://a.mktgcdn.com/p/WO_ADrscoMVTrJg9niQgwMORGrlrDzfhQzzku6GRORY/196x261.png',
                width: 196,
                height: 261
              }
            ]
          },
          lastName: 'Kleyman',
          routableCoordinate: {
            latitude: 40.7412007,
            longitude: -73.9878011
          },
          yextDisplayCoordinate: {
            latitude: 40.7410895,
            longitude: -73.9875092
          },
          yextRoutableCoordinate: {
            latitude: 40.7412007,
            longitude: -73.9878011
          },
          uid: '18718274'
        },
        highlightedFields: {},
        distance: 333778
      }
    ],
    appliedQueryFilters: [],
    facets: [
      {
        fieldId: 'c_puppyPreference',
        displayName: 'Puppy Preference',
        options: [
          {
            displayName: 'Frodo',
            count: 1,
            selected: true,
            filter: {
              c_puppyPreference: {
                $eq: 'Frodo'
              }
            }
          },
          {
            displayName: 'Marty',
            count: 1,
            selected: false,
            filter: {
              c_puppyPreference: {
                $eq: 'Marty'
              }
            }
          }
        ]
      },
      {
        fieldId: 'brands',
        displayName: 'Brands',
        options: []
      },
      {
        fieldId: 'c_employeeDepartment',
        displayName: 'Employee Department',
        options: [
          {
            displayName: 'Technology',
            count: 1,
            selected: true,
            filter: {
              c_employeeDepartment: {
                $eq: 'Technology'
              }
            }
          }
        ]
      },
      {
        fieldId: 'c_popularity',
        displayName: 'Popularity',
        options: []
      },
      {
        fieldId: 'c_terminationDate',
        displayName: 'Termination Date',
        options: []
      },
      {
        fieldId: 'c_cellPhone',
        displayName: 'Cell Phone',
        options: []
      },
      {
        fieldId: 'c_startDate',
        displayName: 'Start Date',
        options: []
      },
      {
        fieldId: 'languages',
        displayName: 'Languages',
        options: []
      },
      {
        fieldId: 'services',
        displayName: 'Services',
        options: []
      },
      {
        fieldId: 'specialities',
        displayName: 'Specialties',
        options: []
      },
      {
        fieldId: 'products',
        displayName: 'Products',
        options: []
      }
    ],
    source: 'KNOWLEDGE_MANAGER',
    searchIntents: [],
    locationBias: {
      latitude: 38.890396,
      longitude: -77.084159,
      locationDisplayName: 'Arlington, Virginia, United States',
      accuracy: 'DEVICE'
    }
  }
};
