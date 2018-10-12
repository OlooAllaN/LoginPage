var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
    'node_modules/mdbootstrap/scss/mdb.scss'
    , '/client/public/scss/styles.css'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("/client/public/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our client/public/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/mdbootstrap/js/mdb.min.js',
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest("../client/public/js"))
        .pipe(browserSync.stream());
});


gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
      script: './server.js',
      ignore: [
        '../server/gulpfile',
        '../server/server.js',
        '../server/node_modules/'
      ],
    }).on('start', function () {
      if (!called) {
        cb();
        called = true;
      }
    }).on('restart', function () {
      setTimeout(function () {
        reload({ stream: false });
      }, 1000);
      });
  });


  gulp.task('browser-sync', ['nodemon'], function() {
   browserSync.init({
    proxy: 'http://localhost:3000',
    open: false,
    browser:'google-chrome',
    port: 4000, 
    baseDir: 'build',
    notify: true,
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', '../client/**/*.scss'],
  ['sass']);
  gulp.watch('client/**/*.hbs').on('change', browserSync.reload);
});

 gulp.task('default', ['js', 'browser-sync']);
