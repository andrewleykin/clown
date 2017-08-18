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