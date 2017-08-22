// Функция для кнопки О нас в секции header

(function(){
	let btn = $('.js-btn--about')
		scrollHeight = $('.about').offset().top;

	btn.click(function() {
		$('body, html').animate({scrollTop: scrollHeight}, 1000);
	});
})();