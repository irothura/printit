const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector(".banner-img + p");
let currentIndex = 0;

function showSlide(index) {
	const slide = slides[index];
	imgElement.src = slide.image;
	tagLineElement.innerHTML = slide.tagLine;
	updateDots(index);
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", showPreviousSlide);
rightArrow.addEventListener("click", showNextSlide);

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, i) => {
	dot.addEventListener("click", () => onDotClick(i));
});

function updateDots(index) {
	dots.forEach((dot, i) => {
	  if (i === index) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
}

function onDotClick(index) {
	currentIndex = index;
	showSlide(currentIndex);
}

showSlide(0);