const uglyfy = require('gulp-uglify')
const minifyCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const scssCompile = require('gulp-sass')
const concat = require('gulp-concat')
const gulp = require('gulp');
const {task, watch, parallel, src, dest} = require('gulp')

task('scss', () => {
  return src('public/styles/*.scss')
    .pipe(scssCompile().on('error', scssCompile.logError))
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'));
});

task('js', () => {
  return src('public/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglyfy())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
});
  
task('images', () => {
  return src('public/images/*')
    .pipe(dest('dist/images'));
});

task('html', () => {
  return src('public/html/*')
    .pipe(dest('dist/html'));
});

task('default', parallel(['scss', 'js', 'images', 'html']));
task('watch', () => {
  watch(['public/styles/*.scss'], parallel(['scss']));
  watch(['public/js/*.js'], parallel(['js']));
  watch(['public/html/*.html'], parallel(['html']));
});

