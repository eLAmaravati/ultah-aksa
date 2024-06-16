const audioIcon = document.querySelector(".audio__icon");
const song = document.querySelector("#song");
song.volume = 0.1;
let isPlaying = false;

// Audio
function playAudio() {
  audioIconWrapper.style.display = 'flex';
  isPlaying = true;
};


function toggleAudio() {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("audio--circle");
    audioIcon.classList.add("audio--circle");
  } else {
    song.play();
    audioIcon.classList.add("audio--circle");
    audioIcon.classList.remove("audio--circle");
  }
  isPlaying = !isPlaying;
}

// Menambahkan event listener click ke audioIcon
audioIcon.addEventListener('click', toggleAudio);
