const glithText = document.querySelector(".eliza-ascii");

function Glitch() {
  glithText.lastElementChild.classList.add("glitch");
  setTimeout(() => {
    glithText.lastElementChild.classList.remove("glitch");
  }, Math.random() * 50 + 200);

  setTimeout(Glitch, Math.random() * 2000 + 500);
}

Glitch();
