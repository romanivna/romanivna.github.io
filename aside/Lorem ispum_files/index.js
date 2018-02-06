
		/*soft scrolling*/
$(document).ready(function(){
	$(".header__item_destination a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top-50;
		$("body,html").animate({scrollTop: destination }, 500);
	});
});

		/*sticky header*/
$(window).scroll(function(){
	if($(window).width()<768){
		var headerHeight = $('.header').height() -10+ $('.page-description').height();
	}else{
		var headerHeight = $('.header').height() -30 + $('.page-description').height();
	}
    if ($(window).scrollTop() >= headerHeight) {
       $('.content__always-visible-block').addClass('block_fixed');
			 //$('.content').addClass("content_fixed")
			 	if($(window).width()<768){
					$('.block_fixed').css('right','10%')
						$('.block_fixed').css('width','28%')
				} else{
			 var fixedBlockPosition = ($(window).width() - $('body').width())/2 + ($('body').width() - 200) - 10
			  $('.block_fixed').css('left',fixedBlockPosition)
				$('.block_fixed').width('200px')
			}
    }
    else {
       $('.content__always-visible-block').removeClass('block_fixed');
			 $('.content__always-visible-block').css('width','35%')
      // $('.content').removeClass('content_fixed');
    }

		var visibleBlockHeightWhileScroll = $('.container').height();
		$('.content__always-visible-block').css('height', visibleBlockHeightWhileScroll)

});

		/*content width*/
$(document).ready(content)
$(window).resize(content)
function content(){

	if ($(window).width()<1624){
		var contentWidth = $(window).width()-600;
		$('body').width(contentWidth)
		$('nav').width(contentWidth)
			if(($(window).width()>768)&&($(window).width()<1000)){
				contentWidth = $(window).width()-400;
				$('body').width(contentWidth)
				$('nav').width(contentWidth)
			} else if($(window).width()<768) mobileAsides()
	} else {
		var asidePosition = ($(window).width()-1024)/2;
		$('.left-aside').css('left',asidePosition);
		$('.right-aside').css('right',asidePosition);
	}
	let contentHeight = 50;
	for (let i=0; i<$('.content__item').length; i++){
			contentHeight += $('.content__item').height();

	}
	$('.content').height(contentHeight)
	$('.container').height($('.content').height())

}

		/*asides*/
	$('#left').on('click', asidesBlock);
	$('#right').on('click', asidesBlock);
var leftCount = 0
var rightCount = 0
var count;
function asidesBlock(){
	var val = $(this).attr('id')
	var a = '.'+val+'-aside'
	if(val=='left'){
		leftCount++
		count = leftCount
		leftAside(count,a)
}else {
		rightCount++
		count = rightCount
		rightAside(count,a)

}
}

function leftAside(count,a){
	if ($(window).width()>768||$(window).width()<1001){
		console.log('1')
		if (count%2!==0){
	 $(a).css('display', 'block');
	$(a).animate({left:'0px'},1000);
	} else {
		$(a).animate({left:'200px'},1000);
		setTimeout(function(){$(a).css('display', 'none')},1000);
	}
} else if($(window).width()<600){
	//for mobiles
} else {
	if (count%2!==0){
 $(a).css('display', 'block');
$(a).animate({left:'0px'},1000);
} else {
	$(a).animate({left:'300px'},1000);
	setTimeout(function(){$(a).css('display', 'none')},1000);
}
}

}

function rightAside(count,a){
	console.log($(window).width())
	if (($(window).width()>768)&&($(window).width()<1001)){

		if (count%2!==0){
	 $(a).css('display', 'block');
	$(a).animate({right:'0px'},1000);
	} else {
		$(a).animate({right:'200px'},1000);
		setTimeout(function(){$(a).css('display', 'none')},1000);
	}
} else if($(window).width()<600){
	//for mobiles

} else if($(window).width()>1000){

	if (count%2!==0){
	$(a).css('display', 'block');
	$(a).animate({right:'0px'},1000);
	} else {
	$(a).animate({right:'300px'},1000);
	setTimeout(function(){$(a).css('display', 'none')},1000);
	}
}
}
		/*for mobiles*/
function mobileAsides(){
	$('.left-aside').css('left','-100%');
	$('.right-aside').css('right','-100%');

	$('.body').width('80%');
	$('.header').width('80%');
	$('.content__always-visible-block').width('35%');
	$('.content__item').width('60%');

	$('.left-aside').width('100%');
	$('.left-aside').css('z-index','3');
	$('.left-aside').css('background','#c7ac8d ');

	$('.right-aside').width('100%');
	$('.right-aside').css('z-index','3');
	$('.right-aside').css('background','#c7ac8d ');

	$('.showLeftAside').on('click',function(){
		leftCount++
		if (leftCount%2!==0){
		$('.left-aside').css('display', 'block');
		$('.left-aside').animate({left:'0'},1000);
		$('.showRightAside').hide()
		} else {
		$('.left-aside').animate({left:'-100%'},1000);
		setTimeout(function(){$('.left-aside').css('display', 'none')},1000);
		$('.showRightAside').show()
		}

	})
	$('.showRightAside').on('click',function(){
		rightCount++
		if (rightCount%2!==0){
		$('.right-aside').css('display', 'block');
		$('.right-aside').animate({right:'0'},1000);
		$('.showLeftAside').hide()
		} else {
		$('.right-aside').animate({right:'-100%'},1000);
		setTimeout(function(){$('.right-aside').css('display', 'none')},1000);
		$('.showLeftAside').show()
		}

	})
}
