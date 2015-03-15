var gulp = require('gulp');

var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var inject = require('gulp-inject');

gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('include', function () {
  var target = gulp.src('./app/index.html');
  var sources = gulp.src([
    './bower_components/**/*.css',
    './src/**/*.css',
    './app.css',
    '!./bower_components/**/*.min.js',
    './bower_components/**/*.js',
    './src/**/*.js',
    './app.js'
  ], {read: false, cwd: __dirname + '/app'});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('app/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8000
  });
});

gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});


// default task
gulp.task('default',
  ['lint', 'connect']
);

gulp.task('dev',
    ['lint', 'include', 'connect']
);

// build task
gulp.task('build',
  ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
);