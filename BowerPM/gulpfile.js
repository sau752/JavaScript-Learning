var gulp = require('gulp');

//include plugins

var jslint = require('gulp-jslint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var img = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');

gulp.task('default', ['watch', 'jslint', 'styles']);

/*Gulp watch commands*/

gulp.task('watch', function () {
    /*var watcher = gulp.watch('*.js');
    watcher.on('change', function (event) {
        console.log('File: ' + event.path + ' changed');
    })*/

    gulp.watch('bowerscript.js', ['jsline']);
    gulp.watch('scss/*.scss', ['styles']);
})

gulp.task('jslint', function () {
    gulp.src('bowerscript.js')
        .pipe(plumber())
        .pipe(jslint())
        .pipe(jslint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
})

gulp.task('image', function () {
    gulp.src('bower.png')
    .pipe(img())
    .pipe(gulp.dest('image/'))
})

gulp.task('styles', function () {
    gulp.src("scss/*.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded' //compressed
        }))
        .pipe(prefix())
        .pipe(gulp.dest('css/'))
})