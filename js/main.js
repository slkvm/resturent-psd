(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        // jQuery Sticky JS
         $(".header-area").sticky({topSpacing:0});
        
        // jQuery smooth scroll
        $('li.smoth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });
        
        // Parallax
        $('.parallax-bg').scrolly({bgParallax: true});
        
        // jQuery scroll psy
        $('body').scrollspy({ 
            target: '.navbar-collapse',
            offset: 95
        });
        
        // Wow JS  
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            }
          }
        );
        wow.init();
        
        // Preloder
        $('body').addClass("preloder_animatein");


    });


    jQuery(window).load(function(){
    // Preloder
        $('.preloder-sniper').fadeOut(); // will first fade out the loading animation
			$('#preloder').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').removeClass("preloder_animatein");
        
    });


}(jQuery));	