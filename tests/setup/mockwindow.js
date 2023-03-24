/**
 * Mocks the window for jest testing while putting the provided data on the window
 * @param {jest.SpyInstance} windowSpy A jest spy instance tracking calls to the window's get function
 * @param {Object} data Data added to the mocked window
 */
export default function mockWindow (windowSpy, data = {}) {
  windowSpy.mockImplementation(() => ({
    performance: {
      mark: jest.fn(),
      hey: 123
    },
    sessionStorage: {
      getItem: jest.fn(),
      setItem: jest.fn()
    },
    addEventListener: jest.fn(),
    history: {
      replaceState: jest.fn()
    },
    location: {
      search: jest.fn()
    },
    ...data
  }));
}
