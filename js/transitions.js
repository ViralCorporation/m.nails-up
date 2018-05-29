//Hidding and showing the Services Presentation.
function hide_s_prst() {
	document.documentElement.style.setProperty(`--state_s_tab`, 'flex');
	document.documentElement.style.setProperty(`--state_s_box`, '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)');
	document.documentElement.style.setProperty(`--state_s_pres`, 'none');
	document.documentElement.style.setProperty(`--state_s_a`, 'none');
}

function show_s_prst() {
	document.getElementsByClassName("presentation").position = "fixed";
	document.documentElement.style.setProperty(`--state_s_pres`, 'block');
	document.documentElement.style.setProperty(`--state_s_tbar`, 'flex');
	document.documentElement.style.setProperty(`--state_s_tab`, 'none');
	document.documentElement.style.setProperty(`--state_s_box`, 'none');
	document.documentElement.style.setProperty(`--state_s_a`, 'block');
}
function hideBtns() {
	document.getElementsByClassName("presentation").display = "none";
	document.getElementsByClassName("presentation").position = "absolute";
	document.getElementById("spray_tan_b").display = "none";
}

//Hidding and showing the Schedulling pages.
function hiddenSdlPage1() {
	var div = document.getElementById("sdlPage1");
	div.style.display = "none";
}

function hiddenSdlPage2() {

	var div = document.getElementById("sdlPage2");
	div.style.display = "none";
}

function showingSdlPage1() {
	hiddenSdlPage2();
	margingSdl();
	var div = document.getElementById("sdlPage1");
	div.style.display = "inherit";
	document.getElementById("shrink").classList.remove("tab-shrink");
}

function showingSdlPage2() {
	hiddenSdlPage1();
	unmargingSdl();
	var div = document.getElementById("sdlPage2");
	div.style.display = "inherit";
	document.getElementById("shrink").classList.add("tab-shrink");
}

//Margin to show remove button in Schedulling.
function margingSdl() {
	hiddenSdlPage1();
	var div = document.getElementById("sdlContent");
	div.style.padding = "0vw 0vw calc(13vh + 18vw) 0vw";
}

function unmargingSdl() {
	hiddenSdlPage1();
	var div = document.getElementById("sdlPage2");
	div.style.padding = "0";
}

$('.autoplay').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.single-item').slick();

// Snackbar function.
function snackbar(string) {
	var snackbarContainer = document.querySelector('#demo-snackbar-example');
	var data = {
		message: string,
	};
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
};