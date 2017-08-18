// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();
(function() {
  console.log('clown site');
})();
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

		let next = setInterval(nextBlock, duration);

		items.click(function() {
			let activeItem = items.filter('.' + active),
				counter = activeItem.index();

			counter++;

			if (counter >= items.length) {
				counter = 0;
			}

			if (!($(this).hasClass(active))) {
				clearInterval(next);
				activeItem.removeClass(active);
				$(this).addClass(active);
				next = setInterval(nextBlock, duration);
			}
		});

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvd2pzLmpzIiwiYXBwLmpzIiwidGltZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCR0LjQsdC70LjQvtGC0LXQutCwIHdvdy5qcyDQtNC70Y8g0LDQvdC40LzQsNGG0LjQuFxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnY2xvd24gc2l0ZScpO1xyXG59KSgpOyIsIi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgtCw0LnQvNC10YDQsCDQsiDQsdC70L7QutC1IGhlYWRlclxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBsaXN0ID0gJCgnLnRpbWVyX19saXN0JyksXHJcblx0XHRpdGVtcyA9IGxpc3QuZmluZCgnLnRpbWVyX19ibG9jaycpLFxyXG5cdFx0YWN0aXZlID0gJ3RpbWVyX19ibG9jay0tYWN0aXZlJztcclxuXHRcdGR1cmF0aW9uID0gMTAwMDA7XHJcblxyXG5cdFx0Y29uc3QgbmV4dEJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCk7XHJcblxyXG5cdFx0XHRjb3VudGVyKys7XHJcblxyXG5cdFx0XHRpZiAoY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb3VudGVyID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVxSXRlbSA9IGl0ZW1zLmVxKGNvdW50ZXIpO1xyXG5cclxuXHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xyXG5cdFx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBuZXh0ID0gc2V0SW50ZXJ2YWwobmV4dEJsb2NrLCBkdXJhdGlvbik7XHJcblxyXG5cdFx0aXRlbXMuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuJyArIGFjdGl2ZSksXHJcblx0XHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRcdGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoISgkKHRoaXMpLmhhc0NsYXNzKGFjdGl2ZSkpKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChuZXh0KTtcclxuXHRcdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhhY3RpdmUpO1xyXG5cdFx0XHRcdG5leHQgPSBzZXRJbnRlcnZhbChuZXh0QmxvY2ssIGR1cmF0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG59KSgpOyJdfQ==
