let videoElement = document.querySelector("#video");

function audioFunction() {
	if (videoElement.muted == true) {
		videoElement.muted = false;
		audioBtn.src = 'assets/img/unmute.png';
	} else {
		videoElement.muted = true;
		audioBtn.src = 'assets/img/mute.png';
	}
}

function pauseFunction() {
	if (videoElement.paused == true) {
		videoElement.play();
		pauseBtn.src = 'assets/img/pause.png';
	} else {
		videoElement.pause();
		pauseBtn.src = 'assets/img/play.png';
	}
}

function loopFunction() {
	if (videoElement.loop == true) {
		videoElement.loop = false;
		loopBtn.src = 'assets/img/loop.png'
	} else {
		videoElement.loop = true;
		loopBtn.src = 'assets/img/loop_on.png';
	}
}