import Result from '../../../src/core/models/result';

it('constructs a result from an answers-core result', () => {
  const fullDescription = 'Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries. Commercial blueberries—both wild (lowbush) and cultivated (highbush)—are all native to North America.';
  const truncatedDescriptionWithHighlight = '<strong>Blueberries</strong> are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira...';

  const coreResult = {
    rawData: {
      color: 'blue'
    },
    index: 1,
    name: 'blueberry',
    description: fullDescription,
    link: 'www.yext.com',
    id: 2,
    distance: 20,
    distanceFromFilter: 30,
    highlightedValues: [{
      fieldName: 'description',
      path: ['description'],
      value: fullDescription,
      matchedSubstrings: [{
        length: 11,
        offset: 0
      }]
    }],
    entityType: 'ce_fruit'
  };

  const expectedResult = {
    _raw: {
      color: 'blue'
    },
    ordinal: 1,
    title: 'blueberry',
    details: truncatedDescriptionWithHighlight,
    link: 'www.yext.com',
    id: 2,
    distance: 20,
    distanceFromFilter: 30
  };

  const actualResult = Result.fromCore(coreResult);

  expect(actualResult).toMatchObject(expectedResult);
});
