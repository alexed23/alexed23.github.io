$(document).ready(function(){


var index = Number($('.screenshotCarousel .slick-center').attr("index"));
for (var i =index - 1; i <=index + 1; i++) {
$(".screenshotCarousel .slick-slide[index="+i+"]").css('opacity', '0.1');

};

});