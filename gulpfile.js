var gulp = require("gulp"),
    browserSinc = require('browser-sync');
gulp.task('server', function(){
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
});

gulp.task('default',['server', 'watch']);
