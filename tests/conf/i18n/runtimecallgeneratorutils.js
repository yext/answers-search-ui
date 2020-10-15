const { generateProcessTranslationJsCall } = require('../../../conf/i18n/runtimecallgeneratorutils');

describe('generateProcessTranslationJsCall works as expected', () => {
  it('simple translation', () => {
    const translation = 'Bonjour';
    const interpolationValues = {};

    const actualJsCall = generateProcessTranslationJsCall(translation, interpolationValues);
    const expectedJsCall = `ANSWERS.processTranslation('Bonjour', {})`;

    expect(actualJsCall).toEqual(expectedJsCall);
  });

  it('translation with plural form', () => {
    const translations = {
      '0': '[[count]] résultat pour [[verticalName]]',
      '1': '[[count]] résultats pour [[verticalName]]'
    };
    const interpolationValues = {
      count: 'myCount',
      verticalName: 'verticalName'
    };

    const actualJsCall = generateProcessTranslationJsCall(translations, interpolationValues, 'myCount');
    const expectedJsCall = `ANSWERS.processTranslation({0:'[[count]] résultat pour [[verticalName]]',1:'[[count]] résultats pour [[verticalName]]'}, {count:myCount,verticalName:verticalName}, myCount)`;

    expect(actualJsCall).toEqual(expectedJsCall);
  });
});
