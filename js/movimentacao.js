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
