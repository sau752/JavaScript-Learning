var gulp = require('gulp');

//include plugins

var jslint = require('gulp-jslint');

gulp.task('default', function () {
    console.log("Gulp");
})

/*Gulp watch commands*/

gulp.task('watch', function () {
    var watcher = gulp.watch('*.js');
    watcher.on('change', function (event) {
        console.log('File: ' + event.path + ' changed');
    })
})

gulp.task('jslint', function () {
    gulp.src('*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
})