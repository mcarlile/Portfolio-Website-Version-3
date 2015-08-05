$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false,
	});
});

console.log("Slider was: " + $('.slider').height());
var slideHeight;
slideHeight = $('.slide').height();
$('.slider').height(slideHeight);
console.log("Slider is now: " + $('.slider').height());
