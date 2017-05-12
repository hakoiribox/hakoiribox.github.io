var size = {w: screen.width, h: screen.height};
document.body.style.backgroundColor = "#333";
sizeChange();
window.onresize = sizeChange;
window.onload = autoShift;


function autoShift() {
	let img = document.getElementsByTagName("img");
	let n = img.length;
	let i = function() {
		if (
			0 <= Number(localStorage.i)
			&& Number(localStorage.i) < img.length
		) {
			return (Number(localStorage.i) + 1)%img.length;
		} else {
			return 0;
		}
	}();
	img[i].style.display = "block";
	localStorage.i = i;
}

function sizeChange() {
	if (
		size.w != screen.width
		|| size.h != screen.height
	) {
		window.onresize = null;
		size.w = screen.width;
		size.h = screen.height;
		let viewPort = document.getElementsByName("viewport")[0];
		viewPort.setAttribute(
			"content",
			"initial-scale=1"
		);
		if (size.w < 970) {
			document.body.style.backgroundColor = "#fff";
			if (screen.width < screen.height) {
				viewPort.setAttribute(
					"content",
					"width=" + 970
				);
			} else {
				viewPort.setAttribute(
					"content",
					"height=" + 720
				);
			}
		} else {
			document.body.style.backgroundColor = "#333";
			viewPort.setAttribute(
				"content",
				"initial-scale=1"
			);
		}
		window.onresize = sizeChange;
	}
}