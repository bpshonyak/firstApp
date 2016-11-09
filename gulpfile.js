const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scssTask', scssTask);
gulp.task('scriptTask', scriptTask);
gulp.task('default', ['scriptTask', 'scssTask']);

function scriptTask(done) {
	pump([
    gulp.src('app/**/*.js'),
    sourcemaps.init(),
		babel({
			presets: ['es2015']
		}),
    concat('index.min.js'),
    sourcemaps.write('.'),
    gulp.dest('www/js/')
  ], done);
};

function scssTask(done) {
  pump([
    gulp.src('app/**/*.scss'),
    sourcemaps.init(),
    sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError),
    concat('index.min.css'),
    sourcemaps.write('.'),
    gulp.dest('www/css/')
  ], done);
}
