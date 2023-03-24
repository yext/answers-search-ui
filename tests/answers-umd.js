import ANSWERS from '../src/answers-umd';
import mockWindow from './setup/mockwindow';
import initAnswers from './setup/initanswers';
import Searcher from '../src/core/models/searcher';

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
      location: {}
    });
    await initAnswers(ANSWERS, {
      onReady: () => ANSWERS.addComponent('SearchBar')
    });
    const expectedEvent = {
      eventType: 'SEARCH_BAR_IMPRESSION',
      searcher: Searcher.UNIVERSAL,
      standAlone: true
    };
    expect(ANSWERS._analyticsReporterService.report).toHaveBeenCalledWith(expectedEvent, expect.anything());
  });

  it('Visitor is set if passed to ANSWERS.init', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS, {
      visitor: { id: '123' }
    });
    expect(ANSWERS._analyticsReporterService.setVisitor).toHaveBeenCalledWith({ id: '123' });
  });

  it('Visitor is not set if missing id', async () => {
    const consoleSpy = jest.spyOn(console, 'error');
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS, {
      visitor: { idMethod: 'test' }
    });
    expect(ANSWERS._analyticsReporterService.setVisitor).toHaveBeenCalledTimes(0);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('Visitor can be changed', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS, { visitor: { id: '123', idMethod: 'test' } });
    const initSpy = jest.spyOn(ANSWERS.core, 'init');
    ANSWERS.setVisitor({ id: '456' });
    expect(ANSWERS._analyticsReporterService.setVisitor).toHaveBeenLastCalledWith({ id: '456' });
    expect(initSpy).toHaveBeenCalledWith({ visitor: { id: '456' } });
  });

  it('Set and get analytics opt in', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS);
    ANSWERS.setAnalyticsOptIn(true);
    ANSWERS.getAnalyticsOptIn();
    expect(ANSWERS._analyticsReporterService.getAnalyticsOptIn).toHaveBeenCalled();
  });

  it('Analytics opt in not defined if no businessId', async () => {
    mockWindow(windowSpy, {
      location: {
        search: '?query=test'
      }
    });
    await initAnswers(ANSWERS, { businessId: undefined });
    expect(ANSWERS.getAnalyticsOptIn()).toBeUndefined();
  });

  it('passes the additionalHttpHeaders from config', async () => {
    mockWindow(windowSpy, {
      location: {
        search: ''
      }
    });
    await initAnswers(ANSWERS, {
      additionalHttpHeaders: {
        'Client-SDK': {
          TEST_CLIENT_SDK: '1.2.3'
        }
      }
    });
    expect(ANSWERS.core._additionalHttpHeaders).toEqual({
      'Client-SDK': {
        ANSWERS_SEARCH_UI_SDK: '@@LIB_VERSION',
        TEST_CLIENT_SDK: '1.2.3'
      }
    });
  });
});
