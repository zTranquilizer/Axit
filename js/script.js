function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});

$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$(".header__burger, .header__menu").toggleClass("active-menu");
		$("body").toggleClass('lock');
	})
	$(".tabs-menu__link").click(function (e) {
		e.preventDefault();
		$(".tabs-page__content").removeClass("active-tab");
		$(".tabs-menu__link").removeClass("active-tab-bg");
		//!Нужно доработать и разобраться что не так
		// let tab_href = $(this).attr("href");
		// let tab_data = $(this).attr("data-tab");
		// if (tab_href && tab_data) {
		// 	$(tab_href).addClass("active-tab");
		// 	$(tab_data).addClass("active-tab-bg");
		// }
		//!НЕ ЗАБЫТЬ!!!!!!!
		$(this).addClass("active-tab-bg");
		$($(this).attr("href")).addClass('active-tab');
	})
	$(".tabs-menu__link:first").click();

	let progress = document.querySelector('.progress');
	console.log(progress);
	window.addEventListener("scroll", progressBar);
	function progressBar(e) {
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = (windowScroll / windowHeight) * 100;
		console.log(Math.round(per));
		progress.style.width = per + "%";
	}

});
