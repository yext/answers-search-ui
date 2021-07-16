import TranslationProcessor from '../../../src/core/i18n/translationprocessor';
import HandleBars from 'handlebars';

const escapeExpression = HandleBars.Utils.escapeExpression;

describe('processTranslation usage', () => {
  it('simple interpolation', () => {
    const translation = TranslationProcessor.process('Mail maintenant [[id1]]', { id1: 'Connor' }, null, null, escapeExpression);
    expect(translation).toEqual('Mail maintenant Connor');
  });

  it('interpolation with multiple interpolation values', () => {
    const translation = TranslationProcessor.process('Mail maintenant [[id1]] et [[id2]]', { id1: 'Connor', id2: 'Oliver' }, null, null, escapeExpression);
    expect(translation).toEqual('Mail maintenant Connor et Oliver');
  });

  it('simple pluralization with singular count', () => {
    const translation = TranslationProcessor.process({ 0: 'fleur', 1: 'fleurs', locale: 'fr-FR' }, {}, 1, null, escapeExpression);
    expect(translation).toEqual('fleur');
  });

  it('simple pluralization with plural count', () => {
    const translation = TranslationProcessor.process({ 0: 'fleur', 1: 'fleurs', locale: 'fr-FR' }, {}, 2, null, escapeExpression);
    expect(translation).toEqual('fleurs');
  });

  it('pluralization with singular count and interpolation', () => {
    const translation = TranslationProcessor.process(
      { 0: 'Un article [[name]]', 1: 'Les articles [[name]]', locale: 'fr-FR' },
      { name: 'de presse' },
      1,
      null,
      escapeExpression
    );
    expect(translation).toEqual('Un article de presse');
  });

  it('pluralization with plural count and interpolation', () => {
    const translation = TranslationProcessor.process(
      { 0: 'Un article [[name]]', 1: 'Les articles [[name]]', locale: 'fr-FR' },
      { name: 'de presse' },
      2,
      null,
      escapeExpression
    );
    expect(translation).toEqual('Les articles de presse');
  });

  it('intermixed markdown with interpolation', () => {
    const translation = TranslationProcessor.process(
      '<a href="https://www.yext.com">Voir notre site web [[name]]</a>',
      { name: 'Howard' },
      null,
      null,
      escapeExpression
    );
    expect(translation).toEqual('<a href="https://www.yext.com">Voir notre site web Howard</a>');
  });

  it('intermixed markdown with pluralization', () => {
    const count = 2;
    const translation = TranslationProcessor.process(
      { 0: '<b>Voir notre site web [[name]]</b>', 1: '<b>Voir nos sites web [[name]]</b>', locale: 'fr-FR' },
      { name: 'Howard' },
      count,
      null,
      escapeExpression
    );
    expect(translation).toEqual('<b>Voir nos sites web Howard</b>');
  });

  it('escapes html inside interpolation params', () => {
    const translation = TranslationProcessor.process(
      'The book named [[name]]',
      { name: '<span>Essentialism</span>' },
      null,
      null,
      escapeExpression
    );
    expect(translation).toEqual('The book named &lt;span&gt;Essentialism&lt;/span&gt;');
  });
});

describe('selecting the correct plural form', () => {
  const translations = {
    0: 'Pasirinkta [[count]] tinklalapis',
    1: 'Pasirinkta [[count]] tinklalapiai',
    2: 'Pasirinkta [[count]] tinklalapių'
  };

  it('uses key_0 when count = 1', () => {
    const translation = TranslationProcessor.process(translations, { count: 1 }, 1, 'lt-LT', escapeExpression);
    expect(translation).toEqual('Pasirinkta 1 tinklalapis');
  });

  it('uses key_1 when count = 2', () => {
    const translation = TranslationProcessor.process(translations, { count: 2 }, 2, 'lt-LT', escapeExpression);
    expect(translation).toEqual('Pasirinkta 2 tinklalapiai');
  });

  it('uses key_2 when count = 0', () => {
    const translation = TranslationProcessor.process(translations, { count: 0 }, 0, 'lt-LT', escapeExpression);
    expect(translation).toEqual('Pasirinkta 0 tinklalapių');
  });

  it('defaults locale to en when given a bogus locale', () => {
    const translation = TranslationProcessor.process(translations, { count: 100 }, 100, 'hawaii', escapeExpression);
    expect(translation).toEqual('Pasirinkta 100 tinklalapiai');
  });

  it('logs an error, and returns the singular form when the plural form is not found', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const translation = TranslationProcessor.process({
      0: 'original msgid',
      1: 'plural form',
    }, { count: 4 }, 4, 'ar-DZ', escapeExpression);
    expect(translation).toEqual('original msgid');
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(
      'msgstr[3] not found for msgid "original msgid" and locale "ar-DZ".');
    errorSpy.mockRestore();
  });
});
