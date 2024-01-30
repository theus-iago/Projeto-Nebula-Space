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
}
document.addEventListener("keydown", function (event) {
    let positionPlayer = player.getBoundingClientRect();
    switch (event.key) {
        case "ArrowLeft":
        case "a":
            const numLeft = Math.floor(positionPlayer.left);
            player.style.left = positionPlayer.left + -100 + "px";
            if (numLeft < 100) {
                player.style.left = 0;
            }
            break;
        case "ArrowRight":
        case "d":
            const numRight = Math.floor(positionPlayer.right);
            player.style.left = positionPlayer.left + 100 + "px";
            if (numRight > 300) {
                player.style.left = 78 + "%";
            }
            break;
        case "ArrowUp":
        case "w":
            const numTop = Math.floor(positionPlayer.top);
            player.style.top = positionPlayer.top + -100 + "px";
            if (numTop < 100) {
                player.style.top = 0;
            }
            break;
        case "ArrowDown":
        case "s":
            const numBottom = Math.floor(positionPlayer.bottom);
            player.style.top = positionPlayer.top + 100 + "px";
            if (numBottom > 300) {
                player.style.top = 78 + "%";
            }
            break;
    }
});
