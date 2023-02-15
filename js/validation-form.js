const formRef = document.querySelector(".form");
const errorMessage = document.getElementById("error");

formRef.addEventListener("submit", onSubmitFormValidation);

function onSubmitFormValidation(e) {
  e.preventDefault();

  const { userName, tel, version, IQOScode } = e.target.elements;

  if (!tel.checkValidity()) {
    errorMessage.classList.remove("is-hidden");
    e.preventDefault();
    return;
  } else {
    errorMessage.classList.add("is-hidden");
  }
  if (
    userName.value === "" ||
    tel.value === "" ||
    version.value === "" ||
    IQOScode.value === ""
  ) {
    return console.log("please, check all fields");
  }
  return console.log({
    name: userName.value,
    tel: tel.value,
    IQOScode: IQOScode.value,
    version: version.value,
  });
}
