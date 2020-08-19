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

  describe('when translating plural phrase', () => {
    const template = `{{runtimeTranslation
      phrase='{
        "1":"a [[size]] [[color]] cow tried to make a [[food]]",
        "plural":"[[count]] [[size]] [[color]] cows tried to make a [[food]]"
      }'
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
});
