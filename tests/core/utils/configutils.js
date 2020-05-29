import { parseConfig } from 'src/core/utils/configutils.js';

describe('parseConfig method', () => {
  it('works for nested config', () => {
    const testConfig = {
      a: {
        b: {
          c: 1234
        }
      }
    };
    expect(parseConfig(testConfig, ['a.b.c'], 'default')).toEqual(1234);
  });

  it('defaults when config option is not found', () => {
    const testConfig = {
      a: {
        b: {
          LOL: 1234
        }
      }
    };
    expect(parseConfig(testConfig, ['a.b.c'], 'default')).toEqual('default');
  });

  it('works for multiple config synonyms', () => {
    const testConfig = {
      a: {
        b: {
          LOL: 'yes'
        }
      },
      LOL: 'not me'
    };
    expect(parseConfig(testConfig, ['a.b.c', 'a.b.LOL', 'LOL', 'default'], 'default')).toEqual('yes');
  });
});
