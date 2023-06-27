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
const messages = carousel.querySelectorAll('.conteudo1');
const totalMessages = messages.length;
const messageWidth = messages[0].offsetWidth;
let currentIndex = 0;

function startCarousel() {
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalMessages) {
      currentIndex = 0;
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else if (currentIndex >= totalMessages - 2) {
      carousel.scrollTo({
        left: (totalMessages - 3) * messageWidth,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollTo({
        left: currentIndex * messageWidth,
        behavior: 'smooth'
      });
    }
  }, 3000); // Tempo em milissegundos entre cada transição de mensagem
}

startCarousel();

