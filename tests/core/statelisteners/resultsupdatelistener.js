import { Storage } from '../../../src/core';
import UniversalResults from '../../../src/core/models/universalresults';
import VerticalResults from '../../../src/core/models/verticalresults';
import Searcher from '../../../src/core/models/searcher';
import ResultsUpdateListener from '../../../src/core/statelisteners/resultsupdatelistener';
import SearchStates from '../../../src/core/storage/searchstates';
import StorageKeys from '../../../src/core/storage/storagekeys';

describe('_handleUniversalResultsUpdate', () => {
  it('is called when the universal results are updated', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const _handleUniversalResultsUpdate = jest.fn();
    resultsUpdateListener._handleUniversalResultsUpdate = _handleUniversalResultsUpdate;
    expect(_handleUniversalResultsUpdate).toHaveBeenCalledTimes(0);
    const fakeUniversalResults = {
      searchState: SearchStates.SEARCH_COMPLETE
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.UNIVERSAL_RESULTS,
      fakeUniversalResults
    );
    expect(_handleUniversalResultsUpdate).toHaveBeenCalledTimes(1);
    expect(_handleUniversalResultsUpdate).toHaveBeenCalledWith(fakeUniversalResults);
  });

  it('calls into vertical result handler with search core documents from vertical results', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const _handleVerticalResultsUpdate = jest.fn();
    resultsUpdateListener._handleVerticalResultsUpdate = _handleVerticalResultsUpdate;
    expect(resultsUpdateListener._handleVerticalResultsUpdate).toHaveBeenCalledTimes(0);
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(0);
    const searchCoreDocument1 = {
      field1: 'field1 of search document 1',
      field2: 'field2 of search document 1'
    };
    const searchCoreDocument2 = {
      field1: 'field1 of search document 2',
      field2: 'field2 of search document 2'
    };
    const sections = [{
      searchCoreDocument: searchCoreDocument1,
      otherData: 'otherData'
    },
    {
      searchCoreDocument: searchCoreDocument2,
      otherData: 'otherData2'
    }
    ];
    const fakeUniversalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      sections
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.UNIVERSAL_RESULTS,
      fakeUniversalResults
    );
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(1);
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledWith(
      [searchCoreDocument1, searchCoreDocument2],
      Searcher.UNIVERSAL);
  });

  it('calls into GDA with search core documents when universal results present', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const searchCoreDocument1 = {
      field1: 'field1 of search document 1',
      field2: 'field2 of search document 1'
    };
    const searchCoreDocument2 = {
      field1: 'field1 of search document 2',
      field2: 'field2 of search document 2'
    };
    const sections = [{
      searchCoreDocument: searchCoreDocument1,
      otherData: 'otherData'
    },
    {
      searchCoreDocument: searchCoreDocument2,
      otherData: 'otherData2'
    }
    ];
    const fakeUniversalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      sections
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.UNIVERSAL_RESULTS,
      fakeUniversalResults
    );
    expect(resultsUpdateListener.core.generativeDirectAnswer)
      .toHaveBeenCalledWith([searchCoreDocument1, searchCoreDocument2], Searcher.UNIVERSAL);
  });

  it('does not call into GDA when no universal results are present', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const sections = [];
    const fakeUniversalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      sections
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.UNIVERSAL_RESULTS,
      fakeUniversalResults
    );
    expect(resultsUpdateListener.core.generativeDirectAnswer).toHaveBeenCalledTimes(0);
  });

  it('is not called when the universal results are still loading', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const _handleUniversalResultsUpdate = jest.fn();
    resultsUpdateListener._handleUniversalResultsUpdate = _handleUniversalResultsUpdate;
    expect(_handleUniversalResultsUpdate).toHaveBeenCalledTimes(0);
    const fakeUniversalResults = UniversalResults.searchLoading();
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.UNIVERSAL_RESULTS,
      fakeUniversalResults
    );
    expect(_handleUniversalResultsUpdate).toHaveBeenCalledTimes(0);
  });
});

describe('_handleVerticalResultsUpdate', () => {
  it('is called when the vertical results are updated', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const _handleVerticalResultsUpdate = jest.fn();
    resultsUpdateListener._handleVerticalResultsUpdate = _handleVerticalResultsUpdate;
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(0);
    const searchCoreDocument = {
      field1: 'field1 of search document',
      field2: 'field2 of search document'
    };
    const fakeVerticalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      searchCoreDocument
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.VERTICAL_RESULTS,
      fakeVerticalResults
    );
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(1);
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledWith([searchCoreDocument], Searcher.VERTICAL);
  });

  it('calls into GDA with search core documents when vertical results present', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const searchCoreDocument = {
      field1: 'field1 of search document',
      field2: 'field2 of search document'
    };
    const fakeVerticalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      searchCoreDocument
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.VERTICAL_RESULTS,
      fakeVerticalResults
    );
    expect(resultsUpdateListener.core.generativeDirectAnswer)
      .toHaveBeenCalledWith([searchCoreDocument], Searcher.VERTICAL);
  });

  it('does not call into GDA when no vertical results are present', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const fakeVerticalResults = {
      searchState: SearchStates.SEARCH_COMPLETE
    };
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.VERTICAL_RESULTS,
      fakeVerticalResults
    );
    expect(resultsUpdateListener.core.generativeDirectAnswer).toHaveBeenCalledTimes(0);
  });

  it('is not called when the vertical results are still loading', () => {
    const resultsUpdateListener = initResultsUpdateListener();
    const _handleVerticalResultsUpdate = jest.fn();
    resultsUpdateListener._handleVerticalResultsUpdate = _handleVerticalResultsUpdate;
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(0);
    const fakeVerticalResults = VerticalResults.searchLoading();
    resultsUpdateListener.core.storage.setWithPersist(
      StorageKeys.VERTICAL_RESULTS,
      fakeVerticalResults
    );
    expect(_handleVerticalResultsUpdate).toHaveBeenCalledTimes(0);
  });
});

function initResultsUpdateListener (config) {
  const mockCore = {
    generativeDirectAnswer: jest.fn(),
    storage: new Storage().init()
  };

  return new ResultsUpdateListener(mockCore);
}
