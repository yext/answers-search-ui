/** @module ManagerMocker */

import MockComponentManager from './mockcomponentmanager';
import Storage from '../../src/core/storage/storage';

/**
 * Generates a MockComponentManager with templates from the passed in template paths.
 * TODO(oshi): better module/method names
 */
export default function mockManager (mockedCore) {
  const core = {
    globalStorage: {
      getState: () => null,
      delete: () => {},
      on: () => {},
      set: () => {}
    },
    persistentStorage: {
      set: () => {},
      get: () => {},
      delete: () => {}
    },
    storage: new Storage().init(),
    ...mockedCore
  };
  const COMPONENT_MANAGER = new MockComponentManager(core);

  const mockAnalyticsReporter = {
    report: jest.fn(() => Promise.resolve())
  };
  COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);
  return COMPONENT_MANAGER;
}
