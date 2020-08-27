import Translator from '../../../src/core/i18n/translator';

describe('translateJS usage', () => {
  it('simple interpolation', () => {
    const translation = Translator.translate('Mail maintenant [[id1]]', { id1: 'Connor' });
    expect(translation).toEqual('Mail maintenant Connor');
  });

  it('interpolation with multiple interpolation values', () => {
    const translation = Translator.translate('Mail maintenant [[id1]] et [[id2]]', { id1: 'Connor', id2: 'Oliver' });
    expect(translation).toEqual('Mail maintenant Connor et Oliver');
  });

  it('simple pluralization with singular count', () => {
    const translation = Translator.translate('{"0":"fleur","1":"fleurs","locale":"fr-FR"}', {}, 1);
    expect(translation).toEqual('fleur');
  });

  it('simple pluralization with plural count', () => {
    const translation = Translator.translate('{"0":"fleur","1":"fleurs","locale":"fr-FR"}', {}, 2);
    expect(translation).toEqual('fleurs');
  });

  it('pluralization with singular count and interpolation', () => {
    const translation = Translator.translate('{"0":"Un article [[name]]","1":"Les articles [[name]]","locale":"fr-FR"}', { name: 'de presse' }, 1);
    expect(translation).toEqual('Un article de presse');
  });

  it('pluralization with plural count and interpolation', () => {
    const translation = Translator.translate('{"0":"Un article [[name]]","1":"Les articles [[name]]","locale":"fr-FR"}', { name: 'de presse' }, 2);
    expect(translation).toEqual('Les articles de presse');
  });

  it('handles escaped single quotes with simple interpolation', () => {
    const translation = Translator.translate('L\'homme nommé [[name]]', { name: 'Samuel' });
    expect(translation).toEqual('L\'homme nommé Samuel');
  });
});

describe('selecting the correct plural form', () => {
  const phrase = {
    0: 'Pasirinkta [[count]] tinklalapis',
    1: 'Pasirinkta [[count]] tinklalapiai',
    2: 'Pasirinkta [[count]] tinklalapių',
    locale: 'lt-LT'
  };
  const translations = JSON.stringify(phrase);

  it('uses key_0 when count = 1', () => {
    const translation = Translator.translate(translations, { count: 1 }, 1);
    expect(translation).toEqual('Pasirinkta 1 tinklalapis');
  });

  it('uses key_1 when count = 2', () => {
    const translation = Translator.translate(translations, { count: 2 }, 2);
    expect(translation).toEqual('Pasirinkta 2 tinklalapiai');
  });

  it('uses key_2 when count = 0', () => {
    const translation = Translator.translate(translations, { count: 0 }, 0);
    expect(translation).toEqual('Pasirinkta 0 tinklalapių');
  });

  it('defaults locale to en when given a bogus locale', () => {
    const bogusTranslations = JSON.stringify({
      ...phrase,
      locale: 'hawaii'
    });
    const translation = Translator.translate(bogusTranslations, { count: 100 }, 100);
    expect(translation).toEqual('Pasirinkta 100 tinklalapiai');
  });
});
