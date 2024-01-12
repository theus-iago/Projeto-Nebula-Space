"use strict";

const body = document.querySelector("body");
const initialGame = document.querySelector(".initial-game");
const player = document.querySelector("#player");
const enemy01 = document.querySelector("#enemy01");
const enemy02 = document.querySelector("#enemy02");
const enemy03 = document.querySelector("#enemy03");
const bullet = document.querySelector(".bullet");
const gameBoard = document.querySelector(".game-board");
const botoes = document.querySelector(".botoes");
const botaoPlay = document.querySelector("#botaoPlay");
const botaoSettings = document.querySelector("#botaoSettings");
const botaoShoot = document.querySelector("#botaoShoot");
const botaoShield = document.querySelector("#botaoShield");
const botaoLeft = document.querySelector("#botaoLeft");
const botaoTop = document.querySelector("#botaoTop");
const botaoRight = document.querySelector("#botaoRight");
const botaoBottom = document.querySelector("#botaoBottom");
const shield = document.querySelector(".shield");

let vidaAtual = 3;
let numUnidade_Score = 0;
let numDezena_Score = 0;
let numCentena_Score = 0;
let numUnidade_ScoreM_Score = 0;

let numUnidade_Kills = 0;
let numDezena_Kills = 0;
let numCentena_Kills = 0;
let numUnidade_KillsM_Kills = 0;
/**
 * Trata da detecção de colisões entre o jogador e os inimigos.
 * Caso uma colisão seja detectada diminui o número de vidas do jogador e aciona o fim do jogo caso as vidas cheguem a zero.
 */
function colisao() {
    const positionBody = body.getBoundingClientRect();
    const positionPlayer = player.getBoundingClientRect();
    const positionEnemy01 = enemy01.getBoundingClientRect();
    const positionEnemy02 = enemy02.getBoundingClientRect();
    const positionEnemy03 = enemy03.getBoundingClientRect();
    const positionGameBoard = gameBoard.getBoundingClientRect();
    if (
        !(
            positionPlayer.right <
                positionEnemy01.left + positionGameBoard.left ||
            positionPlayer.left >
                positionEnemy01.right + positionGameBoard.left ||
            positionPlayer.bottom <
                positionEnemy01.top + positionGameBoard.top ||
            positionPlayer.top > positionEnemy01.bottom + positionGameBoard.top
        ) ||
        !(
            positionPlayer.right <
                positionEnemy02.left + positionGameBoard.left ||
            positionPlayer.left >
                positionEnemy02.right + positionGameBoard.left ||
            positionPlayer.bottom <
                positionEnemy02.top + positionGameBoard.top ||
            positionPlayer.top > positionEnemy02.bottom + positionGameBoard.top
        ) ||
        !(
            positionPlayer.right <
                positionEnemy03.left + positionGameBoard.left ||
            positionPlayer.left >
                positionEnemy03.right + positionGameBoard.left ||
            positionPlayer.bottom <
                positionEnemy03.top + positionGameBoard.top ||
            positionPlayer.top > positionEnemy03.bottom + positionGameBoard.top
        )
    ) {
        if (player.style.outline == "none") {
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
                        document.querySelector(".botoes").style.display =
                            "none";
                        document.querySelector(".game-over").style.cssText =
                            "height:100vh; width:100vw; display:flex; align-items:center; justify-content:center; flex-direction:column;";
                    }, 100);

                    document.body.addEventListener("click", function () {
                        location.reload();
                    });
                }
            }, 100);
        } else {
            player.style.animation = "";
        }
    }
}
/**
 * Move o jogador na direção especificada de acordo com os limites da game-board do jogo.
 * Garante que o jogador não saia dos limites da game-board.
 * @param {string} direct - direção que o jogador deve se mover.
 */
function move(direct) {
    let positionPlayer = player.getBoundingClientRect();
    switch (direct) {
        case "left":
            var numLeft = Math.floor(positionPlayer.left);
            player.style.left = positionPlayer.left + -100 + "px";
            if (numLeft < 100) {
                player.style.left = 0;
            }
            break;
        case "right":
            var numRight = Math.floor(positionPlayer.right);
            player.style.left = positionPlayer.left + 100 + "px";
            if (numRight > 300) {
                player.style.left = 78 + "%";
            }
            break;
        case "top":
            var numTop = Math.floor(positionPlayer.top);
            player.style.top = positionPlayer.top + -100 + "px";
            if (numTop < 100) {
                player.style.top = 0;
            }
            break;
        case "bottom":
            var numBottom = Math.floor(positionPlayer.bottom);
            player.style.top = positionPlayer.top + 100 + "px";
            if (numBottom > 300) {
                player.style.top = 78 + "%";
            }
            break;
    }
}
// Ouvintes de eventos para os botões de movimentação do jogador
botaoLeft.addEventListener("click", function () {
    move("left");
});
botaoTop.addEventListener("click", function () {
    move("top");
});
botaoRight.addEventListener("click", function () {
    move("right");
});
botaoBottom.addEventListener("click", function () {
    move("bottom");
});
/**
 * Gerencia o mecanismo de pontuação, atualizando a exibição da pontuação conforme o jogo avança
 * Calcula e exibi a potuação com base em unidades,dezenas,centenas e milhares.
 */
