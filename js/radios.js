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
let buy02 = false;
let buy03 = false;
let buy04 = false;
let buy05 = false;
let buy06 = false;
let buy07 = false;
function checkRadioPadrao02() {
  const positionPlayer = player.getBoundingClientRect();
    if(localStorage.getItem('skin02') == "desbloqueada" && radio02.checked == false){
        document.getElementsByClassName("preco")[1].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin02.style.cssText = "border: 5px solid blue;";
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
      }
    if(localStorage.getItem('skin02') == "desbloqueada" && radio02.checked == true){
        document.getElementsByClassName("preco")[1].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin02.style.cssText = "border: 5px solid #1e1e1e;";
       player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio02.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio02.value}.png`;
        img02.style.display = "none";
        preco02.innerHTML = "Cyber";
      }
}
function checkRadioPadrao03() {
  const positionPlayer = player.getBoundingClientRect();
    if(localStorage.getItem('skin03') == "desbloqueada" && radio03.checked == false){
        document.getElementsByClassName("preco")[2].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin03.style.cssText = "border: 5px solid blue;";
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
      }
    if(localStorage.getItem('skin03') == "desbloqueada" && radio03.checked == true){
        document.getElementsByClassName("preco")[2].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin03.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio03.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio03.value}.png`;
        img03.style.display = "none";
        preco03.innerHTML = "Slicky";
      }
}
function checkRadioPadrao04() {
  const positionPlayer = player.getBoundingClientRect();
    if(localStorage.getItem('skin04') == "desbloqueada" && radio04.checked == false){
        document.getElementsByClassName("preco")[3].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin04.style.cssText = "border: 5px solid blue;";
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
      }
    if(localStorage.getItem('skin04') == "desbloqueada" && radio04.checked == true){
        document.getElementsByClassName("preco")[3].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin04.style.cssText = "border: 5px solid #1e1e1e;";
       player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio04.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio04.value}.png`;
        img04.style.display = "none";
        preco04.innerHTML = "Treck";
      }
}
function checkRadioPadrao05() {
  const positionPlayer = player.getBoundingClientRect();
    if(localStorage.getItem('skin05') == "desbloqueada" && radio05.checked == false){
        document.getElementsByClassName("preco")[4].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin05.style.cssText = "border: 5px solid blue;";
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
      }
    if(localStorage.getItem('skin05') == "desbloqueada" && radio05.checked == true){
        document.getElementsByClassName("preco")[4].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin05.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio05.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio05.value}.png`;
        img05.style.display = "none";
        preco05.innerHTML = "Dig";
      }
}
function checkRadioPadrao06() {
  const positionPlayer = player.getBoundingClientRect();
    if(localStorage.getItem('skin06') == "desbloqueada" && radio06.checked == false){
        document.getElementsByClassName("preco")[5].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin06.style.cssText = "border: 5px solid blue;";
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
      }
    if(localStorage.getItem('skin06') == "desbloqueada" && radio06.checked == true){
        document.getElementsByClassName("preco")[5].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin06.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio06.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio06.value}.png`;
        img06.style.display = "none";
        preco06.innerHTML = "Phitom";
      }
}
function checkRadioPadrao07() {
    if(localStorage.getItem('skin07') == "desbloqueada" && radio07.checked == false){
        document.getElementsByClassName("preco")[6].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin07.style.cssText = "border: 5px solid blue;";
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
      }
    if(localStorage.getItem('skin07') == "desbloqueada" && radio07.checked == true){
      const player = document.querySelector("#player");
  let positionPlayer = player.getBoundingClientRect();
        document.getElementsByClassName("preco")[6].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin07.style.cssText = "border: 5px solid #1e1e1e;";
       player.style.top = positionPlayer.top;
        player.style.left = positionPlayer.left;
        player.style.cssText = `background-image: url('./images/${radio07.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio07.value}.png`;
        img07.style.display = "none";
        preco07.innerHTML = "Volks";
      }
}
function unCheck02() {
  if(localStorage.getItem('skin02') == "desbloqueada" && radio02.checked == true) {
    document.getElementsByClassName("preco")[1].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin02.style.cssText = "border: 5px solid #1e1e1e;";
    img02.style.display = "none";
        preco02.innerHTML = "Cyber";
  }else if(localStorage.getItem('skin02') == "desbloqueada" && radio02.checked == false) {
    document.getElementsByClassName("preco")[1].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin02.style.cssText = "border: 5px solid blue;";
    img02.style.display = "none";
        preco02.innerHTML = "Cyber";
    
  }
}
function unCheck03() {
  if(localStorage.getItem('skin03') == "desbloqueada" && radio03.checked == true) {
    document.getElementsByClassName("preco")[2].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin03.style.cssText = "border: 5px solid #1e1e1e;";
    img03.style.display = "none";
        preco03.innerHTML = "Slicky";
  }else if(localStorage.getItem('skin03') == "desbloqueada" && radio03.checked == false) {
    document.getElementsByClassName("preco")[2].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin03.style.cssText = "border: 5px solid blue;";
    img03.style.display = "none";
        preco03.innerHTML = "Slicky";
    
  }
}
function unCheck04() {
  if(localStorage.getItem('skin04') == "desbloqueada" && radio04.checked == true) {
    document.getElementsByClassName("preco")[3].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin04.style.cssText = "border: 5px solid #1e1e1e;";
    img04.style.display = "none";
        preco04.innerHTML = "Treck";
  }else if(localStorage.getItem('skin04') == "desbloqueada" && radio04.checked == false) {
    document.getElementsByClassName("preco")[3].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin04.style.cssText = "border: 5px solid blue;";
    img04.style.display = "none";
        preco04.innerHTML = "Treck";
    
  }
}
function unCheck05() {
  if(localStorage.getItem('skin05') == "desbloqueada" && radio05.checked == true) {
    document.getElementsByClassName("preco")[4].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin05.style.cssText = "border: 5px solid #1e1e1e;";
    img05.style.display = "none";
        preco05.innerHTML = "Dig";
  }else if(localStorage.getItem('skin05') == "desbloqueada" && radio05.checked == false) {
    document.getElementsByClassName("preco")[4].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin05.style.cssText = "border: 5px solid blue;";
    img05.style.display = "none";
        preco05.innerHTML = "Dig";
    
  }
}
function unCheck06() {
  if(localStorage.getItem('skin06') == "desbloqueada" && radio06.checked == true) {
    document.getElementsByClassName("preco")[5].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin06.style.cssText = "border: 5px solid #1e1e1e;";
    img06.style.display = "none";
        preco06.innerHTML = "Phitom";
  }else if(localStorage.getItem('skin06') == "desbloqueada" && radio06.checked == false) {
    document.getElementsByClassName("preco")[5].style.cssText = "background-color: blue; border-top: 5px solid blue;";
      skin06.style.cssText = "border: 5px solid blue;";
    img06.style.display = "none";
        preco06.innerHTML = "Phitom";
    
  }
}
function unCheck07() {
  if(localStorage.getItem('skin07') == "desbloqueada" && radio07.checked == true) {
    document.getElementsByClassName("preco")[6].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin07.style.cssText = "border: 5px solid #1e1e1e;";
    img07.style.display = "none";
        preco07.innerHTML = "Volks";
  }else if(localStorage.getItem('skin07') == "desbloqueada" && radio07.checked == false) {
    document.getElementsByClassName("preco")[6].style.cssText = "background-color: blue; border-top: 5px solid blue;";
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
  if(radio02.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin02') == "") {
    localStorage.setItem('skin02', "bloqueada");
  }
  if(localStorage.getItem('skin02') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Cyber?`;
  buy02 = true;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 100 && localStorage.getItem('skin02') == "bloqueada" && buy02 == true) {
      alert("skin02 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 100;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin02', "desbloqueada");
      checkRadioPadrao02();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 100 && localStorage.getItem('skin02') == "bloqueada" && buy02 == true) {
      alert("Valor insuficiente!");
      buy02 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
function checkRadio03() {
  if(radio03.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin03') == "") {
    localStorage.setItem('skin03', "bloqueada");
  }
  if(localStorage.getItem('skin03') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Slicky?`;
  buy03 = true
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 180 && localStorage.getItem('skin03') == "bloqueada" && buy03 == true) {
      alert("skin03 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 180;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin03', "desbloqueada");
      checkRadioPadrao03();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 180 && localStorage.getItem('skin03') == "bloqueada" && buy03 == true) {
      alert("Valor insuficiente!");
      buy03 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
function checkRadio04() {
  if(radio04.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin04') == "") {
    localStorage.setItem('skin04', "bloqueada");
  }
  if(localStorage.getItem('skin04') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Treck?`;
  buy04 = true
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 220 && localStorage.getItem('skin04') == "bloqueada" && buy04 == true) {
      alert("skin04 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 220;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin04', "desbloqueada");
      checkRadioPadrao04();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 220 && localStorage.getItem('skin04') == "bloqueada" && buy04 == true) {
      alert("Valor insuficiente!");
      buy04 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
function checkRadio05() {
  if(radio05.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin05') == "") {
    localStorage.setItem('skin05', "bloqueada");
  }
  if(localStorage.getItem('skin05') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Dig?`;
  buy05 = true
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 250 && localStorage.getItem('skin05') == "bloqueada" && buy05 == true) {
      alert("skin05 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 250;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin05', "desbloqueada");
      checkRadioPadrao05();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 250 && localStorage.getItem('skin05') == "bloqueada" && buy05 == true) {
      alert("Valor insuficiente!");
      buy05 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
function checkRadio06() {
  if(radio06.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin06') == "") {
    localStorage.setItem('skin06', "bloqueada");
  }
  if(localStorage.getItem('skin06') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Phitom?`;
  buy06 = true
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 300 && localStorage.getItem('skin06') == "bloqueada" && buy06 == true) {
      alert("skin06 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 300;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin06', "desbloqueada");
      checkRadioPadrao06();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 300 && localStorage.getItem('skin06') == "bloqueada" && buy06 == true) {
      alert("Valor insuficiente!");
      buy06 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
function checkRadio07() {
  if(radio07.checked) {
    console.log("selecionado")
  if(localStorage.getItem('skin07') == "") {
    localStorage.setItem('skin07', "bloqueada");
  }
  if(localStorage.getItem('skin07') == "bloqueada") {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Volks?`;
  buy07 = true
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) >= 330 && localStorage.getItem('skin07') == "bloqueada" && buy07 == true) {
      alert("skin07 desbloqueada!");
      numCoin = parseInt(localStorage.getItem('Coins')) - 330;
      localStorage.setItem('Coins',numCoin);
      localStorage.setItem('skin07', "desbloqueada");
      checkRadioPadrao07();
      questShop.style.display = "none";
    }else if(parseInt(localStorage.getItem('Coins')) < 330 && localStorage.getItem('skin07') == "bloqueada" && buy07 == true) {
      alert("Valor insuficiente!");
      buy07 = false
      questShop.style.display = "none";
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
  }
  }
  }
radio02.addEventListener('click', function() {
  checkRadio02();
  checkRadioPadrao02();
});
radio03.addEventListener('click', function() {
  checkRadio03();
  checkRadioPadrao03();
});
radio04.addEventListener('click', function() {
  checkRadio04();
  checkRadioPadrao04();
});
radio05.addEventListener('click', function() {
  checkRadio05();
  checkRadioPadrao05();
});
radio06.addEventListener('click', function() {
  checkRadio06();
  checkRadioPadrao06();
});
radio07.addEventListener('click', function() {
  checkRadio07();
  checkRadioPadrao07();
});
