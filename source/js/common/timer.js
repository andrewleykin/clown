// Функция для таймера в блоке header

(function () {
	const list = $('.timer__list'),
		items = list.find('.timer__block'),
		active = 'timer__block--active';
		duration = 10000;

		const nextBlock = function () {
			let activeItem = items.filter('.' + active),
				counter = activeItem.index();

			counter++;

			if (counter >= items.length) {
				counter = 0;
			}

			reqItem = items.eq(counter);

			activeItem.removeClass(active);
			reqItem.addClass(active);

		}

		setInterval(nextBlock, duration);

})();