function score() {
    const score = document.querySelector(".score");
    numUnidade_Score++;
    if (numUnidade_Score == 10) {
        numUnidade_Score = 0;
        numDezena_Score++;
    }
    if (numDezena_Score == 10) {
        numDezena_Score = 0;
        numCentena_Score++;
    }
    if (numCentena_Score == 10) {
        numCentena_Score = 0;
        numUnidade_ScoreM_Score++;
    }
    if (vidaAtual == 0) {
        document.querySelector(".resultScore").innerHTML = score.innerHTML;
    } else {
        document.querySelector(".numUnidade_Score").innerHTML =
            numUnidade_Score + "";
        document.querySelector(".numDezena_Score").innerHTML =
            numDezena_Score + "";
        document.querySelector(".numCentena_Score").innerHTML =
            numCentena_Score + "";
        document.querySelector(".numUnidade_ScoreM_Score").innerHTML =
            numUnidade_ScoreM_Score + "";
    }
}
/**
 * Dispara o método que sorteia o nome das animações.
 * Dsitribui o nome sorteado das animações para cada inimigo.
 */
function enemyAnimations01() {
    enemy01.style.animation = "2s infinite ease-in-out";
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
    enemy03.style.animation = "2s infinite ease-in-out";
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
/**
 * Trata da detecção de colisões entre a bala e os inimigos.
 * Caso uma colisão seja detectada aumenta o número de mortes dos inimigos.
 * Gerencia o mecanismo de pontuação de mortes, atualizando a exibição da pontuação conforme o número de mortes aumenta.
 * Calcula e exibi a potuação com base em unidades,dezenas,centenas e milhares.
 */
function kill() {
    const positionBullet = bullet.getBoundingClientRect();
    const positionEnemy01 = enemy01.getBoundingClientRect();
    const positionEnemy02 = enemy02.getBoundingClientRect();
    const positionEnemy03 = enemy03.getBoundingClientRect();
    const positionGameBoard = gameBoard.getBoundingClientRect();
    if (
        !(
            positionBullet.right <
                positionEnemy01.left + positionGameBoard.left ||
            positionBullet.left >
                positionEnemy01.right + positionGameBoard.left ||
            positionBullet.bottom <
                positionEnemy01.top + positionGameBoard.top ||
            positionBullet.top > positionEnemy01.bottom + positionGameBoard.top
        )
    ) {
        setTimeout(
            () => (enemy01.style.animation = "death .6s ease-in-out"),
            100
        );
        enemy01.style.animation = "";
        const kills = document.querySelector(".kills");
        if (bullet.style.display == "block") {
            numUnidade_Kills++;
        }
        if (numUnidade_Kills == 10) {
            numUnidade_Kills = 0;
            numDezena_Kills++;
        }
        if (numDezena_Kills == 10) {
            numDezena_Kills = 0;
            numCentena_Kills++;
        }
        if (numCentena_Kills == 10) {
            numCentena_Kills = 0;
            numUnidade_KillsM_Kills++;
        }
        if (vidaAtual == 0) {
            document.querySelector(".resultKills").innerHTML = kills.innerHTML;
            setTimeout(() => (enemy01.style.animation = "death .5s ease"), 600);
        }
    } else {
        document.querySelector(".numUnidade_Kills").innerHTML =
            numUnidade_Kills + "";
        document.querySelector(".numDezena_Kills").innerHTML =
            numDezena_Kills + "";
        document.querySelector(".numCentena_Kills").innerHTML =
            numCentena_Kills + "";
        document.querySelector(".numUnidade_KillsM_Kills").innerHTML =
            numUnidade_KillsM_Kills + "";
    }
    if (
        !(
            positionBullet.right <
                positionEnemy02.left + positionGameBoard.left ||
            positionBullet.left >
                positionEnemy02.right + positionGameBoard.left ||
            positionBullet.bottom <
                positionEnemy02.top + positionGameBoard.top ||
            positionBullet.top > positionEnemy02.bottom + positionGameBoard.top
        )
    ) {
        setTimeout(
            () => (enemy02.style.animation = "death .6s ease-in-out"),
            100
        );
        enemy02.style.animation = "";
        const kills = document.querySelector(".kills");
        if (bullet.style.display == "block") {
            numUnidade_Kills++;
        }
        if (numUnidade_Kills == 10) {
            numUnidade_Kills = 0;
            numDezena_Kills++;
        }
        if (numDezena_Kills == 10) {
            numDezena_Kills = 0;
            numCentena_Kills++;
        }
        if (numCentena_Kills == 10) {
            numCentena_Kills = 0;
            numUnidade_KillsM_Kills++;
        }
        if (vidaAtual == 0) {
            document.querySelector(".resultKills").innerHTML = kills.innerHTML;
            setTimeout(() => (enemy01.style.animation = "death .5s ease"), 600);
        }
    } else {
        document.querySelector(".numUnidade_Kills").innerHTML =
            numUnidade_Kills + "";
        document.querySelector(".numDezena_Kills").innerHTML =
            numDezena_Kills + "";
        document.querySelector(".numCentena_Kills").innerHTML =
            numCentena_Kills + "";
        document.querySelector(".numUnidade_KillsM_Kills").innerHTML =
            numUnidade_KillsM_Kills + "";
    }
    if (
        !(
            positionBullet.right <
                positionEnemy03.left + positionGameBoard.left ||
            positionBullet.left >
                positionEnemy03.right + positionGameBoard.left ||
            positionBullet.bottom <
                positionEnemy03.top + positionGameBoard.top ||
            positionBullet.top > positionEnemy03.bottom + positionGameBoard.top
        )
    ) {
        setTimeout(
            () => (enemy03.style.animation = "death .6s ease-in-out"),
            100
        );
        enemy03.style.animation = "";
        const kills = document.querySelector(".kills");
        if (bullet.style.display == "block") {
            numUnidade_Kills++;
        }
        if (numUnidade_Kills == 10) {
            numUnidade_Kills = 0;
            numDezena_Kills++;
        }
        if (numDezena_Kills == 10) {
            numDezena_Kills = 0;
            numCentena_Kills++;
        }
        if (numCentena_Kills == 10) {
            numCentena_Kills = 0;
            numUnidade_KillsM_Kills++;
        }
        if (vidaAtual == 0) {
            document.querySelector(".resultKills").innerHTML = kills.innerHTML;
            setTimeout(() => (enemy01.style.animation = "death .5s ease"), 600);
        }
    } else {
        document.querySelector(".numUnidade_Kills").innerHTML =
            numUnidade_Kills + "";
        document.querySelector(".numDezena_Kills").innerHTML =
            numDezena_Kills + "";
        document.querySelector(".numCentena_Kills").innerHTML =
            numCentena_Kills + "";
        document.querySelector(".numUnidade_KillsM_Kills").innerHTML =
            numUnidade_KillsM_Kills + "";
    }
}
// Ouvinte de evento para o botão de atirar
botaoShoot.addEventListener("click", function () {
    setTimeout(() => {
        bullet.style.cssText = "display:block; top:0%; opacity:100%;";
    }, 100);
    setTimeout(() => {
        bullet.style.cssText = "display:block; top:-200px; opacity:100%;";
    }, 200);
    setTimeout(() => {
        bullet.style.cssText = "display:block; top:-700px; opacity:100%;";
    }, 300);
    setTimeout(() => {
        bullet.style.cssText = "top: 0%; opacity: 0%; display:none;";
    }, 500);
});
// Ouvinte de evento para o botão de ativar o escudo
botaoShield.addEventListener("click", function () {
    const playerPosition = player.getBoundingClientRect();
    setTimeout(() => {
        player.style.top = playerPosition.top;
        player.style.left = playerPosition.left;
        player.style.backgroundColor = "#62ceffe2";
        player.style.boxShadow = "2px 10px 26px rgb(51,162,254)";
        player.style.backgroundSize = "70% 70%";
        player.style.outline = "5px solid #008cff";
        player.style.opacity = "70%";
        player.style.borderRadius = "50%";
        botaoShield.style.opacity = "50%";
    }, 100);
    setTimeout(() => {
        player.style.top = playerPosition.top;
        player.style.left = playerPosition.left;
        player.style.backgroundColor = "#62ceff00";
        player.style.boxShadow = "none";
        player.style.backgroundSize = "100% 100%";
        player.style.outline = "none";
        player.style.opacity = "100%";
        player.style.borderRadius = "0%";
        botaoShield.style.opacity = "100%";
    }, 10000);
});
// Ouvinte de evento para o botão de jogar
botaoPlay.addEventListener("click", function () {
    initialGame.style.display = "none";
    gameBoard.style.display = "block";
    body.style.animation = "background 4s ease-in-out";
    botoes.style.display = "flex";
    setInterval(enemyAnimations01, 2000);
    setInterval(enemyAnimations02, 2000);
    setInterval(enemyAnimations03, 2000);
    setInterval(kill, 40);
    setInterval(colisao, 290);
    setInterval(score, 260);
});
