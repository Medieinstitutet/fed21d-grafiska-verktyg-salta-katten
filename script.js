let dripBurger = document.querySelector(".dripBurger");
let openMenu = document.querySelector(".openMenu");
let topLayerClosed = document.querySelector(".topLayerClosed");
let topLayerOpen = document.querySelector(".topLayerOpen");

dripBurger.addEventListener("click", () => {
    openMenu.classList.toggle("displayNone");
    topLayerClosed.classList.toggle("displayNone");
    topLayerOpen.classList.toggle("displayNone");
});