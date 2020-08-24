/**
 * Attempts to compute the correct library version for an SDK asset.
 *
 * @returns {string} The SDK asset's library version.
 */
function getLibVersion () {
  try {
    const insideWorkTree = require('child_process')
      .execSync('git rev-parse --is-inside-work-tree 2>/dev/null')
      .toString().trim();
    if (insideWorkTree === 'true') {
      return require('child_process')
        .execSync('git describe --tags')
        .toString().trim();
    }
  } catch (e) {
    // if above command fails, catch error and continue, as we are not in a git repository
  }

  console.warn('Warning: Not in a github repository, using default hardcoded library version.');
  return 'TEST';
}

module.exports = getLibVersion;
