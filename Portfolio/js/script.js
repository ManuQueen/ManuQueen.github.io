
// console.log('HIIIIIIIIII')
// alert('Hello')
// console.log("%cThis is a green text", "color:green");

//Preloader
window.addEventListener("load", function() {
	document.querySelector(".preloader").classList.add("opacity-0");
	setTimeout( function() {
		document.querySelector(".preloader").style.display="none";
	},1000);
});

//¨Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
	  filterBtns = filterContainer.children,
	  totalFilterBtn = filterBtns.length,

	  //we can select this  the gets its children OR
	  //portfolioItems = document.querySelector(".portfolio_items").children;
	  //OR
	  //we just get the cild or the elt we want n get all its occurrances
	  portfolioItems = document.querySelectorAll(".portfolio-item");

	  totalPortfolioItem = portfolioItems.length;
	  //console.log(totalPortfolioItem);

	  for (let i = 0; i < totalFilterBtn; i++) {
	  		
	  		//console.log(filterBtns[i]);

	  		//adding a click event listening on the btn to know when its being click
	  		filterBtns[i].addEventListener("click", function() {
	  			//console logging or displaying the enteir elt in the console
	  			//console.log(this)

	  			//displaying only the text it holds
	  			//console.log(this.innerHTML)

	  			//looking for an active class in the btn n removing it
	  			//removing the current active class if it is in any other btn
	  			filterContainer.querySelector(".active").classList.remove("active");

	  			//adding a class called active to the btn that is clicked
	  			this.classList.add("active");

	  			//getting the attribute data-filter value, this attribute is found in our elt
	  			const filterValue = this.getAttribute("data-filter");
	  			//console.log(filterValue);

	  			for(let k=0; k<totalPortfolioItem; k++) {
	  				if(filterValue === portfolioItems[k].getAttribute("data-category")) {
	  					portfolioItems[k].classList.remove("hide");
	  					portfolioItems[k].classList.add("show");
	  				}
	  				else {
	  					portfolioItems[k].classList.remove("show");
	  					portfolioItems[k].classList.add("hide");
	  				}
	  				if(filterValue === "all") {
	  					portfolioItems[k].classList.remove("hide");
	  					portfolioItems[k].classList.add("show");
	  				}
	  			}

	  		});

	  } 

//¨Portfolio Item Filter END



//¨Portfolio LightBox

const lightbox = document.querySelector(".lightbox"),
	  lightboxImg = lightbox.querySelector(".lightbox-img"),
	  lightboxClose = lightbox.querySelector(".lightbox-close"),
	  lightboxText = lightbox.querySelector(".caption-text"),
	  lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++) {
	//console.log(portfolioItems[i]);
	portfolioItems[i].addEventListener("click", function() {
		itemIndex = i;
		changeItem();
		toggleLightbox();
	});
}

function nextItem() {
	if(itemIndex === totalPortfolioItem-1) {
		itemIndex = 0;
	}
	else {
		itemIndex++;
	}
	//console.log(itemIndex);
	changeItem();
}

function prevItem() {
	if(itemIndex === 0) {
		itemIndex = totalPortfolioItem-1;
	}
	else {
		itemIndex--;
	}
	//console.log(itemIndex);
	changeItem();
}

//will open n close ie add n remove the class
function toggleLightbox() {
	lightbox.classList.toggle("open");
}

function changeItem() {
	imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	//console.log(imgSrc);
	lightboxImg.src = imgSrc;
	//taking the text
	lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
	lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItem;
}



// Close Lightbox

//getting all the click events on the lightbox
lightbox.addEventListener("click", function(event) {
	//displaying all the click events
	//console.log(event.target);

	//getting click events that corresponds to  lightboxClose
	if(event.target === lightboxClose || event.target === lightbox) {
		//closing
		//since its already open it will toggle
		toggleLightbox();
	}

});




// Aside Navbar

const nav = document.querySelector(".nav"),
	  navList = nav.querySelectorAll("li");
	  totalNavList = navList.length,
	  allSection = document.querySelectorAll(".section"),
	  totalSection = allSection.length;

for(let i=0; i<totalNavList; i++) {
	const a = navList[i].querySelector("a");
	//console.log(a);
	a.addEventListener("click", function() {
		//console.log(this);


		//remove back section class
		removeBackSectionClass();
		// for(let i=0; i<totalSection; i++) {
		// 	allSection[i].classList.remove("back-section");
		// }

		for(let j=0; j<totalNavList; j++) {

			if(navList[j].querySelector("a").classList.contains("active")) {
				//console.log("back-section"+navList[j].querySelector("a"));

				//add back section class
				addBackSectionClass(j);
				//allSection[j].classList.add("back-section");
				
			}


			navList[j].querySelector("a").classList.remove("active");
		}

		this.classList.add("active");

		showSection(this);

		if(window.innerWidth < 1200) {
			asideSectionTogglerBtn();
			//console.log('GGG')
		}


	});
}

function removeBackSectionClass() {
	for(let i=0; i<totalSection; i++) {
			allSection[i].classList.remove("back-section");
		}
}

function addBackSectionClass(num) {
	allSection[num].classList.add("back-section");
}

function showSection(element) {
	//console.log(element);
	//console.log(element.getAttribute("href"));
	//console.log(element.getAttribute("href").split("#"));

	for(let i=0; i<totalSection; i++) {
		
		allSection[i].classList.remove("active");
	}


	//This 
	// const href= element.getAttribute("href").split("#"),
	// 	  target= href[1];

	//OR
	const target = element.getAttribute("href").split("#")[1];
	
		  console.log(target);

	document.querySelector("#"+target).classList.add("active");

}


function updateNav(element) {
	//console.log(element.getAttribute("href").split("#")[1]);

	for(let i=0; i<totalNavList; i++) {
		navList[i].querySelector("a").classList.remove("active");
		const target = element.getAttribute("href").split("#")[1];
		if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
			navList[i].querySelector("a").classList.add("active");
		}
	}
}



document.querySelector(".hire-me").addEventListener("click", function() {
	//console.log(this);
	const sectionIndex = this.getAttribute("data-section-index");
	//console.log(sectionIndex);
	showSection(this);
	updateNav(this);
	removeBackSectionClass();
	addBackSectionClass(sectionIndex);
 });


const navTogglerBtn = document.querySelector(".nav-toggler"),
	  aside = document.querySelector(".aside"),
	  iconFa =document.querySelector(".iconFa");

//THIS
// navTogglerBtn.addEventListener("click", () => {
// 	asideSectionTogglerBtn();
// });
//OR THIS
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
	iconFa.classList.toggle("fa-bars");
	iconFa.classList.toggle("fa-close");

	aside.classList.toggle("open");
	navTogglerBtn.classList.toggle("open");
	for(let i=0; i<totalSection; i++) {
		allSection[i].classList.toggle("open");
	}
}


document.querySelector(".notify").addEventListener("click", function() {
	//
	var elems = document.querySelectorAll("#email"),
    res = Array.from(elems).map(v => v.value);
    //console.log(res);

    //using json
	myJson = {
    email: $("#field").find("#email").val(),
  };
  
  //console.log("myJson", myJson);

email = document.getElementById("email"); 
//searches for and detects the input element from the 'myButton' id
email.value = "Thanks I will Notify you"; //changes the value

document.querySelector(".notifymsg").innerHTML = "Thanks I will Notify you";

});




	