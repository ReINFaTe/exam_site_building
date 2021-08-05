(function ($, Drupal) {
Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      $('.region-primary-menu', context).once('myFirstBehavior').each(function () {
        let prevPos = 0;
        $(window).scroll(function(){
            $(".region-primary-menu").css("top",Math.max(0,40-$(this).scrollTop()));
            if (500-$(this).scrollTop() < 0) {
                if (prevPos < $(this).scrollTop() && !$('.menu-button').hasClass('active')) {
                    $(".region-primary-menu").css("top", -100)
                    if($(window).width() < 1200) {
                      $(".region-primary-menu").css("top", -200)
                    }
                }
            }
            prevPos = $(this).scrollTop();
        });
      });
    }
  }
  Drupal.behaviors.mySecondBehavior = {
    attach: function (context, settings) {
      $('.menu-button').once("beh").click(function() {
        $('.menu-button').toggleClass('active')
        $('.menu--main').toggleClass('active')
        $('.search-block-form').toggleClass('active')
        $('.field--name-field-social-').toggleClass('active')
      })
    }
  }
}
  )(jQuery, Drupal);