"use strict";

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var plumber = require("gulp-plumber");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var server = require("browser-sync");
// var mqpacker = require("css-mqpacker");
// var minify = require("gulp-csso");
// var rename = require("gulp-rename");
// var imagemin = require("gulp-imagemin");
// var server = require("browser-sync");
// var run = require("run-sequence");
// var del = require("del");
// var uglify = require("gulp-uglify");
// var sourcemaps = require("gulp-sourcemaps");


var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber     = require("gulp-plumber");
var reload      = browserSync.reload;


var src = {
    scss : 'app/scss/style.scss',
    css  : 'app/css',
    js   : 'app/*.js',
    html : 'app/*.html'
};


// Static Server + watching scss/html/js files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/**/*.{scss,sass}", ["sass"]);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);




// gulp.task("style", function() {
//   gulp.src("src/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(postcss([
//       autoprefixer({browsers: [
//         "last 1 version",
//         "last 2 Chrome versions",
//         "last 2 Firefox versions",
//         "last 2 Opera versions",
//         "last 2 Edge versions"
//       ]}),
//       mqpacker({
//         sort: true
//       })
//     ]))
//     .pipe(gulp.dest("build/css"))
//     .pipe(minify())
//     .pipe(rename("style.min.css"))
//     .pipe(gulp.dest("build/css"))
//     .pipe(server.reload({stream: true}));
// });

// gulp.task("html", function () {
//   gulp.src("src/*.html")
//     .pipe(gulp.dest("build"))
//     .pipe(server.reload({stream: true}));
// });

// gulp.task('jscompress', function () {
//   gulp.src("src/js/*.js")
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//       .pipe(uglify())
//       .pipe(rename("app.min.js"))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest("build/js"))
//     .pipe(server.reload({stream: true}));
// });

// gulp.task("images", function() {
//   return gulp.src("src/images/**/*.{png,jpg,gif,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("libs", function() {
//   gulp.src("src/libs/**/*.*")
//     .pipe(gulp.dest("build/libs"))
// });

// gulp.task("serve", ["style"], function() {
//   server.init({
//     server: "build",
//     notify: false,
//     open: true,
//     ui: false
//   });

//   gulp.watch("src/sass/**/*.{scss,sass}", ["style"]);
//   gulp.watch("src/*.html", ["html"]);
//   gulp.watch("src/js/*.js", ["jscompress"]);
// });

// gulp.task("clean", function() {
//   return del("build");
// });

// gulp.task("build", function(fn) {
//   run(
//     "clean",
//     "html",
//     "style",
//     "jscompress",
//     "images",
//     "libs",
//     fn
//   );
// });
