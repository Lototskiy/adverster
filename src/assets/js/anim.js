if (window.its_desktop) {
	if (document.querySelector('.simple-title')) {
		const headings = document.querySelectorAll('.simple-title');
		headings.forEach((heading, index) => {
			gsap.from(heading, { duration: 1, opacity: 0, y: -50, delay: 0.5 });
		});
	}
	if (document.querySelector('.text-anim')) {
		const btns = document.querySelectorAll('.text-anim');
		btns.forEach((btn, index) => {
			gsap.from(btn, { duration: 1, opacity: 0, y: -50, delay: 0.8 });
		});
	}
	if (document.querySelector('.left')) {
		const left = document.querySelectorAll('.left');
		left.forEach((item, index) => {
			gsap.from(item, { duration: 1, opacity: 0, x: -50, delay: 0.7 });
		});
	}

	if (document.querySelector('.right')) {
		const right = document.querySelectorAll('.right');
		right.forEach((item, index) => {
			gsap.from(item, { duration: 1, opacity: 0, x: 50, delay: 0.7 });
		});
	}

	if (document.querySelector('.scale')) {
		const left = document.querySelectorAll('.scale');
		left.forEach((item, index) => {
			gsap.from(item, { duration: 1, opacity: 0, scale: 0.8, delay: 0.7 });
		});
	}
}