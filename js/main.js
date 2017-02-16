$(document).ready(function(){

	$('.xtoggle').click(function(){
		var scroll = $(window).scrollTop();

		$(this).toggleClass('xtoggleOpen');

    	if (scroll < 100) {
        	$('.navbar').toggleClass('navbarActivated');
    	}

	});

	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    	if (scroll >= 100) {
        	$('.navbar').addClass('navbarOpen');
    	} else {
        	$('.navbar').removeClass('navbarOpen');
    	}
	});

});

