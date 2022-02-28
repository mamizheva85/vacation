const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('#button-one');
const buttonTwo = document.querySelector('#button-two');

buttonOne.addEventListener('click', summer);
buttonTwo.addEventListener('click', winter);

function summer() {
	image.setAttribute ("src", "pictures/summer.jpg");
	text.innerHTML = "Who do you want to travel with?";
	buttonOne.innerHTML = "Family with kids";
	buttonTwo.innerHTML = "Your loved one";

	buttonOne.addEventListener("click", summerFamily);
	buttonTwo.addEventListener("click", summerLovedOne);

	function summerLovedOne() {
		image.setAttribute ("src", "pictures/holiday.jpg");
		text.innerHTML = "What type entertaiment are you interested in?";
		buttonOne.innerHTML = "Romantic days on the islands";
		buttonTwo.innerHTML = "European holidays";

		buttonOne.addEventListener("click", summerLovedOneIslands);
		buttonTwo.addEventListener("click", summerLovedOneEurope)

		function summerLovedOneIslands() {
			image.setAttribute ("src", "pictures/holiday1.jpg");
			text.innerHTML = "Maldives is the best place for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
		function summerLovedOneEurope() {
			image.setAttribute ("src", "pictures/Paris.jpg");
			text.innerHTML = "Paris is the best place for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
	}

	function summerFamily() {
		image.setAttribute ("src", "pictures/family.jpg");
		text.innerHTML = "What would you like to see?";
		buttonOne.innerHTML = "Beaches and ocean";
		buttonTwo.innerHTML = "Waterparks, pool"

		buttonOne.addEventListener("click", summerFamilyBeaches);
		buttonTwo.addEventListener("click", summerFamilyWaterparks);

		function summerFamilyWaterparks(){
			image.setAttribute ("src", "pictures/Turkey.jpg");
			text.innerHTML = "Antalya, Turkey is the best place for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}

		function summerFamilyBeaches() {
			image.setAttribute ("src", "pictures/florida.jpg");
			text.innerHTML = "Florida, USA is the best place for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
	}
}

function winter() {
	image.setAttribute ("src", "pictures/winter.png");
	text.innerHTML = "What type of activity would you like to try?";
	buttonOne.innerHTML = "Skiing, toubing";
	buttonTwo.innerHTML = "Attractions, shopping";

	buttonOne.addEventListener("click", winterSkiing);
	buttonTwo.addEventListener("click", winterAntractions);

	function winterSkiing() {
		image.setAttribute ("src", "pictures/ski.jpg");
		text.innerHTML = "What part of planet would you like to visit?";
		buttonOne.innerHTML = "East";
		buttonTwo.innerHTML = "West";

		buttonOne.addEventListener("click", winterSkiingEast);
		buttonTwo.addEventListener("click", winterSkiingWest)

		function winterSkiingEast() {
			image.setAttribute ("src", "pictures/china.jpg");
			text.innerHTML = "Ski resorts in China is a great place for a family holiday! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
		function winterSkiingWest() {
			image.setAttribute ("src", "pictures/austria.jpg");
			text.innerHTML = "Austria is the great choice for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
	}

	function winterAntractions() {
		image.setAttribute ("src", "pictures/shopping.jpg");
		text.innerHTML = "What part of planet would you like to visit?";
		buttonOne.innerHTML = "East";
		buttonTwo.innerHTML = "West";

		buttonOne.addEventListener("click", winterAntractionsEast);
		buttonTwo.addEventListener("click", winterAntractionsWest)

		function winterAntractionsEast() {
			image.setAttribute ("src", "pictures/japan.jpg");
			text.innerHTML = "Japan is the great choice for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
		function winterAntractionsWest() {
			image.setAttribute ("src", "pictures/london.jpg");
			text.innerHTML = "London is the great choice for you! 😃";
			buttonOne.style="display:none";
			buttonTwo.style="display:none";
		}
	}
}