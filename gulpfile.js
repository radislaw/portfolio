var gulp = require("gulp"),
//    jade = require("gulp-jade"),
    concatCss = require('gulp-concat-css');
    prettify = require("gulp-prettify"),
    browserSinc = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

/*gulp.task('jade', function() {
  gulp.src('app/*.jade')
    .pipe(jade())
    .on('error', log)
    .pipe(prettify({indent_size: 4}))
    .pipe(gulp.dest('app/'))
});*/

gulp.task('cssConcat', function () {
        gulp.src('css/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('server'/*, ['jade']*/, function () {
    browserSinc({
        port:9000,
        server:{
            baseDir:'app'
        }
    });
});

gulp.task('watch', function(){
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css',
    ]).on('change', browserSinc.reload);
//    gulp.watch('app/*.jade', ['jade']);
    gulp.watch('images/*', ['images']);
    gulp.watch('css/*.css', ['cssConcat']);
});

gulp.task('images', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/img'));
});

gulp.task('default',['images', 'cssConcat', 'server', /*'jade',*/ 'watch']);



/*
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  prettify = require("gulp-prettify"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload;
*/




/*gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .on('error', log)
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream: true}))
});

gulp.task('serv', ['sass', 'jade'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('watch', function(){

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', reload);
});

gulp.task('default', ['serv', 'jade', 'sass', 'watch']);*/
