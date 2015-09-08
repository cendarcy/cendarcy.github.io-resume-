
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");
var reload = browserSync.reload;


gulp.task('sass', function(){
	gulp.src('scss/main.scss')
		.pipe(sass({
			includePaths: ['styles/scss']
		}))
		.pipe(gulp.dest("scss/."))
});

gulp.task('serve', function(){
	
	browserSync.init(['scss/main.css','*.html', '*.js'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
})


// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.

