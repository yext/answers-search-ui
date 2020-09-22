import TranslationProcessor from '../../../src/core/i18n/translationprocessor';

describe('processTranslation usage', () => {
  it('simple interpolation', () => {
    const translation = TranslationProcessor.process('Mail maintenant [[id1]]', { id1: 'Connor' });
    expect(translation).toEqual('Mail maintenant Connor');
  });

  it('interpolation with multiple interpolation values', () => {
    const translation = TranslationProcessor.process('Mail maintenant [[id1]] et [[id2]]', { id1: 'Connor', id2: 'Oliver' });
    expect(translation).toEqual('Mail maintenant Connor et Oliver');
  });

  it('simple pluralization with singular count', () => {
    const translation = TranslationProcessor.process({ 0: 'fleur', 1: 'fleurs', locale: 'fr-FR' }, {}, 1);
    expect(translation).toEqual('fleur');
  });

  it('simple pluralization with plural count', () => {
    const translation = TranslationProcessor.process({ 0: 'fleur', 1: 'fleurs', locale: 'fr-FR' }, {}, 2);
    expect(translation).toEqual('fleurs');
  });

  it('pluralization with singular count and interpolation', () => {
    const translation = TranslationProcessor.process({ 0: 'Un article [[name]]', 1: 'Les articles [[name]]', locale: 'fr-FR' }, { name: 'de presse' }, 1);
    expect(translation).toEqual('Un article de presse');
  });

  it('pluralization with plural count and interpolation', () => {
    const translation = TranslationProcessor.process({ 0: 'Un article [[name]]', 1: 'Les articles [[name]]', locale: 'fr-FR' }, { name: 'de presse' }, 2);
    expect(translation).toEqual('Les articles de presse');
  });

  it('intermixed markdown with interpolation', () => {
    const translation = TranslationProcessor.process('<a href="https://www.yext.com">Voir notre site web [[name]]</a>', { name: 'Howard' });
    expect(translation).toEqual('<a href="https://www.yext.com">Voir notre site web Howard</a>');
  });

  it('intermixed markdown with pluralization', () => {
    const count = 2;
    const translation = TranslationProcessor.process(
      { 0: '<b>Voir notre site web [[name]]</b>', 1: '<b>Voir nos sites web [[name]]</b>', locale: 'fr-FR' },
      { name: 'Howard' },
      count);
    expect(translation).toEqual('<b>Voir nos sites web Howard</b>');
  });
});

describe('selecting the correct plural form', () => {
  const translations = {
    0: 'Pasirinkta [[count]] tinklalapis',
    1: 'Pasirinkta [[count]] tinklalapiai',
    2: 'Pasirinkta [[count]] tinklalapių'
  };

  it('uses key_0 when count = 1', () => {
    const translation = TranslationProcessor.process(translations, { count: 1 }, 1, 'lt-LT');
    expect(translation).toEqual('Pasirinkta 1 tinklalapis');
  });

  it('uses key_1 when count = 2', () => {
    const translation = TranslationProcessor.process(translations, { count: 2 }, 2, 'lt-LT');
    expect(translation).toEqual('Pasirinkta 2 tinklalapiai');
  });

  it('uses key_2 when count = 0', () => {
    const translation = TranslationProcessor.process(translations, { count: 0 }, 0, 'lt-LT');
    expect(translation).toEqual('Pasirinkta 0 tinklalapių');
  });

  it('defaults locale to en when given a bogus locale', () => {
    const translation = TranslationProcessor.process(translations, { count: 100 }, 100, 'hawaii');
    expect(translation).toEqual('Pasirinkta 100 tinklalapiai');
  });
});
