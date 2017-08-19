// Функция для слайдера в comment

(function () {

	let item = $('.display__item'),
		prev = $('.slider__prev'),
		next = $('.slider__next'),
		active = 'display__item--active',
		users = $('.users__item'),
		activeUsers = 'users__item--active';

	prev.css('opacity', '0');

	next.click(function() {
		let activeItem = item.filter('.' + active),
			activeUser = users.filter('.' + activeUsers),
			counter = activeItem.index();

		counter++;

		if (counter != 0) {
			prev.css('opacity', '1');
		}

		if(counter >= item.length - 1) {
			next.css('opacity', '0');
		}

		let reqItem = item.eq(counter),
			reqUser = users.eq(counter);

		activeItem.removeClass(active).css('left', '-100%');
		activeUser.removeClass(activeUsers);
		reqItem.addClass(active).css('left', '0');
		reqUser.addClass(activeUsers);

	});

	prev.click(function() {
		let activeItem = item.filter('.' + active),
			activeUser = users.filter('.' + activeUsers),
			counter = activeItem.index();

		counter--;

		if(counter <= 0) {
			prev.css('opacity', '0');
		} else {
			next.css('opacity', '1');
		}

		let reqItem = item.eq(counter),
			reqUser = users.eq(counter);

		activeItem.removeClass(active).css('left', '100%');
		activeUser.removeClass(activeUsers);
		reqItem.addClass(active).css('left', '0');
		reqUser.addClass(activeUsers);
	});

	users.click(function() {
		let activeUser = users.filter('.' + activeUsers),
			activeItem = item.filter('.' + active),
			counter = activeItem.index(),
			reqItem = item.eq(counter),
			reqUser = users.eq(counter),
			index = $(this).index();

		activeUser.removeClass(activeUsers);
		reqUser.addClass(activeUsers);
		
		if(index > counter) {
			activeItem.removeClass(active).css('left', '-100%');
			reqItem.addClass(active).css('left', '0');
		} else {
			activeItem.removeClass(active).css('left', '100%');
			reqItem.addClass(active).css('left', '0');
		}
	});


})();