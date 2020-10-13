const path = require('path');

const LocalFileParser = require('../../../conf/i18n/localfileparser');
const Translator = require('../../../conf/i18n/translator');

describe('translations with one plural form (French)', () => {
  let translator;
  beforeEach(async () => {
    const translationsPath = path.join(__dirname, '../../fixtures/translations');
    const localFileParser = new LocalFileParser(translationsPath);

    const frFRTranslations = await localFileParser.fetch('fr-FR');
    const frTranslations = await localFileParser.fetch('fr');
    const translations = {
      fr: { translation: frTranslations },
      'fr-FR': { translation: frFRTranslations }
    };

    translator = await Translator.create('fr-FR', ['fr'], translations);
  });

  describe('Translations without pluralization or context', () => {
    it('simple translation works as expected', () => {
      const translation = translator.translate('Item');
      expect(translation).toEqual('Article');
    });

    it('simple translation with interpolation works as expected', () => {
      const translation =
        translator.translate('Hello [[name]]');
      expect(translation).toEqual('Bonjour [[name]]');
    });

    it('translation fallback works as expected', () => {
      const translation = translator.translate('Breakfast');
      expect(translation).toEqual('Petit Déjeuner');
    });

    it('translation with a period . work as expected', () => {
      const translation = translator.translate('The dog.');
      expect(translation).toEqual('Le chien.');
    });

    it('translation with a colon : work as expected', () => {
      const translation = translator.translate('The: dog');
      expect(translation).toEqual('Le: chien');
    });
  });

  describe('Translations with pluralization and no context', () => {
    it('simple pluralization works as expected', () => {
      const translation = translator.translatePlural('Item', 'Items');
      const expectedResult = {
        0: 'Article',
        1: 'Articles'
      };

      expect(translation).toEqual(expectedResult);
    });

    it('pluralization with interpolation works as expected', () => {
      const translation = translator.translatePlural(
        'There is [[count]] item [[name]]', 'There are [[count]] items [[name]]');
      const expectedResult = {
        0: 'Il y a [[count]] article [[name]]',
        1: 'Il y a [[count]] articles [[name]]'
      };

      expect(translation).toEqual(expectedResult);
    });

    it('falls back correctly when no translations present', () => {
      const translation = translator.translatePlural(
        'Missing [[count]] translation [[name]]',
        'Missing [[count]] translations [[name]]');
      const expectedResult = {
        0: 'Missing [[count]] translation [[name]]',
        1: 'Missing [[count]] translations [[name]]'
      };

      expect(translation).toEqual(expectedResult);
    });
  });

  describe('Translations with context and no pluralization', () => {
    it('context works as expected', () => {
      const translationWithMaleContext = translator
        .translateWithContext('Child', 'male');
      const translationWithFemaleContext = translator
        .translateWithContext('Child', 'female');
      expect(translationWithMaleContext).toEqual('fils');
      expect(translationWithFemaleContext).toEqual('fille');
    });

    it('context and interpolation works as expected', () => {
      const translationWithMaleContext = translator.translateWithContext(
        'I am looking for my child named [[name]]', 'male');
      const translationWithFemaleContext = translator.translateWithContext(
        'I am looking for my child named [[name]]', 'female');
      expect(translationWithMaleContext).toEqual('Je cherche mon fils nommé [[name]]');
      expect(translationWithFemaleContext).toEqual('Je cherche mon fille nommé [[name]]');
    });
  });

  describe('Translations with pluralization and context', () => {
    it('Pluralization and context works as expected', () => {
      const translationWithMaleContext = translator.translatePluralWithContext(
        'The person',
        'The people',
        'male');
      const translationWithFemaleContext = translator.translatePluralWithContext(
        'The person',
        'The people',
        'female');
      const expectedResultWithMaleContext = {
        0: 'L\'homme',
        1: 'Les hommes'
      };
      const expectedResultWithFemaleContext = {
        0: 'La femme',
        1: 'Les femmes'
      };
      expect(translationWithMaleContext).toEqual(expectedResultWithMaleContext);
      expect(translationWithFemaleContext).toEqual(expectedResultWithFemaleContext);
    });

    it('Pluralization and interpolation works as expected', () => {
      const translationWithMaleContext = translator.translatePluralWithContext(
        'The [[count]] person went on a walk',
        'The [[count]] people went on a walk',
        'male');
      const translationWithFemaleContext = translator.translatePluralWithContext(
        'The [[count]] person went on a walk',
        'The [[count]] people went on a walk',
        'female');
      const expectedResultWithMaleContext = {
        0: 'Le [[count]] homme est parti en promenade',
        1: 'Les [[count]] Hommes fait une promenade'
      };
      const expectedResultWithFemaleContext = {
        0: 'La [[count]] femme a fait une promenade',
        1: 'Les [[count]] femmes fait une promenade'
      };
      expect(translationWithMaleContext).toEqual(expectedResultWithMaleContext);
      expect(translationWithFemaleContext).toEqual(expectedResultWithFemaleContext);
    });

    it('Pluralization and interpolation with context works when translation is not found',
      () => {
        const translation = translator.translatePluralWithContext(
          'The [[count]] elephant went on a drive',
          'The [[count]] elephants went on a drive',
          'male');
        const expectedResult = {
          0: 'The [[count]] elephant went on a drive',
          1: 'The [[count]] elephants went on a drive'
        };
        expect(translation).toEqual(expectedResult);
      }
    );
  });

  describe('supports text intermixed with HTML', () => {
    it('apostrophe inside text and html class with double quotes', () => {
      const translation = translator.translate(
        '<span class="yext">The dog\'s bone</span>');
      expect(translation).toEqual('<span class="yext">L\'os du chien</span>');
    });

    it('test with apostrophe and double quotes', () => {
      const translation = translator.translate(
        '<span class="yext">The dog\'s bone</span>');
      expect(translation).toEqual('<span class="yext">L\'os du chien</span>');
    });

    it('with interpolation', () => {
      const translation = translator.translate(
        '<a href="https://www.yext.com">View our website [[name]]</a>');
      expect(translation).toEqual(
        '<a href="https://www.yext.com">Voir notre site web [[name]]</a>');
    });

    it('with pluralization', () => {
      const translation = translator.translatePlural(
        '<a href="https://www.yext.com">View our website [[name]]</a>',
        '<a href="https://www.yext.com">View our websites [[name]]</a>');
      const expectedResult = {
        0: '<a href="https://www.yext.com">Voir notre site web [[name]]</a>',
        1: '<a href="https://www.yext.com">Voir nos sites web [[name]]</a>' };
      expect(translation).toEqual(expectedResult);
    });

    it('with pluralization and context', () => {
      const translation = translator.translatePluralWithContext(
        '<a href="https://www.yext.com">View our website [[name]]</a>',
        '<a href="https://www.yext.com">View our websites [[name]]</a>',
        'internet web, not spider web');
      const expectedResult = {
        0: '<a href="https://www.yext.com">Voir notre site web [[name]]</a>',
        1: '<a href="https://www.yext.com">Voir nos sites web [[name]]</a>' };
      expect(translation).toEqual(expectedResult);
    });
  });

  describe('Handles plural translation keys by escaping regex charaters', () => {
    it('does not confuse parenthesis for a capturing group', () => {
      const translation = translator.translatePlural(
        '([[resultsCount]] result)',
        '([[resultsCount]] results)');
      const expectedResult = {
        0: '([[resultsCount]] résultat)',
        1: '([[resultsCount]] résultats)' };
      expect(translation).toEqual(expectedResult);
    });
  });
});

