const fillcolor = document.getElementById("color")
const colortest = document.getElementById("show-color")
const colorpicket = document.getElementById("colorpicker")
colorpicket.addEventListener('input', () => {
	fillcolor.value = colorpicket.value;
	colortest.style.backgroundColor = colorpicket.value;
})

const colorchange = document.querySelector(".colorchange")
const logosmenu = document.querySelector(".logos")
const pickmenu = document.querySelectorAll(".pickmenubtn")
const backbtn = document.querySelector(".backbtn")
const clearbtn = document.querySelector(".clearbtn")
const imgs = document.querySelectorAll("img")


function clearall() {
	imgs.forEach(e => {
		e.src = "https://i.imgur.com/hyBNpHK.png"
	})
}
function backb() {
	backbtn.style.display = "none"
	logosmenu.style.display = "none"
	colorchange.style.display = "none"
	pickmenu.forEach(e => {
		e.style.display = "inline-flex"
		return console.log("Done");
	});
	clearbtn.style.display = "none"
}
function showlogosmenu() {
	pickmenu.forEach(e => {
		e.style.display = "none"
		return console.log("Done");
	});
	logosmenu.style.display = "block"
	backbtn.style.display = "block"
	clearbtn.style.display = "block"
}
function showcolorsmenu() {
	pickmenu.forEach(e => {
		e.style.display = "none"
		return console.log("Done");
	});
	colorchange.style.display = "block"
	backbtn.style.display = "block"
}
function getValue() {
	let txtvalue = fillcolor.value;
	colortest.style.backgroundColor = txtvalue
	const txtcolor = colortest.value
	txtcolor.style.backgroundColor = colortest.style.backgroundColor
}

function makewhite() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-rib-1');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}

	}

}
function whitebody() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-body');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}
	}

}
function makeRed() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-rib-2');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}
	}
}

function sleeves() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-sleeves');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}
	}
}

function buttons() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-buttons');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}
	}
}

function pockets() {
	if (fillcolor.value.length < 3) {
		alert("Enter a value")
	} else {
		var paths = document.querySelectorAll('.jacket-pocket');
		for (var i = 0; i < paths.length; i++) {
			paths[i].style.fill = fillcolor.value;
		}
	}
}

const imgUpload = document.getElementById('img1');
const imgDisplay = document.getElementById('uploaded1');

imgUpload.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

const imgUpload2 = document.getElementById('img2');
const imgDisplay2 = document.getElementById('uploaded2');

imgUpload2.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay2.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});
const imgUpload3 = document.getElementById('img3');
const imgDisplay3 = document.getElementById('uploaded3');

imgUpload3.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay3.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

const imgUpload4 = document.getElementById('img4');
const imgDisplay4 = document.getElementById('uploaded4');

imgUpload4.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay4.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

const imgUpload5 = document.getElementById('img5');
const imgDisplay5 = document.getElementById('uploaded5');

imgUpload5.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay5.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

const imgUpload6 = document.getElementById('img6');
const imgDisplay6 = document.getElementById('uploaded6');

imgUpload6.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay6.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}


});


const imgUpload7 = document.getElementById('img7');
const imgDisplay7 = document.getElementById('uploaded7');

imgUpload7.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay7.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

const imgUpload8 = document.getElementById('img8');
const imgDisplay8 = document.getElementById('uploaded8');

imgUpload8.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay8.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});


const imgUpload9 = document.getElementById('img9');
const imgDisplay9 = document.getElementById('uploaded9');

imgUpload9.addEventListener('change', function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.addEventListener('load', function () {
			imgDisplay9.setAttribute('src', reader.result);
		});

		reader.readAsDataURL(file);
	}
});

