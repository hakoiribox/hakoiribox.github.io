window.onload = autoShift;
window.onresize = size();

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

function size() {
	var resize = function(e, mobile, vertical) {
		window.onresize = function(){};
		document.body.style.backgroundColor = function() {
			if (!mobile) {
				return "#333";
			} else if (mobile) {
				return "#fff"; 
			}
		}();
		if (
			(mobile != (screen.width < 970))
			|| (vertical != (screen.width < screen.height))
		) {
			let viewport = document.getElementsByName("viewport")[0];
			viewport.setAttribute(
				"content",
				"initial-scale=1"
			);
			if (mobile && vertical) {
				viewport.setAttribute(
					"content",
					"width=" + 970
				);
			} else if (mobile && !vertical) {
				viewport.setAttribute(
					"content",
					"height=" + 720
				);
			}
			console.log("mobile :" + mobile);
			console.log("vertical :" + vertical);
			mobile = (screen.width < 970);
			vertical = (screen.width < screen.height);
		}
		window.onresize = function(e){
			resize(e, (screen.width < 970), (screen.width < screen.height));
		};;
	}
	resize(null, (screen.width < 970), (screen.width < screen.height));
	return function(e){
		resize(e, (screen.width < 970), (screen.width < screen.height));
	};
}