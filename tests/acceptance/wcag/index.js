#!/usr/bin/env node

const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const PageNavigator = require('../pagenavigator');
const WcagReporter = require('./wcagreporter');
const handler = require('serve-handler');
const http = require('http');
const PORT = 9999;

/**
 * specifies options to be used by axe-core engine within axe-core/puppeteer.
 * API documentation: https://github.com/dequelabs/axe-core/blob/master/doc/API.md
 * - set reporter to 'no-passes' to only return violation results
 * - set runOnly with tag values below to run WCAG standards:
 *    - WCAG 2.0 Level A, AA, AAA
 *    - WCAG 2.1 Level A, AA
 */
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

  page
    .on('console', message =>
      console.log(`Browser console ${message.type().substr(0, 3).toUpperCase()}: ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(`Page error: ${message}`))
    .on('requestfailed', request =>
      console.log(`Network request failed: ${request.failure().errorText} ${request.url()}`));

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
    if (violations && violations.length > 0) {
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
