document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".formulario");
  const parrafo = document.querySelector("#parrafo");
  parrafo.style.display = "none";

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const password = document.querySelector("#password").value;

    if (nombre === "" && password === "") {
      parrafo.style.display = "block";
      parrafo.innerHTML = "You must fill all the fields";
      parrafo.style.color = "white";
      parrafo.style.backgroundColor = "red";
    } else {
      parrafo.style.display = "block";
      parrafo.innerHTML = "form submitted successfully";
      parrafo.style.color = "white";
      parrafo.style.backgroundColor = "green";
    }
  });
});
