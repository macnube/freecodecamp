$(document).ready( function() {

	$(".carousel").slick({
		"autoplay": true,
		"dots": true,
		"pauseOnDotsHover": true,
		"variableWidth": true,
		"slidesToShow": 1,
		"centerMode": true,
		"autoplaySpeed": 1500,
	});

	var carouselImages = Array.prototype.slice.call($(".carousel-image"));

	carouselImages.forEach(function(img) {
		img.onload = function() {
			var topMargin = (500 - this.height) / 2;
			$(img).css("margin-top", topMargin);
		}
	})



})