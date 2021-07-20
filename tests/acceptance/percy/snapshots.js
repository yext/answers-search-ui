import { setupServer, shutdownServer } from '../server';
import puppeteer from 'puppeteer';
import percySnapshot from '@percy/puppeteer';

(async () => {
  const context = {};
  await setupServer(context);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function snap (slug, name) {
    await page.goto(`http://localhost:9999/tests/acceptance/fixtures/html/${slug}`);
    await percySnapshot(page, name);
  }

  await snap('facets.html', 'facets page pre search');
  await snap('no-unsafe-eval.html', 'no unsafe eval CSP');

  await browser.close();
  await shutdownServer(context);
})();
