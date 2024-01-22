"use strict";
const body = document.querySelector("body");
const initialGame = document.querySelector(".initial-game");
const player = document.querySelector("#player");
const enemy01 = document.querySelector("#enemy01");
const enemy02 = document.querySelector("#enemy02");
const enemy03 = document.querySelector("#enemy03");
const bullet = document.querySelector(".bullet");
const gameBoard = document.querySelector(".game-board");
const shopGame = document.querySelector(".shop-game");
const settingsGame = document.querySelector(".settings-game");
const questBack = document.querySelector("#questBack");
const questShop = document.querySelector("#questShop");
const tituloShop = document.querySelector("#tituloShop");
const botoes = document.querySelector(".botoes");
const botaoPlay = document.querySelector("#botaoPlay");
const botaoShop = document.querySelector("#botaoShop");
const botaoSettings = document.querySelector("#botaoSettings");
const botaoBack = document.querySelector("#backButton");
const botaoReset = document.querySelector("#buttonReset");
const botaoYesBack = document.querySelector("#yesBack");
const botaoYesShop = document.querySelector("#yesShop");
const botaoNoBack = document.querySelector("#noBack");
const botaoNoShop = document.querySelector("#noShop");
const botaoStop = document.querySelector("#buttonStop");
const botaoShoot = document.querySelector("#botaoShoot");
const botaoShield = document.querySelector("#botaoShield");
const botaoLeft = document.querySelector("#botaoLeft");
const botaoTop = document.querySelector("#botaoTop");
const botaoRight = document.querySelector("#botaoRight");
const botaoBottom = document.querySelector("#botaoBottom");
const shieldIcon = document.querySelector("#shieldIcon");
const coinIcon = document.querySelector("#coinIcon");
const shieldNum = document.querySelector(".shieldNum");
const coinNum01 = document.querySelector("#coinNum01");
const coinNum02 = document.querySelector("#coinNum02");
const img02 = document.querySelector("#img02");
const img03 = document.querySelector("#img03");
const img04 = document.querySelector("#img04");
const img05 = document.querySelector("#img05");
const img06 = document.querySelector("#img06");
const img07 = document.querySelector("#img07");
const preco02 = document.querySelector("#preco02");
const preco03 = document.querySelector("#preco03");
const preco04 = document.querySelector("#preco04");
const preco05 = document.querySelector("#preco05");
const preco06 = document.querySelector("#preco06");
const preco07 = document.querySelector("#preco07");
const block = "bloqueado";
const unlock = "desbloqueado";

let vidaAtual = 3;
let numShield = 0;
let numCoin = parseInt(localStorage.getItem("Coins"));
let skinPadraoState = localStorage.getItem('skinPadrao');
let skin02State = localStorage.getItem('skin02');
let skin03State = localStorage.getItem('skin03');
let skin04State = localStorage.getItem('skin04');
let skin05State = localStorage.getItem('skin05');
let skin06State = localStorage.getItem('skin06');
let skin07State = localStorage.getItem('skin07');
let numUnidade_Score = 0;
let numDezena_Score = 0;
let numCentena_Score = 0;
let numUnidade_ScoreM_Score = 0;
let numUnidade_Kills = 0;
let numDezena_Kills = 0;
let numCentena_Kills = 0;
let numUnidade_KillsM_Kills = 0;
let isPaused = false;
let isReseted = false;

function pausarjogo() {
    if (!isPaused) {
        body.style.animationPlayState = "paused";
        enemy01.style.animationPlayState = "paused";
        enemy02.style.animationPlayState = "paused";
        enemy03.style.animationPlayState = "paused";
        shieldIcon.style.animationPlayState = "paused";
        coinIcon.style.animationPlayState = "paused";
        isPaused = true;
    }
}
function retomarjogo() {
    if (isPaused) {
        body.style.animationPlayState = "running";
        enemy01.style.animationPlayState = "running";
        enemy02.style.animationPlayState = "running";
        enemy03.style.animationPlayState = "running";
        shieldIcon.style.animationPlayState = "running";
        coinIcon.style.animationPlayState = "running";
        isPaused = false;
    }
}

function localCoin() {
    if (!isPaused) {
        var resultCoin = localStorage.getItem("Coins");
        if (resultCoin == "") {
            coinNum01.innerHTML = "0";
            coinNum02.innerHTML = "0";
        }
        coinNum01.innerHTML = resultCoin;
        coinNum02.innerHTML = resultCoin;
    }
}
setInterval(localCoin, 40);
function back() {
    initialGame.style.display = "grid";
    gameBoard.style.display = "none";
    shopGame.style.display = "none";
    settingsGame.style.display = "none";
}
/**
 * Gerencia o mecanismo de pontuação, atualizando a exibição da pontuação conforme o jogo avança
 * Calcula e exibi a potuação com base em unidades,dezenas,centenas e milhares.
 */
function score() {
    if (!isPaused) {
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
}
/**
 * Trata da detecção de colisões entre a bala e os inimigos.
 * Caso uma colisão seja detectada aumenta o número de mortes dos inimigos.
 * Gerencia o mecanismo de pontuação de mortes, atualizando a exibição da pontuação conforme o número de mortes aumenta.
 * Calcula e exibi a potuação com base em unidades,dezenas,centenas e milhares.
 */
function kill() {
    if (!isPaused) {
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
                positionBullet.top >
                    positionEnemy01.bottom + positionGameBoard.top
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
                document.querySelector(".resultKills").innerHTML =
                    kills.innerHTML;
                setTimeout(
                    () => (enemy01.style.animation = "death .5s ease"),
                    600
                );
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
                positionBullet.top >
                    positionEnemy02.bottom + positionGameBoard.top
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
                document.querySelector(".resultKills").innerHTML =
                    kills.innerHTML;
                setTimeout(
                    () => (enemy01.style.animation = "death .5s ease"),
                    600
                );
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
                positionBullet.top >
                    positionEnemy03.bottom + positionGameBoard.top
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
                document.querySelector(".resultKills").innerHTML =
                    kills.innerHTML;
                setTimeout(
                    () => (enemy01.style.animation = "death .5s ease"),
                    600
                );
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
}
