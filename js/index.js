const body = document.querySelector("body");
const player = document.querySelector("#player");
const enemy01 = document.querySelector("#enemy01");
const enemy02 = document.querySelector("#enemy02");
const enemy03 = document.querySelector("#enemy03");
const bullet = document.querySelector(".bullet");
const gameBoard = document.querySelector(".game-board");
const shield = document.querySelector(".shield");
const positionPlayer = player.getBoundingClientRect();
const positionEnemy01 = enemy01.getBoundingClientRect();
const positionEnemy02 = enemy02.getBoundingClientRect();
const positionEnemy03 = enemy03.getBoundingClientRect();
const positionGameBoard = gameBoard.getBoundingClientRect();
const positionBody = body.getBoundingClientRect();
var vidaAtual = 3;
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
                        "height:100vh; width:100vw; display:flex; align-items:center; justify-content:center; flex-direction:column;";
                }, 100);
                document.body.addEventListener("click", function () {
                    location.reload();
                });
            }
        }, 100);
        player.style.animation = "";
    }else {
      /*positionPlayer.left = positionPlayer.left;
      positionPlayer.right = positionPlayer.right;
      positionPlayer.top = positionPlayer.top;
      positionPlayer.bottom = positionPlayer.bottom;*/
    }
}
function moverLeft() {
    let positionPlayer = player.getBoundingClientRect();
    let num = parseInt(positionPlayer.left);
    positionPlayer.left < 100
      player.style.left = positionPlayer.left + -100 + "px";
  if(num < 100) {
    player.style.left = 0;
  }
    console.log("Left: "+num);
}
function moverRight() {
    let positionPlayer = player.getBoundingClientRect();
    let num = parseInt(positionPlayer.right)
    player.style.left = positionPlayer.left + 100 + "px";
    if(num > 300) {
      gameBoard.style.borderColor = "blue";
    player.style.left = 78 + "%";
    }
    console.log("Right:"+num)
}
function moverTop() {
    let positionPlayer = player.getBoundingClientRect();
    player.style.top = positionPlayer.top + -100 + "px";
}
function moverBottom() {
    let positionPlayer = player.getBoundingClientRect();
    player.style.top = positionPlayer.top + 100 + "px";
}
let numUnidade_Score = 0;
let numDezena_Score = 0;
let numCentena_Score = 0;
let numUnidade_ScoreM_Score = 0;
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
let numUnidade_Kills = 0;
let numDezena_Kills = 0;
let numCentena_Kills = 0;
let numUnidade_KillsM_Kills = 0;
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
        /*setTimeout(() => shield.appendChild(document.querySelector("#player")),400);
      setTimeout(() => player.style.cssText = "top:0%; left:0%;",500);*/
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
function shoot() {
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

    /*if(bullet.style.display=='block') {
      bullet.style.display = "none";
      if(bullet.style.display == 'none') {
          bullet.style.display = "block";
      }
    }*/
}
/*setInterval(enemyAnimations01, 2000);
setInterval(enemyAnimations02, 2000);
setInterval(enemyAnimations03, 2000);*/
setInterval(kill, 40);
setInterval(colisao, 290);
setInterval(score, 260);