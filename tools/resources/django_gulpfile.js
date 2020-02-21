/* Package depedencies only */

// Gulp objects
const { watch, series, src, dest } = require('gulp');

// Sync broeser when file changes and to make live server 
const browserSync = require('browser-sync').create();

// Compile sass to css 
const sass = require('gulp-sass');

// Take all files data and paste data in single file
let concat = require('gulp-concat');

// Helps to locate main source file , helps while debugging
const sourcemaps = require('gulp-sourcemaps');

// Minifies css file
let cleanCSS = require('gulp-clean-css');

// Minifies js file
const terser = require('gulp-terser');


/* Package file source */

// Bootstrap js location
var bootstrapDistJs = './node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// Jquery js location
var jqueryDistJs = './node_modules/jquery/dist/jquery.slim.js';

// Custom css module location
var cssCustomModuleDistJs = './module/css/style.css';


/* Custom file source */

// Your all css file location (you can customize and add items to list using comma)
let cssSrc = ['./main/static/main/css/new/style.css', cssCustomModuleDistJs];

// Your all sass file location (you can customize and add items to list using comma)
let sassSrc = ['./main/static/main/scss/style.scss'];

// Your all js file location (you can customize and add items to list using comma)
let jsSrc = [ bootstrapDistJs, jqueryDistJs, './main/static/main/js/*.js'];


/* production ready source config */

// Storing production ready in static directory
var jsRelease = ['./main/static/main/dist/js/'];
var cssRelease = ['./main/static/main/dist/css/'];


/* custom variables to config  */

// Setting files to wathch (location) (you can customize and add items to list using comma)

let watchMeHtml = ['./tag/templates/tag/*.html','./author/templates/author/*.html',];


/* Functions  */

// compiling sass to css development
function cssPre(){
    return src(sassSrc) 
        .pipe(sass()) 
        .pipe(concat('style.css'))
        .pipe(dest(cssRelease)) 
        .pipe(browserSync.stream());

}

// Create js development
function jsPre(){
    return src(jsSrc) 
        .pipe(concat('all.js')) 
        .pipe(dest(jsRelease)) 
        .pipe(browserSync.stream()); 

}

// Creates css minified production 
function css(){
    return src(sassSrc) //locating sass
        .pipe(sass()) // compiling to css
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(concat('style.min.css')) // putting  all css into one file
        .pipe(cleanCSS({compatibility: 'ie8'})) // minify css
        .pipe(sourcemaps.write('../maps'))
        .pipe(dest(cssRelease)) //saving to destination
        .pipe(browserSync.stream()); // informing browser

}

// Create js minified production 
function js(){
    return src(jsSrc) 
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.init({largeFile: true})) 
        .pipe(terser())
        .pipe(sourcemaps.write('../maps'))
        .pipe(dest(jsRelease)) 
        .pipe(browserSync.stream()); 

}


// create watch function

function live(){

    // Refresh browser using proxy,
    // when there is change in files, browser sync refresh browser , calling django server
    browserSync.init({
        proxy: "http://0.0.0.0:8000"
    });

    // when file is changed, second arg is called as function

    //main app
    watch('./main/static/main/scss/*.scss', css); 

    //main app
    watch('./main/static/main/js/*.js', js);

    // reload browser when file changes
    watch(watchMeHtml).on('change', browserSync.reload);

}


/* Exporting  */

// can be called individually
exports.cssPre = cssPre;
exports.jsPre = jsPre;
exports.css = css;
exports.js = js;
exports.live = live;

// setting default
exports.default = series(css,js, jsScroll,live);

exports.prod = series(css,js);
exports.dev = series(cssPre, jsPre);
exports.all = series(cssPre, jsPre, css, js);