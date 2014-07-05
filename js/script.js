$(document).ready(function(){

	km = {};
	km.last;
	km.itemHeight = $('.gallery-item').eq(0).outerHeight();

	$('.gallery-info').animate({opacity:0},500,'swing');
	
	$('.gallery-item').hover(function(){
		$(this).children('.gallery-info').animate({opacity:1},500,'swing')
		},function(){
		$(this).children('.gallery-info').animate({opacity:0},500,'swing')
	});
	
	$('#gallery-list > li > a').click(function(event){
		/* Disable standard scroll event */
		event.preventDefault();
		/* Get index */
		var index = $(this).parent().index() - 1;
		/* Adjust menu highlight */
		$('#gallery-list > li > a').each(function(index){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
		/* Scroll to the picture */
		$('#gallery-view').animate({scrollTop:index*km.itemHeight+'px'},500);
		/* Briefly show the work title */
		$('.gallery-item:nth-child('+(index+1)+') > .gallery-info').css('opacity',1).delay(2000).animate({opacity:0},500,'swing');
	});
});