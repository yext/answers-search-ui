const TranslateHelperVisitor = require('../../../conf/i18n/translatehelpervisitor');
const Translator = require('../../../conf/i18n/translator');
const Handlebars = require('handlebars');
const _ = require('lodash');

async function createTranslator () {
  const locale = 'fr';
  return Translator.create(locale, [], { [locale]: { translation: {
    'Hello': 'Bonjour'
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

  it('non-translate helper', async () => {
    const template = `{{ yext phrase='Hello' }}`;
    const ast = Handlebars.parse(template);
    const nonVisitedAst = _.cloneDeep(ast);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);

    expect(nonVisitedAst).toMatchObject(ast);
  });

  /* it('plural translation', async () => {
    const template = `{{ translate phrase='result' pluralForm='results'}}`;
    const ast = Handlebars.parse(template);
    const translator = await createTranslator();

    new TranslateHelperVisitor(translator).accept(ast);
    const indexOfFirstStatement = 0;
    const translatedValue = ast.body[indexOfFirstStatement].value;

    expect(translatedValue).toEqual('Bonjour');
  }); */
});
