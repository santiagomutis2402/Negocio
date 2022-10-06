"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { parallel } = require("gulp");

gulp.task("sass", function () {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/style"));
});

exports.watch = function () {
  gulp.watch("src/sass/**.scss", parallel("sass"));
};
