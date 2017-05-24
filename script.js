var size = {w: screen.width, h: screen.height};
anchorChange();
sizeChange();
callAnalytics();
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

function anchorChange() {
	let a = document.getElementsByTagName("a");
	if (970 <= size.w) {
		for (let i = 0; i < a.length; i++) {		
			a[i].setAttribute("target", "_blank");	
		}
	}
}

function sizeChange() {
	if (size.w < 970) {
		document.body.style.backgroundColor = "#fff";
	} else {
		document.body.style.backgroundColor = "#333";
	}
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

function callAnalytics(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-99823108-1', 'auto');
	ga('send', 'pageview');
}