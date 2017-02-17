$(document).ready(function(){

	$('.xtoggle').click(function(){
		var scroll = $(window).scrollTop();

		$(this).toggleClass('xtoggleOpen');
        $('.navbar').toggleClass('navbarActivated');

	});

	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    	if (scroll >= 250) {
        	$('.navbar').addClass('navbarOpen');
    	} else {
        	$('.navbar').removeClass('navbarOpen');
    	}
	});

});

