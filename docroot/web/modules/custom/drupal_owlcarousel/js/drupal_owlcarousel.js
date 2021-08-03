(function ($) {
    Drupal.behaviors.drupal_OwlCarousel = {
      attach: function (context, settings) {
        $('.view-clients .view-content').owlCarousel({
          items: 8,
          nav:true,
          responsiveClass:true,
          loop:true,
        //   responsive:{
        //     0: {
        //       items: 3
        //     },
        //     600:{
        //       items: 4
        //     },
        //     1000:{
        //       items: 5
        //     }
        //   }
        });
        $('.view-clients .view-content').addClass('owl-carousel');
      }
    };
  })(jQuery);