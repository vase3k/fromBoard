"use strict";

function burgerMenu() {
    const burger = document.querySelector("#burger__close");
    const menu = document.querySelector("#burger__menu");

    burger.addEventListener("click", () => {
        menu.toggleAttribute("data-active");
        burger.toggleAttribute("data-active");
    });
}

export default burgerMenu;
