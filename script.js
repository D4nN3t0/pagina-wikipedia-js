/*
  Projeto: Wikipedia
  Autor: Daniel Neto (D4nN3t0)
  GitHub: https://github.com/D4nN3t0
  Data: 2026
*/

const button = document.querySelector("#toggle-theme");
const categorias = document.getElementsByClassName("categorias");
button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  button.classList.toggle("white")
  button.textContent =
    document.documentElement.classList.contains("dark")
      ? "Modo Claro"
      : "Modo Escuro";
});

