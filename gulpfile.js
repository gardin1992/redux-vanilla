const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    pump = require('pump');


const paths = {
    scripts: ['./src/js/**', './src/js/**/*.js'],
    compress: ['dist/js/**/*.js']
};

gulp.task('compress', function (cb) {
    pump([
            gulp.src(paths.compress),
            uglify({
                mangle: {
                    reserved: ['require', 'exports', 'module']
                }
            }),
            gulp.dest('public/js')
        ],
        cb
    );
});

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
    gulp.watch(paths.compress, ['compress']);

});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
