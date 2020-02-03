import SearchDataTransformer from '../../../src/core/search/searchdatatransformer';
import StorageKeys from '../../../src/core/storage/storagekeys';
import Navigation from '../../../src/core/models/navigation';
import VerticalResults from '../../../src/core/models/verticalresults';
import SpellCheck from '../../../src/core/models/spellcheck';
import DynamicFilters from '../../../src/core/models/dynamicfilters';
import SearchIntents from '../../../src/core/models/searchintents';
import LocationBias from '../../../src/core/models/locationbias';
import Response from '../../fixtures/responseWithResults.json';

describe('tranform vertical search response', () => {
  let response;

  beforeEach(() => {
    response = Response;
  });

  it('transforms vertical response correctly', () => {
    const data = response;
    const formatters = [];
    const result = SearchDataTransformer.transformVertical(data, formatters);
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
