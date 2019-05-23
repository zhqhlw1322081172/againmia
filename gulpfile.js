let gulp = require("gulp")

gulp.task("all",async()=>{
	gulp.src(["./**/*","!node_modules/**/*"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\mia"))
});

gulp.task("watchall",async()=>{
	gulp.watch("./**/*",gulp.series("all"));
})

