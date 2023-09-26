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

const next = document.querySelector('.arrow_right');
const previous = document.querySelector('.arrow_left');

let count = 0;

for (let index = 0; index < slides.length; index++) {
	const element = slides[index];
	console.log(element);

	const dot = document.createElement('span');
    dot.classList.add('dot');
	
	if (index === 0){
        dot.classList.add('dot_selected');
	}
	const dots = document.querySelector('.dots');
	dots.appendChild(dot);
}

function slideNext(){
	const image = document.querySelector('.banner-img');

	const dot = document.querySelectorAll('.dot');
	
	dot[count].classList.remove('dot_selected');
			
	if(count < slides.length - 1){
		count++;
		
	} else {
		count = 0;		
	}
	
	dot[count].classList.add('dot_selected');
	console.log(slides[count])
	console.log(slides[count].tagLine)
	console.log(slides[count].image)
	const linkimg = "./assets/images/slideshow/"+slides[count].image;
	image.setAttribute('src', linkimg);
	document.querySelector('#banner p').innerHTML = slides[count].tagLine;
}
next.addEventListener('click', slideNext);

function slidePrevious(){
	const image = document.querySelector('.banner-img');

	const dot = document.querySelectorAll('.dot');
	
	dot[count].classList.remove('dot_selected');
	
	if(count > 0){
		count--;
	} else {
		count = slides.length - 1;
	}
	
	dot[count].classList.add('dot_selected');
	console.log(slides[count])
	console.log(slides[count].tagLine)
	console.log(slides[count].image)
	const linkimg = "./assets/images/slideshow/"+slides[count].image;
	image.setAttribute('src', linkimg);
	document.querySelector('#banner p').innerHTML = slides[count].tagLine;
}

previous.addEventListener('click', slidePrevious);