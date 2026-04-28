import AnalyticsReporter from '../../../src/core/analytics/analyticsreporter';
import HttpRequester from '../../../src/core/http/httprequester';
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
    analyticsReporter = new AnalyticsReporter('abc123', null, '213412', true, 'test');
  });

  it('logs a console error if given a non-AnalyticsEvent', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    expect(analyticsReporter.report({ event_type: 'fake event' })).toBeFalsy();
    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      'Tried to send invalid analytics event',
      { event_type: 'fake event' }
    );
  });

  it('sends the event via beacon', () => {
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ action: 'THUMBS_UP', search: expect.objectContaining({ experienceKey: 'abc123' }) }));
  });

  it('includes global options', () => {
    const analyticsReporter = new AnalyticsReporter('abc123', null, '213412', true, 'test', { directAnswer: true });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ search: expect.objectContaining({ isDirectAnswer: true }) }));
  });

  it('includes experienceVersion when supplied', () => {
    const analyticsReporter = new AnalyticsReporter('abc123', PRODUCTION, '213412', true, 'test', { testOption: 'test' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ search: expect.objectContaining({ versionLabel: PRODUCTION }) }));
  });

  it('doesn\'t send cookies by default', () => {
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.stringContaining(getAnalyticsUrl()),
      expect.anything());
  });

  it('All analytic events are enabled when analyticsEventsEnabled is set to true', () => {
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(1);
  });

  it('All analytic events are disabled when analyticsEventsEnabled is set to false', () => {
    analyticsReporter = new AnalyticsReporter('abc123', null, '213412', false, 'test');
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(0);
  });

  it('All analytic events are disabled when analyticsEventsEnabled is set to false with setAnalyticsOptIn(bool)', () => {
    analyticsReporter = new AnalyticsReporter('abc123', null, '213412', false, 'test');
    analyticsReporter.setAnalyticsOptIn(false);
    analyticsReporter.report(new AnalyticsEvent('thumbs_up'));

    expect(mockedBeacon).toBeCalledTimes(0);
  });

  it('When inludeQueryId is false, the queryId won\'t be included', () => {
    const analyticsReporter = new AnalyticsReporter('abc123', null, '213412', true, 'test', { queryId: '123' });
    const expectedEvent = AnalyticsEvent.fromData({
      type: 'VOICE_STOP'
    });
    analyticsReporter.report(expectedEvent, { includeQueryId: false });

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.not.objectContaining({ queryId: '123' }));
  });

  it('Set and get analytics opt in', async () => {
    analyticsReporter.setAnalyticsOptIn(true);
    expect(analyticsReporter.getAnalyticsOptIn()).toEqual(true);
  });

  it('Includes visitor when set', () => {
    analyticsReporter.setVisitor({ id: '123' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedBeacon).toBeCalledTimes(1);
    expect(mockedBeacon).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ visitor: { id: '123' } }));
  });
});
