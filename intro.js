function test(id) {
	$('.item').removeClass('active');
	$(id).find('.item').toggleClass('active');
}
$(function(){
    $('a.gototop').click(function(){
		$('html, body').animate({scrollTop:0},600);
	    return false;
	});
	$('#list1').click(function(){
		$('html, body').animate({
			scrollTop: $(".instructor").offset().top
		}, 1000);
	});
	$('#list2').click(function(){
		$('html, body').animate({
			scrollTop: $(".adviser").offset().top
		}, 1000);
	});
	$('#list3').click(function(){
		$('html, body').animate({
			scrollTop: $(".wet").offset().top
		}, 1000);
	});
	$('#list4').click(function(){
		$('html, body').animate({
			scrollTop: $(".dry").offset().top
		}, 1000);
	});
	$('#list5').click(function(){
		$('html, body').animate({
			scrollTop: $(".hp").offset().top
		}, 1000);
	});
});
