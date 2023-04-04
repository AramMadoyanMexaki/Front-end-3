// const menuMobile = document.querySelector(".menu__mobile");
// const navMobile = document.querySelector(".nav__mobile");

// navMobile.addEventListener("click", () => {
//     menuMobile.classList.toggle("active");
//     menuMobile.classList.remove("inactive");
// });

window.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector(".menu__list");
    const nav = document.querySelector(".nav__right");

    mobileMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("active__nav");
    })
});