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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvd2pzLmpzIiwiYXBwLmpzIiwidGltZXIuanMiLCJudW1iZXIuanMiLCJuYXZNZW51LmpzIiwic2xpZGVyLmpzIiwicHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCR0LjQsdC70LjQvtGC0LXQutCwIHdvdy5qcyDQtNC70Y8g0LDQvdC40LzQsNGG0LjQuFxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnY2xvd24gc2l0ZScpO1xyXG59KSgpOyIsIi8vINCh0LrRgNC40L/RgiDQtNC70Y8g0YLQsNC50LzQtdGA0LAg0LIg0LHQu9C+0LrQtSBoZWFkZXJcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbGlzdCA9ICQoJy50aW1lcl9fbGlzdCcpLFxyXG5cdFx0aXRlbXMgPSBsaXN0LmZpbmQoJy50aW1lcl9fYmxvY2snKSxcclxuXHRcdGFjdGl2ZSA9ICd0aW1lcl9fYmxvY2stLWFjdGl2ZScsXHJcblx0XHRoZWFkZXIgPSAkKCcuaGVhZGVyJyksXHJcblx0XHRkdXJhdGlvbiA9IDEwMDAwO1xyXG5cclxuXHRcdGNvbnN0IG5leHRCbG9jayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpO1xyXG5cclxuXHRcdFx0Y291bnRlcisrO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTtcclxuXHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcclxuXHRcdFx0cmVxSXRlbS5hZGRDbGFzcyhhY3RpdmUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbmV4dCA9IHNldEludGVydmFsKG5leHRCbG9jaywgZHVyYXRpb24pO1xyXG5cclxuXHRcdGl0ZW1zLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCk7XHJcblxyXG5cdFx0XHRjb3VudGVyKys7XHJcblxyXG5cdFx0XHRpZiAoY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb3VudGVyID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCEoJCh0aGlzKS5oYXNDbGFzcyhhY3RpdmUpKSkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwobmV4dCk7XHJcblx0XHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpO1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoYWN0aXZlKTtcclxuXHRcdFx0XHRuZXh0ID0gc2V0SW50ZXJ2YWwobmV4dEJsb2NrLCBkdXJhdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxufSkoKTsiLCIvLyDQodC60YDQuNC/0YIg0LTQu9GPINGH0LjRgdC10Lsg0LIg0LHQu9C+0LrQtSBudW1iZXJcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYmxvY2sgPSAkKCcubnVtYmVyJyk7XHJcblx0bGV0IG51bWJlciA9ICQoJy5udW1iZXJfX2NvdW50ZXInKSxcclxuXHRcdGRlc2NyID0gJCgnLm51bWJlcl9fZGVzY3InKTtcclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0aWYgKGNoZWNrRGlzdGFuY2Uoc2Nyb2xsVG9wKSkge1xyXG5cdFx0XHRmb3IoaT0wO2k8IG51bWJlci5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdFx0bGV0IGRhdGEgPSBudW1iZXIuZXEoaSkuYXR0cignZGF0YS1jb3VudGVyJyk7XHJcblxyXG5cdFx0XHRcdGlmKGRhdGEgPiA5OTkpIHtcclxuXHRcdFx0XHRcdGRhdGEgPSA5OTk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRudW1iZXIuZXEoaSkuYW5pbWF0ZSh7bnVtOiBkYXRhIC0gM30sIHtcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0c3RlcDogZnVuY3Rpb24gKG51bSkge1xyXG5cdFx0XHRcdFx0XHRpZihkYXRhID09IDk5OSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKG51bSArIDMpLnRvRml4ZWQoMCkgKyAnKyc7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSAobnVtICsgMykudG9GaXhlZCgwKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHZhciBjaGVja0Rpc3RhbmNlID0gZnVuY3Rpb24oc2Nyb2xsVG9wKSB7XHJcblx0XHR2YXIgb2Zmc2V0ID0gYmxvY2sub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHR3aW5kb3dNYXJnaW4gPSBNYXRoLmNlaWwoJCh3aW5kb3cpLmhlaWdodCgpIC8gMyksXHJcblx0XHRcdHRvcEJvcmRlciA9IG9mZnNldCAtIHNjcm9sbFRvcCAtIHdpbmRvd01hcmdpbiAtIDQwMCxcclxuXHRcdFx0Ym90dG9tRWRnZSA9IGJsb2NrLm91dGVySGVpZ2h0KHRydWUpICsgb2Zmc2V0ICsgMTUwLFxyXG5cdFx0XHRib3R0b21Cb3JkZXIgPSBzY3JvbGxUb3AgKyB3aW5kb3dNYXJnaW4gLSBib3R0b21FZGdlO1xyXG5cclxuXHRcdHJldHVybiB0b3BCb3JkZXIgPD0gMCAmJiBib3R0b21Cb3JkZXIgPD0gMFxyXG5cdH1cclxuXHJcbn0pKCk7IiwiLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC90LDQstC40LPQsNGG0LjQuCDQv9C+INC80LXQvdGOXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuXHRsZXQgbGluayA9ICQoJy5tZW51X19saW5rJyksXHJcblx0XHRpdGVtID0gJCgnc2VjdGlvbicpO1xyXG5cclxuXHRsaW5rLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzaG93QXJ0aWNsZSgkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgdHJ1ZSk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHNob3dBcnRpY2xlKGFydGljbGUsIGlzQW5pbWF0ZSkge1xyXG5cdFx0dmFyIGRpcmVjdGlvbiA9IGFydGljbGUucmVwbGFjZSgvIy8sICcnKSxcclxuXHRcdFx0cmVxQXJ0aWNsZSA9IGl0ZW0uZmlsdGVyKCdbZGF0YS1hcnRpY2xlPVwiJyArIGRpcmVjdGlvbiArICdcIl0nKSxcclxuXHRcdFx0cmVxQXJ0aWNsZVBvcyA9IHJlcUFydGljbGUub2Zmc2V0KCkudG9wO1xyXG5cclxuXHRcdGlmIChpc0FuaW1hdGUpIHtcclxuXHRcdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogcmVxQXJ0aWNsZVBvc30sIDEwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0pKCk7IiwiLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LvQsNC50LTQtdGA0LAg0LIgY29tbWVudFxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0bGV0IGl0ZW0gPSAkKCcuZGlzcGxheV9faXRlbScpLFxyXG5cdFx0cHJldiA9ICQoJy5zbGlkZXJfX3ByZXYnKSxcclxuXHRcdG5leHQgPSAkKCcuc2xpZGVyX19uZXh0JyksXHJcblx0XHRhY3RpdmUgPSAnZGlzcGxheV9faXRlbS0tYWN0aXZlJyxcclxuXHRcdHVzZXJzID0gJCgnLnVzZXJzX19pdGVtJyksXHJcblx0XHRhY3RpdmVVc2VycyA9ICd1c2Vyc19faXRlbS0tYWN0aXZlJyxcclxuXHRcdGRpc2FibGVkID0gJ3NsaWRlcl9fY29udHJvbHMtLWRpc2FibGVkJztcclxuXHJcblx0cHJldi5hZGRDbGFzcyhkaXNhYmxlZCk7XHJcblxyXG5cdG5leHQuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0aWYobmV4dC5oYXNDbGFzcyhkaXNhYmxlZCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRhY3RpdmVVc2VyID0gdXNlcnMuZmlsdGVyKCcuJyArIGFjdGl2ZVVzZXJzKSxcclxuXHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRjb3VudGVyKys7XHJcblxyXG5cdFx0aWYgKGNvdW50ZXIgIT0gMCkge1xyXG5cdFx0XHRwcmV2LnJlbW92ZUNsYXNzKGRpc2FibGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihjb3VudGVyID49IGl0ZW0ubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRuZXh0LmFkZENsYXNzKGRpc2FibGVkKVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXFJdGVtID0gaXRlbS5lcShjb3VudGVyKSxcclxuXHRcdFx0cmVxVXNlciA9IHVzZXJzLmVxKGNvdW50ZXIpO1xyXG5cclxuXHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnLTEwMCUnKTtcclxuXHRcdGFjdGl2ZVVzZXIucmVtb3ZlQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cdFx0cmVxSXRlbS5hZGRDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcwJyk7XHJcblx0XHRyZXFVc2VyLmFkZENsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHByZXYuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0aWYgKHByZXYuaGFzQ2xhc3MoZGlzYWJsZWQpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGxldCBhY3RpdmVJdGVtID0gaXRlbS5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0YWN0aXZlVXNlciA9IHVzZXJzLmZpbHRlcignLicgKyBhY3RpdmVVc2VycyksXHJcblx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCk7XHJcblxyXG5cdFx0Y291bnRlci0tO1xyXG5cclxuXHRcdGlmKGNvdW50ZXIgPD0gMCkge1xyXG5cdFx0XHRwcmV2LmFkZENsYXNzKGRpc2FibGVkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5leHQucmVtb3ZlQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXFJdGVtID0gaXRlbS5lcShjb3VudGVyKSxcclxuXHRcdFx0cmVxVXNlciA9IHVzZXJzLmVxKGNvdW50ZXIpO1xyXG5cclxuXHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMTAwJScpO1xyXG5cdFx0YWN0aXZlVXNlci5yZW1vdmVDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzAnKTtcclxuXHRcdHJlcVVzZXIuYWRkQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cdH0pO1xyXG5cclxuXHR1c2Vycy5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGxldCBhY3RpdmVVc2VyID0gdXNlcnMuZmlsdGVyKCcuJyArIGFjdGl2ZVVzZXJzKSxcclxuXHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW0uZmlsdGVyKCcuJyArIGFjdGl2ZSksXHJcblx0XHRcdG5vdEFjdGl2ZSA9ICQoJy5kaXNwbGF5X19pdGVtJykubm90KCcuJyArIGFjdGl2ZSk7XHJcblx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCksXHJcblx0XHRcdGluZGV4ID0gJCh0aGlzKS5pbmRleCgpLFxyXG5cdFx0XHRyZXFJdGVtID0gaXRlbS5lcShpbmRleCksXHJcblx0XHRcdHJlcVVzZXIgPSB1c2Vycy5lcShpbmRleCk7XHJcblxyXG5cclxuXHRcdGFjdGl2ZVVzZXIucmVtb3ZlQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cdFx0cmVxVXNlci5hZGRDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblxyXG5cdFx0aWYgKGluZGV4ID4gY291bnRlcikge1xyXG5cdFx0XHRmb3IoY291bnRlcjsgY291bnRlciA8PSBpbmRleDsgY291bnRlcisrKXtcclxuXHRcdFx0XHRsZXQgbmV4dEl0ZW0gPSBpdGVtLmVxKGNvdW50ZXIpO1xyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJy0xMDAlJyk7XHJcblx0XHRcdFx0bmV4dEl0ZW0uYWRkQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMCUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yKGNvdW50ZXI7IGNvdW50ZXIgPj0gaW5kZXg7IGNvdW50ZXItLSl7XHJcblx0XHRcdFx0bGV0IG5leHRJdGVtID0gaXRlbS5lcShjb3VudGVyKTtcclxuXHRcdFx0XHRhY3RpdmVJdGVtID0gaXRlbS5maWx0ZXIoJy4nICsgYWN0aXZlKTtcclxuXHJcblx0XHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcxMDAlJyk7XHJcblx0XHRcdFx0bmV4dEl0ZW0uYWRkQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMCUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNoZWNrQ291bnRlcihjb3VudGVyKVxyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdHZhciBjaGVja0NvdW50ZXIgPSBmdW5jdGlvbihjKSB7XHJcblx0XHRpZihjIDwgMCkge1xyXG5cdFx0XHRwcmV2LmFkZENsYXNzKGRpc2FibGVkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHByZXYucmVtb3ZlQ2xhc3MoZGlzYWJsZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjID49IGl0ZW0ubGVuZ3RoKSB7XHJcblx0XHRcdG5leHQuYWRkQ2xhc3MoZGlzYWJsZWQpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuZXh0LnJlbW92ZUNsYXNzKGRpc2FibGVkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufSkoKTsiLCIvLyDQpNCw0LnQuyDQtNC70Y8g0KDQsNC30LLQtdGA0YLRi9Cy0LDQvdC40Y8g0YLQtdC60YHRgtCwINCyINGB0LXQutGG0LjQuCBwcm9qZWN0XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHRsZXQgYnRuID0gJCgnLnByb2plY3RfX2J1dHRvbicpLFxyXG5cdFx0YnRuQWN0aXZlID0gJ3Byb2plY3RfX2J1dHRvbi0tYWN0aXZlJyxcclxuXHRcdHRleHQgPSAncHJvamVjdF9fdGV4dC0tanMnLFxyXG5cdFx0d3JhcCA9ICQoJy5wcm9qZWN0X19kZXNjcicpLFxyXG5cdFx0ZHVyYXRpb24gPSAyMDAsXHJcblx0XHRmbGFnID0gdHJ1ZTtcclxuXHJcblxyXG5cdFx0YnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgaXRlbSA9ICQodGhpcykuc2libGluZ3MoJy4nICsgdGV4dCk7XHJcblxyXG5cclxuXHRcdFx0aXRlbS5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoYnRuQWN0aXZlKTtcclxuXHRcdFx0ZmxhZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZsYWcpO1xyXG5cdFx0XHR9LDEwMCk7XHJcblxyXG5cdFx0fSk7IC8vIC0tPiBidG4uY2xpY2sgZW5kXHJcblxyXG5cdFx0d3JhcC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoZmxhZyA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdGV4dEl0ZW0gPSB3cmFwLmZpbmQoJy4nICsgdGV4dCksXHJcblx0XHRcdFx0YnRuSXRlbSA9IHRleHRJdGVtLnNpYmxpbmdzKCcucHJvamVjdF9fYnV0dG9uJyk7XHJcblxyXG5cdFx0XHRpZihidG5JdGVtLmhhc0NsYXNzKGJ0bkFjdGl2ZSkpIHtcclxuXHRcdFx0XHR0ZXh0SXRlbS5zbGlkZVVwKGR1cmF0aW9uKTtcclxuXHRcdFx0XHRidG5JdGVtLnJlbW92ZUNsYXNzKGJ0bkFjdGl2ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTsgLy8gLS0+IHdyYXAuY2xpY2sgZW5kXHJcblxyXG59KSgpOyJdfQ==
