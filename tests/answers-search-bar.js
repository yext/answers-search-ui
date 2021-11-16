import ANSWERS from '../src/answers-search-bar';
import mockWindow from './setup/mockwindow';
import initAnswers from './setup/initanswers';
import Searcher from '../src/core/models/searcher';

jest.mock('../src/core/analytics/analyticsreporter');
jest.mock('../src/ui/rendering/handlebarsrenderer');

let windowSpy;

describe('ANSWERS search bar instance integration testing', () => {
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('An ANSWERS impression event is reported during ANSWERS.init', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS);
    const expectedEvent = {
      eventType: 'SEARCH_BAR_IMPRESSION',
      searcher: Searcher.UNIVERSAL,
      standAlone: true
    };
    expect(ANSWERS._analyticsReporterService.report).toHaveBeenCalledWith(expectedEvent, expect.anything());
  });
});
