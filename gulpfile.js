const { series } = require('gulp')

function defaultTask(cb) {
  cb();
}

function bundle(cb) {
  console.log('bundling...');
  cb();
}

function minify(cb) {
  console.log('minifying...');
  cb();
}

function umdify(cb) {
  console.log('umdifying...')
  cb();
}

exports.build = series(
  bundle,
  minify,
  umdify
)

exports.default = defaultTask;