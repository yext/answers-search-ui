import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import QuestionSubmissionComponent from '../../../../src/ui/components/questions/questionsubmissioncomponent';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import SearchStates from '../../../../src/core/storage/searchstates';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;
beforeEach(() => {
  COMPONENT_MANAGER = mockManager();
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component',
    entityId: 1234
  };
});

describe('QASubmission component', () => {
  it('listens to updates to VERTICAL_RESULTS in global storage', () => {
    const storage = COMPONENT_MANAGER.core.storage;
    const component = COMPONENT_MANAGER.create(QuestionSubmissionComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.exists('.yxt-QuestionSubmission')).toBeFalsy();
    storage.set(StorageKeys.VERTICAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE
    });
    wrapper.update();
    expect(wrapper.exists('.yxt-QuestionSubmission')).toBeTruthy();
  });

  it('listens to updates to UNIVERSAL_RESULTS in global storage', () => {
    const storage = COMPONENT_MANAGER.core.storage;
    const component = COMPONENT_MANAGER.create(QuestionSubmissionComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.exists('.yxt-QuestionSubmission')).toBeFalsy();
    storage.set(StorageKeys.UNIVERSAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE
    });
    wrapper.update();
    expect(wrapper.exists('.yxt-QuestionSubmission')).toBeTruthy();
  });
});
