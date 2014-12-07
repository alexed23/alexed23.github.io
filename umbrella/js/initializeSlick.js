$(document).ready(function(){
	$('.awesomeCarousel').slick({
		prevArrow:$('.previous'),
		nextArrow:$('.next'),
		dots:true,
		fade:true,
		draggable:false
	});


	$('.screenshotCarousel').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		touchThreshold:20,
		dots:true,
		arrows:false,
		speed:600
	});


	$('.quoteCarousel').slick({
		infinite: true,
		dots:true,
		touchThreshold:35,
		autoplay:true,
		speed:500
	});

});