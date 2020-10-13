const TranslateHelperVisitor = require('../../../conf/i18n/translatehelpervisitor');
const Translator = require('../../../conf/i18n/translator');
const Handlebars = require('handlebars');
const _ = require('lodash');

async function createTranslator () {
  const locale = 'fr';
  return Translator.create(locale, [], { [locale]: { translation: {
    'Hello': 'Bonjour',
    'result': 'résultat',
    'result_plural': 'résultats'
  } } });
}

describe('TranslateHelperVisitor usage', () => {
  it('static translation', async () => {
    const template = `{{ translate phrase='Hello' }}`;
    const ast = Handlebars.parse(template);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const translatedValue = ast.body[indexOfFirstStatement].value;

    expect(translatedValue).toEqual('Bonjour');
  });

  it('plural translation', async () => {
    const template = `{{ translate phrase='result' pluralForm='results' count=resultCount }}`;
    const ast = Handlebars.parse(template);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const hashPairs = ast.body[indexOfFirstStatement].hash.pairs;

    const expectedPluralForm0 = {
      key: 'pluralForm0',
      value: { type: 'StringLiteral', value: 'résultat' }
    };

    const expectedPluralForm1 = {
      key: 'pluralForm1',
      value: { type: 'StringLiteral', value: 'résultats' }
    };

    const expectedCount = {
      key: 'count',
      value: { type: 'PathExpression', parts: ['resultCount'] }
    };

    const actualPluralForm0 = hashPairs.find(hashPair => hashPair.key === 'pluralForm0');
    const actualPluralForm1 = hashPairs.find(hashPair => hashPair.key === 'pluralForm1');
    const actualCount = hashPairs.find(hashPair => hashPair.key === 'count');

    expect(actualPluralForm0).toMatchObject(expectedPluralForm0);
    expect(actualPluralForm1).toMatchObject(expectedPluralForm1);
    expect(actualCount).toMatchObject(expectedCount);
  });

  it('a non-translate helper should not be modified', async () => {
    const template = `{{ yext phrase='Hello' }}`;
    const ast = Handlebars.parse(template);
    const originalAst = _.cloneDeep(ast);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);

    expect(originalAst).toMatchObject(ast);
  });
});
