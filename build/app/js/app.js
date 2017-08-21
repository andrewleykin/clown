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
// Скрипт для чисел в блоке number

(function () {
	const block = $('.number');
	let number = $('.number__counter'),
		descr = $('.number__descr');

	$(window).scroll(function() {
		
		var scrollTop = $(this).scrollTop();

		if (checkDistance(scrollTop)) {
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

	var checkDistance = function(scrollTop) {
		var offset = block.offset().top,
			windowMargin = Math.ceil($(window).height() / 3),
			topBorder = offset - scrollTop - windowMargin - 400,
			bottomEdge = block.outerHeight(true) + offset + 150,
			bottomBorder = scrollTop + windowMargin - bottomEdge;

		return topBorder <= 0 && bottomBorder <= 0
	}

})();
// Функция для навигации по меню

(function () {

	let link = $('.menu__link'),
		item = $('section');

	link.click(function(e) {
		e.preventDefault();

		showArticle($(this).attr('href'), true);
	});

	function showArticle(article, isAnimate) {
		var direction = article.replace(/#/, ''),
			reqArticle = item.filter('[data-article="' + direction + '"]'),
			reqArticlePos = reqArticle.offset().top;

		if (isAnimate) {
			$('body, html').animate({scrollTop: reqArticlePos}, 1000);
		}
	}

})();
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
// Файл для Развертывания текста в секции project

(function(){
	let btn = $('.project__button'),
		btnActive = 'project__button--active',
		text = 'project__text--js',
		wrap = $('.project__descr'),
		duration = 200,
		flag = true;


		btn.click(function() {
			let item = $(this).siblings('.' + text);


			item.slideToggle(duration);
			$(this).toggleClass(btnActive);
			flag = false;

			setTimeout(function(){
				flag = true;
				console.log(flag);
			},100);

		}); // --> btn.click end

		wrap.click(function() {
			if(flag == false) {
				return false;
			}
			let textItem = wrap.find('.' + text),
				btnItem = textItem.siblings('.project__button');

			if(btnItem.hasClass(btnActive)) {
				textItem.slideUp(duration);
				btnItem.removeClass(btnActive);
			}

		}); // --> wrap.click end

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvd2pzLmpzIiwiYXBwLmpzIiwidGltZXIuanMiLCJudW1iZXIuanMiLCJuYXZNZW51LmpzIiwic2xpZGVyLmpzIiwicHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCR0LjQsdC70LjQvtGC0LXQutCwIHdvdy5qcyDQtNC70Y8g0LDQvdC40LzQsNGG0LjQuFxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnY2xvd24gc2l0ZScpO1xyXG59KSgpOyIsIi8vINCh0LrRgNC40L/RgiDQtNC70Y8g0YLQsNC50LzQtdGA0LAg0LIg0LHQu9C+0LrQtSBoZWFkZXJcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbGlzdCA9ICQoJy50aW1lcl9fbGlzdCcpLFxyXG5cdFx0aXRlbXMgPSBsaXN0LmZpbmQoJy50aW1lcl9fYmxvY2snKSxcclxuXHRcdGFjdGl2ZSA9ICd0aW1lcl9fYmxvY2stLWFjdGl2ZScsXHJcblx0XHRoZWFkZXIgPSAkKCcuaGVhZGVyJyksXHJcblx0XHRkdXJhdGlvbiA9IDEwMDAwO1xyXG5cclxuXHRcdGNvbnN0IG5leHRCbG9jayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpO1xyXG5cclxuXHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRcdGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBzdHIgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKGFwcC9pbWcvaGVhZGVyL2hlYWRlcl9fJyArIChjb3VudGVyKzEpICsgJy5qcGcpJztcclxuXHRcdFx0aGVhZGVyLmF0dHIoJ3N0eWxlJywgc3RyKTtcclxuXHJcblx0XHRcdHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTtcclxuXHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcclxuXHRcdFx0cmVxSXRlbS5hZGRDbGFzcyhhY3RpdmUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbmV4dCA9IHNldEludGVydmFsKG5leHRCbG9jaywgZHVyYXRpb24pO1xyXG5cclxuXHRcdGl0ZW1zLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRcdGNvdW50ZXIgPSAkKHRoaXMpLmluZGV4KCk7XHJcblxyXG5cdFx0XHRsZXQgc3RyID0gJ2JhY2tncm91bmQtaW1hZ2U6IHVybChhcHAvaW1nL2hlYWRlci9oZWFkZXJfXycgKyAoY291bnRlcisxKSArICcuanBnKSc7XHJcblx0XHRcdGhlYWRlci5hdHRyKCdzdHlsZScsIHN0cik7XHJcblxyXG5cdFx0XHRpZiAoISgkKHRoaXMpLmhhc0NsYXNzKGFjdGl2ZSkpKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChuZXh0KTtcclxuXHRcdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhhY3RpdmUpO1xyXG5cdFx0XHRcdG5leHQgPSBzZXRJbnRlcnZhbChuZXh0QmxvY2ssIGR1cmF0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG59KSgpOyIsIi8vINCh0LrRgNC40L/RgiDQtNC70Y8g0YfQuNGB0LXQuyDQsiDQsdC70L7QutC1IG51bWJlclxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBibG9jayA9ICQoJy5udW1iZXInKTtcclxuXHRsZXQgbnVtYmVyID0gJCgnLm51bWJlcl9fY291bnRlcicpLFxyXG5cdFx0ZGVzY3IgPSAkKCcubnVtYmVyX19kZXNjcicpO1xyXG5cclxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRpZiAoY2hlY2tEaXN0YW5jZShzY3JvbGxUb3ApKSB7XHJcblx0XHRcdGZvcihpPTA7aTwgbnVtYmVyLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IG51bWJlci5lcShpKS5hdHRyKCdkYXRhLWNvdW50ZXInKTtcclxuXHJcblx0XHRcdFx0aWYoZGF0YSA+IDk5OSkge1xyXG5cdFx0XHRcdFx0ZGF0YSA9IDk5OTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG51bWJlci5lcShpKS5hbmltYXRlKHtudW06IGRhdGEgLSAzfSwge1xyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRzdGVwOiBmdW5jdGlvbiAobnVtKSB7XHJcblx0XHRcdFx0XHRcdGlmKGRhdGEgPT0gOTk5KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSAobnVtICsgMykudG9GaXhlZCgwKSArICcrJztcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IChudW0gKyAzKS50b0ZpeGVkKDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dmFyIGNoZWNrRGlzdGFuY2UgPSBmdW5jdGlvbihzY3JvbGxUb3ApIHtcclxuXHRcdHZhciBvZmZzZXQgPSBibG9jay5vZmZzZXQoKS50b3AsXHJcblx0XHRcdHdpbmRvd01hcmdpbiA9IE1hdGguY2VpbCgkKHdpbmRvdykuaGVpZ2h0KCkgLyAzKSxcclxuXHRcdFx0dG9wQm9yZGVyID0gb2Zmc2V0IC0gc2Nyb2xsVG9wIC0gd2luZG93TWFyZ2luIC0gNDAwLFxyXG5cdFx0XHRib3R0b21FZGdlID0gYmxvY2sub3V0ZXJIZWlnaHQodHJ1ZSkgKyBvZmZzZXQgKyAxNTAsXHJcblx0XHRcdGJvdHRvbUJvcmRlciA9IHNjcm9sbFRvcCArIHdpbmRvd01hcmdpbiAtIGJvdHRvbUVkZ2U7XHJcblxyXG5cdFx0cmV0dXJuIHRvcEJvcmRlciA8PSAwICYmIGJvdHRvbUJvcmRlciA8PSAwXHJcblx0fVxyXG5cclxufSkoKTsiLCIvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0LzQtdC90Y5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGxldCBsaW5rID0gJCgnLm1lbnVfX2xpbmsnKSxcclxuXHRcdGl0ZW0gPSAkKCdzZWN0aW9uJyk7XHJcblxyXG5cdGxpbmsuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHNob3dBcnRpY2xlKCQodGhpcykuYXR0cignaHJlZicpLCB0cnVlKTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0FydGljbGUoYXJ0aWNsZSwgaXNBbmltYXRlKSB7XHJcblx0XHR2YXIgZGlyZWN0aW9uID0gYXJ0aWNsZS5yZXBsYWNlKC8jLywgJycpLFxyXG5cdFx0XHRyZXFBcnRpY2xlID0gaXRlbS5maWx0ZXIoJ1tkYXRhLWFydGljbGU9XCInICsgZGlyZWN0aW9uICsgJ1wiXScpLFxyXG5cdFx0XHRyZXFBcnRpY2xlUG9zID0gcmVxQXJ0aWNsZS5vZmZzZXQoKS50b3A7XHJcblxyXG5cdFx0aWYgKGlzQW5pbWF0ZSkge1xyXG5cdFx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiByZXFBcnRpY2xlUG9zfSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoKTsiLCIvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQu9Cw0LnQtNC10YDQsCDQsiBjb21tZW50XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuXHRsZXQgaXRlbSA9ICQoJy5kaXNwbGF5X19pdGVtJyksXHJcblx0XHRwcmV2ID0gJCgnLnNsaWRlcl9fcHJldicpLFxyXG5cdFx0bmV4dCA9ICQoJy5zbGlkZXJfX25leHQnKSxcclxuXHRcdGFjdGl2ZSA9ICdkaXNwbGF5X19pdGVtLS1hY3RpdmUnLFxyXG5cdFx0dXNlcnMgPSAkKCcudXNlcnNfX2l0ZW0nKSxcclxuXHRcdGFjdGl2ZVVzZXJzID0gJ3VzZXJzX19pdGVtLS1hY3RpdmUnLFxyXG5cdFx0ZGlzYWJsZWQgPSAnc2xpZGVyX19jb250cm9scy0tZGlzYWJsZWQnO1xyXG5cclxuXHRwcmV2LmFkZENsYXNzKGRpc2FibGVkKTtcclxuXHJcblx0bmV4dC5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcblx0XHRpZihuZXh0Lmhhc0NsYXNzKGRpc2FibGVkKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRsZXQgYWN0aXZlSXRlbSA9IGl0ZW0uZmlsdGVyKCcuJyArIGFjdGl2ZSksXHJcblx0XHRcdGFjdGl2ZVVzZXIgPSB1c2Vycy5maWx0ZXIoJy4nICsgYWN0aXZlVXNlcnMpLFxyXG5cdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpO1xyXG5cclxuXHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRpZiAoY291bnRlciAhPSAwKSB7XHJcblx0XHRcdHByZXYucmVtb3ZlQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGNvdW50ZXIgPj0gaXRlbS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdG5leHQuYWRkQ2xhc3MoZGlzYWJsZWQpXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlcUl0ZW0gPSBpdGVtLmVxKGNvdW50ZXIpLFxyXG5cdFx0XHRyZXFVc2VyID0gdXNlcnMuZXEoY291bnRlcik7XHJcblxyXG5cdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICctMTAwJScpO1xyXG5cdFx0YWN0aXZlVXNlci5yZW1vdmVDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzAnKTtcclxuXHRcdHJlcVVzZXIuYWRkQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0cHJldi5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcblx0XHRpZiAocHJldi5oYXNDbGFzcyhkaXNhYmxlZCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRhY3RpdmVVc2VyID0gdXNlcnMuZmlsdGVyKCcuJyArIGFjdGl2ZVVzZXJzKSxcclxuXHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRjb3VudGVyLS07XHJcblxyXG5cdFx0aWYoY291bnRlciA8PSAwKSB7XHJcblx0XHRcdHByZXYuYWRkQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV4dC5yZW1vdmVDbGFzcyhkaXNhYmxlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlcUl0ZW0gPSBpdGVtLmVxKGNvdW50ZXIpLFxyXG5cdFx0XHRyZXFVc2VyID0gdXNlcnMuZXEoY291bnRlcik7XHJcblxyXG5cdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcxMDAlJyk7XHJcblx0XHRhY3RpdmVVc2VyLnJlbW92ZUNsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHRcdHJlcUl0ZW0uYWRkQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMCcpO1xyXG5cdFx0cmVxVXNlci5hZGRDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblx0fSk7XHJcblxyXG5cdHVzZXJzLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFjdGl2ZVVzZXIgPSB1c2Vycy5maWx0ZXIoJy4nICsgYWN0aXZlVXNlcnMpLFxyXG5cdFx0XHRhY3RpdmVJdGVtID0gaXRlbS5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0bm90QWN0aXZlID0gJCgnLmRpc3BsYXlfX2l0ZW0nKS5ub3QoJy4nICsgYWN0aXZlKTtcclxuXHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKSxcclxuXHRcdFx0aW5kZXggPSAkKHRoaXMpLmluZGV4KCksXHJcblx0XHRcdHJlcUl0ZW0gPSBpdGVtLmVxKGluZGV4KSxcclxuXHRcdFx0cmVxVXNlciA9IHVzZXJzLmVxKGluZGV4KTtcclxuXHJcblxyXG5cdFx0YWN0aXZlVXNlci5yZW1vdmVDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblx0XHRyZXFVc2VyLmFkZENsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHJcblx0XHRpZiAoaW5kZXggPiBjb3VudGVyKSB7XHJcblx0XHRcdGZvcihjb3VudGVyOyBjb3VudGVyIDw9IGluZGV4OyBjb3VudGVyKyspe1xyXG5cdFx0XHRcdGxldCBuZXh0SXRlbSA9IGl0ZW0uZXEoY291bnRlcik7XHJcblx0XHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW0uZmlsdGVyKCcuJyArIGFjdGl2ZSk7XHJcblxyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnLTEwMCUnKTtcclxuXHRcdFx0XHRuZXh0SXRlbS5hZGRDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcwJScpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IoY291bnRlcjsgY291bnRlciA+PSBpbmRleDsgY291bnRlci0tKXtcclxuXHRcdFx0XHRsZXQgbmV4dEl0ZW0gPSBpdGVtLmVxKGNvdW50ZXIpO1xyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzEwMCUnKTtcclxuXHRcdFx0XHRuZXh0SXRlbS5hZGRDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcwJScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y2hlY2tDb3VudGVyKGNvdW50ZXIpXHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0dmFyIGNoZWNrQ291bnRlciA9IGZ1bmN0aW9uKGMpIHtcclxuXHRcdGlmKGMgPCAwKSB7XHJcblx0XHRcdHByZXYuYWRkQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJldi5yZW1vdmVDbGFzcyhkaXNhYmxlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGMgPj0gaXRlbS5sZW5ndGgpIHtcclxuXHRcdFx0bmV4dC5hZGRDbGFzcyhkaXNhYmxlZClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5leHQucmVtb3ZlQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG59KSgpOyIsIi8vINCk0LDQudC7INC00LvRjyDQoNCw0LfQstC10YDRgtGL0LLQsNC90LjRjyDRgtC10LrRgdGC0LAg0LIg0YHQtdC60YbQuNC4IHByb2plY3RcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cdGxldCBidG4gPSAkKCcucHJvamVjdF9fYnV0dG9uJyksXHJcblx0XHRidG5BY3RpdmUgPSAncHJvamVjdF9fYnV0dG9uLS1hY3RpdmUnLFxyXG5cdFx0dGV4dCA9ICdwcm9qZWN0X190ZXh0LS1qcycsXHJcblx0XHR3cmFwID0gJCgnLnByb2plY3RfX2Rlc2NyJyksXHJcblx0XHRkdXJhdGlvbiA9IDIwMCxcclxuXHRcdGZsYWcgPSB0cnVlO1xyXG5cclxuXHJcblx0XHRidG4uY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBpdGVtID0gJCh0aGlzKS5zaWJsaW5ncygnLicgKyB0ZXh0KTtcclxuXHJcblxyXG5cdFx0XHRpdGVtLnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhidG5BY3RpdmUpO1xyXG5cdFx0XHRmbGFnID0gZmFsc2U7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZmxhZyk7XHJcblx0XHRcdH0sMTAwKTtcclxuXHJcblx0XHR9KTsgLy8gLS0+IGJ0bi5jbGljayBlbmRcclxuXHJcblx0XHR3cmFwLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihmbGFnID09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB0ZXh0SXRlbSA9IHdyYXAuZmluZCgnLicgKyB0ZXh0KSxcclxuXHRcdFx0XHRidG5JdGVtID0gdGV4dEl0ZW0uc2libGluZ3MoJy5wcm9qZWN0X19idXR0b24nKTtcclxuXHJcblx0XHRcdGlmKGJ0bkl0ZW0uaGFzQ2xhc3MoYnRuQWN0aXZlKSkge1xyXG5cdFx0XHRcdHRleHRJdGVtLnNsaWRlVXAoZHVyYXRpb24pO1xyXG5cdFx0XHRcdGJ0bkl0ZW0ucmVtb3ZlQ2xhc3MoYnRuQWN0aXZlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pOyAvLyAtLT4gd3JhcC5jbGljayBlbmRcclxuXHJcbn0pKCk7Il19
