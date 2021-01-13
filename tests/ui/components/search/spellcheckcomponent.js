import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import SpellCheckComponent from '../../../../src/ui/components/search/spellcheckcomponent';
import GlobalStorage from '../../../../src/core/storage/globalstorage';

const mockCore = {
  globalStorage: new GlobalStorage()
};

const COMPONENT_MANAGER = mockManager(mockCore);

describe('spellcheck redirect links', () => {
  let linkUrlParams;

  setupDOM();

  const component = createSpellcheckComponent();

  component.setState({
    correctedQuery: {
      value: 'What is Yext Answers?'
    },
    type: 'SUGGEST'
  });

  const correctedQueryUrl = component.getState('correctedQueryUrl');
  linkUrlParams = new URLSearchParams(correctedQueryUrl);

  it('redirect links contain a query url param', () => {
    const query = linkUrlParams.get('query');
    expect(query).toEqual('What is Yext Answers?');
  });

  it('redirect links contain a skipSpellCheck url param', () => {
    const skipSpellCheck = linkUrlParams.get('skipSpellCheck');
    expect(skipSpellCheck).toEqual('true');
  });

  it('redirect links contain a query trigger url param', () => {
    const queryTrigger = linkUrlParams.get(StorageKeys.QUERY_TRIGGER);
    expect(queryTrigger).toEqual('suggest');
  });
});

function setupDOM () {
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'spellcheck-component' }));
}

function createSpellcheckComponent () {
  const defaultConfig = {
    container: '#spellcheck-component',
    verticalKey: 'verticalKey'
  };
  return COMPONENT_MANAGER.create(SpellCheckComponent.type, defaultConfig);
}
