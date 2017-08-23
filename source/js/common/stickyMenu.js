// Функция для липкого меню в header

(function(){
	let sticky = $('.header__top--fixed'),
		height = $('.header__top').height() + 30,
		item = $('.js-menu'),
		link = sticky.find('.menu__link'),
		linkActive = 'menu__link--active';


	$(window).scroll(function() {
		if ($(this).scrollTop() > height){
			sticky.css('top', '0');
		}
		if ($(this).scrollTop() <= height) {
			sticky.css('top', '-50%');
		}
		checkArticle();
	});

	function checkArticle() {
		item.each(function() {
			var $this = $(this),
				topEdge = $this.offset().top - 150,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

			if (topEdge < wScroll && bottomEdge > wScroll) {
				var currentId = $this.data('article'),
					reqLink = link.filter('[href="#' + currentId + '"]');

					link.removeClass(linkActive);
					reqLink.addClass(linkActive);
			}
		});
	}
})();