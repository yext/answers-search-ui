import AppliedHighlightedFields from '../../../src/core/models/appliedhighlightedfields';

it('constructs a highlighted field map from an answers-core HighlightInfo array', () => {
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

  const actualHighlightedFieldMap = AppliedHighlightedFields.fromCore(highlightedValueArray);

  expect(actualHighlightedFieldMap).toMatchObject(expectedAppliedHighlightedFields);
});
