// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();
(function() {
  console.log('clown site');
})();
// Скрипт для таймера в блоке header

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
// Скрипт для чисел в блоке number

(function () {
	const block = $('.number');
	let number = $('.number__counter'),
		descr = $('.number__descr');

	$(window).scroll(function() {
		
		var scrollTop = $(this).scrollTop();

		if ( scrollTop > block.offset().top - ($(window).height() - 100)) {
			for(i=0;i< number.length;i++) {
				let data = number.eq(i).attr('data-counter');

				if(data > 999) {
					data = 999;
				}

				number.eq(i).animate({num: data - 3}, {
					duration: 2000,
					step: function (num) {
						if(data == 999) {
							this.innerHTML = (num + 3).toFixed(0) + '+';
						} else {
							this.innerHTML = (num + 3).toFixed(0);
						}
					}
				});
			}
		}
	});



})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvd2pzLmpzIiwiYXBwLmpzIiwidGltZXIuanMiLCJudW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQkdC40LHQu9C40L7RgtC10LrQsCB3b3cuanMg0LTQu9GPINCw0L3QuNC80LDRhtC40LhcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0bmV3IFdPVygpLmluaXQoKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coJ2Nsb3duIHNpdGUnKTtcclxufSkoKTsiLCIvLyDQodC60YDQuNC/0YIg0LTQu9GPINGC0LDQudC80LXRgNCwINCyINCx0LvQvtC60LUgaGVhZGVyXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGxpc3QgPSAkKCcudGltZXJfX2xpc3QnKSxcclxuXHRcdGl0ZW1zID0gbGlzdC5maW5kKCcudGltZXJfX2Jsb2NrJyksXHJcblx0XHRhY3RpdmUgPSAndGltZXJfX2Jsb2NrLS1hY3RpdmUnO1xyXG5cdFx0ZHVyYXRpb24gPSAxMDAwMDtcclxuXHJcblx0XHRjb25zdCBuZXh0QmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuJyArIGFjdGl2ZSksXHJcblx0XHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRcdGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG5cdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdHJlcUl0ZW0uYWRkQ2xhc3MoYWN0aXZlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5leHQgPSBzZXRJbnRlcnZhbChuZXh0QmxvY2ssIGR1cmF0aW9uKTtcclxuXHJcblx0XHRpdGVtcy5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpO1xyXG5cclxuXHRcdFx0Y291bnRlcisrO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghKCQodGhpcykuaGFzQ2xhc3MoYWN0aXZlKSkpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKG5leHQpO1xyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdFx0bmV4dCA9IHNldEludGVydmFsKG5leHRCbG9jaywgZHVyYXRpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcbn0pKCk7IiwiLy8g0KHQutGA0LjQv9GCINC00LvRjyDRh9C40YHQtdC7INCyINCx0LvQvtC60LUgbnVtYmVyXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGJsb2NrID0gJCgnLm51bWJlcicpO1xyXG5cdGxldCBudW1iZXIgPSAkKCcubnVtYmVyX19jb3VudGVyJyksXHJcblx0XHRkZXNjciA9ICQoJy5udW1iZXJfX2Rlc2NyJyk7XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmICggc2Nyb2xsVG9wID4gYmxvY2sub2Zmc2V0KCkudG9wIC0gKCQod2luZG93KS5oZWlnaHQoKSAtIDEwMCkpIHtcclxuXHRcdFx0Zm9yKGk9MDtpPCBudW1iZXIubGVuZ3RoO2krKykge1xyXG5cdFx0XHRcdGxldCBkYXRhID0gbnVtYmVyLmVxKGkpLmF0dHIoJ2RhdGEtY291bnRlcicpO1xyXG5cclxuXHRcdFx0XHRpZihkYXRhID4gOTk5KSB7XHJcblx0XHRcdFx0XHRkYXRhID0gOTk5O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bnVtYmVyLmVxKGkpLmFuaW1hdGUoe251bTogZGF0YSAtIDN9LCB7XHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uIChudW0pIHtcclxuXHRcdFx0XHRcdFx0aWYoZGF0YSA9PSA5OTkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IChudW0gKyAzKS50b0ZpeGVkKDApICsgJysnO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKG51bSArIDMpLnRvRml4ZWQoMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG59KSgpOyJdfQ==
