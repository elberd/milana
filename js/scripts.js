$(document).ready(function() {

$(window).on('resize', function(){

	leftArrow1()
	leftArrow2()

})

leftArrow1()
leftArrow2()

})

function leftArrow1() {

	var leftspace = $('.readmore').offset().left + 30

	$('.long-arrow').css('width', leftspace)

	$('.readmore').mouseover(function(){
		$('.long-arrow').addClass('long-arrow-hover')
	}).mouseout(function(){
		$('.long-arrow').removeClass('long-arrow-hover')
	})

}

function leftArrow2() {

	var leftspace = $('.readmore-tagline').offset().left + 30

	$('.long-arrow').css('width', leftspace)

	$('.readmore-tagline').mouseover(function(){
		$('.long-arrow').addClass('long-arrow-hover')
	}).mouseout(function(){
		$('.long-arrow').removeClass('long-arrow-hover')
	})

}