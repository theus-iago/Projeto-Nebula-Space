const body = document.querySelector("body");
const player = document.querySelector("#player");
const enemy = document.querySelector("#enemy");
const gameBoard = document.querySelector(".game-board");

const positionPlayer = player.getBoundingClientRect();
const positionEnemy = enemy.getBoundingClientRect();
const positionGameBoard = gameBoard.getBoundingClientRect();
const positionBody = body.getBoundingClientRect();
var vidaAtual = 3;

function colisao() {
  const positionBody = body.getBoundingClientRect();
  const positionPlayer = player.getBoundingClientRect();
  const positionEnemy = enemy.getBoundingClientRect();
  const positionGameBoard = gameBoard.getBoundingClientRect();

   if(!(positionPlayer.right < positionEnemy.left + positionGameBoard.left || positionPlayer.left > positionEnemy.right + positionGameBoard.left || positionPlayer.bottom < positionEnemy.top + positionGameBoard.top || positionPlayer.top > positionEnemy.bottom + positionGameBoard.top)) {
     vidaAtual --;
     setTimeout(() => {
      player.style.animation = "death .6s ease-in-out";
  console.log(vidaAtual)
  if(vidaAtual>=0) {
   document.getElementsByClassName("lifes")[vidaAtual].style.opacity = 0;
  }
    if(vidaAtual === 0) {
      setTimeout(() => {
       window.alert("Game-Over!");
       location.reload();
        },100);
    }
    },100);
     player.style.animation = "";
    }
  }
  function moverLeft() {
    let positionPlayer = player.getBoundingClientRect();
    player.style.left = positionPlayer.left + -100 + "px";
    /*  if() {
      player.style.background = "green";
    }  */
  }
  function moverRight() { 
    let positionPlayer = player.getBoundingClientRect();
    player.style.left = positionPlayer.left + 100 + "px";
  }
  function moverTop() {
    let positionPlayer = player.getBoundingClientRect();
    player.style.top = positionPlayer.top + -100 +"px";
  }
  function moverBottom() {
    let positionPlayer = player.getBoundingClientRect();
    player.style.top = positionPlayer.top + 100 +"px";
  } 
  function shoot() {
    const bullet = document.querySelector(".bullet");
    bullet.style.cssText = " opacity:100%; top:-700px;";
    setTimeout(() => {
      bullet.style.cssText = " opacity:0%; top:;";
    },200);
  }
  setInterval(colisao,300);
