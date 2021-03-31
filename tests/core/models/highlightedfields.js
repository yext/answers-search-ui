import HighlightedFields from '../../../src/core/models/highlightedfields';

it('constructs a HighlightedFields object from an answers-core HighlightInfo array', () => {
  const highlightedValueArray = [{
    fieldName: 'description',
    path: ['description'],
    value: 'yext is a company',
    matchedSubstrings: [{
      length: 4,
      offset: 0
    }]
  }, {
    fieldName: 'info',
    path: ['featured', 'info'],
    value: 'perfect answers everywhere',
    matchedSubstrings: [{
      length: 7,
      offset: 0
    }, {
      length: 7,
      offset: 8
    }]
  }];

  const expectedHighlightedFields = {
    description: {
      value: 'yext is a company',
      matchedSubstrings: [{
        length: 4,
        offset: 0
      }]
    },
    featured: {
      info: {
        value: 'perfect answers everywhere',
        matchedSubstrings: [{
          length: 7,
          offset: 0
        }, {
          length: 7,
          offset: 8
        }]
      }
    }
  };

  const actualHighlightedFields = HighlightedFields.fromCore(highlightedValueArray);

  expect(actualHighlightedFields).toMatchObject(expectedHighlightedFields);
});

it('can construct a HighlighedFields obj with arbitrarily nested array fields', () => {
  const highlightedValueArray = [
    {
      fieldName: 'superDuper',
      value: 'super',
      path: ['featured', 'languages', 'superDuper'],
      matchedSubstrings: []
    },
    {
      fieldName: 'superDuper',
      value: 'deeduper',
      path: ['featured', 'languages', 'superDuper'],
      matchedSubstrings: []
    },
    {
      fieldName: 'reallyAwesome',
      value: 'Spanish',
      path: ['featured', 'languages', 'reallyAwesome'],
      matchedSubstrings: [
        {
          offset: 0,
          length: 7
        }
      ]
    }
  ];
  const expectedHighlightedFields = {
    featured: {
      languages: {
        superDuper: [
          {
            value: 'super',
            matchedSubstrings: []
          },
          {
            value: 'deeduper',
            matchedSubstrings: []
          }
        ],
        reallyAwesome: {
          value: 'Spanish',
          matchedSubstrings: [
            {
              offset: 0,
              length: 7
            }
          ]
        }
      }
    }
  };

  const actualHighlightedFields = HighlightedFields.fromCore(highlightedValueArray);
  expect(actualHighlightedFields).toMatchObject(expectedHighlightedFields);
});
