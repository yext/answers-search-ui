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

describe('TranslateHelperVisitor translates visited nodes', () => {
  let translator;
  beforeAll(async () => {
    translator = await createTranslator();
  });

  it('static translation', () => {
    const template = `{{ translate phrase='Hello' }}`;
    const ast = Handlebars.parse(template);

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const translatedValue = ast.body[indexOfFirstStatement].value;

    expect(translatedValue).toEqual('Bonjour');
  });

  it('plural translation', () => {
    const template = `{{ translate phrase='result' pluralForm='results' count=resultCount }}`;
    const ast = Handlebars.parse(template);

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const hashPairs = ast.body[indexOfFirstStatement].hash.pairs;

    const expectedCount = {
      key: 'count',
      value: { type: 'PathExpression', parts: ['resultCount'] }
    };
    const expectedPluralForm0 = {
      key: 'pluralForm0',
      value: { type: 'StringLiteral', value: 'résultat' }
    };
    const expectedPluralForm1 = {
      key: 'pluralForm1',
      value: { type: 'StringLiteral', value: 'résultats' }
    };

    expect(hashPairs).toMatchObject([expectedCount, expectedPluralForm0, expectedPluralForm1]);
  });

  it('a non-translate helper should not be modified', () => {
    const template = `{{ yext phrase='Hello' }}`;
    const ast = Handlebars.parse(template);
    const originalAst = _.cloneDeep(ast);

    new TranslateHelperVisitor(translator).accept(ast);

    expect(originalAst).toMatchObject(ast);
  });
});
