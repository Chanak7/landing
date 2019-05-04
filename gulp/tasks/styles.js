const gulp = require('gulp'),

postcss = require ('gulp-postcss'),
autoprefixer = require ('autoprefixer'),
cssvar = require('postcss-simple-vars'),
nested = require ('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('css',function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvar,nested, autoprefixer]))	
    .pipe(gulp.dest('./app/tenp/styles'));
});
