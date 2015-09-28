var gulp = require("gulp"),
    browserSinc = require('browser-sync');
    imagemin = require('gulp-imagemin');
    pngquant = require('imagemin-pngquant');

gulp.task('server', function () {
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
    gulp.watch('images/*', ['images']);
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

gulp.task('default',['images', 'server', 'watch']);
