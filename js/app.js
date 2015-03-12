// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
  $('.slick-photos').slick({
      dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  fade: true,
	  cssEase: 'linear',
	  arrows: false,
	  mobileFirst: true
	});
});