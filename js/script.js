const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const button = document.querySelector(".button");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log("loop");

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    pipe.style.animation = "none";
    mario.style.bottom = `${pipePosition}px`;

    mario.src = "./image/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "30px";
    mario.style.bottom = "0";

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);