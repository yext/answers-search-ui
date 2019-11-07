// TODO(billy) Move to ES6 imports when Node supports ES6 modules
const fs = require('fs-extra');
const path = require('path');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const Handlebars = require('handlebars');

class Configuration {
  constructor (credentialsFile, configurationFile) {
    /**
     * The directory of the output from the generation
     * @type {string}
     */
    this.outputDir = './generated';

    /**
     * The source directory that contains or templates for generation
     * @type {string}
     */
    this.templatesDir = './templates';

    /**
     * The source directory containing our public assets used for generation (e.g. css, js, images)
     * @type {string}
     */
    this.assetsDir = './assets';

    /**
     * The source directory containing the sdk bundle
     * @type {string}
     */
    this.sdkBundleDir = '../dist';

    /**
     * Configuration used for generation of each page and vertical
     * @type {object}
     */
    const configFile = process.argv[2] ? path.join(process.cwd(), process.argv[2]) : configurationFile;
    this.siteConfig = Object.assign({},
      require('./config/credentials.json'),
      require(configFile));
  }
}

// TODO(billy) This should just be pulled in as a dependency to the application
class SDKBundle {
  constructor (config) {
    this.bundleUrl = `${config.assetsDir}/answers-modern.js`;
    this.templateUrl = `${config.assetsDir}/answerstemplates.compiled.min.js`;
    this.cssUrl = `${config.assetsDir}/answers.css`;
  }
}

// TODO(billy) Precompile the directory
class TemplateBundle {
  constructor (config) {
    const metadataTemplate = Handlebars.compile(fs.readFileSync(`${config.templatesDir}/metadata.hbs`, 'utf8'));
    Handlebars.registerPartial('metadata', metadataTemplate);

    this.universalTemplate = Handlebars.compile(fs.readFileSync(`${config.templatesDir}/universal.hbs`, 'utf8'));
    this.verticalTemplate = Handlebars.compile(fs.readFileSync(`${config.templatesDir}/vertical.hbs`, 'utf8'));
  }
}

const config = new Configuration(
  './config/credentials.json',
  './config/sample-config.json');

const sdkBundle = new SDKBundle(config);
const templateBundle = new TemplateBundle(config);

function main () {
  // Optionally create our `output directory`
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir);
  }

  // Copy our assets into the `output directory`
  fs.copy(config.assetsDir, `${config.outputDir}/${config.assetsDir}`, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Copied assets to generated site!');
  });

  // Copy our sdk bundle into the `output directory`
  fs.copy(config.sdkBundleDir, `${config.outputDir}/${config.assetsDir}`, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Copied SDK bundles to generated site!');
  });

  // Generate our static HTML
  writeUniversalHtml();
  for (const verticalKey of Object.keys(config.siteConfig.verticals)) {
    writeVerticalHtml(verticalKey);
  }
}

function writeUniversalHtml () {
  const html = templateBundle.universalTemplate({
    bundleUrl: sdkBundle.bundleUrl,
    cssUrl: sdkBundle.cssUrl,
    title: 'Universal Search Experience Test',
    publicDir: config.assetsDir,
    configJson: new Handlebars.SafeString(JSON.stringify(config.siteConfig))
  });
  writeFile(`${config.outputDir}/index.html`, html)
    .catch(console.error);
}

function writeVerticalHtml (verticalKey) {
  const configWithVertical = Object.assign({}, config.siteConfig, {
    verticalKey
  });
  const html = templateBundle.verticalTemplate({
    bundleUrl: sdkBundle.bundleUrl,
    cssUrl: sdkBundle.cssUrl,
    publicDir: config.assetsDir,
    title: `${capitalize(verticalKey)} Experience Test`,
    configJson: new Handlebars.SafeString(JSON.stringify(configWithVertical))
  });
  writeFile(`${config.outputDir}/${verticalKey}.html`, html)
    .catch(console.error);
}

function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

main();
