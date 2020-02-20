import Filter from '../../../src/core/models/filter';
import FilterView from '../../../src/core/models/filterview';

describe('creating filters', () => {
  it('correctly parses filters from the server', () => {
    const serverFilter = '{"name": { "$eq": "Billy Bastardi" }}';
    const expectedFilter = new Filter({ name: { '$eq': 'Billy Bastardi' } });

    const actualFilter = FilterView.fromResponse(serverFilter);
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly ORs filters together', () => {
    const filter1 = new Filter({ name: { '$eq': 'Billy Bastardi' } });
    const filter2 = new Filter({ name: { '$eq': 'Jesse Sharps' } });
    const expectedFilter = new Filter({ '$or': [filter1, filter2] });

    const actualFilter = FilterView.or(new FilterView(filter1), new FilterView(filter2));
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly ANDs filters together', () => {
    const filter1 = new FilterView(new Filter({ name: { '$eq': 'Billy Bastardi' } }));
    const filter2 = new FilterView(new Filter({ name: { '$eq': 'Jesse Sharps' } }));
    const expectedFilter = new Filter({ '$and': [filter1, filter2] });

    const actualFilter = FilterView.and(new FilterView(filter1), new FilterView(filter2));
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly groups filters together', () => {
    const filter1 = new Filter({ name: { '$eq': 'Billy Bastardi' } });
    const filter2 = new Filter({ name: { '$eq': 'Jesse Sharps' } });
    const filter3 = new Filter({ title: { '$eq': 'Software Engineer' } });
    const expectedFilter = new Filter({ '$and': [ { '$or': [filter1, filter2] }, filter3 ] });

    const actualFilter = FilterView.group(
      new FilterView(filter1),
      new FilterView(filter2),
      new FilterView(filter3)
    );
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates "equal to" filters', () => {
    const expectedFilter = new Filter({ name: { '$eq': 'Billy Bastardi' } });

    const actualFilter = FilterView.equal('name', 'Billy Bastardi');
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates "less than" filters', () => {
    const expectedFilter = new Filter({ age: { '$lt': 30 } });

    const actualFilter = FilterView.lessThan('age', 30);
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates "less than or equal to" filters', () => {
    const expectedFilter = new Filter({ age: { '$le': 30 } });

    const actualFilter = FilterView.lessThanEqual('age', 30);
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates "greater than" filters', () => {
    const expectedFilter = new Filter({ age: { '$gt': 30 } });

    const actualFilter = FilterView.greaterThan('age', 30);
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates "greater than or equal to" filters', () => {
    const expectedFilter = new Filter({ age: { '$ge': 30 } });

    const actualFilter = FilterView.greaterThanEqual('age', 30);
    expect(actualFilter.filter).toEqual(expectedFilter);
  });

  it('properly creates range filters', () => {
    const expectedInclusiveFilter = new Filter({ 'age': { '$ge': 30, '$le': 40 } });
    const expectedExclusiveFilter = new Filter({ 'age': { '$gt': 30, '$lt': 40 } });

    const actualInclusiveFilter = FilterView.inclusiveRange('age', 30, 40);
    expect(actualInclusiveFilter.filter).toEqual(expectedInclusiveFilter);

    const actualExclusiveFilter = FilterView.exclusiveRange('age', 30, 40);
    expect(actualExclusiveFilter.filter).toEqual(expectedExclusiveFilter);
  });

  it('properly creates generic filters from a given matcher', () => {
    const expectedFilter = new Filter({ 'myField': { '$myMatcher': 'myValue' } });

    const actualFilter = Filter._fromMatcher('myField', '$myMatcher', 'myValue');
    expect(actualFilter).toEqual(expectedFilter);
  });
});
