const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const tingpng =require('gulp-tinypng');
const sass = require('gulp-sass');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');

const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

// Делаем SVG спрайт

function spriteSVG() {
  return gulp.src('src/images/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        stack:{
          sprite:"../sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest('build/images/sprite'));
};


//js
const jsFiles = [
    'src/js/*.js'
];

//js
function scripts(){
    return gulp.src(jsFiles)
        .pipe(concat('script.min.js'))
        .pipe(uglify({
            toplevel:true, 
        }))
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
}
//scss-css
const cssFiles = [
    'node_modules/normalize.css/normalize.css',
    'src/scss/**/*.scss'
];
function sasscss(){
    return gulp.src(cssFiles)
    .pipe(
        sass({
        outputStyle: "expanded"
    }))
    .pipe(autoprefixer({overrideBrowserslist:['last 10 versions'], grid:true}))
    .pipe(cleanCSS({
        level: 2
     }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());

}

//html
function html(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
}

//fonts - ttf/woff,woff2
function otf2ttf(){
    return gulp.src('src/fonts/**/*.otf')
    .pipe(fonter({
        formats:['ttf']
    }))
    .pipe(gulp.dest('src/fonts/'));
}

function fonts(){
    gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
    .pipe(ttf2woff())
    .pipe(gulp.dest('build/fonts/'));
    return gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('build/fonts/'));
}

//images
let filesImages = [
    'src/images/*',
  ];
function images() {
    return gulp
      .src(filesImages)
      .pipe(tingpng('RWNrsmcDz2jCP0fybskdFsS9G2Q04Zll'))
      .pipe(gulp.dest('build/images/'))
   
}


//clean
function clean(){
   return del(['build/*']);
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./build",
        }
    });
    gulp.watch('./src/scss/**/*.scss', sasscss);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/*.html', html).on('change', browserSync.reload);
    gulp.watch('./src/images/**/**/*', images).on('change', browserSync.reload);
}


gulp.task('sasscss', sasscss);
gulp.task('otf2ttf', otf2ttf);
gulp.task('html',html);
gulp.task('watch', watch);
gulp.task('scripts',scripts);
gulp.task('clean' , clean);
gulp.task('images', images);
gulp.task('fonts', fonts);
gulp.task('spriteSVG', spriteSVG)
gulp.task('default', gulp.series('clean', gulp.parallel( 'sasscss','scripts', 'html' ,'images','otf2ttf','fonts','spriteSVG'), 'watch'));         

