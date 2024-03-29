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
        vidaAtual--;
        setTimeout(() => {
          player.style.animation = "death .6s ease-in-out";
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
              document.querySelector(".botoes").style.display =
              "none";
              document.querySelector(".game-over").style.cssText =
              "height:100vh; width:100vw; display:flex; align-items:center; justify-content:center; flex-direction:column;";
            }, 100);

            document.body.addEventListener("click", function () {
              location.reload();
            });
          }
        },
          100);
      } else {
        player.style.animation = "";
      }
    }
  }
}
function colisaoIconeShield() {
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
        () => (shieldIcon.style.animation = "death .6s ease-in-out"),
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

function colisaoIconeCoin() {
  function colisaoCoin(coin) {
    if (!isPaused) {
      const positionPlayer = player.getBoundingClientRect();
      const positionGameBoard = gameBoard.getBoundingClientRect();
      const positionCoinIcons = coin.getBoundingClientRect();
      if (
        positionPlayer.right >= positionCoinIcons.left + positionGameBoard.left &&
        positionPlayer.left <= positionCoinIcons.right + positionGameBoard.left &&
        positionPlayer.bottom >= positionCoinIcons.top + positionGameBoard.top &&
        positionPlayer.top <= positionCoinIcons.bottom + positionGameBoard.top
      ) {
        // Adiciona a classe "colidida" apenas na moeda que colidiu
        coin.classList.add("colidida");
        // Aplica a animação de morte apenas na moeda que colidiu
        coin.style.animation = "death .6s ease-in-out";
        setTimeout(() => {
          if (gameBoard.style.display != "none") {
            numCoin++;
            localStorage.setItem("Coins", numCoin);
          }
        },
          600);
      }
    }
  }
  coinIcons.forEach(colisaoCoin);
}