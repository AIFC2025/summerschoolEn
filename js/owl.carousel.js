/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */
(function ($, window, document) {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1, // 每次只显示一个教师
            loop: true,
            nav: false,
            dots: true,
            autoplay: false, // 可选：自动播放
            autoplayTimeout: 5000, // 自动播放间隔
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });

        // 自定义左右切换按钮
        $(".owl-prev-custom").click(function() {
            $(".owl-carousel").trigger('prev.owl.carousel');
        });

        $(".owl-next-custom").click(function() {
            $(".owl-carousel").trigger('next.owl.carousel');
        });
    });
}(jQuery, window, document));
