$(document).ready(function() { 
	$("#owl-example").owlCarousel({ 
	 
	    items : 6,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [979,3],
	    pagination: false
 
	});

	var owl = $(".owl-carousel").data('owlCarousel');

	$('.partner-left').on('click', function(){ 
		owl.prev()
	})

	$('.partner-right').on('click', function(){ 
		owl.next()
	})

	$(window).on('resize', function(){

		leftArrow1() 

	})

	leftArrow1() 

})

function leftArrow1() {

	var leftspace = $('.readmore-slider').offset().left + 30

	$('.long-arrow').css('width', leftspace)

	$('.readmore-slider').mouseover(function(){
		$(this).find('.long-arrow').addClass('long-arrow-hover')
	}).mouseout(function(){
		$(this).find('.long-arrow').removeClass('long-arrow-hover')
	})

} 