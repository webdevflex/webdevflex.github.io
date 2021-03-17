const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const tingpng = require('gulp-tinypng-compress');

//js
const jsFiles = [
    'src/js/*.js',
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

//images tinypng
let filesImages = [
    'src/images/*.{png,jpg,jpeg}',
   
  ];
function images() {
    return gulp
      .src(filesImages)
      .pipe(tingpng('8H3YSSNfw47KgPc0tzbvP9K1r8SpyVn8'))
      .pipe(gulp.dest('build/images/'))
   
}

// newTiniPngCompress
// let filesImages = [
//     'src/images/*.{png,jpg,jpeg}',
   
//   ];
// function images() {
//     return gulp
//       .src(filesImages)
//       .pipe(tinypng({
//           key:'8H3YSSNfw47KgPc0tzbvP9K1r8SpyVn8',
//           sigFile: 'images/.tinypng-sigs',
          
//             }))
//       .pipe(gulp.dest('build/images/'))
   
// }
// gulp.task('tinypng1', function () {
//     gulp.src('src/images/src/**/*.{png,jpg,jpeg}')
//         .pipe(tinypng({
//             key: '8H3YSSNfw47KgPc0tzbvP9K1r8SpyVn8',
//             sigFile: 'images/.tinypng-sigs',
//             log: true
//         }))
//         .pipe(gulp.dest('images'));
// });

//copy svg
 
let filessvg = [
    'src/images/*.svg',
    
  ];
function images_copy(){
    return gulp
    .src(filessvg)
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

gulp.task('images_copy',images_copy);
gulp.task('sasscss', sasscss);
gulp.task('otf2ttf', otf2ttf);
gulp.task('html',html);
gulp.task('watch', watch);
gulp.task('scripts',scripts);
gulp.task('clean' , clean);
gulp.task('images', images);
gulp.task('fonts', fonts);
gulp.task('default', gulp.series('clean', gulp.parallel( 'sasscss','scripts', 'html' ,'images','otf2ttf','fonts','images_copy'), 'watch'));         

