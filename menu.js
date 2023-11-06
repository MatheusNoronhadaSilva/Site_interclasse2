'use strict'

const imagens = document.querySelectorAll("#imagens img");
const tituloEsporte = document.getElementById("titulo-esporte");

let index = 0;

const esportes = ["Vôlei", "Frisbee", "Futsal"];

function changeImage() {
  imagens[index].classList.remove("selected");
  index = (index + 1) % imagens.length;
  imagens[index].classList.add("selected");
  tituloEsporte.textContent = esportes[index];
}

setInterval(changeImage, 3000);
