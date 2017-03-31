$(function() {
	$(".arrow")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
