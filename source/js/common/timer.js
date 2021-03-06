// Скрипт для таймера в блоке header

(function () {
	const list = $('.timer__list'),
		items = list.find('.timer__block'),
		active = 'timer__block--active',
		header = $('.header'),
		duration = 10000;

		const nextBlock = function () {
			let activeItem = items.filter('.' + active),
				counter = activeItem.index();


			counter++;

			if (counter >= items.length) {
				counter = 0;
			}
			let str = 'background-image: url(app/img/header/header__' + (counter+1) + '.jpg)';
			header.attr('style', str);

			reqItem = items.eq(counter);

			activeItem.removeClass(active);
			reqItem.addClass(active);

		}

		let next = setInterval(nextBlock, duration);

		items.click(function() {
			let activeItem = items.filter('.' + active),
				counter = $(this).index();

			let str = 'background-image: url(app/img/header/header__' + (counter+1) + '.jpg)';
			header.attr('style', str);

			if (!($(this).hasClass(active))) {
				clearInterval(next);
				activeItem.removeClass(active);
				$(this).addClass(active);
				next = setInterval(nextBlock, duration);
			}
		});

})();