import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import QueryTriggers from '../../../../src/core/models/querytriggers';

jest.mock('../../../../src/ui/speechrecognition/miciconstylist');
jest.mock('../../../../src/ui/speechrecognition/listeningiconstylist');

DOM.setup(document, new DOMParser());

describe('SearchBar component', () => {
  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey'
  };
  let COMPONENT_MANAGER, storage;
  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager({
      autoCompleteVertical: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      autoCompleteUniversal: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      verticalSearch: jest.fn()
    });
    COMPONENT_MANAGER.getActiveComponent = () => null;
    storage = COMPONENT_MANAGER.core.storage;
    COMPONENT_MANAGER.core.triggerSearch = (queryTrigger, newQuery) => {
      const query = newQuery !== undefined
        ? newQuery
        : storage.get(StorageKeys.QUERY) || '';
      queryTrigger
        ? storage.set(StorageKeys.QUERY_TRIGGER, queryTrigger)
        : storage.delete(StorageKeys.QUERY_TRIGGER);
      COMPONENT_MANAGER.core.setQuery(query);
    };
  });

  describe('Clicking the clear button updates storage properly', () => {
    it('clear button deletes SEARCH_OFFSET from storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.SEARCH_OFFSET, 15);
      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeFalsy();
    });

    it('clear button deletes SEARCH_OFFSET from current url state', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.SEARCH_OFFSET, 15);
      expect(storage.getUrlWithCurrentState()).toEqual('search-offset=15');

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.getUrlWithCurrentState()).toEqual('query=');
    });

    it('clear button sets QUERY to the empty string in storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.get(StorageKeys.QUERY)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.QUERY)).toEqual('');
    });

    it('clear button sets QUERY to the empty string in url state', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.getUrlWithCurrentState()).toEqual('query=what+does+yext+do%3F');

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.getUrlWithCurrentState()).toEqual('query=');
    });

    it('clear button sets QUERY_TRIGGER to SEARCH_BAR', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.get(StorageKeys.QUERY_TRIGGER)).toBeFalsy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.QUERY_TRIGGER)).toEqual(QueryTriggers.SEARCH_BAR);
    });
  });

  it('default initial search works for universal', () => {
    const defaultInitialSearch = '';
    storage.set(StorageKeys.QUERY, defaultInitialSearch);
    storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);

    const component = COMPONENT_MANAGER.create('SearchBar', {
      ...defaultConfig,
      verticalKey: null,
      allowEmptySearch: true
    });
    component.searchAfterAnswersOnReady();

    const wasSearchRanPromise = new Promise(resolve => {
      component.core.search = jest.fn(() => {
        resolve(true);
      });
    });

    return expect(wasSearchRanPromise).resolves.toBeTruthy();
  });

  it('An undefined universalAutocomplete response results in empty query intents', async () => {
    expect.assertions(1);
    const component = COMPONENT_MANAGER.create('SearchBar', {
      ...defaultConfig,
      verticalKey: null,
      allowEmptySearch: true
    });
    component.core.autoCompleteUniversal = () => {
      return Promise.resolve(undefined);
    };

    return expect(component.fetchQueryIntents()).resolves.toStrictEqual([]);
  });

  it('searching with the search bar sets QUERY_TRIGGER to SEARCH_BAR', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(storage.get(StorageKeys.QUERY_TRIGGER)).toEqual(QueryTriggers.SEARCH_BAR);
  });

  describe('AI signpost', () => {
    it('is displayed only when enabled', () => {
      const defaultComponent = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const defaultWrapper = mount(defaultComponent);
      expect(defaultWrapper.find('.yxt-SearchBar-aiSignpost').exists()).toBeFalsy();

      defaultComponent.remove();
      const enabledComponent = COMPONENT_MANAGER.create('SearchBar', {
        ...defaultConfig,
        showAISignpost: true
      });
      const enabledWrapper = mount(enabledComponent);
      expect(enabledWrapper.find('.yxt-SearchBar-aiSignpost').exists()).toBeTruthy();
    });

    it('renders the approved icon-only disclosure before the search button', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', {
        ...defaultConfig,
        showAISignpost: true
      });
      const wrapper = mount(component);
      const signpost = wrapper.find('.yxt-SearchBar-aiSignpost').getDOMNode();
      const searchButton = wrapper.find('.yxt-SearchBar-button').getDOMNode();

      expect(wrapper.find('.yxt-SearchBar-aiSignpostButton').prop('aria-label'))
        .toEqual('Powered by AI');
      expect(wrapper.find('.Icon--ai_signpost').exists()).toBeTruthy();
      expect(wrapper.find('.yxt-SearchBar-aiSignpostPopoverHeaderText').text().trim())
        .toEqual('Powered by AI');
      expect(wrapper.find('.yxt-SearchBar-aiSignpostPopoverBody').text().trim())
        .toEqual('Search may use AI to find, prioritize, and output results. AI responses may be incomplete or inaccurate and should be checked.');
      expect(signpost.compareDocumentPosition(searchButton) & window.Node.DOCUMENT_POSITION_FOLLOWING)
        .toBeTruthy();
    });

    it('opens and dismisses the disclosure popover', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', {
        ...defaultConfig,
        showAISignpost: true
      });
      const wrapper = mount(component);
      const button = wrapper.find('.yxt-SearchBar-aiSignpostButton');
      const popover = wrapper.find('.yxt-SearchBar-aiSignpostPopover');

      expect(button.prop('aria-expanded')).toEqual('false');
      expect(popover.getDOMNode().hidden).toBeTruthy();

      button.simulate('click');
      expect(button.getDOMNode().getAttribute('aria-expanded')).toEqual('true');
      expect(popover.getDOMNode().hidden).toBeFalsy();

      wrapper.find('.yxt-SearchBar-aiSignpostClose').simulate('click');
      expect(button.getDOMNode().getAttribute('aria-expanded')).toEqual('false');
      expect(popover.getDOMNode().hidden).toBeTruthy();

      button.simulate('click');
      document.body.dispatchEvent(new window.Event('click', { bubbles: true }));
      expect(button.getDOMNode().getAttribute('aria-expanded')).toEqual('false');
      expect(popover.getDOMNode().hidden).toBeTruthy();
    });
  });

  describe('Voice search works properly', () => {
    const events = {};
    const speechRecognitionMock = {
      addEventListener: jest.fn((eventName, cb) => {
        events[eventName] = cb;
      }),
      start: jest.fn(() => {
        'start' in events && events.start();
      }),
      stop: jest.fn(() => {
        'stop' in events && events.stop();
      })
    };

    beforeEach(() => {
      jest.spyOn(global, 'window', 'get').mockImplementation(() => ({
        SpeechRecognition: () => speechRecognitionMock,
        webkitSpeechRecognition: () => speechRecognitionMock,
        location: {
          search: {
            substring: jest.fn()
          }
        }
      }));
      jest.spyOn(global, 'navigator', 'get').mockImplementation(() => ({
        mediaDevices: {
          getUserMedia: () => Promise.resolve({
            getTracks: () => ([{ stop: jest.fn() }])
          })
        },
        // taken from Safari on MacOS
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15'
      }));
    });

    afterEach(() => {
      jest.restoreAllMocks();
      jest.clearAllMocks();
    });

    it('submitVoiceQuery sets QUERY_TRIGGER to VOICE_SEARCH', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', {
        ...defaultConfig,
        voiceSearch: {
          enabled: true
        }
      });
      mount(component);
      component.submitVoiceQuery();
      expect(storage.get(StorageKeys.QUERY_TRIGGER)).toEqual(QueryTriggers.VOICE_SEARCH);
    });

    it('Clicking the voice search button starts and stops voice search', async () => {
      const component = COMPONENT_MANAGER.create('SearchBar', {
        ...defaultConfig,
        voiceSearch: {
          enabled: true
        }
      });
      mount(component);
      expect(speechRecognitionMock.start).toHaveBeenCalledTimes(0);
      expect(speechRecognitionMock.stop).toHaveBeenCalledTimes(0);
      await component._voiceSearchController.handleIconClick();
      expect(speechRecognitionMock.start).toHaveBeenCalledTimes(1);
      expect(speechRecognitionMock.stop).toHaveBeenCalledTimes(0);
      await component._voiceSearchController.handleIconClick();
      expect(speechRecognitionMock.start).toHaveBeenCalledTimes(1);
      expect(speechRecognitionMock.stop).toHaveBeenCalledTimes(1);
    });
  });
});
