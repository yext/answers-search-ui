const createTestCafe = require('testcafe');
const { PORT } = require('./constants');
const yargs = require('yargs');

const argv = yargs
  .options({
    browsers: {
      description: 'The browsers to run the tests on',
      alias: 'b',
      type: 'array',
      default: 'chrome'
    },
    concurrency: {
      description: 'Number of instances of each browser type',
      alias: 'c',
      type: 'number',
      default: 1
    }
  })
  .help()
  .alias('help', 'h')
  .parse();

console.log('run tests....');
// runTests(argv.browsers, argv.concurrency);

/**
 * Run the acceptance tests
 *
 * @param {string[]} browsers The browsers to run the tests on
 * @param {number} concurrency Number of instances of each browser type
 */
async function runTests (browsers, concurrency) {
  const testcafe = await createTestCafe();
  try {
    console.log('create runner....');
    const numberTestsFailed = await testcafe.createRunner()
      .src('tests/acceptance/acceptancesuites/*.js')
      .browsers(browsers)
      .concurrency(concurrency)
      .startApp(`npx serve -l tcp://0.0.0.0:${PORT}`, 4000)
      .run({ quarantineMode: true });
    if (numberTestsFailed > 0) {
      await testcafe.close();
      console.log('exit ONE....');
      process.exit(1);
    }
  } catch (e) {
    console.error(e);
    console.log('exit TWO....');
    await testcafe.close();
    process.exit(1);
  } finally {
    console.log('exit THREE....');
    await testcafe.close();
  }
  console.log('DONE....');
}
