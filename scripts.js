document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showSlide, 3000);
});

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem1');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem1');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem2');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem2');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem3');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem3');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem4');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem4');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem5');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem5');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem6');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem6');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem7');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem7');
  mensagem.style.bottom = "-30px";
}

function mostrarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem8');
  mensagem.style.bottom = "10px";
}

function ocultarMensagem(elemento) {
  var mensagem = elemento.querySelector('.mensagem8');
  mensagem.style.bottom = "-30px";
}


window.addEventListener("scroll", function() {
  var header = document.querySelector(".logo_");
  var logo = document.querySelector(".logo_branca");
  
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    logo.src = "/assets/img/Logotipo Danke_preto.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "/assets/img/Logotipo Danke branco 1.png";
  }
});

const carousel = document.querySelector('.conteudo');
const message = carousel.querySelector('.conteudo1');

let carouselWidth = 0;

function cloneMessages() {
  const carouselWidth = carousel.offsetWidth;
  const messageWidth = message.offsetWidth;
  const numClones = Math.ceil(carouselWidth / messageWidth) + 1;

  for (let i = 0; i < numClones; i++) {
    const clone = message.cloneNode(true);
    carousel.appendChild(clone);
  }

  carousel.style.width = `${messageWidth * numClones}px`;
}

cloneMessages();

