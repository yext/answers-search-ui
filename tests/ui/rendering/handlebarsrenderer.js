import HandlebarsRenderer from '../../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars';

describe('the handlebars runtimeTranslation helper', () => {
  const renderer = new HandlebarsRenderer();
  renderer.init({
    '_hb': Handlebars
  });

  it('can translate a string phrase', () => {
    const template = `{{runtimeTranslation
      phrase='Hello my name is [[firstName]] [[lastName]]'
      firstName=myFirstName
      lastName=myLastName
    }}`;
    const data = {
      myFirstName: 'Cat',
      myLastName: 'Lady'
    };
    const translation = renderer.compile(template)(data);
    expect(translation).toEqual('Hello my name is Cat Lady');
  });

  describe('when translating a plural phrase in en', () => {
    const phrase = {
      0: 'a [[size]] [[color]] cow tried to make a [[food]]',
      1: '[[count]] [[size]] [[color]] cows tried to make a [[food]]',
      locale: 'en'
    };
    const template = `{{runtimeTranslation
      phrase='${JSON.stringify(phrase)}'
      size=mySize
      color=myColor
      food=myFood
      count=myCount
    }}`;
    const data = {
      mySize: 'large',
      myColor: 'red',
      myFood: 'pizza',
      myCount: 1
    };

    it('works when count = 1', () => {
      const translation = renderer.compile(template)(data);
      expect(translation).toEqual('a large red cow tried to make a pizza');
    });

    it('works when count > 1', () => {
      const translation = renderer.compile(template)({
        ...data,
        myCount: 82
      });
      expect(translation).toEqual('82 large red cows tried to make a pizza');
    });

    it('works when count is a string', () => {
      const translation = renderer.compile(template)({
        ...data,
        myCount: '82'
      });
      expect(translation).toEqual('82 large red cows tried to make a pizza');
    });
  });

  describe('when translating a plural phrase in a locale with multiple plural forms', () => {
    const phrase = {
      0: 'Pasirinkta [[count]] tinklalapis',
      1: 'Pasirinkta [[count]] tinklalapiai',
      2: 'Pasirinkta [[count]] tinklalapių',
      locale: 'lt-LT'
    };
    const template = `{{runtimeTranslation
      phrase='${JSON.stringify(phrase)}'
      count=myCount
    }}`;

    it('uses key_0 when count = 1', () => {
      const translation = renderer.compile(template)({
        myCount: 1
      });
      expect(translation).toEqual('Pasirinkta 1 tinklalapis');
    });

    it('uses key_1 when count = 2', () => {
      const translation = renderer.compile(template)({
        myCount: 2
      });
      expect(translation).toEqual('Pasirinkta 2 tinklalapiai');
    });

    it('uses key_2 when count = 0', () => {
      const translation = renderer.compile(template)({
        myCount: 0
      });
      expect(translation).toEqual('Pasirinkta 0 tinklalapių');
    });
  });
});
