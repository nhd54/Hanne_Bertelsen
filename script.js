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
		}
