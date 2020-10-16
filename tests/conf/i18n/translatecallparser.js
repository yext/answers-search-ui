const TranslateCallParser = require('../../../conf/i18n/translatecallparser');

describe('TranslateCallParser creates a TranslationPlaceholder from a TranslationFlagger', () => {
  const translateCallParser = new TranslateCallParser();
  it('All params parse properly', () => {
    const translateCall = `TranslationFlagger.flag({
        phrase: 'Simple phrase',
        pluralForm: 'Plural form',
        context: 'Context',
        count: 42,
        interpolationValues: {
          start: min,
          end: max
        }
      })`;
    const lineNumber = 1;
    const filePath = 'src/file.js';
    const expectedResult = {
      _phrase: 'Simple phrase',
      _pluralForm: 'Plural form',
      _context: 'Context',
      _count: '42',
      _interpolationValues: {
        start: 'min',
        end: 'max'
      },
      _lineNumber: lineNumber,
      _filepath: filePath
    };
    const actualResult = translateCallParser.parse(translateCall, lineNumber, filePath);
    expect(actualResult).toMatchObject(expectedResult);
  });
});
