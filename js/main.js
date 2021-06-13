
$(document).ready(function(){
	$(".header__burger").click(function(e){
		e.preventDefault();

		$(this).toggleClass("burger");
	});
});