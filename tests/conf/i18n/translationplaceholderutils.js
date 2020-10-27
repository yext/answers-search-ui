const Handlebars = require('handlebars');
const { fromMustacheStatementNode } = require('../../../conf/i18n/translationplaceholderutils');
const TranslationPlaceholder = require('../../../conf/i18n/models/translationplaceholder');
describe('Creating a translation placeholder from a HBS template', () => {
  it('fromMustacheStatementNode usage', () => {
    const template = `{{ 
      translate 
      phrase='result' 
      pluralForm='results' 
      count='resultCount' 
      param1='param1'
      param2='param2'
      context='testing' 
    }}`;

    const indexOfFirstMustacheStatement = 0;
    const mustacheStatement = Handlebars.parse(template).body[indexOfFirstMustacheStatement];
    const filePath = '/path/to/file';
    const actualTranslationPlaceholder = fromMustacheStatementNode(mustacheStatement, filePath);

    const expectedTranslationPlaceholder = new TranslationPlaceholder({
      phrase: 'result',
      pluralForm: 'results',
      context: 'testing',
      count: 'resultCount',
      interpolationValues: { count: 'resultCount', param1: 'param1', param2: 'param2' },
      lineNumber: 1,
      filepath: filePath
    });
    expect(actualTranslationPlaceholder).toMatchObject(expectedTranslationPlaceholder);
  });
});
