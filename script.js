/*const botao = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const conteudo = document.querySelector(".conteudo");
const background = document.querySelector(".background");

botao.addEventListener("click", () => {
  menuLateral.classList.add("ativo");
  botao.classList.add("ativo");
  conteudo.classList.add("ativo");
  background.classList.add("ativo");
  document.body.style.backgroundColor = menuLateral.classList.contains("ativo")
    ? "#000"
    : "#ecf0f1";
});

background.addEventListener("click", () => {
  menuLateral.classList.remove("ativo");
  botao.classList.remove("ativo");
  conteudo.classList.remove("ativo");
  background.classList.remove("ativo");
  document.body.style.backgroundColor = "#ecf0f1";
});*/

var menuItem = document.querySelectorAll(".item-menu");

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectLink));

// Expandir menu
var bntExp = document.querySelector("#btn-exp");
var menuSide = document.querySelector(".menu-lateral");

bntExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
});
