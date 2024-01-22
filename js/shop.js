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
      localStorage.setItem('skin02', unlock);
    }
  });
  botaoNoShop.addEventListener("click", function() {
    questShop.style.display = "none";
  });
}