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
radioPadrao.checked = true;
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
function checkRadio() {
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
    }else {
      document.getElementsByClassName("preco")[0].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skinPadrao.style.cssText = "border: 5px solid #0fbd48;";
    }
    if (radio02.checked) {
        document.getElementsByClassName("preco")[1].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin02.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio02.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio02.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio02.value}.png`;
            buySkin02();
    }else {
      document.getElementsByClassName("preco")[1].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin02.style.cssText = "border: 5px solid #0fbd48;";
      questShop.style.display = "none";
    }
    if (radio03.checked) {
        document.getElementsByClassName("preco")[2].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin03.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('images/${radio03.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `images/${radio03.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `images/${radio03.value}.png`;
    }else {
      document.getElementsByClassName("preco")[2].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin03.style.cssText = "border: 5px solid #0fbd48;";
    }
    if (radio04.checked) {
        document.getElementsByClassName("preco")[3].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin04.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio04.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio04.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio04.value}.png`;
    }else {
      document.getElementsByClassName("preco")[3].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin04.style.cssText = "border: 5px solid #0fbd48;";
    }
    if (radio05.checked) {
        document.getElementsByClassName("preco")[4].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin05.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio05.value}.png')`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio05.value}.png`;
    }else {
      document.getElementsByClassName("preco")[4].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin05.style.cssText = "border: 5px solid #0fbd48;";
    }
    if (radio06.checked) {
        document.getElementsByClassName("preco")[5].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin06.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio06.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio06.value}.png`;
    }else {
      document.getElementsByClassName("preco")[5].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin06.style.cssText = "border: 5px solid #0fbd48;";
    }
    if (radio07.checked) {
        document.getElementsByClassName("preco")[6].style.cssText = "background-color: #1e1e1e; border-top: 5px solid #1e1e1e;";
      skin07.style.cssText = "border: 5px solid #1e1e1e;";
        player.style.cssText = `background-image: url('./images/${radio07.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio07.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio07.value}.png`;
    }else {
      document.getElementsByClassName("preco")[6].style.cssText = "background-color: #0fbd48; border-top: 5px solid #0fbd48;";
      skin07.style.cssText = "border: 5px solid #0fbd48;";
    }
}
radioPadrao.addEventListener("change", checkRadio);
radio02.addEventListener("change", checkRadio);
radio03.addEventListener("change", checkRadio);
radio04.addEventListener("change", checkRadio);
radio05.addEventListener("change", checkRadio);
radio06.addEventListener("change", checkRadio);
radio07.addEventListener("change", checkRadio);