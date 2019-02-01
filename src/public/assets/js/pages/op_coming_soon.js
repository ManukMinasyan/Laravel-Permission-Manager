/*
 *  Document   : op_coming_soon.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Coming Soon Page
 */

var OpComingSoon = function() {
    // Init Countdown.js, for more examples you can check out https://github.com/hilios/jQuery.countdown
    var initCounter = function(){
        jQuery('.js-countdown').countdown((new Date().getFullYear() + 1) + '/02/01', function(event) {
            jQuery(this).html(event.strftime('<div class="row items-push text-center">'
                    + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%-D</div><div class="font-size-xs font-w700 text-white-op">DAYS</div></div>'
                    + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%H</div><div class="font-size-xs font-w700 text-white-op">HOURS</div></div>'
                    + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%M</div><div class="font-size-xs font-w700 text-white-op">MINUTES</div></div>'
                    + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%S</div><div class="font-size-xs font-w700 text-white-op">SECONDS</div></div>'
                    + '</div>'
            ));
        });
    };

    return {
        init: function () {
            // Init Countdown
            initCounter();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ OpComingSoon.init(); });