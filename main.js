window.addEventListener('keydown', function(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) {
    return;
  }
  audio.play();
});
