const fs = require('fs');
const path = require('path');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const Handlebars = require('handlebars');
const metadataTemplate = Handlebars.compile(
  fs.readFileSync('./metadata.handlebars', 'utf8')
);
const universalTemplate = Handlebars.compile(
  fs.readFileSync('./universal.handlebars', 'utf8')
);
const verticalTemplate = Handlebars.compile(
  fs.readFileSync('./vertical.handlebars', 'utf8')
);
Handlebars.registerPartial('metadata', metadataTemplate);

const credentials = require('./credentials.json');
const configFile = process.argv[2]
  ? path.join(process.cwd(), process.argv[2])
  : './sample-config.json';
const siteConfig = require(configFile);
const config = Object.assign({}, credentials, siteConfig);

const bundleUrl = `../dist/answers.js`;
const cssUrl = `../dist/answers.css`;

function main () {
  writeUniversalHtml();

  for (const verticalKey of Object.keys(config.verticals)) {
    writeVerticalHtml(verticalKey);
  }
}

function writeUniversalHtml () {
  const html = universalTemplate({
    bundleUrl,
    cssUrl,
    title: 'Universal Search Experience Test',
    configJson: new Handlebars.SafeString(JSON.stringify(config))
  });
  writeFile('index.html', html)
    .catch(console.error);
}

function writeVerticalHtml (verticalKey) {
  const configWithVertical = Object.assign({}, config, {
    verticalKey
  });
  const html = verticalTemplate({
    bundleUrl,
    cssUrl,
    title: `${capitalize(verticalKey)} Experience Test`,
    configJson: new Handlebars.SafeString(JSON.stringify(configWithVertical))
  });
  writeFile(`${verticalKey}.html`, html)
    .catch(console.error);
}

function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

main();
