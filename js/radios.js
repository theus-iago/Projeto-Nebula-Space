const radioPadrao = document.querySelector("#skPadrao");
const radio02 = document.querySelector("#sk02");
const radio03 = document.querySelector("#sk03");
const radio04 = document.querySelector("#sk04");
const radio05 = document.querySelector("#sk05");
const radio06 = document.querySelector("#sk06");
const radio07 = document.querySelector("#sk07");
function checkRadio() {
  /*switch(value) {
    case radioPadrao.value:
      player.style.backgroundImage = `url('./images/${radioPadrao.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radioPadrao.value}.png`;
      break;
    case radio02.value:
      player.style.backgroundImage = `url('./images/${radio02.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio02.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio02.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio02.value}.png`;
      break;
    case radio03.value:
      player.style.backgroundImage = `url('./images/${radio03.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio03.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio03.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio03.value}.png`;
      break;
    case radio04.value:
      player.style.backgroundImage = `url('./images/${radio04.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio04.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio04.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio04.value}.png`;
      break;
    case radio05.value:
      player.style.backgroundImage = `url('./images/${radio05.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio05.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio05.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio05.value}.png`;
      break;
    case radio06.value:
      player.style.backgroundImage = `url('./images/${radio06.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio06.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio06.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio06.value}.png`;
      break;
    case radio07.value:
      player.style.backgroundImage = `url('./images/${radio07.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radio07.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radio07.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radio07.value}.png`;
      break;
  }*/
    if (radioPadrao.checked) {
      console.log("Radio marcado: " + radioPadrao.value);
        player.style.backgroundImage = `url('./images/${radioPadrao.value}.png');`;
        document.getElementsByClassName(
            "lifes"
        )[0].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[1].src = `./images/${radioPadrao.value}.png`;
        document.getElementsByClassName(
            "lifes"
        )[2].src = `./images/${radioPadrao.value}.png`;
    }
    if (radio02.checked) {
        console.log("Radio marcado: " + radio02.value);
        player.style.cssText = `background-image:url('./images/skin02.png');`;
        document.getElementsByClassName("lifes")[0].src =
            "./images/skin02.png";
        document.getElementsByClassName("lifes")[1].src =
            "./images/skin02.png";
        document.getElementsByClassName("lifes")[2].src =
            "./images/skin02.png";
    }
    if (radio03.checked) {
        console.log("Radio marcado: " + radio03.value);
        player.style.cssText = `background-image:url('images/skin03.png');`;
        document.getElementsByClassName("lifes")[0].src =
            "images/skin03.png";
        document.getElementsByClassName("lifes")[1].src =
            "images/skin03.png";
        document.getElementsByClassName("lifes")[2].src =
            "images/skin03.png";
    }
    if (radio04.checked) {
        console.log("Radio marcado: " + radio04.value);
        player.style.cssText = `background-image:url('./images/${radio04.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            "./images/skin04.png";
        document.getElementsByClassName("lifes")[1].src =
            "./images/skin04.png";
        document.getElementsByClassName("lifes")[2].src =
            "./images/skin04.png";
    }
    if (radio05.checked) {
        console.log("Radio marcado: " + radio05.value);
        player.style.backgroundImage = `url('./images/${radio05.value}.png')`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio05.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio05.value}.png`;
    }
    if (radio06.checked) {
        console.log("Radio marcado: " + radio06.value);
        player.style.cssText = `background-image:url('./images/${radio06.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[1].src =
            `./images/${radio06.value}.png`;
        document.getElementsByClassName("lifes")[2].src =
            `./images/${radio06.value}.png`;
    }
    if (radio07.checked) {
        console.log("Radio marcado: " + radio07.value);
        player.style.cssText = `background-image:url('../images/${radio07.value}.png');`;
        document.getElementsByClassName("lifes")[0].src =
            "../images/skin07.png";
        document.getElementsByClassName("lifes")[1].src =
            "../images/skin07.png";
        document.getElementsByClassName("lifes")[2].src =
            "../images/skin07.png";
    }
}
radioPadrao.addEventListener("change", checkRadio);
radio02.addEventListener("change", checkRadio);
radio03.addEventListener("change", checkRadio);
radio04.addEventListener("change", checkRadio);
radio05.addEventListener("change", checkRadio);
radio06.addEventListener("change", checkRadio);
radio07.addEventListener("change", checkRadio);