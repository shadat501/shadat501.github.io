jQuery.fn.center = function () {
	// store this by element variable
	var element = this;
	// when browser resize  function active
	$(window).bind("resize", function () {
		changeCss();
	})

	// changeCss function call 
	changeCss();

	// write element center function
	function changeCss () {
		var elementHeight = $(element).height();
		var elementwidth = $(element).width();
		var pWidth = $(element).parent().width();
		var pHeight = $(element).parent().height(); 

		$(element).css({
			"position": "absolute",
			"left" : pWidth / 2 - elementHeight /2,
			"top" : pHeight / 2 - elementwidth /2
		});
	};
};