var vid = document.getElementById("myVideo");
var play_pause = document.getElementById("play_pause");
var slider1 = document.getElementById("mainSlider");
var slider2 = document.getElementById('volumeSlider');
var slider3 = document.getElementById('speedSlider');
var currentTime = document.getElementById('current');
var total = document.getElementById('end');
var flag = true;

function playVid(e) {
    if (flag) {
        play_pause.innerText = 'Pause Video';
        vid.play();
        flag = false;
    } else {
        play_pause.innerText = 'Play Video';
        vid.pause();
        flag = true;
    }
    e.blur();
}

function stopVid(e) {
    vid.pause();
    vid.currentTime = 0;
    play_pause.innerText = 'Play Video';
    e.blur();
}

function setVid(e, postion) {
    if (postion == 0) {
        vid.currentTime = 0;
    } else if (postion == 100) {
        vid.currentTime = vid.duration - 0.1;
        vid.play();
    } else if (postion == -1) {
        vid.currentTime -= 5;
    } else if (postion == 1) {
        vid.currentTime += 5;
    }
    e.blur();
}

function setSlider() {
    let sliderValue = (vid.currentTime / vid.duration) * 100;
    slider1.value = sliderValue;
    currentTime.innerText = new Date(vid.currentTime * 1000).toISOString().slice(14, 19);
    total.innerText = new Date(vid.duration * 1000).toISOString().slice(14, 19);
    if (currentTime.innerText == total.innerText) {
        play_pause.innerText = 'Play Video';
    }
}

function setVideo() {
    vid.currentTime = (slider1.value / 100) * vid.duration;
}

function mute(e) {
    vid.muted = true;
    e.blur();
}

function setVolume() {
    vid.muted = false;
    vid.volume = (slider2.value / 100);
}

function setSpeed() {
    vid.playbackRate = slider3.value;
}

function full(e) {
    vid.requestFullscreen();
    e.blur();
}

setInterval(setSlider, 1000);