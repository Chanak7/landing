const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require ('gulp-postcss'),
  autoprefixer = require ('autoprefixer'),
 cssvar = require('postcss-simple-vars'),
 nested = require ('postcss-nested');

gulp.task('default', function(){
	console.log('you created a new task');
});

gulp.task('html',function(){
	return console.log('html task');
});

gulp.task('css',function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvar,nested, autoprefixer]))	
	.pipe(gulp.dest('./app/tenp/styles'));
});


gulp.task('watch',function(){

	  watch('./app/**/*.html', gulp.series('html'));
	  watch('./app/assets/styles/**/*.css',gulp.series('css'));

});








