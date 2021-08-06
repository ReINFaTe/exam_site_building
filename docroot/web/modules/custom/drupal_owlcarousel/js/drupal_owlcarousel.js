(function ($) {
    Drupal.behaviors.drupal_OwlCarousel = {
      attach: function (context, settings) {
        $('.view-clients.view-display-id-block_1 .view-content').owlCarousel({
          items: 8,
          loop:true,
          dots: true,
          merge: 0,
          mergeFit: true,

          responsive:{
            0: {
              items: 1
            },
            600:{
              items: 4
            },
            1000:{
              items: 5
            },
            1200:{
              items: 8
            }
          }
        });
        $('.view-clients.view-display-id-block_1 .view-content').addClass('owl-carousel owl-theme');
      }
    };
  })(jQuery);