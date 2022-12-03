var gulp            = require('gulp');
var ejs             = require("gulp-ejs");
var util            = require('gulp-util');
var notify          = require("gulp-notify");


function buildTemplates(project, browserSync){
	var splitInfo = project.split('_');
    const len = splitInfo.length
    var name = splitInfo[0];
    var type = splitInfo[1];
    var size = splitInfo[2];
    
    

    
    


    var wh = size.split("x");
    var width = wh[0];
    var height = wh[1];
    var obj = {name: name, width:width, height:height, size:size, type:type};

    return gulp.src("./dev/"+project+"/index.ejs")

        .pipe(ejs(obj).on('error', util.log))        
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(gulp.dest(function(file){
            return file.base;
        }))
        .pipe(browserSync.stream());
}


module.exports = buildTemplates;