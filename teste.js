window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 0) {
      logo.style.width = '100px'; // Diminui a largura da logo
    } else {
      logo.style.width = '2000px'; // Restaura a largura original da logo
    }
  });