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
    const template = `{{ translate phrase='result' pluralForm='results' count='resultCount' }}`;
    const ast = Handlebars.parse(template);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const hashPairs = ast.body[indexOfFirstStatement].hash.pairs;

    const expectedHashValues = {
      count: 'resultCount',
      pluralForm0: 'résultat',
      pluralForm1: 'résultats'
    };

    Object.entries(expectedHashValues)
      .map(([expectedHashKey, expectedHashValue]) => {
        expect(hashPairs.some(hashPair => {
          const keysMatch = hashPair.key === expectedHashKey;
          const valuesMatch = hashPair.value.value === expectedHashValue;
          return keysMatch && valuesMatch;
        })).toBeTruthy();
      });
  });

  it('a non-translate helper should not be modified', async () => {
    const template = `{{ yext phrase='Hello' }}`;
    const ast = Handlebars.parse(template);
    const nonVisitedAst = _.cloneDeep(ast);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);

    expect(nonVisitedAst).toMatchObject(ast);
  });
});
