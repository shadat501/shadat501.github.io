// you can use document ready function for activing your plugin .

$( document ).ready(function() {
	// your plugin activation here
	// using headingAni ID we are activeing heading animation here.
	new WOW().init();


	 // backstretch active here 
	 $(".atom-home-area").backstretch([
          "img/home-bg.jpg"
        ]);

	 // countdown
    // To change date, simply edit: var endDate = "May 26, 2015 20:39:00";
    var endDate = "May 19, 2015 20:39:00";
      $('.atom-countdown').countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="atom-countdown"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
        }
      });

    // active owl carousel
   $(".atom-owl").owlCarousel({
        pagination: false,
        items: 3,
        autoPlay : true,
        stopOnHover : true,
   });

   // nicescroll active here
   $("html").niceScroll({
      cursorcolor: '#F54646',
      cursorborder: '1px solid #F54646'
   });

   // scroll up active
   $(function () {
      $.scrollUp({
        scrollImg: true,
        scrollSpeed: 650,
        topDistance: '1500'
      });
  });


});

