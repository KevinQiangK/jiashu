var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
 
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./views/**/*.html')
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./styles'))
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
    gulp.watch('./views/**/*.html', ['html']);
});
 

gulp.task('default', [
    'sass',
    'connect',
    'watch'
]);