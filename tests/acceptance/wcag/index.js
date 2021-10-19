#!/usr/bin/env node

const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const PageNavigator = require('./pagenavigator');
const WcagReporter = require('./wcagreporter');
const handler = require('serve-handler');
const http = require('http');
const PORT = 9999;

const axeCoreConfig = {
  reporter: 'no-passes',
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa']
  }
};

async function setupServer () {
  const server = http.createServer((request, response) => {
    return handler(request, response);
  });
  server.listen(PORT);
  return server;
}

async function wcagTester () {
  const server = await setupServer();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageNavigator = new PageNavigator(page, `http://localhost:${PORT}/tests/acceptance/fixtures/html`);
  const analyzer = await new AxePuppeteer(page).options(axeCoreConfig);
  let results = [];
  try {
    results = await new WcagReporter(pageNavigator, analyzer).analyze();
  } catch (e) {
    console.log(e);
    await browser.close();
    await server.close();
    process.exit(1);
  }

  const failedResults = [];
  results.forEach(result => {
    const { url, violations } = result;
    if (violations) {
      failedResults.push({ url, violations });
    }
  });

  await browser.close();
  await server.close();

  if (failedResults.length > 0) {
    console.error(`${failedResults.length} pages failed to be WCAG complaint:`);
    console.log(JSON.stringify(failedResults, null, 2));
    process.exit(1);
  }
}

wcagTester();
