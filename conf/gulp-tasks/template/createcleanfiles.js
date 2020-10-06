const { getPrecompiledFileName, addLocalePrefix } = require('./filenameutils');

const del = require('del');

/**
 * Creates a cleanFiles task for the specified locale, which will
 * clear away any intermediary files in the template build chain.
 * Also customizes the task's name for display in the command line.
 *
 * @param {string} locale
 * @returns {Function}
 */
function createCleanFilesTask (locale) {
  const cleanFilesTask = callback => _cleanFiles(callback, locale);
  const taskName = addLocalePrefix('cleanFiles', locale);
  Object.defineProperty(cleanFilesTask, 'name', {
    value: taskName
  });
  return cleanFilesTask;
}

/**
 * The cleanFiles task for a specified locale.
 *
 * @param {Function} callback
 * @param {string} locale
 */
function _cleanFiles (callback, locale) {
  const precompiledFile = getPrecompiledFileName(locale);
  del.sync([ `./dist/${precompiledFile}` ]);
  callback();
}

module.exports = createCleanFilesTask;
