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
function coinLeft() {
    if (!isPaused) {
        const random = (min, max) =>
            Math.floor(Math.random() * (max - min) + min);
        const lefts = ["80%", "75%", "25%", "50%", "10%"];
        coinIcon.style.left = lefts[random(0, lefts.length)];
    }
}
