/* ===================== active your plugin here ========================= */

$(function() {
    "use strict";


    /* ==========================================================================
   window laod function
   ========================================================================== */
    
    $(window).load(function() {
        // active plugin which plugin should active after window is fully loaded
    });


    /* ==========================================================================
   document ready function
   ========================================================================== */
    
    $(document).ready(function() {
        // active nicescroll 
         $("html").niceScroll({
            scrollspeed: 20,
            cursorborder: "1px solid #e74c3c",
            cursorcolor: "#e74c3c",
            mousescrollstep: 50

            // if you want to add more option please visit "https://github.com/inuyaksa/jquery.nicescroll"
         });

         // active countdown 
          // To change date, simply edit: var endDate = "June 26, 2015 20:39:00";
          var endDate = "June 26, 2015 20:39:00";
            $('.atom-countdown').countdown({
              date: endDate,
              render: function(data) {
                $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="atom-countdown"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
              }
            });
    });


});