/*
 $ Header Fix On Scroll
*/
; (function ($) {

    var viewPortWidth = $(window).width();
    if (viewPortWidth > 992) {
        $(window).on("scroll", function () {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("fixedscroll", (fromTop > 100));
        });
    }



})(jQuery);




/*
  Close top Header
*/
; (function ($) {

    var $headerClose = $('.header-close-icon'),
        $headerTop = $('.header-top');

    if ($headerTop.length > 0) {

        $headerClose.on('click', function () {

            $headerTop.slideUp(500);

        });
    }

})(jQuery);
