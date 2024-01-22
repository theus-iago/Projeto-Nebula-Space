function buySkin02() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Cyber?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 100) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 100;
      localStorage.setItem('Coins', numCoin);
      skin02State = "desbloqueada";
      localStorage.setItem('skin02', skin02State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}
function buySkin03() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Strong?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 180) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 180;
      localStorage.setItem('Coins', numCoin);
      skin03State = "desbloqueada";
      localStorage.setItem('skin03', skin03State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}
function buySkin04() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Slinder?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 220) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 220;
      localStorage.setItem('Coins', numCoin);
      skin04State = "desbloqueada";
      localStorage.setItem('skin04', skin04State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}
function buySkin05() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Slinder?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 250) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 250;
      localStorage.setItem('Coins', numCoin);
      skin05State = "desbloqueada";
      localStorage.setItem('skin05', skin05State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}
function buySkin06() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Treck?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 300) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 300;
      localStorage.setItem('Coins', numCoin);
      skin06State = "desbloqueada";
      localStorage.setItem('skin06', skin06State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}
function buySkin07() {
  questShop.style.display = "grid";
  questShop.style.top = "8%";
  tituloShop.innerHTML = `Deseja mesmo comprar a skin Flamp?`;
  botaoYesShop.addEventListener("click", function() {
    if(parseInt(localStorage.getItem('Coins')) < 330) {
      alert("Valor insuficiente!");
    }else {
      numCoin = parseInt(localStorage.getItem('Coins')) - 330;
      localStorage.setItem('Coins', numCoin);
      skin07State = "desbloqueada";
      localStorage.setItem('skin07', skin07State);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}