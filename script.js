const formInputs = document.querySelectorAll(".form-input");
const submitButton = document.querySelector(".button");

submitButton.addEventListener("click", () => {
  formInputs.forEach((input) => {
    if (input.childNodes[1].type === "email") {
      if (
        input.childNodes[1].value.match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ) === null
      ) {
        input.childNodes[1].classList.add("error");
        input.childNodes[3].classList.remove("hidden");
        input.childNodes[5].classList.remove("hidden");
      } else {
        input.childNodes[1].classList.remove("error");
        input.childNodes[3].classList.add("hidden");
        input.childNodes[5].classList.add("hidden");
      }
    } else {
      if (input.childNodes[1].value === "") {
        input.childNodes[1].classList.add("error");
        input.childNodes[3].classList.remove("hidden");
        input.childNodes[5].classList.remove("hidden");
      } else {
        input.childNodes[1].classList.remove("error");
        input.childNodes[3].classList.add("hidden");
        input.childNodes[5].classList.add("hidden");
      }
    }
  });
});
