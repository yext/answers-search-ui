/** @module ManagerMocker */

import MockComponentManager from './mockcomponentmanager';
import Storage from '../../src/core/storage/storage';
import StorageKeys from '../../src/core/storage/storagekeys';

/**
 * Generates a MockComponentManager with templates from the passed in template paths.
 * TODO(oshi): better module/method names
 */
export default function mockManager (mockedCore) {
  const core = {
    storage: new Storage().init(),
    ...mockedCore
  };
  core.setQuery = jest.fn(query => core.storage.set(StorageKeys.QUERY, query));
  const COMPONENT_MANAGER = new MockComponentManager(core);

  const mockAnalyticsReporter = {
    report: jest.fn(() => Promise.resolve())
  };
  COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);
  return COMPONENT_MANAGER;
}
