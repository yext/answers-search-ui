import Filter from '../../../src/core/models/filter';

describe('creating filters', () => {
  it('correctly parses filters from the server', () => {
    const serverFilter = '{"name": { "$eq": "Billy Bastardi" }}';
    const expectedFilter = new Filter({ name: { '$eq': 'Billy Bastardi' } });

    const actualFilter = Filter.fromResponse(serverFilter);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly ORs filters together', () => {
    const filter1 = new Filter({ name: { '$eq': 'Billy Bastardi' } });
    const filter2 = new Filter({ name: { '$eq': 'Jesse Sharps' } });
    const expectedFilter = new Filter({ '$or': [filter1, filter2] });

    const actualFilter = Filter.or(filter1, filter2);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly ANDs filters together', () => {
    const filter1 = new Filter({ name: { '$eq': 'Billy Bastardi' } });
    const filter2 = new Filter({ name: { '$eq': 'Jesse Sharps' } });
    const expectedFilter = new Filter({ '$and': [filter1, filter2] });

    const actualFilter = Filter.and(filter1, filter2);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates "equal to" filters', () => {
    const expectedFilter = new Filter({ name: { '$eq': 'Billy Bastardi' } });

    const actualFilter = Filter.equal('name', 'Billy Bastardi');
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates "less than" filters', () => {
    const expectedFilter = new Filter({ age: { '$lt': 30 } });

    const actualFilter = Filter.lessThan('age', 30);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates "less than or equal to" filters', () => {
    const expectedFilter = new Filter({ age: { '$le': 30 } });

    const actualFilter = Filter.lessThanEqual('age', 30);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates "greater than" filters', () => {
    const expectedFilter = new Filter({ age: { '$gt': 30 } });

    const actualFilter = Filter.greaterThan('age', 30);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates "greater than or equal to" filters', () => {
    const expectedFilter = new Filter({ age: { '$ge': 30 } });

    const actualFilter = Filter.greaterThanEqual('age', 30);
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('properly creates range filters', () => {
    const expectedInclusiveFilter = new Filter({ 'age': { '$ge': 30, '$le': 40 } });
    const expectedExclusiveFilter = new Filter({ 'age': { '$gt': 30, '$lt': 40 } });

    const actualInclusiveFilter = Filter.inclusiveRange('age', 30, 40);
    expect(actualInclusiveFilter).toEqual(expectedInclusiveFilter);

    const actualExclusiveFilter = Filter.exclusiveRange('age', 30, 40);
    expect(actualExclusiveFilter).toEqual(expectedExclusiveFilter);
  });

  it('properly creates generic filters from a given matcher', () => {
    const expectedFilter = new Filter({ 'myField': { '$myMatcher': 'myValue' } });

    const actualFilter = Filter._fromMatcher('myField', '$myMatcher', 'myValue');
    expect(actualFilter).toEqual(expectedFilter);
  });

  it('can properly parse the key of a filter', () => {
    let filter = new Filter({ 'myField': { '$myMatcher': 'myValue' } });
    expect(filter.getFilterKey()).toEqual('myField');
    filter = Filter.empty();
    expect(filter.getFilterKey()).toBeFalsy();
  });

  it('can properly create a range filter', () => {
    expect(Filter.range('myField', 'min', 'max', true))
      .toEqual(Filter.exclusiveRange('myField', 'min', 'max'));
    expect(Filter.range('myField', 'min', 'max', false))
      .toEqual(Filter.inclusiveRange('myField', 'min', 'max'));
  });

  it('can properly create a string range filter with empty min', () => {
    const minValues = [null, undefined, ''];
    const max = 'max';
    for (const min of minValues) {
      expect(Filter.range('myField', min, max, true))
        .toEqual(Filter.lessThan('myField', max));
      expect(Filter.range('myField', min, max, false))
        .toEqual(Filter.lessThanEqual('myField', max));
    }
  });

  it('can properly create a range filter with empty max', () => {
    const min = 'min';
    const maxValues = [null, undefined, ''];
    for (const max of maxValues) {
      expect(Filter.range('myField', min, max, true))
        .toEqual(Filter.greaterThan('myField', min));
      expect(Filter.range('myField', min, max, false))
        .toEqual(Filter.greaterThanEqual('myField', min));
    }
  });

  it('can properly create a range filter with empty min and max', () => {
    const minValues = [null, undefined, ''];
    const maxValues = [null, undefined, ''];
    for (const max of maxValues) {
      for (const min of minValues) {
        expect(Filter.range('myField', min, max, true))
          .toEqual(Filter.empty());
        expect(Filter.range('myField', min, max, false))
          .toEqual(Filter.empty());
      }
    }
  });

  it('can properly create a range filter with equal min and max', () => {
    const min = '10/18/1996';
    const max = '10/18/1996';
    expect(Filter.range('myField', min, max, true))
      .toEqual(Filter.empty());
    expect(Filter.range('myField', min, max, false))
      .toEqual(Filter.equal('myField', min));
    expect(Filter.range('myField', min, max, false))
      .toEqual(Filter.equal('myField', max));
  });
});

describe('checking filter equality', () => {
  const filter1 = new Filter({ name: { '$eq': 'Alexis' } });
  const filter2 = new Filter({ name: { '$eq': 'Christian' } });
  const filter3 = new Filter({ name: { '$eq': 'Sara' } });
  const filter4 = new Filter({ name: { '$eq': 'Tom' } });

  it('works for equivalent filters', () => {
    const filter4Clone = new Filter({ name: { '$eq': 'Tom' } });
    expect(filter4.equals(filter4Clone)).toBeTruthy();
    expect(filter4Clone.equals(filter4)).toBeTruthy();
  });

  it('returns false for different filters', () => {
    expect(filter2.equals(filter3)).toBeFalsy();
  });

  it('works for 2 equivalent combined filters, ignoring combination order', () => {
    const filter4And3 = Filter.and(filter4, filter3);
    const filter3And4 = Filter.and(filter3, filter4);
    expect(filter4And3.equals(filter3And4)).toBeTruthy();
  });

  it('returns false for 2 different combined filters', () => {
    const filter4And3 = Filter.and(filter4, filter3);
    const filter4Or3 = Filter.or(filter4, filter3);
    expect(filter4And3.equals(filter4Or3)).toBeFalsy();
  });

  it('returns false when comparing a combined and simple filter', () => {
    const filter2And3 = Filter.and(filter2, filter3);
    expect(filter1.equals(filter2And3)).toBeFalsy();
  });
});
