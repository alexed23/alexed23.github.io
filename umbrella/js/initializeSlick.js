$(document).ready(function(){
	$('.awesomeCarousel').slick({
prevArrow:$('.previous'),
nextArrow:$('.next'),
		dots:true,
		draggable:false,
		fade:true
	});
	$('.screenshotCarousel').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  touchThreshold:20,
  dots:true

});
});