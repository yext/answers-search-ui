const fs = require('fs');

describe('generateentrypoints script works as expected', () => {
  const mockConstant = {
    ALL_LANGUAGES: ['en', 'es', 'fr']
  };
  jest.mock('../../../conf/i18n/constants', () => mockConstant);

  it('append exports field to input file', () => {
    const inputFile = './tests/conf/npm/test-generateentrypoints.json';
    process.argv = ['', '', inputFile];
    fs.writeFileSync(inputFile, '{}');
    require('../../../conf/npm/generateentrypoints.js');
    const output = fs.readFileSync(inputFile).toString();
    const expectedOutput = fs.readFileSync('./tests/fixtures/conf/npm/inputFile.json').toString();
    expect(output).toEqual(expectedOutput);
    fs.unlinkSync(inputFile);
  });
});
