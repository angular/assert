var gulp = require('gulp');
var pipe = require('pipe/gulp');


var path = {
  src: './src/**/*.js',
};


// TRANSPILE ES6
gulp.task('build_source_amd', function() {
  gulp.src(path.src)
      .pipe(pipe.traceur())
      .pipe(gulp.dest('dist/amd'));
});

gulp.task('build_source_cjs', function() {
  gulp.src(path.src)
      .pipe(pipe.traceur({modules: 'commonjs'}))
      .pipe(gulp.dest('dist/cjs'));
});

gulp.task('build_dist', ['build_source_cjs', 'build_source_amd']);
gulp.task('build', ['build_dist']);


// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(path.src, ['build']);
});
