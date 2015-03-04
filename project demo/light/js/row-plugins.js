/* ===================== write your custom javascript here ========================= */
$(function() {
    "use strict";


    /* ==========================================================================
   window laod function
   ========================================================================== */
    
    $(window).load(function() {
      // preloader function
        $('#atom-status').fadeOut(); // will first fade out the loading animation
        $('#atom-preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    });


    /* ==========================================================================
   document ready function
   ========================================================================== */
    
    $(document).ready(function() {
        // theme-home-area wrapper vertical centering
          $(function () {
            var wrapper_height = $('.atom-vcenter').height();
            var negative_margin = -(wrapper_height / 2);
            $('.atom-vcenter').css({'marginTop':negative_margin+'px'});
          });

          // smooth scroll 
          $(function() {
                $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                  }
                }
                });
              });


          // Scroll down button show/hide function
          function scrolldown() {
            var header_h = $('.atom-home-area').height();
            var scrolldown = $('.atom-scroll-down');

            if( header_h >= 650 )
              scrolldown.show();
            else
              scrolldown.hide();
          }
          scrolldown();

          // scroll down button show/hide function re-init on window resize
          $(window).on('resize', function() {
            scrolldown();
          });


    });


});