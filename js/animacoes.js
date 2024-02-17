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
function animationCoin() {
    if (!isPaused) {
        coinIcons.forEach((elements) => {
          elements.style.animation = "coin01 5s infinite ease-in-out";
        elements.style.animationDelay = "5s";
        });
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "0%"});
        }, 100);
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "100%"});
        }, 200);
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "0%"});
        }, 300);
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "100%"});
        }, 400);
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "0%"});
        }, 500);
        setTimeout(() => {
          coinIcons.forEach((elements) => {
          elements.style.opacity = "100%"});
        }, 600);
    }
}
