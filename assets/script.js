const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Les 2 EventListeners ci-dessous sont laissés seulement pour la demande de différenciation entre le clic gauche et le clic droit
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('mouseup', (e) => {
	switch (e.button) {
		case 0:
			console.log("Flèche droite - Clic gauche");
			break;
		case 2:
			console.log("Flèche droite - Clic droit");
			break;
	}
})

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('mouseup', (e) => {
	switch (e.button) {
		case 0:
			console.log("Flèche gauche - Clic gauche");
			break;
		case 2:
			console.log("Flèche gauche - Clic droit");
			break;
	}
})

// Déclaration des 2 variables qui vont nous servir à nous 'promener' sur les slides
let currentSlide = 0;
let numSlides = slides.length;

// Déclaration du DOM où on va intervenir
const banner = document.querySelector('#banner');
const slideImage = document.querySelector('img');
const slideTxt = document.querySelector('p');
const dotsSlides = document.querySelector('.dots');

// Fonction principale qui va afficher le contenu demandé
function slider(n) {
	if (n === -1) {
		currentSlide = 3;
	} else if (n === 4) {
		currentSlide = 0;
	} else {
		currentSlide = n;
	}

	let slide = slides[currentSlide];
	
	slideImage.src = `./assets/images/slideshow/${slide.image}`;
	slideImage.classList.add('banner-img');
	
	slideTxt.innerHTML = slide.tagLine;

	banner.append(slideImage);
	banner.append(slideTxt);

	bulletPoints();
}

// Fonction qui va gérer les bulletpoints
function bulletPoints() {
	dotsSlides.innerHTML = '';
	
	for (let i = 0; i < numSlides; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === currentSlide) {
			dot.classList.add('dot_selected');
		}
		dotsSlides.append(dot);
	}
}

// Les 2 EventListeners qui servent à naviguer dans les slides
arrowLeft.addEventListener('click', function() {
	slider(currentSlide - 1);
})

arrowRight.addEventListener('click', function() {
	slider(currentSlide + 1);
})

// Au chargement de la page la fonction principale (slider) démarre sur la 1ère slide à l'index 0
slider(0);