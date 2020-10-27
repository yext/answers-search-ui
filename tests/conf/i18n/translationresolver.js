const TranslationResolver = require('../../../conf/i18n/translationresolver');
const Translator = require('../../../conf/i18n/translator');
const TranslationPlaceholder = require('../../../conf/i18n/models/translationplaceholder');

async function createTranslationResolver () {
  const translator = await createTranslator();
  const passThroughRuntimeGenerator = translationResult => translationResult;
  return new TranslationResolver(translator, passThroughRuntimeGenerator);
}

async function createTranslator () {
  const locale = 'fr';
  return Translator.create(locale, [], { [locale]: { translation: {
    'Hello': 'Bonjour',
    'result': 'résultat',
    'result_plural': 'résultats',
    'object_noun': 'objet',
    'object_noun_plural': 'objets',
    'mail_noun': 'courrier'
  } } });
}

describe('TranslationResolver can resolve various TranslationPlaceholders', () => {
  it('resolves a simple phrase', async () => {
    const translationResolver = await createTranslationResolver();
    const placeholder = new TranslationPlaceholder({
      phrase: 'Hello',
      interpolationValues: {}
    });
    const resolverResult = translationResolver.resolve(placeholder);
    expect(resolverResult).toEqual('Bonjour');
  });

  it('resolves with context', async () => {
    const translationResolver = await createTranslationResolver();
    const placeholder = new TranslationPlaceholder({
      phrase: 'mail',
      context: 'noun',
      interpolationValues: {}
    });
    const resolverResult = translationResolver.resolve(placeholder);
    expect(resolverResult).toEqual('courrier');
  });

  it('resolves plural forms', async () => {
    const translationResolver = await createTranslationResolver();
    const placeholder = new TranslationPlaceholder({
      phrase: 'result',
      pluralForm: 'results',
      count: 'myCount',
      interpolationValues: {}
    });
    const expectedResult = {
      '0': 'résultat',
      '1': 'résultats'
    };
    const resolverResult = translationResolver.resolve(placeholder);
    expect(resolverResult).toMatchObject(expectedResult);
  });

  it('resolves plural forms with context', async () => {
    const translationResolver = await createTranslationResolver();
    const placeholder = new TranslationPlaceholder({
      phrase: 'object',
      pluralForm: 'objects',
      count: 'myCount',
      context: 'noun',
      interpolationValues: {}
    });
    const expectedResult = {
      '0': 'objet',
      '1': 'objets'
    };
    const resolverResult = translationResolver.resolve(placeholder);
    expect(resolverResult).toMatchObject(expectedResult);
  });
});
