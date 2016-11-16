const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');

gulp.task('scssTask', scssTask);
gulp.task('scriptTask', scriptTask);
gulp.task('htmlTask', htmlTask);
gulp.task('templateTask', templateTask);
gulp.task('default', ['scriptTask', 'scssTask', 'htmlTask', 'templateTask']);

function scriptTask(done) {
	pump([
    gulp.src('app/**/*.js'),
    sourcemaps.init(),
		babel({
			presets: ['es2015']
		}),
    uglify(),
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

function htmlTask(done) {
	pump([
		gulp.src('app/index.html'),
		gulp.dest('www/'),
	], done);
}

function templateTask(done) {

  const target = 'app/index.html';
  const source = 'app/components/**/*.html';

  function transform(filePath, file) {
    // return file contents as string
    return file.contents.toString('utf8')
  }

  pump([
    gulp.src(target),
    inject(gulp.src(source), {
      starttag: '<!-- inject:templates -->',
      transform: transform
    }),
    gulp.dest('www')
  ], done)
}

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('app/**/*.scss', ['scssTask']);
  gulp.watch('app/**/*.js', ['scriptTask']);
  gulp.watch('app/index.html', ['htmlTask']);
});
