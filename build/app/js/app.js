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
			topBorder = offset - scrollTop - windowMargin - 300,
			bottomEdge = block.outerHeight(true) + offset,
			bottomBorder = scrollTop + windowMargin - bottomEdge - 100;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvd2pzLmpzIiwiYXBwLmpzIiwidGltZXIuanMiLCJudW1iZXIuanMiLCJuYXZNZW51LmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQkdC40LHQu9C40L7RgtC10LrQsCB3b3cuanMg0LTQu9GPINCw0L3QuNC80LDRhtC40LhcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0bmV3IFdPVygpLmluaXQoKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2coJ2Nsb3duIHNpdGUnKTtcclxufSkoKTsiLCIvLyDQodC60YDQuNC/0YIg0LTQu9GPINGC0LDQudC80LXRgNCwINCyINCx0LvQvtC60LUgaGVhZGVyXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGxpc3QgPSAkKCcudGltZXJfX2xpc3QnKSxcclxuXHRcdGl0ZW1zID0gbGlzdC5maW5kKCcudGltZXJfX2Jsb2NrJyksXHJcblx0XHRhY3RpdmUgPSAndGltZXJfX2Jsb2NrLS1hY3RpdmUnO1xyXG5cdFx0ZHVyYXRpb24gPSAxMDAwMDtcclxuXHJcblx0XHRjb25zdCBuZXh0QmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuJyArIGFjdGl2ZSksXHJcblx0XHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRcdGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG5cdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdHJlcUl0ZW0uYWRkQ2xhc3MoYWN0aXZlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5leHQgPSBzZXRJbnRlcnZhbChuZXh0QmxvY2ssIGR1cmF0aW9uKTtcclxuXHJcblx0XHRpdGVtcy5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpO1xyXG5cclxuXHRcdFx0Y291bnRlcisrO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghKCQodGhpcykuaGFzQ2xhc3MoYWN0aXZlKSkpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKG5leHQpO1xyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKTtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZSk7XHJcblx0XHRcdFx0bmV4dCA9IHNldEludGVydmFsKG5leHRCbG9jaywgZHVyYXRpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcbn0pKCk7IiwiLy8g0KHQutGA0LjQv9GCINC00LvRjyDRh9C40YHQtdC7INCyINCx0LvQvtC60LUgbnVtYmVyXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGJsb2NrID0gJCgnLm51bWJlcicpO1xyXG5cdGxldCBudW1iZXIgPSAkKCcubnVtYmVyX19jb3VudGVyJyksXHJcblx0XHRkZXNjciA9ICQoJy5udW1iZXJfX2Rlc2NyJyk7XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChjaGVja0Rpc3RhbmNlKHNjcm9sbFRvcCkpIHtcclxuXHRcdFx0Zm9yKGk9MDtpPCBudW1iZXIubGVuZ3RoO2krKykge1xyXG5cdFx0XHRcdGxldCBkYXRhID0gbnVtYmVyLmVxKGkpLmF0dHIoJ2RhdGEtY291bnRlcicpO1xyXG5cclxuXHRcdFx0XHRpZihkYXRhID4gOTk5KSB7XHJcblx0XHRcdFx0XHRkYXRhID0gOTk5O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bnVtYmVyLmVxKGkpLmFuaW1hdGUoe251bTogZGF0YSAtIDN9LCB7XHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uIChudW0pIHtcclxuXHRcdFx0XHRcdFx0aWYoZGF0YSA9PSA5OTkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IChudW0gKyAzKS50b0ZpeGVkKDApICsgJysnO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKG51bSArIDMpLnRvRml4ZWQoMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHR2YXIgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKHNjcm9sbFRvcCkge1xyXG5cdFx0dmFyIG9mZnNldCA9IGJsb2NrLm9mZnNldCgpLnRvcCxcclxuXHRcdFx0d2luZG93TWFyZ2luID0gTWF0aC5jZWlsKCQod2luZG93KS5oZWlnaHQoKSAvIDMpLFxyXG5cdFx0XHR0b3BCb3JkZXIgPSBvZmZzZXQgLSBzY3JvbGxUb3AgLSB3aW5kb3dNYXJnaW4gLSAzMDAsXHJcblx0XHRcdGJvdHRvbUVkZ2UgPSBibG9jay5vdXRlckhlaWdodCh0cnVlKSArIG9mZnNldCxcclxuXHRcdFx0Ym90dG9tQm9yZGVyID0gc2Nyb2xsVG9wICsgd2luZG93TWFyZ2luIC0gYm90dG9tRWRnZSAtIDEwMDtcclxuXHJcblx0XHRyZXR1cm4gdG9wQm9yZGVyIDw9IDAgJiYgYm90dG9tQm9yZGVyIDw9IDBcclxuXHR9XHJcblxyXG59KSgpOyIsIi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDQvNC10L3RjlxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0bGV0IGxpbmsgPSAkKCcubWVudV9fbGluaycpLFxyXG5cdFx0aXRlbSA9ICQoJ3NlY3Rpb24nKTtcclxuXHJcblx0bGluay5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c2hvd0FydGljbGUoJCh0aGlzKS5hdHRyKCdocmVmJyksIHRydWUpO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzaG93QXJ0aWNsZShhcnRpY2xlLCBpc0FuaW1hdGUpIHtcclxuXHRcdHZhciBkaXJlY3Rpb24gPSBhcnRpY2xlLnJlcGxhY2UoLyMvLCAnJyksXHJcblx0XHRcdHJlcUFydGljbGUgPSBpdGVtLmZpbHRlcignW2RhdGEtYXJ0aWNsZT1cIicgKyBkaXJlY3Rpb24gKyAnXCJdJyksXHJcblx0XHRcdHJlcUFydGljbGVQb3MgPSByZXFBcnRpY2xlLm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRpZiAoaXNBbmltYXRlKSB7XHJcblx0XHRcdCQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHJlcUFydGljbGVQb3N9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59KSgpOyIsIi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgdC70LDQudC00LXRgNCwINCyIGNvbW1lbnRcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGxldCBpdGVtID0gJCgnLmRpc3BsYXlfX2l0ZW0nKSxcclxuXHRcdHByZXYgPSAkKCcuc2xpZGVyX19wcmV2JyksXHJcblx0XHRuZXh0ID0gJCgnLnNsaWRlcl9fbmV4dCcpLFxyXG5cdFx0YWN0aXZlID0gJ2Rpc3BsYXlfX2l0ZW0tLWFjdGl2ZScsXHJcblx0XHR1c2VycyA9ICQoJy51c2Vyc19faXRlbScpLFxyXG5cdFx0YWN0aXZlVXNlcnMgPSAndXNlcnNfX2l0ZW0tLWFjdGl2ZSc7XHJcblxyXG5cdHByZXYuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHJcblx0bmV4dC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGxldCBhY3RpdmVJdGVtID0gaXRlbS5maWx0ZXIoJy4nICsgYWN0aXZlKSxcclxuXHRcdFx0YWN0aXZlVXNlciA9IHVzZXJzLmZpbHRlcignLicgKyBhY3RpdmVVc2VycyksXHJcblx0XHRcdGNvdW50ZXIgPSBhY3RpdmVJdGVtLmluZGV4KCk7XHJcblxyXG5cdFx0Y291bnRlcisrO1xyXG5cclxuXHRcdGlmIChjb3VudGVyICE9IDApIHtcclxuXHRcdFx0cHJldi5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKGNvdW50ZXIgPj0gaXRlbS5sZW5ndGggLSAxKSB7XHJcblx0XHRcdG5leHQuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVxSXRlbSA9IGl0ZW0uZXEoY291bnRlciksXHJcblx0XHRcdHJlcVVzZXIgPSB1c2Vycy5lcShjb3VudGVyKTtcclxuXHJcblx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJy0xMDAlJyk7XHJcblx0XHRhY3RpdmVVc2VyLnJlbW92ZUNsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHRcdHJlcUl0ZW0uYWRkQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMCcpO1xyXG5cdFx0cmVxVXNlci5hZGRDbGFzcyhhY3RpdmVVc2Vycyk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRwcmV2LmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRhY3RpdmVVc2VyID0gdXNlcnMuZmlsdGVyKCcuJyArIGFjdGl2ZVVzZXJzKSxcclxuXHRcdFx0Y291bnRlciA9IGFjdGl2ZUl0ZW0uaW5kZXgoKTtcclxuXHJcblx0XHRjb3VudGVyLS07XHJcblxyXG5cdFx0aWYoY291bnRlciA8PSAwKSB7XHJcblx0XHRcdHByZXYuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5leHQuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVxSXRlbSA9IGl0ZW0uZXEoY291bnRlciksXHJcblx0XHRcdHJlcVVzZXIgPSB1c2Vycy5lcShjb3VudGVyKTtcclxuXHJcblx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzEwMCUnKTtcclxuXHRcdGFjdGl2ZVVzZXIucmVtb3ZlQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cdFx0cmVxSXRlbS5hZGRDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICcwJyk7XHJcblx0XHRyZXFVc2VyLmFkZENsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHR9KTtcclxuXHJcblx0dXNlcnMuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgYWN0aXZlVXNlciA9IHVzZXJzLmZpbHRlcignLicgKyBhY3RpdmVVc2VycyksXHJcblx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtLmZpbHRlcignLicgKyBhY3RpdmUpLFxyXG5cdFx0XHRjb3VudGVyID0gYWN0aXZlSXRlbS5pbmRleCgpLFxyXG5cdFx0XHRyZXFJdGVtID0gaXRlbS5lcShjb3VudGVyKSxcclxuXHRcdFx0cmVxVXNlciA9IHVzZXJzLmVxKGNvdW50ZXIpLFxyXG5cdFx0XHRpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuXHJcblx0XHRhY3RpdmVVc2VyLnJlbW92ZUNsYXNzKGFjdGl2ZVVzZXJzKTtcclxuXHRcdHJlcVVzZXIuYWRkQ2xhc3MoYWN0aXZlVXNlcnMpO1xyXG5cdFx0XHJcblx0XHRpZihpbmRleCA+IGNvdW50ZXIpIHtcclxuXHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhhY3RpdmUpLmNzcygnbGVmdCcsICctMTAwJScpO1xyXG5cdFx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzAnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoYWN0aXZlKS5jc3MoJ2xlZnQnLCAnMTAwJScpO1xyXG5cdFx0XHRyZXFJdGVtLmFkZENsYXNzKGFjdGl2ZSkuY3NzKCdsZWZ0JywgJzAnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG59KSgpOyJdfQ==
