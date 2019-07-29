import AnalyticsReporter from '../../../src/core/analytics/analyticsreporter';
import HttpRequester from '../../../src/core/http/httprequester';
import { AnswersAnalyticsError } from '../../../src/core/errors/errors';
import AnalyticsEvent from '../../../src/core/analytics/analyticsevent';
jest.mock('../../../src/core/http/httprequester');

describe('reporting events', () => {
  const mockResponse = {
    response: {
      businessId: 123456
    }
  };
  const mockedGet = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
  const mockedPost = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  let analyticsReporter;

  beforeEach(() => {
    mockedGet.mockClear();
    mockedPost.mockClear();
    HttpRequester.mockImplementation(() => {
      return {
        get: mockedGet,
        post: mockedPost
      };
    });
    analyticsReporter = new AnalyticsReporter('abc123', '213412');
  });

  it('throws an error if given a non-AnalyticsEvent', () => {
    expect(() => {
      analyticsReporter.report({ event_type: 'fake event' });
    }).toThrow(AnswersAnalyticsError);
  });

  it('sends the event via POST in the "data" property', () => {
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedPost).toBeCalledTimes(1);
    expect(mockedPost).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expectedEvent.toApiEvent() }),
      undefined);
  });

  it('includes global options', () => {
    const analyticsReporter = new AnalyticsReporter('abc123', '213412', { testOption: 'test' });
    const expectedEvent = new AnalyticsEvent('thumbs_up');
    analyticsReporter.report(expectedEvent);

    expect(mockedPost).toBeCalledTimes(1);
    expect(mockedPost).toBeCalledWith(
      expect.anything(),
      expect.objectContaining({ 'data': expect.objectContaining({ testOption: 'test' }) }),
      undefined);
  });
});
