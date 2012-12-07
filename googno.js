(function(){
	console.log("enter googno.js");
	var links = document.getElementsByClassName("l");
	for (var i = 0; i < links.length; i++) {
		if ('A' == links[i].tagName) {
			links[i].onmousedown = function () {return false;};	
		}
	}
})();

