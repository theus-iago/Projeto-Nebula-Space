function checkRadioPadrao() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skinPadrao") == "desbloqueada" &&
        radioPadrao.checked == true
    ) {
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radioPadrao.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radioPadrao.value}.png`;
        });
    }
}
function checkRadioPadrao02() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skin02") == "desbloqueada" &&
        radio02.checked == false
    ) {
        document.getElementsByClassName("preco")[1].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin02.style.cssText = "border: 5px solid blue;";
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
    }
    if (
        localStorage.getItem("skin02") == "desbloqueada" &&
        radio02.checked == true
    ) {
        document.getElementsByClassName("preco")[1].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin02.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio02.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio02.value}.png`;
        });
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
    }
}
function checkRadioPadrao03() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skin03") == "desbloqueada" &&
        radio03.checked == false
    ) {
        document.getElementsByClassName("preco")[2].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin03.style.cssText = "border: 5px solid blue;";
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
    }
    if (
        localStorage.getItem("skin03") == "desbloqueada" &&
        radio03.checked == true
    ) {
        document.getElementsByClassName("preco")[2].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin03.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio03.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio03.value}.png`;
        });
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
    }
}
function checkRadioPadrao04() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skin04") == "desbloqueada" &&
        radio04.checked == false
    ) {
        document.getElementsByClassName("preco")[3].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin04.style.cssText = "border: 5px solid blue;";
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
    }
    if (
        localStorage.getItem("skin04") == "desbloqueada" &&
        radio04.checked == true
    ) {
        document.getElementsByClassName("preco")[3].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin04.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio04.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio04.value}.png`;
        });
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
    }
}
function checkRadioPadrao05() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skin05") == "desbloqueada" &&
        radio05.checked == false
    ) {
        document.getElementsByClassName("preco")[4].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin05.style.cssText = "border: 5px solid blue;";
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
    }
    if (
        localStorage.getItem("skin05") == "desbloqueada" &&
        radio05.checked == true
    ) {
        document.getElementsByClassName("preco")[4].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin05.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio05.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio05.value}.png`;
        });
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
    }
}
function checkRadioPadrao06() {
    const positionPlayer = player.getBoundingClientRect();
    if (
        localStorage.getItem("skin06") == "desbloqueada" &&
        radio06.checked == false
    ) {
        document.getElementsByClassName("preco")[5].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin06.style.cssText = "border: 5px solid blue;";
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
    }
    if (
        localStorage.getItem("skin06") == "desbloqueada" &&
        radio06.checked == true
    ) {
        document.getElementsByClassName("preco")[5].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin06.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio06.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio06.value}.png`;
        });
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
    }
}
function checkRadioPadrao07() {
    if (
        localStorage.getItem("skin07") == "desbloqueada" &&
        radio07.checked == false
    ) {
        document.getElementsByClassName("preco")[6].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin07.style.cssText = "border: 5px solid blue;";
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
    }
    if (
        localStorage.getItem("skin07") == "desbloqueada" &&
        radio07.checked == true
    ) {
        const player = document.querySelector("#player");
        let positionPlayer = player.getBoundingClientRect();
        document.getElementsByClassName("preco")[6].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin07.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio07.value}.png');`;
        lifes.forEach(elements => {
            elements.src = `./images/${radio07.value}.png`;
        });
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
    }
}
function unCheckPadrao() {
    if (
        localStorage.getItem("skinPadrao") == "desbloqueada" &&
        radioPadrao.checked == true
    ) {
        document.getElementsByClassName("preco")[0].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skinPadrao.style.cssText = "border: 5px solid #1e1e1e;";
        imgPadrao.style.display = "none";
        preco02.innerHTML = "Nebula";
    } else if (
        localStorage.getItem("skinPadrao") == "desbloqueada" &&
        radioPadrao.checked == false
    ) {
        document.getElementsByClassName("preco")[0].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skinPadrao.style.cssText = "border: 5px solid blue;";
        imgPadrao.style.display = "none";
        precoPadrao.innerHTML = "Nebula";
    }
}
function unCheck02() {
    if (
        localStorage.getItem("skin02") == "desbloqueada" &&
        radio02.checked == true
    ) {
        document.getElementsByClassName("preco")[1].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin02.style.cssText = "border: 5px solid #1e1e1e;";
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
    } else if (
        localStorage.getItem("skin02") == "desbloqueada" &&
        radio02.checked == false
    ) {
        document.getElementsByClassName("preco")[1].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin02.style.cssText = "border: 5px solid blue;";
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
    }
}
function unCheck03() {
    if (
        localStorage.getItem("skin03") == "desbloqueada" &&
        radio03.checked == true
    ) {
        document.getElementsByClassName("preco")[2].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin03.style.cssText = "border: 5px solid #1e1e1e;";
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
    } else if (
        localStorage.getItem("skin03") == "desbloqueada" &&
        radio03.checked == false
    ) {
        document.getElementsByClassName("preco")[2].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin03.style.cssText = "border: 5px solid blue;";
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
    }
}
function unCheck04() {
    if (
        localStorage.getItem("skin04") == "desbloqueada" &&
        radio04.checked == true
    ) {
        document.getElementsByClassName("preco")[3].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin04.style.cssText = "border: 5px solid #1e1e1e;";
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
    } else if (
        localStorage.getItem("skin04") == "desbloqueada" &&
        radio04.checked == false
    ) {
        document.getElementsByClassName("preco")[3].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin04.style.cssText = "border: 5px solid blue;";
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
    }
}
function unCheck05() {
    if (
        localStorage.getItem("skin05") == "desbloqueada" &&
        radio05.checked == true
    ) {
        document.getElementsByClassName("preco")[4].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin05.style.cssText = "border: 5px solid #1e1e1e;";
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
    } else if (
        localStorage.getItem("skin05") == "desbloqueada" &&
        radio05.checked == false
    ) {
        document.getElementsByClassName("preco")[4].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin05.style.cssText = "border: 5px solid blue;";
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
    }
}
function unCheck06() {
    if (
        localStorage.getItem("skin06") == "desbloqueada" &&
        radio06.checked == true
    ) {
        document.getElementsByClassName("preco")[5].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin06.style.cssText = "border: 5px solid #1e1e1e;";
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
    } else if (
        localStorage.getItem("skin06") == "desbloqueada" &&
        radio06.checked == false
    ) {
        document.getElementsByClassName("preco")[5].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin06.style.cssText = "border: 5px solid blue;";
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
    }
}
function unCheck07() {
    if (
        localStorage.getItem("skin07") == "desbloqueada" &&
        radio07.checked == true
    ) {
        document.getElementsByClassName("preco")[6].style.cssText =
            "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
        skin07.style.cssText = "border: 5px solid #1e1e1e;";
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
    } else if (
        localStorage.getItem("skin07") == "desbloqueada" &&
        radio07.checked == false
    ) {
        document.getElementsByClassName("preco")[6].style.cssText =
            "background-color: blue; border-top: 5px solid blue;";
        skin07.style.cssText = "border: 5px solid blue;";
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
    }
}
setInterval(unCheck02, 30);
setInterval(unCheck03, 30);
setInterval(unCheck04, 30);
setInterval(unCheck05, 30);
setInterval(unCheck06, 30);
setInterval(unCheck07, 30);
function checkRadio02() {
    if (radio02.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin02") == "") {
            localStorage.setItem("skin02", "bloqueada");
        }
        if (localStorage.getItem("skin02") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Cyber?`;
            buy02 = true;
            noBuy02 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 100 &&
                    localStorage.getItem("skin02") == "bloqueada" &&
                    buy02 == true &&
                    noBuy02 == false &&
                    radio02.checked == true
                ) {
                    alert("skin Cyber desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 100;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin02", "desbloqueada");
                    checkRadioPadrao02();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 100 &&
                    localStorage.getItem("skin02") == "bloqueada" &&
                    buy02 == true &&
                    noBuy02 == false &&
                    radio02.checked == true
                ) {
                    buy02 = false;
                    noBuy02 = true;
                    alert("Valor insuficiente!");
                    questShop.style.display = "none";
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
function checkRadio03() {
    if (radio03.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin03") == "") {
            localStorage.setItem("skin03", "bloqueada");
        }
        if (localStorage.getItem("skin03") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Slicky?`;
            buy03 = true;
            noBuy03 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 180 &&
                    localStorage.getItem("skin03") == "bloqueada" &&
                    buy03 == true &&
                    noBuy03 == false &&
                    radio03.checked == true
                ) {
                    alert("skin Slicky desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 180;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin03", "desbloqueada");
                    checkRadioPadrao03();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 180 &&
                    localStorage.getItem("skin03") == "bloqueada" &&
                    buy03 == true &&
                    noBuy03 == false &&
                    radio03.checked == true
                ) {
                    buy03 = false;
                    noBuy03 = true;
                    alert("Valor insuficiente!");
                    questShop.style.display = "none";
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
function checkRadio04() {
    if (radio04.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin04") == "") {
            localStorage.setItem("skin04", "bloqueada");
        }
        if (localStorage.getItem("skin04") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Treck?`;
            buy04 = true;
            noBuy04 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 220 &&
                    localStorage.getItem("skin04") == "bloqueada" &&
                    buy04 == true &&
                    noBuy04 == false &&
                    radio04.checked == true
                ) {
                    alert("skin Treck desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 220;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin04", "desbloqueada");
                    checkRadioPadrao04();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 220 &&
                    localStorage.getItem("skin04") == "bloqueada" &&
                    buy04 == true &&
                    noBuy04 == false &&
                    radio04.checked == true
                ) {
                    buy04 = false;
                    noBuy04 = true;
                    questShop.style.display = "none";
                    alert("Valor insuficiente!");
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
function checkRadio05() {
    if (radio05.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin05") == "") {
            localStorage.setItem("skin05", "bloqueada");
        }
        if (localStorage.getItem("skin05") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Dig?`;
            buy05 = true;
            noBuy05 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 250 &&
                    localStorage.getItem("skin05") == "bloqueada" &&
                    buy05 == true &&
                    noBuy05 == false &&
                    radio05.checked == true
                ) {
                    alert("skin Dig desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 250;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin05", "desbloqueada");
                    checkRadioPadrao05();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 250 &&
                    localStorage.getItem("skin05") == "bloqueada" &&
                    buy05 == true &&
                    noBuy05 == false &&
                    radio05.checked == true
                ) {
                    buy05 = false;
                    noBuy05 = true;
                    alert("Valor insuficiente!");
                    questShop.style.display = "none";
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
function checkRadio06() {
    if (radio06.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin06") == "") {
            localStorage.setItem("skin06", "bloqueada");
        }
        if (localStorage.getItem("skin06") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Phitom?`;
            buy06 = true;
            noBuy06 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 300 &&
                    localStorage.getItem("skin06") == "bloqueada" &&
                    buy06 == true &&
                    noBuy06 == false &&
                    radio06.checked == true
                ) {
                    alert("skin Phitom desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 300;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin06", "desbloqueada");
                    checkRadioPadrao06();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 300 &&
                    localStorage.getItem("skin06") == "bloqueada" &&
                    buy06 == true &&
                    noBuy06 == false &&
                    radio06.checked == true
                ) {
                    buy06 = false;
                    noBuy06 = true;
                    alert("Valor insuficiente!");
                    questShop.style.display = "none";
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
function checkRadio07() {
    if (radio07.checked) {
        console.log("selecionado");
        if (localStorage.getItem("skin07") == "") {
            localStorage.setItem("skin07", "bloqueada");
        }
        if (localStorage.getItem("skin07") == "bloqueada") {
            questShop.style.display = "grid";
            questShop.style.top = "8%";
            tituloShop.innerHTML = `Deseja mesmo comprar a skin Volks?`;
            buy07 = true;
            noBuy07 = false;
            botaoYesShop.addEventListener("click", function () {
                if (
                    parseInt(localStorage.getItem("Coins")) >= 330 &&
                    localStorage.getItem("skin07") == "bloqueada" &&
                    buy07 == true &&
                    noBuy07 == false &&
                    radio07.checked == true
                ) {
                    alert("skin Volks desbloqueada!");
                    numCoin = parseInt(localStorage.getItem("Coins")) - 330;
                    localStorage.setItem("Coins", numCoin);
                    localStorage.setItem("skin07", "desbloqueada");
                    checkRadioPadrao07();
                    questShop.style.display = "none";
                } else if (
                    parseInt(localStorage.getItem("Coins")) < 330 &&
                    localStorage.getItem("skin07") == "bloqueada" &&
                    buy07 == true &&
                    noBuy07 == false &&
                    radio07.checked == true
                ) {
                    buy07 = false;
                    noBuy07 = true;
                    alert("Valor insuficiente!");
                    questShop.style.display = "none";
                }
            });
            botaoNoShop.addEventListener("click", function () {
                questShop.style.display = "none";
            });
        }
    }
}
radios.forEach((elements, indice) => {
  elements.addEventListener("click", (event) => {
    try {
    let radioChecked = event.target.value;
    alert(radioChecked);
    }catch (err) {
      alert("Erro")
    }
  });
});
radioPadrao.addEventListener("click", () => {
    checkRadioPadrao();
});
radio02.addEventListener("click", () => {
    checkRadio02();
    checkRadioPadrao02();
});
radio03.addEventListener("click", () => {
    checkRadio03();
    checkRadioPadrao03();
});
radio04.addEventListener("click", () => {
    checkRadio04();
    checkRadioPadrao04();
});
radio05.addEventListener("click", () => {
    checkRadio05();
    checkRadioPadrao05();
});
radio06.addEventListener("click", () => {
    checkRadio06();
    checkRadioPadrao06();
});
radio07.addEventListener("click", () => {
    checkRadio07();
    checkRadioPadrao07();
});
