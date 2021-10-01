import ANSWERS from '../src/answers-umd';
import mockWindow from './setup/mockwindow';
import initAnswers from './setup/initanswers';

jest.mock('../src/core/analytics/analyticsreporter');

let windowSpy;

describe('ANSWERS instance integration testing', () => {
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('Spellcheck query params in the URL trigger a spellcheck search during ANSWERS initialization', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=office+space&queryTrigger=suggest&skipSpellCheck=true'
      }
    });
    await initAnswers(ANSWERS);
    const expectedParams = expect.objectContaining({
      query: 'office space',
      queryTrigger: 'suggest',
      skipSpellCheck: 'true'
    });
    expect(ANSWERS.core._coreLibrary.universalSearch).toHaveBeenCalledWith(expectedParams);
  });

  it('An ANSWERS impression event is reported during ANSWERS.init if the search bar component is active', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS, {
      onReady: () => ANSWERS.addComponent('SearchBar')
    });
    const expectedEvent = {
      eventType: 'SEARCH_BAR_IMPRESSION',
      searcher: 'UNIVERSAL',
      standAlone: true
    };
    expect(ANSWERS._analyticsReporterService.report).toHaveBeenCalledWith(expectedEvent, expect.anything());
  });
});
