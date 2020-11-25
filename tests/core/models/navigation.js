import Navigation from '../../../src/core/models/navigation';

it('constructs a navigation model from an answers-core vertical results array', () => {
  const verticalResultsArray = [
    {
      verticalKey: 'faqs'
    }, {
      verticalKey: 'locations'
    }, {
      verticalKey: 'products'
    }
  ];

  const expectedNavigation = {
    tabOrder: [
      'faqs',
      'locations',
      'products'
    ]
  };

  const actualNavigation = Navigation.fromCore(verticalResultsArray);

  expect(actualNavigation).toMatchObject(expectedNavigation);
});
