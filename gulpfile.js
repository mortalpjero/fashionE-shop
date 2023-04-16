const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();

const styles = () => {
  return gulp.src("src/scss/style.scss")
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('src/css'))
  .pipe(sync.stream());
}

exports.styles = styles;

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'src'
    },
    cors: true,
    notify: false,
    ui: false,
    reloadDelay: 500
  });
  done();
}
exports.server = server;

const watcher = () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('src/*.html').on('change', sync.reload);
}

exports.start = gulp.series(
  styles, server, watcher
)