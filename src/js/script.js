const menuMobile = document.querySelector(".menu__mobile");
const navMobile = document.querySelector(".nav__mobile");

navMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    menuMobile.classList.remove("inactive");
});