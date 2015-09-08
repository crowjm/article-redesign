var headerHeight = $('.header-nav-wrapper').height();

$(window).scroll(function() {
	if ($(window).scrollTop() > headerHeight) {
		$('.header-nav-wrapper').addClass('fixed');
	} else {
		$('.header-nav-wrapper').removeClass('fixed');
	}
});


$(".header-nav a").hover (
	function(){
	$(".toggle", this).css({"opacity": "1"});},
	function(){
	$(".toggle", this).css({"opacity": "0"});}
);


$("#headernav-sub1").click (
	function(){
		$("#show-list1").toggle();
	}
);

$("#headernav-sub2").click (
	function(){
		$("#show-list2").toggle();
	}
);

$("#headernav-sub3").click (
	function(){
		$("#show-list3").toggle();
	}
);

$("#headernav-sub4").click (
	function(){
		$("#show-list4").toggle();
	}
);