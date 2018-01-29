var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gutil = require('gulp-util');
const $ = require("gulp-load-plugins")();

//file paths
var SCRIPTS_PATH = 'public/scripts/**/*.js'

$.uglify().on('error', function (err) {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
    this.emit('end');
})
gulp.task('scripts', function() {
  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('public/dist'));
})

gulp.task('watch',function(){
  console.log('starting watch task');
  gulp.watch(SCRIPTS_PATH,['scripts']); //means run this and then rerun the other task scripts from above  
})