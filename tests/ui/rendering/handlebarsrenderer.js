import HandlebarsRenderer from '../../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars';

describe('the handlebars processTranslation helper', () => {
  const renderer = new HandlebarsRenderer();
  renderer.init({
    '_hb': Handlebars
  }, 'en');

  it('can translate a string phrase', () => {
    const template = `{{processTranslation
      phrase='Hello my name is [[firstName]] [[lastName]]'
      firstName=myFirstName
      lastName=myLastName
      locale='en'
    }}`;
    const data = {
      myFirstName: 'Cat',
      myLastName: 'Lady'
    };
    const translation = renderer.compile(template)(data);
    expect(translation).toEqual('Hello my name is Cat Lady');
  });

  describe('when translating a plural phrase in en', () => {
    const template = `{{processTranslation
      pluralForm0='a [[size]] [[color]] cow tried to make a [[food]]'
      pluralForm1='[[count]] [[size]] [[color]] cows tried to make a [[food]]'
      locale='en'
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
    const template = `{{processTranslation
      pluralForm0='Pasirinkta [[count]] tinklalapis'
      pluralForm1='Pasirinkta [[count]] tinklalapiai'
      pluralForm2='Pasirinkta [[count]] tinklalapių'
      locale='lt-LT'
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

  describe('locale fallback behavior works as expected', () => {
    it('use locale specified in the renderer init', () => {
      const rendererWithLocale = new HandlebarsRenderer();
      rendererWithLocale.init({
        '_hb': Handlebars
      }, 'lt-LT');

      const template = `{{processTranslation
        pluralForm0='Pasirinkta [[count]] tinklalapis'
        pluralForm1='Pasirinkta [[count]] tinklalapiai'
        pluralForm2='Pasirinkta [[count]] tinklalapių'
        count=myCount
      }}`;

      const translation = rendererWithLocale.compile(template)({
        myCount: 0
      });
      expect(translation).toEqual('Pasirinkta 0 tinklalapių');
    });

    it('locale in the template overrides the one in the init if specified', () => {
      const rendererWithLocale = new HandlebarsRenderer();
      rendererWithLocale.init({
        '_hb': Handlebars
      }, 'en');

      const template = `{{processTranslation
        pluralForm0='Pasirinkta [[count]] tinklalapis'
        pluralForm1='Pasirinkta [[count]] tinklalapiai'
        pluralForm2='Pasirinkta [[count]] tinklalapių'
        locale='lt-LT'
        count=myCount
      }}`;

      const translation = rendererWithLocale.compile(template)({
        myCount: 0
      });
      expect(translation).toEqual('Pasirinkta 0 tinklalapių');
    });
  });
});
