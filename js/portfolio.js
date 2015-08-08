$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		cssEase: 'linear'
	});
});

// console.log("Slider was: " + $('.slider').height());
// var slideHeight;
// slideHeight = $('.slide').height();
// $('.slider').height(slideHeight);
// console.log("Slider is now: " + $('.slider').height());

$('.slider').on('afterChange', function(slick, currentSlide, nextSlide){
	var slideInQuestion = currentSlide.$slides.get(currentSlide.currentSlide).getAttribute('id');
	console.log(slideInQuestion);

	if (slideInQuestion == 'mini') {
		$('h2#projectName').text("Mini Cooper Lifelog Project");
	} else if (slideInQuestion == 'crossfit') {
		$('h2#projectName').text("Crossfit Design Exercise");
	} else {
		$('h2#projectName').text("Disney Interactive Internship Project");
	}
});