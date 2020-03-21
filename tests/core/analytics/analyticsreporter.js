import AnalyticsReporter from '../../../src/core/analytics/analyticsreporter';
import HttpRequester from '../../../src/core/http/httprequester';
import { AnswersAnalyticsError } from '../../../src/core/errors/errors';
import AnalyticsEvent from '../../../src/core/analytics/analyticsevent';
import { getAnalyticsUrl } from '../../../src/core/utils/urlutils';
import { PRODUCTION } from '../../../src/core/constants';

jest.mock('../../../src/core/http/httprequester');

describe('reporting events', () => {
  const mockedBeacon = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  let analyticsReporter;

  beforeEach(() => {
    mockedBeacon.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        beacon: mockedBeacon
      };
    });
    analyticsReporter = new AnalyticsReporter('abc123', null, '213412');
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
    const analyticsReporter = new AnalyticsReporter('abc123', null, '213412', { testOption: 'test' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expect.objectContaining({ testOption: 'test' }) }));
  });

  it('includes experienceVersion when supplied', () => {
    const analyticsReporter = new AnalyticsReporter('abc123', 'PRODUCTION', '213412', { testOption: 'test' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expect.objectContaining({ experienceVersion: 'PRODUCTION' }) }));
  });

  it('doesn\'t send cookies by default', () => {
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.stringContaining(getAnalyticsUrl()),
      expect.anything());
  });

  it('throws error if opted in and ytag missing', () => {
    analyticsReporter.setConversionTrackingEnabled(true);
    expect(() => {
      analyticsReporter.report(new AnalyticsEvent('thumbs_up'));
    }).toThrow(AnswersAnalyticsError);
  });

  it('includes cookies if opted in and ytag present', () => {
    const cookieData = { cookieId: 'some_id' };
    global.ytag = jest.fn(() => cookieData);

    analyticsReporter.setConversionTrackingEnabled(true);
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.stringContaining(getAnalyticsUrl(PRODUCTION, true)),
      { data: { eventType: 'THUMBS_UP', experienceKey: 'abc123' }, ...cookieData });
  });
});
