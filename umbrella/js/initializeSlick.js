$(document).ready(function(){
	$('.awesomeCarousel').slick({
prevArrow:$('.previous'),
nextArrow:$('.next'),
		dots:true,
		draggable:false,
		fade:true
	});
	$('.screenshotCarousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    }
  ],
  touchThreshold:20
});
});