let video = document.getElementById('myvideo')
let play_pause = document.getElementById('play-pause-btn')
let stop = document.getElementById('stop-btn')
let volumeSlider = document.getElementById('volume')
let progressBar =document.getElementById('progress-bar')

play_pause.addEventListener('click', (e) => {
    e.preventDefault();
    if(video.paused || video.ended) {
        video.play()
        play_pause.innerHTML = "Pause"
    } else {
        video.pause();
        play_pause.innerHTML = "Play"
    }
});

stop.addEventListener('click', (e) => {
    video.pause();
    video.currentTime = 0
})

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value
})

video.addEventListener("timeupdate", () => {
    let progress = (video.currentTime/video.duration) * 100
    progressBar.value = progress
})

progressBar.addEventListener('click', (e) => {
    let progressWidth = progressBar.clientWidth
    let clickedPosition = e.offsetX
    let clickedTime = (clickedPosition / progressWidth) * video.duration
    video.currentTime = clickedTime
})