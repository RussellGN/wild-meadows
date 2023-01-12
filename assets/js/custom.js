/* Sticky header on scroll */
const header = document.querySelector("header");
if (header) {
	document.addEventListener("scroll", () => {
		window.scrollY > 40
			? header.classList.add("header-scrolled")
			: header.classList.remove("header-scrolled");
	});
}

document.addEventListener("DOMContentLoaded", () => {
	window.scrollY > 40
		? header.classList.add("header-scrolled")
		: header.classList.remove("header-scrolled");
});

/* Function to scroll to an element with top offset */
function scrollto(el) {
	const selectHeader = document.querySelector("header");
	let offset = 0;

	offset = document.querySelector("header").offsetHeight;

	if (selectHeader.classList.contains("header-scrolled")) {
		offset = document.querySelector("header.header-scrolled").offsetHeight;
	} else if (selectHeader.hasAttribute("data-scrollto-offset")) {
		offset =
			selectHeader.offsetHeight - parseInt(selectHeader.getAttribute("data-scrollto-offset"));
	}

	window.scrollTo({
		top: document.querySelector(el).offsetTop - 50 - offset,
		behavior: "smooth",
	});
}

/* Fires the scrollto function on click to links .scrollto */
let selectScrollto = document.querySelectorAll(".scrollto");

if (selectScrollto) {
	selectScrollto.forEach((el) =>
		el.addEventListener("click", function (event) {
			event.preventDefault();
			if (document.querySelector(this.hash)) {
				scrollto(this.hash);
			}
		})
	);
}

// nav backdrop
document.querySelector("#close-nav").addEventListener("click", toggleNav);
document.querySelector("#open-nav").addEventListener("click", toggleNav);

function toggleNav(e) {
	const nav = document.querySelector("#mobile-nav");
	if (nav.classList.contains("open-nav")) {
		nav.classList.remove("open-nav");
	} else {
		nav.classList.add("open-nav");
	}
}

let nav = document.querySelector("#mobile-nav");
nav.addEventListener("click", (e) => {
	nav.classList.remove("open-nav");
});

/* Preloader */
const preloader = document.querySelector("#preloader");
if (preloader) {
	window.addEventListener("load", () => {
		preloader.remove();
	});
}

/* Navbar links active state on scroll */
let navbarlinks = document.querySelectorAll("header nav .scrollto");

function navbarlinksActive() {
	navbarlinks.forEach((navbarlink) => {
		if (!navbarlink.hash) return;

		let section = document.querySelector(navbarlink.hash);

		if (!section) return;

		let position = window.scrollY;

		if (navbarlink.hash != "#header") position += 200;

		if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
			navbarlink.classList.add("active");
		} else {
			navbarlink.classList.remove("active");
		}
	});
}

window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);

/* Scroll with ofset on page load with hash links in the url */
window.addEventListener("DOMContentLoaded", () => {
	if (window.location.hash) {
		if (document.querySelector(window.location.hash)) {
			scrollto(window.location.hash);
		}
	}
});
