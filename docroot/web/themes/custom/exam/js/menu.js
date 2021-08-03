(function ($, Drupal) {
Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      $('.region-primary-menu', context).once('mySecondBehavior').each(function () {
        let prevPos = 0;
        $(window).scroll(function(){
            $(".region-primary-menu").css("top",Math.max(0,40-$(this).scrollTop()));
            if (500-$(this).scrollTop() < 0) {
                if (prevPos < $(this).scrollTop()) {
                    $(".region-primary-menu").css("top", -100)
                }
            }
            prevPos = $(this).scrollTop();
        });
      });
    }
  }})(jQuery, Drupal);