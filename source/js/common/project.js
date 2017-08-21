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