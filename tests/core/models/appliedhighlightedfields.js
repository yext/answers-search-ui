import AppliedHighlightedFields from '../../../src/core/models/appliedhighlightedfields';

it('constructs an AppliedHighlightedField object from an answers-core HighlightedValue array', () => {
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

  const expectedAppliedHighlightedFields = {
    description: '<strong>yext</strong> is a company',
    featured: {
      info: '<strong>perfect</strong> <strong>answers</strong> everywhere'
    }
  };

  const actualHighlightedFields = AppliedHighlightedFields.fromCore(highlightedValueArray);

  expect(actualHighlightedFields).toMatchObject(expectedAppliedHighlightedFields);
});
