window.onresize = heightChange;
heightChange();
changeImage();

//	以下関数

function heightChange() {
	let height = screen.availHeight;
	let article = document.getElementsByTagName("article")[0];
	if (height < 896) {
		article.style.bottom = "";
		article.style.height = (768 + 32) + "px";
	} else {
		article.style.height = "auto";
		article.style.bottom = 0;
	}
}

function changeImage() {
	let img = document.getElementsByTagName("img");
	let n = img.length;
	let i = Number(localStorage.i);
	if (0 <= i && i < n) {
		i = (i + 1)%n;
	} else {
		i = 0;
	}
	img[i].style.display = "inline";
	localStorage.i = i;
}