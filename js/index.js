const body = document.querySelector("body");
const player = document.querySelector("#player");
const enemy01 = document.querySelector("#enemy01");
const enemy02 = document.querySelector("#enemy02");
const enemy03 = document.querySelector("#enemy03");
const gameBoard = document.querySelector(".game-board");

const positionPlayer = player.getBoundingClientRect();
const positionenemy01 = enemy01.getBoundingClientRect();
const positionenemy02 = enemy02.getBoundingClientRect();
const positionenemy03 = enemy03.getBoundingClientRect();
const positionGameBoard = gameBoard.getBoundingClientRect();
const positionBody = body.getBoundingClientRect();
var vidaAtual = 3;

function colisao() {
  const positionBody = body.getBoundingClientRect();
  const positionPlayer = player.getBoundingClientRect();
  const positionenemy01 = enemy01.getBoundingClientRect();
  const positionenemy02 = enemy02.getBoundingClientRect();
  const positionenemy03 = enemy03.getBoundingClientRect();
  const positionGameBoard = gameBoard.getBoundingClientRect();

  if (
    !(
      positionPlayer.right <
      positionenemy01.left + positionGameBoard.left ||
      positionPlayer.left >
      positionenemy01.right + positionGameBoard.left ||
      positionPlayer.bottom <
      positionenemy01.top + positionGameBoard.top ||
      positionPlayer.top > positionenemy01.bottom + positionGameBoard.top
    ) ||
    !(
      positionPlayer.right <
      positionenemy02.left + positionGameBoard.left ||
      positionPlayer.left >
      positionenemy02.right + positionGameBoard.left ||
      positionPlayer.bottom <
      positionenemy02.top + positionGameBoard.top ||
      positionPlayer.top > positionenemy02.bottom + positionGameBoard.top
    ) ||
    !(
      positionPlayer.right <
      positionenemy03.left + positionGameBoard.left ||
      positionPlayer.left >
      positionenemy03.right + positionGameBoard.left ||
      positionPlayer.bottom <
      positionenemy03.top + positionGameBoard.top ||
      positionPlayer.top > positionenemy03.bottom + positionGameBoard.top
    )
  ) {
    vidaAtual--;
    setTimeout(() => {
      player.style.animation = "death .6s ease-in-out";
      console.log(vidaAtual);
      if (vidaAtual >= 0) {
        document.getElementsByClassName("lifes")[
          vidaAtual
        ].style.opacity = 0;
      }
      if (vidaAtual === 0) {
        setTimeout(() => {
          document.body.style.cssText = "display:block;";
          document.querySelector(".game-board").style.display =
            "none";
          document.querySelector(".botoes").style.display = "none";
          document.querySelector(".game-over").style.cssText =
            "height:100vh; width:100vw; display:flex; align-items:center; justify-content:center;";
        }, 100);
        document.body.addEventListener("click", function () {
          location.reload();
        });
      }
    }, 100);
    player.style.animation = "";
  }
}
function moverLeft() {
  let positionPlayer = player.getBoundingClientRect();
  player.style.left = positionPlayer.left + -100 + "px";
}
function moverRight() {
  let positionPlayer = player.getBoundingClientRect();
  player.style.left = positionPlayer.left + 100 + "px";
}
function moverTop() {
  let positionPlayer = player.getBoundingClientRect();
  player.style.top = positionPlayer.top + -100 + "px";
}
function moverBottom() {
  let positionPlayer = player.getBoundingClientRect();
  player.style.top = positionPlayer.top + 100 + "px";
}
function shoot() {
  const enemy01 = document.querySelector(".enemy01");
  const bullet = document.querySelector(".bullet");
  bullet.style.cssText = " opacity:100%; top:-700px;";
  setTimeout(() => {
    bullet.style.cssText = " top:0px;";
  }, 100);
}
let numUnidade = 0;
let numDezena = 0;
let numCentena = 0;
let numUnidadeM = 0;
function score() {
  const score = document.querySelector(".score");
  numUnidade++;
  if (numUnidade == 10) {
    numUnidade = 0;
    numDezena++;
  }
  if (numDezena == 10) {
    numDezena = 0;
    numCentena++;
  }
  if (numCentena == 10) {
    numCentena = 0;
    numUnidadeM++;
  }
  console.log(
    numUnidadeM + "" + numCentena + "" + numDezena + "" + numUnidade
  );
  if (vidaAtual == 0) {
    document.querySelector(".result").innerHTML = score.innerHTML;
  } else {
    document.querySelector(".numUnidade").innerHTML = numUnidade + "";
    document.querySelector(".numDezena").innerHTML = numDezena + "";
    document.querySelector(".numCentena").innerHTML = numCentena + "";
    document.querySelector(".numUnidadeM").innerHTML = numUnidadeM + "";
  }
}
function enemyAnimations01() {
  enemy01.style.animation = "1.6s infinite ease-in-out";
  function randomAnimation() {
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    const animationsName = [
      "enemy01",
      "enemy02",
      "enemy03",
      "enemy04",
      "enemy05",
      "enemy06",
      "enemy07",
      "enemy08",
      "enemy09"
    ];
    enemy01.style.animationName =
      animationsName[random(0, animationsName.length)];
  }
  randomAnimation();
}
function enemyAnimations02() {
  const animationsName = [
    "enemy01",
    "enemy02",
    "enemy03",
    "enemy04",
    "enemy05",
    "enemy06",
    "enemy07",
    "enemy08",
    "enemy09"
  ];
  enemy02.style.animation = "2s infinite ease-in-out";
  function randomAnimation() {
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    enemy02.style.animationName =
      animationsName[random(0, animationsName.length)];
  }
  randomAnimation();
}
function enemyAnimations03() {
  enemy03.style.animation = "3s infinite ease-in-out";
  function randomAnimation() {
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    const animationsName = [
      "enemy01",
      "enemy02",
      "enemy03",
      "enemy04",
      "enemy05",
      "enemy06",
      "enemy07",
      "enemy08",
      "enemy09"
    ];
    enemy03.style.animationName =
      animationsName[random(0, animationsName.length)];
  }
  randomAnimation();
}
function moveBackground() {
 document.body.style.animation = "background2 4s infinite ease-in-out";
  document.body.style.animationDelay = "0s";
}
setInterval(moveBackground, 2000);
setInterval(enemyAnimations01, 1600);
setInterval(enemyAnimations02, 2000);
setInterval(enemyAnimations03, 3000);
setInterval(score, 260);
setInterval(colisao, 290);
