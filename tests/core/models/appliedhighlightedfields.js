import AppliedHighlightedFields from '../../../src/core/models/appliedhighlightedfields';

it('constructs an AppliedHighlightedField object from an answers-core HighlightedFields', () => {
  const highlightedFields = {
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

  const expectedAppliedHighlightedFields = {
    description: '<strong>yext</strong> is a company',
    featured: {
      info: '<strong>perfect</strong> <strong>answers</strong> everywhere'
    }
  };

  const actualHighlightedFields = AppliedHighlightedFields.fromCore(highlightedFields);
  expect(actualHighlightedFields).toEqual(
    new AppliedHighlightedFields(expectedAppliedHighlightedFields));
});

it('handles arrays ', () => {
  const highlightedFields = {
    pastas: [
      {
        value: 'spaghetti',
        matchedSubstrings: []
      },
      {
        value: 'linguini',
        matchedSubstrings: [
          {
            offset: 0,
            length: 4
          }
        ]
      }
    ]
  };
  const expectedAppliedHighlightedFields = {
    pastas: [
      'spaghetti',
      '<strong>ling</strong>uini'
    ]
  };

  const actualHighlightedFields = AppliedHighlightedFields.fromCore(highlightedFields);
  expect(actualHighlightedFields).toEqual(
    new AppliedHighlightedFields(expectedAppliedHighlightedFields));
});

it('handles nested arrays ', () => {
  const highlightedFields = {
    c_nestedTextLists: [
      {
        struct: {
          pastas: [
            {
              value: 'spaghetti',
              matchedSubstrings: []
            },
            {
              value: 'linguini',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 4
                }
              ]
            }
          ],
          sandwiches: [
            {
              value: 'sub',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 2
                }
              ]
            },
            {
              value: 'borger',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 5
                }]
            },
            {
              value: 'america dog',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 7
                }
              ]
            }
          ]
        }
      },
      {
        vegetables: [
          {
            value: 'carrot',
            matchedSubstrings: [
              {
                offset: 0,
                length: 4
              }
            ]
          },
          {
            value: 'celery',
            matchedSubstrings: [
              {
                offset: 0,
                length: 4
              }
            ]
          }
        ]
      }
    ]
  };

  const expectedAppliedHighlightedFields = {
    c_nestedTextLists: [
      {
        struct: {
          pastas: [
            'spaghetti',
            '<strong>ling</strong>uini'
          ],
          sandwiches: [
            '<strong>su</strong>b',
            '<strong>borge</strong>r',
            '<strong>america</strong> dog'
          ]
        }
      },
      {
        vegetables: [
          '<strong>carr</strong>ot',
          '<strong>cele</strong>ry'
        ]
      }
    ]
  };

  const actualHighlightedFields = AppliedHighlightedFields.fromCore(highlightedFields);
  expect(actualHighlightedFields).toEqual(
    new AppliedHighlightedFields(expectedAppliedHighlightedFields));
});
