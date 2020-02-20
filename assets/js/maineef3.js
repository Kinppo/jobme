(function ($) {
    'use strict';

    logoAreaFn();
    menuResize();

    if ($('.owl-carousel')['length']) {
        $('.owl-carousel')['owlCarousel']({
            loop: true,
            margin: 10,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1.5
                },
                600: {
                    items: 2.5
                },
                1000: {
                    items: 2.5
                },
                1920: {
                    items: 3.5
                }
            }
        });
        welcomeCarousel();
        $('.owl-carousel')['on']('translated.owl.carousel', function (e) {
            welcomeCarousel()
        });

        function welcomeCarousel() {
            var owlLength = $('.owl-carousel .owl-stage .owl-item.active')['length'];
            $('.owl-carousel .owl-stage .owl-item')['removeClass']('firstActiveItem');
            $('.owl-carousel .owl-stage .owl-item.active')['each'](function (e) {
                if (e === 0) {
                    $(this)['addClass']('firstActiveItem')
                }
            })
        }
        $('.base .prev')['click'](function () {
            $('.owl-carousel')['trigger']('prev.owl.carousel')
        });
        $('.base .next')['click'](function () {
            $('.owl-carousel')['trigger']('next.owl.carousel')
        })
    };
    if ($('.menu-trigger')['length']) {
        $('.menu-trigger')['on']('click', function () {
            $(this)['toggleClass']('active');
            $('.header-area .nav')['slideToggle'](200)
        })
    };
    window['sr'] = new scrollReveal();
    if ($('.count-item')['length']) {
        $('.count-item strong')['counterUp']({
            delay: 10,
            time: 1000
        })
    };
    if ($('.gallery')['length'] && $('.gallery-item')['length']) {
        $('.gallery-item')['magnificPopup']({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        })
    };
    if ($('.page-gallery')['length'] && $('.page-gallery-wrapper')['length']) {
        $('.page-gallery')['imgfix']({
            scale: 1.1
        });
        $('.page-gallery')['magnificPopup']({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        })
    };
    if ($('.about-image')['length']) {
        $('.about-image')['imgfix']({
            scale: 1.1
        })
    };
    if ($('.blog-post-thumb')['length']) {
        $('.blog-post-thumb .img')['imgfix']()
    };
    if ($('.services-post')['length']) {
        $('.services-post .img')['imgfix']()
    };
    $(window)['on']('scroll', function () {
        logoAreaFn()
    });
    $(window)['on']('resize', function () {
        menuResize();
    });

    function menuResize() {
        var windowWidth = $(window)['width']();
        $('.submenu')['on']('click', function () {
            if (windowWidth < 992) {
                $('.submenu ul')['removeClass']('active');
                $(this)['find']('ul')['toggleClass']('active')
            }
        })
    }

    function logoAreaFn() {
        var windowWidth = $(window)['width']();
        if ($('.header-white')['length']) {
            return false
        } else {
            if (windowWidth > 991) {
                var scrollTop = $(window)['scrollTop']();
                if (scrollTop >= 30) {
                    $('.header-area')['addClass']('header-sticky');
                    $('.header-area .dark-logo')['css']('display', 'block');
                    $('.header-area .light-logo')['css']('display', 'none')
                } else {
                    $('.header-area')['removeClass']('header-sticky');
                    $('.header-area .dark-logo')['css']('display', 'none');
                    $('.header-area .light-logo')['css']('display', 'block')
                }
            }
        }
    }

    /* ==================================================
            Preloader Init
         ===============================================*/
    $(window).on('load', function () {
        // Animate loader off screen
        $(".pre-loader").fadeOut("slow");;
    });
})(window['jQuery'])