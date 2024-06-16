const audioIcon = document.querySelector(".audio__icon");
const song = document.querySelector("#song");
song.volume = 0.5;
let isPlaying = false;

// Audio
function playAudio() {
  audioIconWrapper.style.display = 'flex';
  isPlaying = true;
};


function toggleAudio() {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.add("audio--play");
    audioIcon.classList.remove("audio--play");
  } else {
    song.play();
    audioIcon.classList.remove("audio--play");
    audioIcon.classList.add("audio--play");
  }
  isPlaying = !isPlaying;
}

// Menambahkan event listener click ke audioIcon
audioIcon.addEventListener('click', toggleAudio);
