const htmlRef = document.getElementsByTagName("html");
const btnLangChange = document.querySelector(".footer__nav-lang");

htmlRef[0].lang = btnLangChange.value;

btnLangChange.addEventListener("click", onClientChangeLang);

translateLanguage();

function onClientChangeLang(e) {
  e.preventDefault();

  console.log(e.target);

  htmlRef[0].lang = btnLangChange.value;

  translateLanguage();
}

function translateLanguage() {
  if (htmlRef[0].lang === "ro") {
    const tagToHide = document.querySelectorAll(".ru");
    const tagToShow = document.querySelectorAll(".ro");

    for (tag of tagToHide) {
      tag.classList.add("hideTag");
    }

    for (tag of tagToShow) {
      tag.classList.remove("hideTag");
    }
  }

  if (htmlRef[0].lang === "ru") {
    const tagToHide = document.querySelectorAll(".ro");
    const tagToShow = document.querySelectorAll(".ru");

    for (tag of tagToHide) {
      tag.classList.add("hideTag");
    }

    for (tag of tagToShow) {
      tag.classList.remove("hideTag");
    }
  }
}
