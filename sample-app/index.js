const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const credentials = require('./credentials.json');
const configFile = process.argv[2]
  ? path.join(process.cwd(), process.argv[2])
  : './sample-config.json';
const siteConfig = require(configFile);
const config = Object.assign({}, credentials, siteConfig);

const bundleUrl = `../dist/answers.js`;
const cssUrl = `../dist/answers.css`;

async function main () {
  const universalHtml = renderHtml({
    config,
    title: 'Universal Search Experience Test',
    markup: `
    <main>
      <div class="search-container"></div>
      <div class="direct-answer-container"></div>
      <div class="universal-results-container"></div>
      <div class="question-submission-container"></div>
    </main>`
  });
  writeFile('index.html', universalHtml)
    .catch(console.error);

  for (const verticalKey of Object.keys(config.verticals)) {
    const configWithVertical = Object.assign({}, config, {
      verticalKey
    });

    const verticalHtml = renderHtml({
      config: configWithVertical,
      title: `${capitalize(verticalKey)} Experience Test`,
      markup: `
    <div class="sidebar">
      <div class="filter-search-container"></div>
      <div class="dynamic-filter-container"></div>
      <div class="filters-container"></div>
    </div>
    <main>
      <div class="search-container"></div>
      <div class="results-container"></div>
    </main>`
    });
    writeFile(`${verticalKey}.html`, verticalHtml)
      .catch(console.error);
  }
}

function renderHtml ({
  config,
  title,
  markup
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" type="text/css" href="${cssUrl}">
  <link rel="stylesheet" href="public/style.css">
  <script type="application/json" id="config">
${JSON.stringify(config)}
  </script>
  <script src="public/app.js" defer></script>
  <script src="${bundleUrl}" onload="ANSWERS.domReady(initAnswers)" defer></script>
</head>
<body>
  <nav class="navigation-container"></nav>
  <div class="search">${markup}
  </div>
</body>
</html>
  `;
}

function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

main();
