// Menu button
let dripBurger = document.querySelector(".dripBurger");
let openMenu = document.querySelector(".openMenu");
let topLayerClosed = document.querySelector(".topLayerClosed");
let topLayerOpen = document.querySelector(".topLayerOpen");

dripBurger.addEventListener("click", () => {
    openMenu.classList.toggle("displayNone");
    topLayerClosed.classList.toggle("displayNone");
    topLayerOpen.classList.toggle("displayNone");
});

// Cookie disclaimer
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

// Close menu
mobileMenuCLose.forEach(item => {
    item.addEventListener("click", () => {
        openMenu.classList.add("displayNone");
    });
});

// Review carousel
let lindsay = document.getElementById("lindsay");
let mark = document.getElementById("mark");
let elisabeth = document.getElementById("elisabeth");
let leftPointer = document.getElementById("left");
let rightPointer = document.getElementById("right");

leftPointer.addEventListener("click", () => {
    if(!lindsay.classList.contains("displayNone")) {
        lindsay.classList.add("displayNone");
        elisabeth.classList.remove("displayNone");
    } else if(!mark.classList.contains("displayNone")) {
        mark.classList.add("displayNone");
        lindsay.classList.remove("displayNone");
    } else if(!elisabeth.classList.contains("displayNone")) {
        elisabeth.classList.add("displayNone");
        mark.classList.remove("displayNone");
    };
});

rightPointer.addEventListener("click", () => {
    if(!lindsay.classList.contains("displayNone")) {
        lindsay.classList.add("displayNone");
        mark.classList.remove("displayNone");
    } else if(!mark.classList.contains("displayNone")) {
        mark.classList.add("displayNone");
        elisabeth.classList.remove("displayNone");
    } else if(!elisabeth.classList.contains("displayNone")) {
        elisabeth.classList.add("displayNone");
        lindsay.classList.remove("displayNone");
    };
});

// Scroll to top
let scrollToTopArrow = document.getElementById("scrollToTopArrow");

scrollToTopArrow.addEventListener("click", () => {
    document.body.scrollTop = 0;
});