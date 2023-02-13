const burgerRef = document.querySelector(".header__burger");
const mobileMenuRef = document.querySelector(".mobile-menu");
const mobileMenuCloseRef = document.querySelector(".mobile-menu__btn-close");

burgerRef.addEventListener("click", onBurgerClickHandle);
mobileMenuCloseRef.addEventListener("click", onCloseBtnClick);

function onBurgerClickHandle(e) {
  e.preventDefault();

  mobileMenuRef.classList.add("transform");
}

function onCloseBtnClick(e) {
  e.preventDefault();

  mobileMenuRef.classList.remove("transform");
}
