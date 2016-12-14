window.addEventListener('keydown', function(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  // console.log(key);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
});

// function removeTransition(e) {
  // console.log(e);
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition))
