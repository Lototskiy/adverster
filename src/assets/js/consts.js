window.SCROLL_EL = 'html';
window.LARGE_TABLET = '1024';

window.its_desktop = true;
if (document.querySelector('body').clientWidth < window.LARGE_TABLET) {
	window.its_desktop = false;
}

