document.addEventListener("DOMContentLoaded", HentGentagelser);
async function HentGentagelser() {



	let headerData = await fetch("header.html");
	let header = await headerData.text();
	document.querySelector("#hovedmenu").innerHTML = header;


	let logoData = await fetch("logo.html");
	let logo = await logoData.text();
	document.querySelector(".welcome").innerHTML = logo;

	let footerData = await fetch("footer.html");
	let footer = await footerData.text();
	document.querySelector("footer").innerHTML = footer;



	let acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.display === "inline-block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "inline-block";
			}
		});
	}

	function myFunction(x) {
		x.classList.toggle("change");
	}


}
