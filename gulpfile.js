var gulp = require('gulp');
var jshint = require('gulp-jshint');

// Gulp jshint task
gulp.task('lint', function() {
    return gulp.src('./app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000);
});

gulp.task('default', [
    'express',
    'lint'
], function() {
    // code for the stuff happening
});
