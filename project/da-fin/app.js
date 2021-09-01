let colorImage = document.getElementById("colorImage");
let button2 = document.getElementById("button2");

function changeToBW() {

    if (colorImage.getAttribute('src') === "img/paper-0.png") {
        colorImage.setAttribute('src', "img/paper-1.png");
    }
    else {
        colorImage.setAttribute('src', "img/paper-0.png");
    }
}

button2.addEventListener("click", changeToBW);
