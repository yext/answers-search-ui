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
    expect(wrapper.find('.yxt-QuestionSubmission')).toHaveLength(0);
    storage.set(StorageKeys.VERTICAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE,
      resultsCount: 1,
      results: ['result0']
    });
    wrapper.update();
    expect(wrapper.find('.yxt-QuestionSubmission')).toHaveLength(1);
  });
})