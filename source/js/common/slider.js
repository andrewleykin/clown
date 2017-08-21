// Функция для слайдера в comment

(function () {

	let item = $('.display__item'),
		prev = $('.slider__prev'),
		next = $('.slider__next'),
		active = 'display__item--active',
		users = $('.users__item'),
		activeUsers = 'users__item--active',
		disabled = 'slider__controls--disabled';

	prev.addClass(disabled);

	next.click(function() {

		if(next.hasClass(disabled)) {
			return false;
		}
		let activeItem = item.filter('.' + active),
			activeUser = users.filter('.' + activeUsers),
			counter = activeItem.index();

		counter++;

		if (counter != 0) {
			prev.removeClass(disabled);
		}

		if(counter >= item.length - 1) {
			next.addClass(disabled)
		}

		let reqItem = item.eq(counter),
			reqUser = users.eq(counter);

		activeItem.removeClass(active).css('left', '-100%');
		activeUser.removeClass(activeUsers);
		reqItem.addClass(active).css('left', '0');
		reqUser.addClass(activeUsers);

	});

	prev.click(function() {

		if (prev.hasClass(disabled)) {
			return false;
		}
		let activeItem = item.filter('.' + active),
			activeUser = users.filter('.' + activeUsers),
			counter = activeItem.index();

		counter--;

		if(counter <= 0) {
			prev.addClass(disabled);
		} else {
			next.removeClass(disabled);
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
			notActive = $('.display__item').not('.' + active);
			counter = activeItem.index(),
			index = $(this).index(),
			reqItem = item.eq(index),
			reqUser = users.eq(index);


		activeUser.removeClass(activeUsers);
		reqUser.addClass(activeUsers);

		if (index > counter) {
			for(counter; counter <= index; counter++){
				let nextItem = item.eq(counter);
				activeItem = item.filter('.' + active);

				activeItem.removeClass(active).css('left', '-100%');
				nextItem.addClass(active).css('left', '0%');
			}
		} else {
			for(counter; counter >= index; counter--){
				let nextItem = item.eq(counter);
				activeItem = item.filter('.' + active);

				activeItem.removeClass(active).css('left', '100%');
				nextItem.addClass(active).css('left', '0%');
			}
		}

		checkCounter(counter)

	});


	var checkCounter = function(c) {
		if(c < 0) {
			prev.addClass(disabled);
		} else {
			prev.removeClass(disabled);
		}

		if (c >= item.length) {
			next.addClass(disabled)
		} else {
			next.removeClass(disabled);
		}
	}


})();