if (document.querySelector('.partner__slider')) {
	let swiperPartner = new Swiper('.partner__slider .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},

		autoHeight: true,
		grabCursor: true,
		loop: true,
		loopedSlides: 2,
		navigation: {
			nextEl: '.partner__slider .swiper-button-next',
			prevEl: '.partner__slider .swiper-button-prev',
		},
		on: {
			init: function () {
				setTimeout(function () {
					this.update();
				}.bind(this), 500);
			},
		}
	});
	let nextButton = document.querySelector('.partner__slider .partner__slider-btn .btn');

	nextButton.addEventListener('click', function () {
		swiperPartner.slideNext();
	});
}