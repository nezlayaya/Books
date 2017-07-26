var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require("gulp-babel");


gulp.task('scripts', function() {
    return gulp.src(['js/*', './components/profile/*'])
               .pipe(concat('all.js'))
               .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
    gulp.src('css/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
});


gulp.task('watch', function(){
    gulp.watch('scss/main.scss', ['css']);
});




gulp.task("babel", function () {
    return gulp.src(["js/all.js"])
               .pipe(babel())
               .pipe(gulp.dest("dist"));
});


gulp.task('default', [ 'watch', 'sass', 'scripts', 'babel']);

