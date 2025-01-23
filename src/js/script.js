const form = document.querySelector(".form-contact");
const formBg = document.querySelector(".form-bg");

function viewForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  formBg.style.visibility = "visible";
}

function hiddenForm() {
  form.style.left = "-300px";
  formBg.style.visibility = "hidden";
}
