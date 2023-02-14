const dropDown1 = document.getElementById("dropdown-despre");
const dropDown2 = document.getElementById("dropdown-catalog");
const dropDown3 = document.getElementById("dropdown-IQOS");

const dropDownList = document.querySelector(".header__main-nav-list");

dropDownList.addEventListener("click", onDropDownBtnClick);

function onDropDownBtnClick(e) {
  e.preventDefault();

  if (e.target.textContent === "Despre produs") {
    dropDown1.classList.toggle("show");
  } else if (e.target.textContent === "Catalog") {
    dropDown2.classList.toggle("show");
  } else if (e.target.textContent === "myIQOS") {
    dropDown3.classList.toggle("show");
  }
}

window.onclick = function (e) {
  if (!e.target.matches(".header__dropdown-btn")) {
    let dropDowns = document.querySelectorAll(".header__dropdown-content");
    for (let i = 0; i < dropDowns.length; i += 1) {
      let openDropDown = dropDowns[i];

      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};
