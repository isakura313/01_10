"use strict"
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer")
const rename = require("gulp-rename");
const browsersync = require("browser-sync");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");


function css(){
    return gulp
        .src("sass/*.sass")
        .pipe(sass({outputStyle:"expanded"}))
        .pipe(gulp.dest("css"))
}

function build(){
    return gulp
    .src("css/main.css")
    .pipe(rename({suffix: ".min"}))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("dist"))
}


function watchFiles(){
    gulp.watch("sass/*.sass", css);
}

exports.css = css;
exports.build = build;
exports.watchFiles = watchFiles;