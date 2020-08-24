'use strict';

const { src, dest, watch, series, } = require('gulp');
const sass = require('gulp-sass');

function compile() {
  return src('./sass/index.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./css'));
}

exports.default = function() {
  watch('./sass/**/*.scss', series(compile));
};