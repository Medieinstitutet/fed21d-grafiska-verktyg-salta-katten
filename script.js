let dripBurger = document.querySelector(".dripBurger");
let openMenu = document.querySelector(".openMenu");
let topLayerClosed = document.querySelector(".topLayerClosed");
let topLayerOpen = document.querySelector(".topLayerOpen");

dripBurger.addEventListener("click", () => {
    openMenu.classList.toggle("displayNone");
    topLayerClosed.classList.toggle("displayNone");
    topLayerOpen.classList.toggle("displayNone");
});

let cookieButton = document.querySelectorAll(".cookieButton");
let cookieButtonText = document.querySelectorAll(".cookieButtonText");
let cookieDisclaimer = document.querySelector(".cookieDisclaimer");

cookieButton.forEach(button => {
    button.addEventListener("click", () => {
        cookieDisclaimer.classList.add("displayNone");
    });
});

cookieButtonText.forEach(text => {
    text.addEventListener("click", () => {
        cookieDisclaimer.classList.add("displayNone");
    });
});

let mobileMenuCLose = document.querySelectorAll(".mobileMenuClose");

mobileMenuCLose.forEach(item => {
    item.addEventListener("click", () => {
        openMenu.classList.add("displayNone");
    });
});
