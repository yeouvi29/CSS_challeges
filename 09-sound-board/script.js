const box = document.querySelector(".box");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let prev, prevAudio;

// make button elements which are the same name as audio files in div element
for (let i = 0; i < sounds.length; i++) {
  box.insertAdjacentHTML(
    "beforeend",
    `<button class="btns" id=${sounds[i]}>${sounds[i]}</button>`
  );
}

// when a button is clicked, find the closest button element in div and if it's not a button element, return immediately. If there is previous audio was playing, pause it and play the audio which has the same file name as the clicked button's id.
box.addEventListener("click", function (e) {
  if (!e.target.closest(".btns")) return;

  const current = e.target.closest(".btns").id;
  const audioPlay = new Audio(`./sounds/${current}.mp3`);

  if (prevAudio) prevAudio.pause();
  audioPlay.play();
  prev = current;
  prevAudio = audioPlay;
});
