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
// Ouvinte de evento para o botão de atirar
botaoShoot.addEventListener("click", function () {
    if (!isPaused) {
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
                if (!isPaused) {
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
                }
            }, 10000);
        }
    }
});
botaoStop.addEventListener("click", function () {
    if (!isReseted) {
        if (isPaused == false) {
            pausarjogo();
        } else {
            retomarjogo();
        }
    }
});
botaoReset.addEventListener("click", function () {
    if (!isReseted) {
        isReseted = true;
        isPaused = true;
        pausarjogo();
        player.style.display = "none";
        enemy01.style.display = "none";
        enemy02.style.display = "none";
        enemy03.style.display = "none";
        shieldIcon.style.display = "none";
        coinIcon.style.display = "none";
        quest.style.display = "grid";
        botaoYes.addEventListener("click", function () {
            location.reload();
        });
        botaoNo.addEventListener("click", function () {
            isReseted = false;
            isPaused = false;
            retomarjogo();
            player.style.display = "block";
            enemy01.style.display = "block";
            enemy02.style.display = "block";
            enemy03.style.display = "block";
            shieldIcon.style.display = "flex";
            coinIcon.style.display = "flex";
            quest.style.display = "none";
        });
    } else {
        isReseted = false;
        isPaused = false;
        retomarjogo();
        player.style.display = "block";
        enemy01.style.display = "block";
        enemy02.style.display = "block";
        enemy03.style.display = "block";
        shieldIcon.style.display = "flex";
        coinIcon.style.display = "flex";
        quest.style.display = "none";
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
        setInterval(colisaoIconeShield, 40);
        setInterval(colisaoIconeCoin, 40);
        setInterval(enemyAnimations01, 2000);
        setInterval(enemyAnimations02, 2000);
        setInterval(enemyAnimations03, 2000);
        setInterval(animationShield, 5000);
        setInterval(animationCoin, 5000);
        setInterval(shieldLeft, 7000);
        setInterval(coinLeft, 7000);
    }
});

botaoShop.addEventListener("click", function () {
    initialGame.style.display = "none";
    gameBoard.style.display = "none";
    shopGame.style.display = "grid";
});
botaoBack.addEventListener("click", function() {
  back();
})