describe('translations with multiple plural forms (Lithuanian)', () => {
  let translator;
  beforeEach(async () => {
    const translationsPath = path.join(__dirname, '../../fixtures/translations');
    const localFileParser = new LocalFileParser(translationsPath);

    const ltLtTranslations = await localFileParser.fetch('lt-LT');
    const translations = {
      'lt-LT': { translation: ltLtTranslations }
    };

    translator = await Translator.create('lt-LT', [], translations);
  });

  it('simple pluralization works as expected', () => {
    const translation = translator.translatePlural(
      'Unable to email review', 'Unable to email reviews');
    const expectedResult = {
      0: 'Nepavyksta nusiųsti apžvalgos el. paštu',
      1: 'Nepavyksta nusiųsti apžvalgų el. paštu',
      2: 'Nepavyksta nusiųsti apžvalgų el. paštu'
    };

    expect(translation).toEqual(expectedResult);
  });

  it('pluralization with interpolation works as expected', () => {
    const translation = translator.translatePlural(
      '1 location selected',
      '[[count]] locations selected'
    );
    const expectedResult = {
      0: 'Pasirinkta [[count]] tinklalapis',
      1: 'Pasirinkta [[count]] tinklalapiai',
      2: 'Pasirinkta [[count]] tinklalapių'
    };

    expect(translation).toEqual(expectedResult);
  });
});
