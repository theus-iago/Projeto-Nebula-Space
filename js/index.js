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
function moveBackground() {
    gameBoard.style.backgroundPosition = "bottom center";
    gameBoard.style.backgroundPosition = "center center";
    gameBoard.style.backgroundPosition = "top center";
    gameBoard.style.backgroundPosition = "";
}
function enemyAnimations01() {
    enemy01.style.animation = "enemy01 2s infinite ease-in-out";
}
function enemyAnimations02() {
    enemy02.style.animation = "enemy02 2s infinite ease-in-out";
}
function enemyAnimations03() {
    enemy03.style.animation = "enemy03 2s infinite ease-in-out";
}
setInterval(enemyAnimations01, 180);
setInterval(enemyAnimations02, 900);
setInterval(enemyAnimations03, 800);
setInterval(score, 260);
setInterval(colisao, 290);
