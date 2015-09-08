$(document).on('ready', function(){

	
	$('.js-page-about').on('click', function(e){
		e.preventDefault;
			$.scrollTo('.page-about', 800);
	});
	
	$('.js-page-resume').on('click', function(e){
		e.preventDefault;
			$.scrollTo('.page-resume', 800);
	})
	
	$('.js-page-projects').on('click', function(e){
		e.preventdefault;
			$.scrollTo('.page-projects', 800);
	})

	$('.js-page-contact').on('click', function(e){
		e.preventDefaut;
			$.scrollTo('.page-contact', 800);
	})



	$(window).on('scroll', function(){

		var scrollT = $(window).scrollTop();

		if(scrollT > 150 && $('.nav-wrapper').css('position') != 'fixed'){
			$('.nav-wrapper').hide(function (){
				$('.nav-wrapper').css('position', 'fixed');
				$('.nav-wrapper').slideDown();
			});	

		} else if(scrollT < 150) {
			$('.nav-wrapper').css('position', 'static');
		}


	});






}); //closes on.ready