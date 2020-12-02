import SearchIntents from '../../../src/core/models/searchintents';

describe('creates a search intents model from an answers-core search intents array', () => {
  it('near me intent is present', () => {
    const coreSearchIntentsArray = ['NEAR_ME'];
    const expectedSearchIntents = {
      nearMe: true
    };
    const actualSearchIntents = SearchIntents.fromCore(coreSearchIntentsArray);

    expect(actualSearchIntents).toMatchObject(expectedSearchIntents);
  });

  it('near me intent is not present', () => {
    const coreSearchIntentsArray = [];
    const expectedSearchIntents = {
      nearMe: false
    };
    const actualSearchIntents = SearchIntents.fromCore(coreSearchIntentsArray);

    expect(actualSearchIntents).toMatchObject(expectedSearchIntents);
  });
});
