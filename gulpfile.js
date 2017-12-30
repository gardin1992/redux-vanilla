const gulp = require('gulp'),
    babel = require('gulp-babel');

const paths = {
    scripts: ['./src/js/**', './src/js/**/*.js']
};

gulp.task('scripts', function () {

    return gulp.src(paths.scripts)
        .pipe(babel({
            "presets": ["env"],
            "plugins": ["transform-remove-strict-mode"]
        }))
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('watch', function () {

    gulp.watch(paths.scripts, ['scripts']);

});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);
