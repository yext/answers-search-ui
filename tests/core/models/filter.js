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
});
