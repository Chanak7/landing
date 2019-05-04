const gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

  gulp.task('watch',function(){

	browserSync.init({

		server:{
			baseDir:"app"
		}
	});

	  watch('./app/**/*.html', function(){
		  browserSync.reload();
	  });
	  watch('./app/assets/styles/**/*.css',gulp.series('cssInject'));

});


gulp.task('cssInject', gulp.series('css', function(){
					return gulp.src('./app/tenp/styles/styles.css')
											.pipe(browserSync.stream());
}));

