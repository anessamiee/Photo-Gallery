const setName = () => {
  let text = document.querySelector("#input").value;
  document.getElementById("header-title").textContent = text;
};
// prevent reload on submit
let form = document.getElementById("form");
const handleForm = (event) => event.preventDefault();
form.addEventListener("submit", handleForm);
// comments