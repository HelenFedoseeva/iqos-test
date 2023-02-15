const popupBtn = document.getElementById("popup");
const popupClose = document.querySelector(".modal__btn-close");
const backdrop = document.querySelector(".backdrop");

popupBtn.addEventListener("click", onPopupBtnClick);
popupClose.addEventListener("click", onPopupBtnClose);

function onPopupBtnClick(e) {
  e.preventDefault();

  backdrop.classList.remove("is-hidden");
  document.addEventListener("click", onOutsideClickClose);
}

function onPopupBtnClose(e) {
  e.preventDefault();

  backdrop.classList.add("is-hidden");
  document.removeEventListener("click", onOutsideClickClose);
}

function onOutsideClickClose(e) {
  if (e.target === backdrop) {
    backdrop.classList.add("is-hidden");
  }
}
