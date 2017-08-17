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

		setInterval(nextBlock, duration);

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInRpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnY2xvd24gc2l0ZScpO1xyXG59KSgpOyIsIi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgtCw0LnQvNC10YDQsCDQsiDQsdC70L7QutC1IGhlYWRlclxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBsaXN0ID0gJCgnLnRpbWVyX19saXN0JyksXHJcblx0XHRpdGVtcyA9IGxpc3QuZmluZCgnLnRpbWVyX19ibG9jaycpLFxyXG5cdFx0YWN0aXZlID0gJ3RpbWVyX19ibG9jay0tYWN0aXZlJztcclxuXHRcdGR1cmF0aW9uID0gMTAwMDA7XHJcblxyXG5cdFx0Y29uc3QgbmV4dEJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCk7XHJcblxyXG5cdFx0XHRjb3VudGVyKys7XHJcblxyXG5cdFx0XHRpZiAoY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb3VudGVyID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVxSXRlbSA9IGl0ZW1zLmVxKGNvdW50ZXIpO1xyXG5cclxuXHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xyXG5cdFx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNldEludGVydmFsKG5leHRCbG9jaywgZHVyYXRpb24pO1xyXG5cclxufSkoKTsiXX0=
