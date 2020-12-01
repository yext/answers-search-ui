const getBundleName = require('../utils/bundlename');

const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');

/**
 * A factory class that provides Gulp tasks to minify the SDK bundles.
 */
class MinifyTaskFactory {
  constructor (locale) {
    this._locale = locale;
  }

  /**
   * Provides a Gulp task to minify an SDK bundle of the specified type.
   *
   * @param {BundleType} bundleType The type of SDK bundle to minify.
   * @returns {Function} Gulp task for minifying the requested SDK bundle.
   */
  minify (bundleType) {
    const bundleName = getBundleName(bundleType, this._locale);
    const minifyFunction = (callback) => this._minifyBundle(callback, bundleName);
    Object.defineProperty(minifyFunction, 'name', { value: `minify ${bundleName}` });
    return minifyFunction;
  }

  /**
   * The Gulp task for minifying a version of the SDK bundle.
   *
   * @param {function} callback
   * @param {string} bundleName The name of the JS bundle
   * @returns {stream.Writable} A {@link Writable} stream containing the minified
   *                            SDK bundle.
   */
  _minifyBundle (callback, bundleName) {
    return src(`./dist/${bundleName}.js`)
      .pipe(sourcemaps.init())
      .pipe(rename(`${bundleName}.min.js`))
      .pipe(uglify({
        mangle: { reserved: ['ANSWERS'] }
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(dest('dist'))
      .on('end', callback);
  }
}

module.exports = MinifyTaskFactory;
