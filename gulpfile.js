const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const imagemin = require('gulp-imagemin');
const Filter = require('gulp-filter');
const minify = require('gulp-minify');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const coffee = require('gulp-coffee');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', ['stylus', 'pug', 'coffee', 'js'], function() {
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

//Сжатие js
gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('build/js/'))
});

//Конкатенация js библиотек
gulp.task('scripts', function() {
    return gulp.src('src/assets/vendor/lib/*.js')
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(gulp.dest('build/js/'));
});

//Конкатенация CSS сторонних вендоров
gulp.task('vendor-css', function () {
    return gulp.src('src/assets/vendor/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css/'));
});

//Компиляция, минифиикация и префиксы файлов stylus
gulp.task('stylus', function () {
    const f = Filter(['src/block/**/*.styl'], {restore: true});
    return gulp.src('src/**/*.styl')
        .pipe(f)
        .pipe(stylus())
        .pipe(concat('main.css'))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS({compatibility: 'ie8'}))
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