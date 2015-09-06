var headerHeight = $('.header-nav-wrapper').height();

$(window).scroll(function() {
	if ($(window).scrollTop() > headerHeight) {
		$('.header-nav-wrapper').addClass('fixed');
	} else {
		$('.header-nav-wrapper').removeClass('fixed');
	}
})