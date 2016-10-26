
$(document).ready(function (){

	$(window).scroll(function(){
		if ($(window).scrollTop() > 250) {
			$('nav').addClass('nav-scrolled');
			$('main').addClass('main-scrolled');
			console.log("scolled");
		}else{
			$('nav').removeClass('nav-scrolled');
			$('main').removeClass('main-scrolled');
		}
	})
});