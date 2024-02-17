"use strict";
if (localStorage.getItem("Coins") == null) {
    localStorage.setItem("Coins", "0");
}
if (localStorage.getItem("skinPadrao") == null) {
    localStorage.setItem("skinPadrao", "desbloqueada");
}
if (localStorage.getItem("skin02") == null) {
    localStorage.setItem("skin02", "bloqueada");
}
if (localStorage.getItem("skin03") == null) {
    localStorage.setItem("skin03", "bloqueada");
}
if (localStorage.getItem("skin04") == null) {
    localStorage.setItem("skin04", "bloqueada");
}
if (localStorage.getItem("skin05") == null) {
    localStorage.setItem("skin05", "bloqueada");
}
if (localStorage.getItem("skin06") == null) {
    localStorage.setItem("skin06", "bloqueada");
}
if (localStorage.getItem("skin07") == null) {
    localStorage.setItem("skin07", "bloqueada");
}
const body = document.querySelector("body");
const initialGame = document.querySelector(".initial-game");
const player = document.getElementById("player");
const enemy01 = document.getElementById("enemy01");
const enemy02 = document.getElementById("enemy02");
const enemy03 = document.getElementById("enemy03");
const bullet = document.querySelector(".bullet");
const gameBoard = document.querySelector(".game-board");
const shopGame = document.querySelector(".shop-game");
const cheatsGame = document.querySelector(".cheats-game");
const questBack = document.getElementById("questBack");
const questShop = document.getElementById("questShop");
const tituloShop = document.getElementById("tituloShop");
const botoes = document.querySelector(".botoes");
const botaoPlay = document.getElementById("botaoPlay");
const botaoShop = document.getElementById("botaoShop");
const botaoCheats = document.getElementById("botaoCheats");
const botaoBack = document.getElementById("backButton");
const botaoReset = document.getElementById("buttonReset");
const botaoYesBack = document.getElementById("yesBack");
const botaoYesShop = document.getElementById("yesShop");
const botaoNoBack = document.getElementById("noBack");
const botaoNoShop = document.getElementById("noShop");
const botaoStop = document.getElementById("buttonStop");
const botaoShoot = document.getElementById("botaoShoot");
const botaoShield = document.getElementById("botaoShield");
const botaoLeft = document.getElementById("botaoLeft");
const botaoTop = document.getElementById("botaoTop");
const botaoRight = document.getElementById("botaoRight");
const botaoBottom = document.getElementById("botaoBottom");
const shieldIcon = document.getElementById("shieldIcon");
const coinIcons = [...document.querySelectorAll(".iconCoin")];
const shieldNum = document.querySelector(".shieldNum");
const coinNum01 = document.getElementById("coinNum01");
const coinNum02 = document.getElementById("coinNum02");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");
const img04 = document.getElementById("img04");
const img05 = document.getElementById("img05");
const img06 = document.getElementById("img06");
const img07 = document.getElementById("img07");
const preco02 = document.getElementById("preco02");
const preco03 = document.getElementById("preco03");
const preco04 = document.getElementById("preco04");
const preco05 = document.getElementById("preco05");
const preco06 = document.getElementById("preco06");
const preco07 = document.getElementById("preco07");
const block = "bloqueado";
const unlock = "desbloqueado";
const skinPadrao = document.getElementById("skinPadrao");
const radioPadrao = document.getElementById("skPadrao");
const skin02 = document.getElementById("skin02");
const radio02 = document.getElementById("sk02");
const skin03 = document.getElementById("skin03");
const radio03 = document.getElementById("sk03");
const skin04 = document.getElementById("skin04");
const radio04 = document.getElementById("sk04");
const skin05 = document.getElementById("skin05");
const radio05 = document.getElementById("sk05");
const skin06 = document.getElementById("skin06");
const radio06 = document.getElementById("sk06");
const skin07 = document.getElementById("skin07");
const radio07 = document.getElementById("sk07");
const lifes = [...document.querySelectorAll(".lifes")];
const radios = [...document.querySelectorAll(".radio")];
alert(coinIcons.length);
let buy02 = false;
let noBuy02 = true;
let buy03 = false;
let noBuy03 = true;
let buy04 = false;
let noBuy04 = true;
let buy05 = false;
let noBuy05 = true;
let buy06 = false;
let noBuy06 = true;
let buy07 = false;
let noBuy07 = true;
let vidaAtual = 3;
let numShield = 0;
let numCoin = parseInt(localStorage.getItem("Coins"));
let skinPadraoState = localStorage.getItem("skinPadrao");
let skin02State = localStorage.getItem("skin02");
let skin03State = localStorage.getItem("skin03");
let skin04State = localStorage.getItem("skin04");
let skin05State = localStorage.getItem("skin05");
let skin06State = localStorage.getItem("skin06");
let skin07State = localStorage.getItem("skin07");
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

/*radios.forEach((elements, indice) => {
  elements.addEventListener("click", (event) => {
    let radioChecked = event.target;
    let label = elements.nextElementSibling;
    let preco = label.querySelector(".preco");
    label.style.borderColor = "#1e1e1e";
    preco.style.backgroundColor = "#1e1e1e";
    preco.style.borderColor = "red";
  });
});*/

function pausarjogo() {
    if (!isPaused) {
        body.style.animationPlayState = "paused";
        enemy01.style.animationPlayState = "paused";
        enemy02.style.animationPlayState = "paused";
        enemy03.style.animationPlayState = "paused";
        shieldIcon.style.animationPlayState = "paused";
        coinIcons.forEach((elements) => {
          elements.style.animationPlayState = "paused";
        });
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
        coinIcons.forEach((elements) => {
          elements.style.animationPlayState = "running";
        });
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
setInterval(localCoin, 40)
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
