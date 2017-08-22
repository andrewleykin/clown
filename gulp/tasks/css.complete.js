'use strict'

module.exports = function () {
	$.gulp.task('css:complete', function(){
		return $.gulp.src($.config.root + '/app/css/app.css')
		.pipe($.gp.pxtorem())
		.pipe($.gcmq())
		.pipe($.gulp.dest($.config.root + '/app/css'));
	});
};