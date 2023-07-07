document.addEventListener("DOMContentLoaded",function(){
    const checkbox = document.querySelector("input[name=theme_switch]");
    const logoImage = document.querySelector(".logo-image");

    checkbox.addEventListener("change",function(){
        if (checkbox.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            logoImage.style.filter = "none";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            logoImage.style.filter = "invert(1)";
        }
    });

    if (checkbox.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        logoImage.style.filter = "none";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        logoImage.style.filter = "invert(1)";
    }
});

let checkbox = document.querySelector("input[name=theme_switch]");
let imgMain = document.querySelector(".img-main");
let background = document.querySelector("#background");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        imgMain.src = "img/Construction-inverted.png";
        background.style.backgroundImage = "url(/img/DJI_0030.png)";
    } else {
        imgMain.src = "img/Construction-not-inverted.png";
        background.style.backgroundImage = "url(/img/DJI_0030_branco.png)";
    }
});

