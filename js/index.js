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

    if (
        !(
            positionPlayer.right <
                positionEnemy.left + positionGameBoard.left ||
            positionPlayer.left >
                positionEnemy.right + positionGameBoard.left ||
            positionPlayer.bottom < positionEnemy.top + positionGameBoard.top ||
            positionPlayer.top > positionEnemy.bottom + positionGameBoard.top
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
    const enemy = document.querySelector(".enemy");
    const bullet = document.querySelector(".bullet");
    bullet.style.cssText = " opacity:100%; top:-700px;";
    setTimeout(() => {
        bullet.style.cssText = " top:0px;";
    }, 100);
}
let num = 0;
function score() {
    const score = document.querySelector(".score");
    num++;
    if (vidaAtual == 0) {
        document.querySelector(".result").innerHTML = Number(num);
    } else {
        score.innerHTML = Number(num);
    }
}
setInterval(score, 260);
setInterval(colisao, 290);