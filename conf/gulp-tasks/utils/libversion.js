const { execSync } = require('child_process');

/**
 * Attempts to compute the correct library version for an SDK asset.
 *
 * @returns {string} The SDK asset's library version.
 */
function getLibVersion () {
  console.log(execSync('git --version').toString().trim());
  console.log('tags---', execSync('git tag').toString().trim());
  try {
    const insideWorkTree =
      execSync('git rev-parse --is-inside-work-tree 2>/dev/null')
        .toString().trim();
    if (insideWorkTree === 'true') {
      return require('child_process')
        .execSync('git describe --tags')
        .toString().trim();
    }
  } catch (e) {
    console.error('Error getting lib version');
    throw e;
  }
}

module.exports = getLibVersion;
