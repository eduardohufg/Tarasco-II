let slideIndex = 1;
let resdata  = [["agauyon", 750], 
["roastbeef", 200], ["espaldilla", 400], ["pecho", 700], 
["falda", 620], ["suadero", 620], ["suadero", 125], ["bola", 370],["pierna", 550]];
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// Event listener para las teclas de flecha izquierda y derecha
window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowLeft':
      plusSlides(-1);  // Mueve al slide anterior
      break;
    case 'ArrowRight':
      plusSlides(1);  // Mueve al slide siguiente
      break;
  }
});

function resName(){
  return resdata[slideIndex - 1][0]
}
function resPrice(){
  return resdata[slideIndex - 1][1]
}
