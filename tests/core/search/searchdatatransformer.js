import SearchDataTransformer from '../../../src/core/search/searchdatatransformer';
import StorageKeys from '../../../src/core/storage/storagekeys';
import Navigation from '../../../src/core/models/navigation';
import VerticalResults from '../../../src/core/models/verticalresults';
import SpellCheck from '../../../src/core/models/spellcheck';
import DynamicFilters from '../../../src/core/models/dynamicfilters';
import SearchIntents from '../../../src/core/models/searchintents';
import LocationBias from '../../../src/core/models/locationbias';
import ResponseNoResults from '../../fixtures/responseNoResults.json';
import ResponseWithResults from '../../fixtures/responseWithResults.json';

jest.mock('../../../src/core/http/httprequester');

describe('tranform vertical search response', () => {
  let responseWithResults;
  let responseNoResults;

  beforeEach(() => {
    responseNoResults = ResponseNoResults;
    responseWithResults = ResponseWithResults;
  });

  it('vertical search response with data without formatters', () => {
    const data = responseWithResults;
    const formatters = [];
    const result = SearchDataTransformer.transformVertical(data, formatters);
    expect.assertions(1);
    expect(result).toMatchObject(
      {
        [StorageKeys.QUERY_ID]: data.response.queryId,
        [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
        [StorageKeys.VERTICAL_RESULTS]: VerticalResults.from(data.response, formatters),
        [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.from(data.response),
        [StorageKeys.INTENTS]: SearchIntents.from(data.response.searchIntents),
        [StorageKeys.SPELL_CHECK]: SpellCheck.from(data.response.spellCheck),
        [StorageKeys.LOCATION_BIAS]: LocationBias.from(data.response.locationBias)
      }
    );
  });

  it('vertical search response no data without formatters', () => {
    const data = responseNoResults;
    const formatters = [];
    const result = SearchDataTransformer.transformVertical(data, formatters);
    expect.assertions(1);
    expect(result).toMatchObject(
      {
        [StorageKeys.QUERY_ID]: data.response.queryId,
        [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
        [StorageKeys.VERTICAL_RESULTS]: VerticalResults.from(data.response, formatters),
        [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.from(data.response),
        [StorageKeys.INTENTS]: SearchIntents.from(data.response.searchIntents),
        [StorageKeys.SPELL_CHECK]: SpellCheck.from(data.response.spellCheck),
        [StorageKeys.LOCATION_BIAS]: LocationBias.from(data.response.locationBias)
      }
    );
  });
});
