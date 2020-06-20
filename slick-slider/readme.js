// 1.Установка Slick-slider
// npm i slick-slider
// ------------------------------
// 2.Пропись путей пример стили
function styles(){
    return src([
        'app/sass/main.scss',
        'node_modules/slick-slider/slick/slick.scss',
    ])//обработка sass - файлов
    .pipe(sass())
    .pipe(concat('app.min.css'))//выгрузка css
    .pipe(autoprefixer({overrideBrowserslist:['last 10 versions'], grid:true}))//10 версий + работа с грид для ex
    .pipe(cleancss(( { level: { 1:{specialComments:0 } } })))//удаляет коменты и минифиц.
    .pipe(dest('app/css/'))//конечная папка
    .pipe(browserSync.stream())//перезагрузка страници
}
// пример js
function scripts(){
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-slider/slick/slick.js',
        'app/js/script.js',
       
    ])
    .pipe(concat('app.min.js'))//выгрузка js
    .pipe(uglify())//минификация файла
    .pipe(dest('app/js'))//конечная папка
    .pipe(browserSync.stream())//перезагрузка страници
}

// 3.Включение
$('.slider_bar').slick();

// 4.Html
{/* <div class="slider_bar">
<div class="slider_item"><img src="images/dest/1.jpg" alt=""></div>
<div class="slider_item"><img src="images/dest/2.jpg" alt=""></div>
<div class="slider_item"><img src="images/dest/3.jpg" alt=""></div>
<div class="slider_item"><img src="images/dest/4.jpg" alt=""></div>
<div class="slider_item"><img src="images/dest/5.jpg" alt=""></div>
</div> */}