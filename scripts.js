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

window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');
  var scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    logo.style.width = '100000px'; // Diminui a largura da logo
  } else {
    logo.style.width = '200px'; // Restaura a largura original da logo
  }
});

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