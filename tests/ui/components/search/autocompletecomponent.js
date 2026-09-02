/* eslint-disable quotes */
/* global MouseEvent */
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import AutoCompleteComponent from '../../../../src/ui/components/search/autocompletecomponent';
import { mount } from 'enzyme';

const COMPONENT_MANAGER = mockManager();
const mockAnalyticsReporter = {
  report: jest.fn(() => Promise.resolve())
};
COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);

function createAutocompleteComponent (config = {}) {
  const defaultConfig = {
    container: '#autocomplete-component',
    parentContainer: DOM.query('#searchbar'),
    inputEl: '#inputEl',
    listLabelText: 'Conduct a search',
    shouldHideOnEmptySearch: false,
    verticalKey: 'verticalKey',
    ...config
  };
  return COMPONENT_MANAGER.create(AutoCompleteComponent.type, defaultConfig);
}

function setupDOM () {
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  const searchbarEl = DOM.createEl('div', { id: 'searchbar' });
  DOM.append(bodyEl, searchbarEl);
  DOM.append(searchbarEl, DOM.createEl('div', { id: 'inputEl' }));
  DOM.append(bodyEl, DOM.createEl('div', { id: 'autocomplete-component' }));
}

beforeEach(() => {
  setupDOM();
  mockAnalyticsReporter.report.mockClear();
});

afterEach(() => {
  delete document.ariaNotify;
  jest.useRealTimers();
});

describe('AUTO_COMPLETE_SELECTION analytics event fire as expected', () => {
  it('reports analyticsOptions provided when an autocomplete option is selected', () => {
    const component = createAutocompleteComponent();
    // simulate that input is focused so autocomplete component is open
    component.isQueryInputFocused = () => true;
    component.setState({
      sections: [
        {
          results: [
            { value: "a Rose by any other name" },
            { value: "test prompt \"some text ...more text.\"  for TEST output" }
          ]
        }
      ]
    });
    const wrapper = mount(component);
    wrapper
      .find("[data-value='test prompt \"some text ...more text.\"  for TEST output']")
      .getDOMNode()
      .dispatchEvent(new MouseEvent('click', { button: 0 }));

    expect(mockAnalyticsReporter.report).toHaveBeenCalledTimes(1);
    const expectedEvent = {
      action: "AUTO_COMPLETE_SELECTION",
      suggestedSearchText: "test prompt \"some text ...more text.\"  for TEST output"
    };
    expect(mockAnalyticsReporter.report).toHaveBeenLastCalledWith(expectedEvent);
  });
});

describe('autocomplete accessibility announcements', () => {
  const results = {
    sections: [
      {
        resultsCount: 2,
        results: [
          { value: 'first result' },
          { value: 'second result' }
        ]
      }
    ]
  };

  it('uses a stable label for the listbox without rendering a results-count label span', () => {
    document.ariaNotify = jest.fn();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState(results);

    const wrapper = mount(component);
    expect(wrapper.find('[role="listbox"]').prop('aria-label')).toEqual('Conduct a search');
    expect(wrapper.find('.yxt-AutoComplete-resultsCount')).toHaveLength(0);
  });

  it('uses ariaNotify to announce the translated results count when available', () => {
    document.ariaNotify = jest.fn();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState(results);

    expect(document.ariaNotify).toHaveBeenCalledWith(
      '2 autocomplete options found.',
      { priority: 'normal' }
    );
  });

  it('preserves the count announcement for each labeled result section', () => {
    document.ariaNotify = jest.fn();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState({
      sections: [
        { label: 'People', resultsCount: 1, results: [{ value: 'first result' }] },
        {
          label: 'FAQs',
          resultsCount: 2,
          results: [{ value: 'second result' }, { value: 'third result' }]
        }
      ]
    });

    expect(document.ariaNotify).toHaveBeenCalledWith(
      '1 People autocomplete option found. 2 FAQs autocomplete options found.',
      { priority: 'normal' }
    );
  });

  it('does not repeat the results count when only the selected option changes', () => {
    document.ariaNotify = jest.fn();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState(results);
    component.updateState();

    expect(document.ariaNotify).toHaveBeenCalledTimes(1);
  });

  it('announces zero results after an open autocomplete stops returning results', () => {
    document.ariaNotify = jest.fn();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState(results);
    component.setState({ sections: [{ resultsCount: 0, results: [] }] });

    expect(document.ariaNotify).toHaveBeenLastCalledWith(
      '0 autocomplete options found.',
      { priority: 'normal' }
    );
  });

  it('uses and clears a body-level live region when ariaNotify is unavailable', () => {
    jest.useFakeTimers();
    const component = createAutocompleteComponent();
    component.isQueryInputFocused = () => true;
    component.setState(results);

    const announcer = document.getElementById('yxt-AutoComplete-resultsCount-announcer');
    expect(announcer.parentElement).toEqual(document.body);
    expect(announcer.getAttribute('role')).toEqual('status');
    expect(announcer.getAttribute('aria-live')).toEqual('polite');
    expect(announcer.getAttribute('aria-atomic')).toEqual('true');

    jest.advanceTimersByTime(0);
    expect(announcer.textContent).toEqual('2 autocomplete options found.');

    jest.advanceTimersByTime(5000);
    expect(announcer.textContent).toEqual('');
  });
});
