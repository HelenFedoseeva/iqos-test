const arrowSelectBtn = document.getElementById("arrow-select");
const inputVersionRef = document.getElementById("version-input");
const versionsListRef = document.querySelector(".form__select-version");

console.dir(inputVersionRef);

arrowSelectBtn.addEventListener("click", onArrowSelectClick);
versionsListRef.addEventListener("click", onVersionListSelect);

function onArrowSelectClick(e) {
  e.preventDefault();
  const selectListRef = document.querySelector(".form__select-version");

  if (!selectListRef.classList.contains("visually-hidden")) {
    selectListRef.classList.add("visually-hidden");
    return;
  }

  selectListRef.classList.remove("visually-hidden");
}

function onVersionListSelect(e) {
  e.preventDefault();

  inputVersionRef.value = e.target.textContent;

  versionsListRef.classList.add("visually-hidden");
}
