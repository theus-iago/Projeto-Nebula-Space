const skinPadrao = document.querySelector("#skinPadrao");
const radioPadrao = document.querySelector("#skPadrao");
const skin02 = document.querySelector("#skin02");
const radio02 = document.querySelector("#sk02");
const skin03 = document.querySelector("#skin03");
const radio03 = document.querySelector("#sk03");
const skin04 = document.querySelector("#skin04");
const radio04 = document.querySelector("#sk04");
const skin05 = document.querySelector("#skin05");
const radio05 = document.querySelector("#sk05");
const skin06 = document.querySelector("#skin06");
const radio06 = document.querySelector("#sk06");
const skin07 = document.querySelector("#skin07");
const radio07 = document.querySelector("#sk07");
radioPadrao.checked = true

function checkRadioPadrao() {
    if (radioPadrao.checked) {
    document.getElementsByClassName("preco")[0].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skinPadrao.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radioPadrao.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radioPadrao.value}.png`;
    }else if(radioPadrao.checked == false) {
      document.getElementsByClassName("preco")[0].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skinPadrao.style.cssText = "border: 5px solid #0fbd48;";
    }
}
setInterval(checkRadioPadrao,30);
function checkRadio02() {
    if (radio02.checked == true && localStorage.getItem('skin02') == "bloqueada") {
            buySkin02();
    }
    if(radio02.checked == true && localStorage.getItem('skin02') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[1].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin02.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio02.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio02.value}.png`;
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
      }else {
      document.getElementsByClassName("preco")[1].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin02.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
}
setInterval(checkRadio02, 30);
function checkRadio03() {
    if (radio03.checked == true && localStorage.getItem('skin03') == "bloqueada") {
            buySkin03();
    }
    if(radio03.checked == true && localStorage.getItem('skin03') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[2].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin03.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio03.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio03.value}.png`;
        img03.style.display = "none";
        preco03.innerHTML = "Stronger";
      }else {
      document.getElementsByClassName("preco")[2].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin03.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
}
setInterval(checkRadio03, 30);
function checkRadio04() {
    if (radio04.checked == true && localStorage.getItem('skin04') == "bloqueada") {
            buySkin04();
    }
    if(radio04.checked == true && localStorage.getItem('skin04') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[3].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin04.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio04.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio04.value}.png`;
        img04.style.display = "none";
        preco04.innerHTML = "Slinder";
      }else {
      document.getElementsByClassName("preco")[3].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin04.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
}
setInterval(checkRadio04, 30);
function checkRadio05() {
    if (radio05.checked == true && localStorage.getItem('skin05') == "bloqueada") {
            buySkin05();
    }
    if(radio05.checked == true && localStorage.getItem('skin05') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[4].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin05.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio05.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio05.value}.png`;
        img05.style.display = "none";
        preco05.innerHTML = "Slinder";
      }else {
      document.getElementsByClassName("preco")[4].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin05.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
}
setInterval(checkRadio05, 30);
function checkRadio06() {
    if (radio06.checked == true && localStorage.getItem('skin06') == "bloqueada") {
            buySkin06();
    }
    if(radio06.checked == true && localStorage.getItem('skin06') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[5].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin06.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio06.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio06.value}.png`;
        img06.style.display = "none";
        preco06.innerHTML = "Treck";
      }else {
      document.getElementsByClassName("preco")[5].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin06.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
}
setInterval(checkRadio06, 30);
function checkRadio07() {
    if (radio07.checked == true && localStorage.getItem('skin07') == "bloqueada") {
      document.getElementsByClassName("preco")[6].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin07.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
            buySkin07();
    }
    if(radio07.checked == true && localStorage.getItem('skin07') == "desbloqueada"){
      alert("foi!")
        document.getElementsByClassName("preco")[6].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin07.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio07.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio07.value}.png`;
        img07.style.display = "none";
        preco07.innerHTML = "Treck";
      }
}
setInterval(checkRadio07, 30);


/*radio03.addEventListener("change", checkRadio03);
radio04.addEventListener("change", checkRadio04);
radio05.addEventListener("change", checkRadio05);
radio06.addEventListener("change", checkRadio06);
radio07.addEventListener("change", checkRadio07);*/