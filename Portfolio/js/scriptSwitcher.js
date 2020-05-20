
//console.log('hello');

const links = document.querySelectorAll(".alternate-style"),
	  totalLinks = links.length;
//console.log(links);

function setActiveStyle(color) {
	//console.log(color);

	for(let i=0; i<totalLinks; i++) {
		if(color === links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		}
		else {
			links[i].setAttribute("disabled", "true");
		}
	}

}

//Body Skin

const bodySkin = document.querySelectorAll(".body-skin"),
	  totalBodySkin = bodySkin.length;

for(let i=0; i<totalBodySkin; i++) {
	bodySkin[i].addEventListener("change", function(){
		//getting the radio input element that's checked
		//console.log(this);

		//getting the exact value of the checked radio input
		//console.log(this.value);

		if(this.value === "dark") {
			//creating a class attribute and putting dark in it
			document.body.className = "dark";

			//or
			//adding n removing a class, here we add
			//document.body.classList.add("dark");
		}
		else {
			//creating a class attribute and putting nothing ie allowing it empty
			document.body.className = "";

			//or
			//adding n removing a class, here we remove
			document.body.classList.remove("dark");
		}

	});
}



document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
	//console.log('SUP');

	document.querySelector(".style-switcher").classList.toggle("open");

});