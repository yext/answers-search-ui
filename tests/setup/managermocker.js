/** @module ManagerMocker */

import MockComponentManager from './mockcomponentmanager';
import Storage from '../../src/core/storage/storage';
import StorageKeys from '../../src/core/storage/storagekeys';

/**
 * Generates a MockComponentManager with templates from the passed in template paths.
 * TODO(oshi): better module/method names
 */
export default function mockManager (mockedCore) {
  const storage = new Storage().init();
  const core = {
    storage,
    triggerSearch: jest.fn(),
    setQuery: jest.fn(query => core.storage.setWithPersist(StorageKeys.QUERY, query)),
    ...mockedCore
  };
  core.setQueryUpdateListener = (queryUpdateListener) => {
    core.queryUpdateListener = queryUpdateListener;
  };
  core.setResultsUpdateListener = (resultsUpdateListener) => {
    core.resultsUpdateListener = resultsUpdateListener;
  };
  const COMPONENT_MANAGER = new MockComponentManager(core);

  const mockAnalyticsReporter = {
    report: jest.fn(() => Promise.resolve())
  };
  COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);
  return COMPONENT_MANAGER;
}
