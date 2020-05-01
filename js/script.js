var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function switchTheme() {
  var check = document.getElementById("theme_css").classList[0] === "dark";

  var element = document.getElementById("theme_css");

  if (check) {
    element.href = "../css/style1.css";
    element.classList.remove("dark");
    element.classList.add("light");
  } else {
    element.href = "../css/style.css";
    element.classList.remove("light");
    element.classList.add("dark");
  }
}
