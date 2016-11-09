const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', defaultTask);

function defaultTask(done) {
	pump([
    gulp.src([
      "app/**/*.js"
    ]),
    sourcemaps.init(),
		babel({
			presets: ['es2015']
		}),
    concat('index.js'),
    sourcemaps.write('.'),
    gulp.dest('www/js/')
  ], done);
};
