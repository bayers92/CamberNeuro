jQuery(document).ready(function($){

	var smallWindow = false;

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();

		if (scroll >= 50) {

			$('#logo-image').attr('src', 'img/WavoDyne_Logo_small.png')

			$(".important-class").addClass("padding-on-my-header");

			$(".important-class").css("background-color","white");

		}

		if (scroll < 50) {

			$(".important-class").removeClass("padding-on-my-header");

			$('#logo-image').attr('src', 'img/WavoDyne_Logo.jpg')

		}

	}).resize(function(){

		if ( !smallWindow && this.innerWidth <= 1024 ) {

			smallWindow = true;

			$('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);

		}

		if ( smallWindow && this.innerWidth > 1024 ) {

			smallWindow = false;

		}

	});

});