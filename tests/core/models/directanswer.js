import DirectAnswer from '../../../src/core/models/directanswer';

it('constructs an direct answer from an answers-core direct answer', () => {
  const coreRelatedResult = {
    rawData: {
      food_type: 'fruit'
    },
    id: 1,
    type: 'ce_fruit',
    link: 'yext.com'
  };

  const coreDirectAnswer = {
    value: 'red',
    relatedResult: coreRelatedResult,
    verticalKey: 'foods',
    entityName: 'apple',
    fieldName: 'color',
    fieldApiName: 'c_color',
    fieldType: 'color'
  };

  const expectedDirectAnswer = {
    answer: {
      entityName: 'apple',
      fieldName: 'color',
      fieldApiName: 'c_color',
      value: 'red',
      fieldType: 'color'
    },
    relatedItem: {
      data: {
        fieldValues: {
          food_type: 'fruit'
        },
        id: 1,
        type: 'ce_fruit',
        website: 'yext.com'
      },
      verticalConfigId: 'foods'
    }
  };

  const actualDirectAnswer = DirectAnswer.fromCore(coreDirectAnswer);

  expect(actualDirectAnswer).toMatchObject(expectedDirectAnswer);
});
