const fillcolor = document.getElementById("color")
		const colortest = document.getElementById("show-color")
		const colorpicket = document.getElementById("colorpicker")
		colorpicket.addEventListener('input', () => {
			fillcolor.value = colorpicket.value;
			colortest.style.backgroundColor = colorpicket.value;
		})
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