import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import GenerativeDirectAnswerComponent from '../../../../src/ui/components/results/generativedirectanswercomponent';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import { mount } from 'enzyme';
import SearchStates from '../../../../src/core/storage/searchstates';
import Searcher from '../../../../src/core/models/searcher';
import RichTextFormatter from '../../../../src/core/utils/richtextformatter';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;

const directAnswerPlainText = 'Bob Kitty is a cat known for being snuggly, cuddly, and fiery.';
const gdaSuccess = {
  citations: ['1234', '5678'],
  citationsData: [
    {
      id: '123454321',
      name: 'Bob Kitty',
      description: 'I am a cat'
    },
    {
      id: '567898765',
      name: 'Joe Cat',
      link: 'https://yext.com'
    }
  ],
  directAnswer: RichTextFormatter.format(directAnswerPlainText, 'gda-snippet'),
  resultStatus: 'SUCCESS',
  searchState: SearchStates.SEARCH_COMPLETE,
  searcher: Searcher.UNIVERSAL
};

const gdaLoading = {
  searchState: SearchStates.SEARCH_LOADING
};

const gdaNoAnswer = {
  citations: [],
  citationsData: [],
  searchState: SearchStates.SEARCH_COMPLETE,
  resultStatus: 'NO_ANSWER',
  directAnswer: '',
  searcher: Searcher.UNIVERSAL
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

describe('cardType logic works correctly', () => {
  it('if no cardType is specified, do not use a custom card', () => {
    const component = COMPONENT_MANAGER.create('GenerativeDirectAnswer', {
      ...defaultConfig
    });

    expect(component._getCard()).toBeUndefined();
  });

  it('if custom card is set, use it', () => {
    const component = COMPONENT_MANAGER.create('GenerativeDirectAnswer', {
      ...defaultConfig,
      cardType: 'some-card'
    });

    expect(component._getCard()).toEqual('some-card');
  });
});

describe('GenerativeDirectAnswerComponent renders properly', () => {
  it('displays a successfully generated direct answer correctly', () => {
    const component = COMPONENT_MANAGER.create(GenerativeDirectAnswerComponent.type, defaultConfig);
    const storage = COMPONENT_MANAGER.core.storage;
    storage.set(StorageKeys.GENERATIVE_DIRECT_ANSWER, gdaSuccess);
    const wrapper = mount(component);

    // Snippet text is correct
    const plainTextAnswer = wrapper.find('.yxt-GenerativeDirectAnswer-snippet').text().trim();
    expect(plainTextAnswer).toEqual(directAnswerPlainText);

    // Citation count is correct
    const citationsHeaderText = wrapper.find('.yxt-GenerativeDirectAnswer-citationsHeader').text().trim();
    expect(citationsHeaderText).toEqual('Sources (2)');
    const numCitations = wrapper.find('.yxt-GenerativeDirectAnswer-citationCard').length;
    expect(numCitations).toEqual(2);

    // Citation data is correct
    const firstCitation = wrapper.find('.yxt-GenerativeDirectAnswer-citationCard').at(0);
    const firstCitationName = firstCitation.find('.yxt-GenerativeDirectAnswer-citationName').text().trim();
    expect(firstCitationName).toEqual('Bob Kitty');
    const firstCitationDescription = firstCitation.find('.yxt-GenerativeDirectAnswer-citationDescription').text().trim();
    expect(firstCitationDescription).toEqual('I am a cat');
    const firstCitationLink = firstCitation.prop('href');
    expect(firstCitationLink).toBeUndefined();
    const firstEntityId = firstCitation.prop('data-entityid');
    expect(firstEntityId).toEqual('123454321');
    const firstCitationClickEventType = firstCitation.prop('data-eventtype');
    expect(firstCitationClickEventType).toEqual('CITATION_CLICK');

    const secondCitation = wrapper.find('.yxt-GenerativeDirectAnswer-citationCard').at(1);
    const secondCitationName = secondCitation.find('.yxt-GenerativeDirectAnswer-citationName').text().trim();
    expect(secondCitationName).toEqual('Joe Cat');
    const secondCitationDescription = secondCitation.find('.yxt-GenerativeDirectAnswer-citationDescription');
    expect(secondCitationDescription.exists()).toBeFalsy();
    const secondCitationLink = secondCitation.prop('href');
    expect(secondCitationLink).toEqual('https://yext.com');
    const secondEntityId = secondCitation.prop('data-entityid');
    expect(secondEntityId).toEqual('567898765');
    const secondCitationClickEventType = secondCitation.prop('data-eventtype');
    expect(secondCitationClickEventType).toEqual('CITATION_CLICK');
  });

  it('only displays loading text when GDA state is loading', () => {
    const component = COMPONENT_MANAGER.create(GenerativeDirectAnswerComponent.type, defaultConfig);
    const storage = COMPONENT_MANAGER.core.storage;
    storage.set(StorageKeys.GENERATIVE_DIRECT_ANSWER, gdaLoading);
    const wrapper = mount(component);

    // should not find any snippet element
    const snippetElement = wrapper.find('.yxt-GenerativeDirectAnswer-snippet');
    expect(snippetElement.exists()).toBeFalsy();

    // should still find title
    const sectionHeaderText = wrapper.find('.yxt-GenerativeDirectAnswer-titleText').text().trim();
    expect(sectionHeaderText).toEqual('AI Generating Answer...');
  });

  it('does not display GDA if no answer found', () => {
    const component = COMPONENT_MANAGER.create(GenerativeDirectAnswerComponent.type, defaultConfig);
    const storage = COMPONENT_MANAGER.core.storage;
    storage.set(StorageKeys.GENERATIVE_DIRECT_ANSWER, gdaNoAnswer);
    const wrapper = mount(component);

    // should not find any GDA element
    const snippetElement = wrapper.find('.yxt-GenerativeDirectAnswer');
    expect(snippetElement.exists()).toBeFalsy();
  });
});
