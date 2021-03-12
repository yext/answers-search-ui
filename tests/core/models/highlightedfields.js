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
