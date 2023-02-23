var viewPortWidth = jQuery(window).width();
jQuery(document).ready(function () {
   
    var viewPortWidth = jQuery(window).width();
    jQuery('.header-top .dropdown').click(function () {
        jQuery(this).find(".dropdown-menu").slideToggle();
    });
    jQuery(document).on('click', function (e) {
        if (jQuery(e.target).closest(".dropdown-full").length === 0) {
            jQuery(".dropdown-menu").removeClass("open");
            jQuery(".dropdown-menu").slideUp();
        }
    });
    if (viewPortWidth > 992) {
        jQuery('.dropdown-full').hover(function () {
            jQuery('.submenu ', this).stop(true, true).slideDown('fast');
            jQuery(this).addClass('open');
        }, function () {
            jQuery('.submenu ', this).stop(true, true).slideUp('slow');
            jQuery(this).removeClass('open');
        });
    }
    if (viewPortWidth < 992) {
        jQuery(".nav-main li.dropdown").find(".theme-angle-down-icon").replaceWith('<i class="menu-plus-gold-icon"></i>').wrap(".dropdown-toggle");
        jQuery(".nav-main li.dropdown .expand-icon").click(function () {
            if (jQuery(this).parent().next().is(":hidden")) {
                jQuery(this).addClass("accordion-show");
                jQuery(this).find('.menu-plus-gold-icon').removeClass('menu-plus-gold-icon').addClass('menu-minus-gold-icon');
            } else {
                jQuery(this).removeClass("accordion-show");
                jQuery(this).find(".menu-minus-gold-icon").removeClass('menu-minus-gold-icon').addClass('menu-plus-gold-icon');
            }
            jQuery(this).parent().next().slideToggle(400);
        });
        verticalmenu = jQuery(".navbar-main"),feedbackbtn = jQuery(".navbar-toggle");
        feedbackbtn.click(function () {
            if (verticalmenu.hasClass('visiable')) {
                verticalmenu.animate({"left": "-300px"}, {duration: 300}).removeClass('visiable');
            } else {
                jQuery("body").css("overflow", "hidden");
                verticalmenu.animate({"left": "0px"}, {duration: 300}).addClass('visiable');
                jQuery(".menu-overlay").show();                
            }
        });
        jQuery(".menu-overlay").click(function () {
            verticalmenu.animate({"left": "-300px"}, {duration: 300}).removeClass('visiable');
            jQuery(".menu-overlay").hide();
            jQuery("body").css("overflow", "inherit");
        });
    }

  
});
jQuery(document).ready(function() {
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth > 1024) {
        jQuery('ul.nav-main > li.dropdown').hover(function() {
            jQuery(this).addClass('open');
        }, function() {
            jQuery(this).removeClass('open');
        });
    }
    var viewPortWidth = jQuery(window).width();
    if (viewPortWidth < 1023) {
        jQuery('.nav-main .dropdown .main-parent').each(function () {
            jQuery(this).append('<b class="expand-icon"><i class="sprite menuclose-icon v-middle"></i></b>');
//            jQuery(this).removeAttr("href");
        });
        jQuery('.category-menu > li.dropdown > a, .drop-menu-box').each(function() {
            jQuery(this).prepend('<b class="expand-icon"><i class="sprite menuclose-icon v-middle"></i></b>');
//            jQuery(this).removeAttr("href");
        });
        jQuery('.nav-main > li.dropdown > .main-parent').click(function () {
            jQuery('.expand-icon').removeClass('active');
            jQuery('.dropdown-box').slideUp('normal');
            if (jQuery(this).parents("li").find(".dropdown-box").is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).find('.expand-icon').addClass('active');
                jQuery(this).parents("li").find(".dropdown-box").slideDown();
            }
        });
        jQuery('.drop-menu-box .expand-icon').click(function() {
            jQuery('.drop-menu-box .expand-icon').removeClass('active');
            jQuery(".category-list-menu").slideUp('normal');
            if (jQuery(this).parent(".drop-menu-box").find(".category-list-menu").is(':hidden') == true) {
                jQuery(this).parent(".drop-menu-box").find(".category-list-menu").slideDown();
                jQuery(this).find('.expand-icon').addClass('active');
                jQuery(this).parent(".drop-menu-box").find('.expand-icon').addClass('active');
            }
        });
    };
});


