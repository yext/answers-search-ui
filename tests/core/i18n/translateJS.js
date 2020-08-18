import translateJS from '../../../src/core/i18n/translateJS';

describe('translateJS usage', () => {
  it('simple interpolation', () => {
    const translation = translateJS('Mail maintenant {{id1}}', { id1: 'Connor' });
    expect(translation).toEqual('Mail maintenant Connor');
  });

  it('interpolation with multiple interpolation values', () => {
    const translation = translateJS('Mail maintenant {{id1}} et {{id2}}', { id1: 'Connor', id2: 'Oliver' });
    expect(translation).toEqual('Mail maintenant Connor et Oliver');
  });

  it('simple pluralization with singular count', () => {
    const translation = translateJS('{"1":"fleur","plural":"fleurs"}', {}, 1);
    expect(translation).toEqual('fleur');
  });

  it('simple pluralization with plural count', () => {
    const translation = translateJS('{"1":"fleur","plural":"fleurs"}', {}, 2);
    expect(translation).toEqual('fleurs');
  });

  it('pluralization with singular count and interpolation', () => {
    const translation = translateJS('{"1":"Un article {{name}}","plural":"Les articles {{name}}"}', { name: 'de presse' }, 1);
    expect(translation).toEqual('Un article de presse');
  });

  it('pluralization with plural count and interpolation', () => {
    const translation = translateJS('{"1":"Un article {{name}}","plural":"Les articles {{name}}"}', { name: 'de presse' }, 2);
    expect(translation).toEqual('Les articles de presse');
  });
});
