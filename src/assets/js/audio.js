if (document.querySelector('.music')) {
	var playButton = document.getElementById('playButton');
	var audioPlayer = document.getElementById('audioPlayer');

	playButton.addEventListener('click', function () {
		if (audioPlayer.paused) {
			audioPlayer.play();
			playButton.classList.remove('music--off')
		} else {
			audioPlayer.pause();
			playButton.classList.add('music--off')
		}
	});
}
