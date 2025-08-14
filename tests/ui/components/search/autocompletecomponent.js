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

function createAutocompleteComponent () {
  const defaultConfig = {
    container: '#autocomplete-component',
    parentContainer: DOM.query('#searchbar'),
    inputEl: '#inputEl',
    shouldHideOnEmptySearch: false,
    verticalKey: 'verticalKey'
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

describe('AUTO_COMPLETE_SELECTION analytics event fire as expected', () => {
  it('reports analyticsOptions provided when an autocomplete option is selected', () => {
    setupDOM();
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
      .dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

    expect(mockAnalyticsReporter.report).toHaveBeenCalledTimes(1);
    const expectedEvent = {
      eventType: "AUTO_COMPLETE_SELECTION",
      suggestedSearchText: "test prompt \"some text ...more text.\"  for TEST output"
    };
    expect(mockAnalyticsReporter.report).toHaveBeenLastCalledWith(expectedEvent);
  });
});
