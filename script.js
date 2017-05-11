var size = {w: screen.width, h: screen.height};
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
			viewPort.setAttribute(
				"content",
				"initial-scale=1"
			);
			document.body.style.backgroundColor = "#333";
		}
		window.onresize = sizeChange;
	}
}












function getContentSize() {
	var contentSize = {};
	var ViewPort = document.getElementsByName("viewport")[0];
	ViewPort.setAttribute("content", "width=device-width,height=device-height");
	contentSize.screenWidth = screen.width;
	contentSize.screenHeight = screen.height;
	contentSize.screenRatio = math.round(screen.width/screen.height, 3);
	contentSize.innerWidth = window.innerWidth;
	contentSize.innerHeight = window.innerHeight;
	if (
		(1024 + 48 <= screen.availWidth)
		&& (1024/math.phi + 176 <= screen.availHeight)
	) {
		contentSize.mobile = false;
		contentSize.wide = true;
	} else {
		var whRatio = window.innerWidth/window.innerHeight;
		localStorage.debug += " / whRatio=" + whRatio;
		if (whRatio <= 1/Math.sqrt(2)) {
			contentSize.mobile = true;
			contentSize.wide = false;
			ViewPort.setAttribute("content", "width=" + (1024 + 2));
		} else if ((1/Math.sqrt(2) < whRatio) && (whRatio <= math.phi)) {
			contentSize.mobile = true;
			contentSize.wide = true;
			ViewPort.setAttribute("content", "width=" + (1024 + 2));
		} else if (math.phi < whRatio) {
			contentSize.mobile = true;
			contentSize.wide = true;
			ViewPort.setAttribute("content", "width=" + Math.round((633 + 2)*whRatio));
		}
	}
	/*　スマホデバッグ用　*/{
		//alert("Screen width : " + screen.width + ", Screen height : " + screen.height + ", Avail width : " + screen.availWidth + ", Avail height : " + screen.availHeight + ", Outer width : " + window.outerWidth + ", Outer height : " + window.outerHeight + ", Inner width : " + window.innerWidth + ", Inner height : " + window.innerHeight + ", Mobile : " + contentSize.Mobile + ", Wide : " + contentSize.Wide + ", Viewport : " + ViewPort.getAttribute("content"));
	}
	console.group(Clock() + " : " + "Content size loaded.");{
		console.log("Screen width : " + screen.width);
		console.log("Screen height : " + screen.height);
		console.log("Avail width : " + screen.availWidth);
		console.log("Avail height : " + screen.availHeight);
		console.log("Outer width : " + window.outerWidth);
		console.log("Outer height : " + window.outerHeight);
		console.log("Inner width : " + window.innerWidth);
		console.log("Inner height : " + window.innerHeight);
        console.log("Mobile : " + contentSize.mobile);
        console.log("Wide : " + contentSize.wide);
		console.log("Viewport : " + ViewPort.getAttribute("content"));
    }console.groupEnd();
	return contentSize;
}