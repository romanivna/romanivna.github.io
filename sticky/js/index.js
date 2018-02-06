		/*soft scrolling*/
$(document).ready(function(){
	$(".header__item a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 500);
	});
});

		/*sticky header*/ 
$(window).scroll(function(){
  var bannerHeight = $('.banner').height();
    if ($(window).scrollTop() >= bannerHeight) {
       $('nav').addClass('header_fixed');
    }
    else {
       $('nav').removeClass('header_fixed');
    }
});
