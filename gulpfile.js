const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
var Filter = require('gulp-filter');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

const processors = [
    autoprefixer({
        browsers: ['last 6 versions']
    }),
    nested
];

// Static server
gulp.task('serve', ['stylus', 'pug', 'coffee'], function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });

    gulp.watch('src/**/*.*', ['stylus']);
    gulp.watch('src/**/*.*', ['pug']);
    gulp.watch('src/coffee/*.*', ['coffee']);
    gulp.watch('build/**.*').on('change', browserSync.reload);
});

//Сжатие и перемещение изображений
gulp.task('compress-images', function () {
    gulp.src('src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

// Компиляция файлов Stylus
// gulp.task('stylus', function(){
//     return gulp.src('src/assets/*.*')
//         .pipe(stylus())
//         .pipe(gulp.dest('build/css/'))
//         .pipe(browserSync.stream());
// });

gulp.task('stylus', function () {
    const f = Filter(['src/block/**/*.styl'], {restore: true});
    return gulp.src('src/**/*.styl')
        .pipe(f)
        .pipe(stylus())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// Компиляция файлов PUG
gulp.task('pug', function(){
    return gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

// Компиляция файлов Coffee
gulp.task('coffee', function(){
    return gulp.src('src/coffee/*.*')
        .pipe(coffee())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);