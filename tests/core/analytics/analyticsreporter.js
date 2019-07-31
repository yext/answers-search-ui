import AnalyticsReporter from '../../../src/core/analytics/analyticsreporter';
import HttpRequester from '../../../src/core/http/httprequester';
import { AnswersAnalyticsError } from '../../../src/core/errors/errors';
import AnalyticsEvent from '../../../src/core/analytics/analyticsevent';

jest.mock('../../../src/core/http/httprequester');

describe('reporting events', () => {
  const mockedBeacon = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  const mockedStorageOn = jest.fn();
  const mockedCore = {
    storage: {
      on: mockedStorageOn
    }
  };
  let analyticsReporter;

  beforeEach(() => {
    mockedBeacon.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        beacon: mockedBeacon
      };
    });
    analyticsReporter = new AnalyticsReporter(mockedCore, 'abc123', '213412');
  });

  it('throws an error if given a non-AnalyticsEvent', () => {
    expect(() => {
      analyticsReporter.report({ event_type: 'fake event' });
    }).toThrow(AnswersAnalyticsError);
  });

  it('sends the event via beacon in the "data" property', () => {
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expectedEvent.toApiEvent() }));
  });

  it('includes global options', () => {
    const analyticsReporter = new AnalyticsReporter(mockedCore, 'abc123', '213412', { testOption: 'test' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expect.objectContaining({ testOption: 'test' }) }));
  });
});
