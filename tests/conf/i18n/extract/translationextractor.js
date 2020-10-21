const TranslationExtractor = require('../../../../conf/i18n/extract/translationextractor');
const path = require('path');
const fs = require('fs');

describe('TranslationExtractor generates proper POT files', () => {
  function readFile (filename) {
    const fixturesDir = path.resolve(__dirname, '../../../fixtures');
    return fs.readFileSync(path.join(fixturesDir, filename)).toString();
  }

  let extractor;
  beforeEach(() => {
    extractor = new TranslationExtractor();
  });

  it('can extract from a javascript file', () => {
    const rawJavascript = readFile('rawjavascript.js');
    const expectedJavascriptPot = readFile('expectedjavascript.pot');

    extractor.extract(rawJavascript, 'rawjavascript.js');
    const potString = extractor.getPotString();

    expect(potString).toEqual(expectedJavascriptPot);
  });

  it('can extract from a hbs file', () => {
    const rawTemplate = readFile('rawtemplate.hbs');
    const expectedTemplatePot = readFile('expectedtemplate.pot');

    extractor.extract(rawTemplate, 'rawtemplate.hbs');
    const potString = extractor.getPotString();

    expect(potString).toEqual(expectedTemplatePot);
  });
});
