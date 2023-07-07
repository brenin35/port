document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector("input[name=theme_switch]");
    const logoImage = document.querySelector(".logo-image");

    checkbox.addEventListener("change", function () {
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
