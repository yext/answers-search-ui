import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import DirectAnswerComponent from '../../../../src/ui/components/results/directanswercomponent';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import { mount } from 'enzyme';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;

const directAnswer = {
  type: 'FIELD_VALUE',
  answer: {
    entityName: 'Amani Farooque',
    fieldName: 'Phone Number',
    fieldApiName: 'mainPhone',
    value: '+18003332222',
    fieldType: 'phone'
  },
  relatedItem: {
    verticalConfigId: 'people',
    data: {
      type: 'Location'
    }
  }
};

beforeEach(() => {
  COMPONENT_MANAGER = mockManager();
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component'
  };
});

describe('cardOverrides logic works properly', () => {
  it('if no overrides match, default is used', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      defaultCard: 'default-card',
      cardOverrides: [
        {
          fieldName: 'Some field',
          cardType: 'some-card'
        },
        {
          type: 'FEATURED_SNIPPET',
          cardType: 'other-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('default-card');
  });

  it('can specify override by type', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      cardOverrides: [
        {
          type: 'FIELD_VALUE',
          cardType: 'some-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('some-card');
  });

  it('can specify override by entityType', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      cardOverrides: [
        {
          entityType: 'Location',
          cardType: 'some-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('some-card');
  });

  it('can specify override by fieldName', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      cardOverrides: [
        {
          fieldName: 'Phone Number',
          cardType: 'some-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('some-card');
  });

  it('can specify override by fieldType', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      cardOverrides: [
        {
          fieldType: 'phone',
          cardType: 'some-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('some-card');
  });

  it('if multiple overrides match, first match is used', () => {
    const component = COMPONENT_MANAGER.create('DirectAnswer', {
      ...defaultConfig,
      cardOverrides: [
        {
          type: 'FIELD_VALUE',
          fieldName: 'Phone Number',
          cardType: 'some-card'
        },
        {
          fieldType: 'phone',
          cardType: 'other-card'
        }
      ]
    });

    expect(component._getCustomCard(directAnswer)).toEqual('some-card');
  });
});

it('displays the answer correctly', () => {
  const component = COMPONENT_MANAGER.create(DirectAnswerComponent.type, defaultConfig);
  const storage = COMPONENT_MANAGER.core.storage;
  storage.set(StorageKeys.DIRECT_ANSWER, directAnswer);
  const wrapper = mount(component);
  const actualAnswer = wrapper.find('.yxt-DirectAnswer-fieldValue').text().trim();
  expect(actualAnswer).toEqual('+18003332222');
});
