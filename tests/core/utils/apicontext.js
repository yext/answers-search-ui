import { isValidContext } from '../../../src/core/utils/apicontext';

describe('checking context is valid', () => {
  it('cannot be null', () => {
    const valid = isValidContext('null');
    expect(valid).toEqual(false);
  });

  it('cannot be undefined', () => {
    const valid = isValidContext('undefined');
    expect(valid).toEqual(false);
  });

  it('cannot be a string', () => {
    const valid = isValidContext('"string"');
    expect(valid).toEqual(false);
  });

  it('cannot be an empty string', () => {
    const valid = isValidContext('""');
    expect(valid).toEqual(false);
  });

  it('cannot be an array', () => {
    const valid = isValidContext('[{}, {}]');
    expect(valid).toEqual(false);
  });

  it('cannot be malformed', () => {
    const valid = isValidContext('variable');
    expect(valid).toEqual(false);
  });

  it('can be a regular object', () => {
    const valid = isValidContext('{"a":"tx","b":"hi"}');
    expect(valid).toEqual(true);
  });

  it('can be an empty object', () => {
    const valid = isValidContext('{}');
    expect(valid).toEqual(true);
  });
});
