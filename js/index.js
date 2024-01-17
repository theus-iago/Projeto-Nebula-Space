"use strict";
document.addEventListener("DOMContentLoaded", function () {
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
    const botaoStop = document.querySelector("#buttonStop");
    const botaoShoot = document.querySelector("#botaoShoot");
    const botaoShield = document.querySelector("#botaoShield");
    const botaoLeft = document.querySelector("#botaoLeft");
    const botaoTop = document.querySelector("#botaoTop");
    const botaoRight = document.querySelector("#botaoRight");
    const botaoBottom = document.querySelector("#botaoBottom");
    const shieldIcon = document.querySelector("#shieldIcon");
    const shieldNum = document.querySelector(".shieldNum");

    let vidaAtual = 3;
    let numShield = 0;
    let numUnidade_Score = 0;
    let numDezena_Score = 0;
    let numCentena_Score = 0;
    let numUnidade_ScoreM_Score = 0;

    let numUnidade_Kills = 0;
    let numDezena_Kills = 0;
    let numCentena_Kills = 0;
    let numUnidade_KillsM_Kills = 0;
    let isPaused = false;

    function retomarjogo() {
        if (isPaused) {
            enemy01.style.animationPlayState = "running";
            enemy02.style.animationPlayState = "running";
            enemy03.style.animationPlayState = "running";
            shieldIcon.style.animationPlayState = "running";
            isPaused = false;
        }
    }
    function pausarjogo() {
        if (!isPaused) {
            enemy01.style.animationPlayState = "paused";
            enemy02.style.animationPlayState = "paused";
            enemy03.style.animationPlayState = "paused";
            shieldIcon.style.animationPlayState = "paused";
            isPaused = true;
        }
    }
    /**
     * Trata da detecção de colisões entre o jogador e os inimigos.
     * Caso uma colisão seja detectada diminui o número de vidas do jogador e aciona o fim do jogo caso as vidas cheguem a zero.
     */
    function colisao() {
        if (!isPaused) {
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
                    positionPlayer.top >
                        positionEnemy01.bottom + positionGameBoard.top
                ) ||
                !(
                    positionPlayer.right <
                        positionEnemy02.left + positionGameBoard.left ||
                    positionPlayer.left >
                        positionEnemy02.right + positionGameBoard.left ||
                    positionPlayer.bottom <
                        positionEnemy02.top + positionGameBoard.top ||
                    positionPlayer.top >
                        positionEnemy02.bottom + positionGameBoard.top
                ) ||
                !(
                    positionPlayer.right <
                        positionEnemy03.left + positionGameBoard.left ||
                    positionPlayer.left >
                        positionEnemy03.right + positionGameBoard.left ||
                    positionPlayer.bottom <
                        positionEnemy03.top + positionGameBoard.top ||
                    positionPlayer.top >
                        positionEnemy03.bottom + positionGameBoard.top
                )
            ) {
                if (player.style.outline == "none") {
                    console.log("bateu");
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
                                document.querySelector(
                                    ".game-board"
                                ).style.display = "none";
                                document.querySelector(
                                    ".botoes"
                                ).style.display = "none";
                                document.querySelector(
                                    ".game-over"
                                ).style.cssText =
                                    "height:100vh; width:100vw; display:flex; align-items:center; justify-content:center; flex-direction:column;";
                            }, 100);

                            document.body.addEventListener(
                                "click",
                                function () {
                                    location.reload();
                                }
                            );
                        }
                    }, 100);
                } else {
                    player.style.animation = "";
                }
            }
        }
    }
    function animationShield() {
        if (!isPaused) {
            shieldIcon.style.animation = "shield01 5s infinite ease-in-out";
            shieldIcon.style.animationDelay = "2s";
            setTimeout(() => (shieldIcon.style.opacity = "0%"), 100);
            setTimeout(() => (shieldIcon.style.opacity = "100%"), 200);
            setTimeout(() => (shieldIcon.style.opacity = "0%"), 300);
            setTimeout(() => (shieldIcon.style.opacity = "100%"), 400);
            setTimeout(() => (shieldIcon.style.opacity = "0%"), 500);
            setTimeout(() => (shieldIcon.style.opacity = "100%"), 600);
        }
    }
    function colisaoIcone() {
        if (!isPaused) {
            const positionPlayer = player.getBoundingClientRect();
            const positionShieldIcon = shieldIcon.getBoundingClientRect();
            const positionGameBoard = gameBoard.getBoundingClientRect();
            if (
                !(
                    positionPlayer.right <
                        positionShieldIcon.left + positionGameBoard.left ||
                    positionPlayer.left >
                        positionShieldIcon.right + positionGameBoard.left ||
                    positionPlayer.bottom <
                        positionShieldIcon.top + positionGameBoard.top ||
                    positionPlayer.top >
                        positionShieldIcon.bottom + positionGameBoard.top
                )
            ) {
                setTimeout(
                    () =>
                        (shieldIcon.style.animation = "death .6s ease-in-out"),
                    600
                );
                shieldIcon.style.animation = "";
                shieldIcon.style.opacity = "0%";
                numShield++;
                shieldNum.innerHTML = numShield + "";
                botaoShield.style.opacity = 1;
            }
            shieldIcon.style.opacity = 1;
        }
    }
    /**
     * Move o jogador na direção especificada de acordo com os limites da game-board do jogo.
     * Garante que o jogador não saia dos limites da game-board.
     * @param {string} direct - direção que o jogador deve se mover.
     */
    function move(direct) {
        if (!isPaused) {
            let positionPlayer = player.getBoundingClientRect();
            switch (direct) {
                case "left":
                    const numLeft = Math.floor(positionPlayer.left);
                    player.style.left = positionPlayer.left + -100 + "px";
                    if (numLeft < 100) {
                        player.style.left = 0;
                    }
                    break;
                case "right":
                    const numRight = Math.floor(positionPlayer.right);
                    player.style.left = positionPlayer.left + 100 + "px";
                    if (numRight > 300) {
                        player.style.left = 78 + "%";
                    }
                    break;
                case "top":
                    const numTop = Math.floor(positionPlayer.top);
                    player.style.top = positionPlayer.top + -100 + "px";
                    if (numTop < 100) {
                        player.style.top = 0;
                    }
                    break;
                case "bottom":
                    const numBottom = Math.floor(positionPlayer.bottom);
                    player.style.top = positionPlayer.top + 100 + "px";
                    if (numBottom > 300) {
                        player.style.top = 78 + "%";
                    }
                    break;
            }
        }
        /**
     * Teste de correção de movimentação
     * let positionGameBoard = window.getComputedStyle(gameBoard);
    let positionPlayer = window.getComputedStyle(player);
    switch (direct) {
        case "left":
            const numLeft = parseInt(positionPlayer.left);
            player.style.left = numLeft + -100 + "px";
            if (numLeft < parseInt(positionGameBoard.width)) {
                player.style.left = 0;
            }
            break;
        case "right":
            const numRight = parseInt(positionPlayer.right);
            player.style.left = numRight + 100 + "px";
            if (numRight > parseInt(positionGameBoard.width)) {
                player.style.left = 100;
            }
            break;
        case "top":
            const numTop = parseInt(positionPlayer.top);
            player.style.top = numTop + -100 + "px";
            if (numTop < parseInt(positionGameBoard.height)) {
                player.style.top = 0;
            }
            break;
        case "bottom":
            const numBottom = parseInt(positionPlayer.bottom);
            player.style.top = numBottom + 100 + "px";
            if (numBottom > parseInt(positionGameBoard.height)) {
                player.style.top = 100;
            }
            break;
    }*/
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
                document.querySelector(".resultScore").innerHTML =
                    score.innerHTML;
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
     * Dispara o método que sorteia o nome das animações.
     * Dsitribui o nome sorteado das animações para cada inimigo.
     */
    function enemyAnimations01() {
        if (!isPaused) {
            enemy01.style.animation = "2s infinite ease-in-out";
            function randomAnimation() {
                if (!isPaused) {
                    const random = (min, max) =>
                        Math.floor(Math.random() * (max - min) + min);
                    const animationsName = [
                        "enemy02",
                        "enemy10",
                        "enemy01",
                        "enemy09",
                        "enemy03",
                        "enemy05",
                        "enemy04",
                        "enemy07",
                        "enemy06",
                        "enemy08"
                    ];
                    enemy01.style.animationName =
                        animationsName[random(0, animationsName.length)];
                }
            }
            randomAnimation();
        }
    }
    function enemyAnimations02() {
        if (!isPaused) {
            enemy02.style.animation = "2s infinite ease-in-out";
            function randomAnimation() {
                if (!isPaused) {
                    const random = (min, max) =>
                        Math.floor(Math.random() * (max - min) + min);
                    const animationsName = [
                        "enemy03",
                        "enemy04",
                        "enemy06",
                        "enemy05",
                        "enemy10",
                        "enemy02",
                        "enemy08",
                        "enemy07",
                        "enemy09",
                        "enemy01"
                    ];
                    enemy02.style.animationName =
                        animationsName[random(0, animationsName.length)];
                }
            }
            randomAnimation();
        }
    }
    function enemyAnimations03() {
        if (!isPaused) {
            enemy03.style.animation = "2s infinite ease-in-out";
            function randomAnimation() {
                if (!isPaused) {
                    const random = (min, max) =>
                        Math.floor(Math.random() * (max - min) + min);
                    const animationsName = [
                        "enemy02",
                        "enemy10",
                        "enemy03",
                        "enemy08",
                        "enemy05",
                        "enemy01",
                        "enemy07",
                        "enemy04",
                        "enemy06",
                        "enemy09"
                    ];
                    enemy03.style.animationName =
                        animationsName[random(0, animationsName.length)];
                }
            }
            randomAnimation();
        }
    }
    function shieldLeft() {
        if (!isPaused) {
            const random = (min, max) =>
                Math.floor(Math.random() * (max - min) + min);
            const lefts = ["0%", "25%", "50%", "75%", "90%"];
            shieldIcon.style.left = lefts[random(0, lefts.length)];
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
    // Ouvinte de evento para o botão de atirar
    botaoShoot.addEventListener("click", function () {
        if (!isPaused) {
            setTimeout(() => {
                bullet.style.cssText = "display:block; top:0%; opacity:100%;";
            }, 100);
            setTimeout(() => {
                bullet.style.cssText =
                    "display:block; top:-200px; opacity:100%;";
            }, 200);
            setTimeout(() => {
                bullet.style.cssText =
                    "display:block; top:-700px; opacity:100%;";
            }, 300);
            setTimeout(() => {
                bullet.style.cssText = "top: 0%; opacity: 0%; display:none;";
            }, 500);
        }
    });
    // Ouvinte de evento para o botão de ativar o escudo
    botaoShield.addEventListener("click", function () {
        if (!isPaused) {
            const playerPosition = player.getBoundingClientRect();
            if (numShield > 0 && botaoShield.style.opacity == 1) {
                setTimeout(() => {
                    player.style.top = playerPosition.top;
                    player.style.left = playerPosition.left;
                    player.style.backgroundColor = "#62ceffe2";
                    player.style.boxShadow = "2px 10px 26px rgb(51,162,254)";
                    player.style.backgroundSize = "70% 70%";
                    player.style.outline = "5px solid #008cff";
                    player.style.opacity = "70%";
                    player.style.borderRadius = "50%";
                    numShield--;
                    shieldNum.innerHTML = numShield + "";
                    botaoShield.style.opacity = 0.5;
                }, 100);
                setTimeout(() => {
                    player.style.top = playerPosition.top;
                    player.style.left = playerPosition.left;
                    player.style.backgroundColor = "#62ceff00";
                    player.style.boxShadow = "none";
                    player.style.backgroundSize = "100% 100%";
                    player.style.outline = "none";
                    player.style.opacity = 1;
                    player.style.borderRadius = "0%";
                    if (numShield <= 0) {
                        numShield = 0;
                        shieldNum.innerHTML = numShield + "";
                        botaoShield.style.opacity = 0.5;
                    } else {
                        botaoShield.style.opacity = 1;
                    }
                }, 10000);
            }
        }
    });
    botaoStop.addEventListener("click", function () {
        if (isPaused == false) {
            pausarjogo();
        } else {
            retomarjogo();
        }
    });
    // Ouvinte de evento para o botão de jogar
    botaoPlay.addEventListener("click", function () {
        initialGame.style.display = "none";
        gameBoard.style.display = "block";
        body.style.animation = "background 4s ease-in-out";
        player.style.outline = "none";
        botoes.style.display = "flex";
        if (!isPaused) {
            setInterval(kill, 40);
            setInterval(score, 260);
            setInterval(colisao, 290);
            setInterval(colisaoIcone, 40);
            setInterval(enemyAnimations01, 2000);
            setInterval(enemyAnimations02, 2000);
            setInterval(enemyAnimations03, 2000);
            setInterval(animationShield, 5000);
            setInterval(shieldLeft, 7000);
        }
    });
});
