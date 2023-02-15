const arrowSelectBtn = document.getElementById("arrow-select");
const inputVersionRef = document.getElementById("version-input");
const versionsListRef = document.querySelector(".form__select-version");

console.dir(inputVersionRef);

arrowSelectBtn.addEventListener("click", onArrowSelectClick);
versionsListRef.addEventListener("click", onVersionListSelect);

function onArrowSelectClick(e) {
  e.preventDefault();

  const selectListRef = document.querySelector(".form__select-version");

  selectListRef.classList.remove("is-hidden");
}

function onVersionListSelect(e) {
  e.preventDefault();

  inputVersionRef.value = e.target.textContent;

  versionsListRef.classList.add("is-hidden");
}
