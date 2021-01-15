import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import DirectAnswerComponent from '../../../../src/ui/components/results/directanswercomponent';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig, directAnswerData, storage;
beforeEach(() => {
  COMPONENT_MANAGER = mockManager({
    filterRegistry: {
      getAllFilterNodes: () => []
    }
  });
  storage = COMPONENT_MANAGER.core.storage;
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component',
    verticalKey: 'people'
  };

  directAnswerData = {
    answer: {
      entityName: 'Amani Farooque',
      fieldApiName: 'mainPhone',
      fieldName: 'Phone Number',
      fieldType: 'phone',
      value: '+18003332222'
    },
    relatedItem: {
      verticalConfigId: 'people',
      data: {
        id: 'Employee-2116',
        type: 'ce_person',
        website: 'http://www.test.com'
      }
    },
    type: 'FIELD_VALUE'
  };
});

describe('DirectAnswer component', () => {
  it('displays the answer correctly', () => {
    const component = COMPONENT_MANAGER.create(DirectAnswerComponent.type, defaultConfig);
    storage.set(StorageKeys.DIRECT_ANSWER, directAnswerData);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-DirectAnswer-fieldValue')).toHaveLength(1);
  });
});
