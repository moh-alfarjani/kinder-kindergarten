(function ($) {
    "use strict";

    // Initiate the wowjs
    // new WOW().init();


    // Spinner
    var hideSpinner = function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');

            // Check if demo popup exists in DOM safely
            if ($('#demoPopup').length > 0) {
                if (localStorage.getItem('hideDemoPopup') !== 'true') {
                    setTimeout(function () {
                        $('#demoPopup').addClass('show');
                    }, 500);
                }
            }
        }
    };

    // Wait for everything: window.load handles images, css, scripts. document.fonts.ready handles fonts.
    var spinnerFallback = setTimeout(function () {
        hideSpinner();
    }, 10000); // 10s fallback to prevent deadlock

    $(window).on('load', function () {
        if (document.fonts) {
            document.fonts.ready.then(function () {
                clearTimeout(spinnerFallback);
                hideSpinner();
            });
        } else {
            clearTimeout(spinnerFallback);
            hideSpinner();
        }
    });

    // Demo Popup interactions
    $(document).on('click', '#closeDemoPopup, #acceptDemoBtn', function () {
        $('#demoPopup').removeClass('show');
        if ($('#dontShowAgainDemo').is(':checked')) {
            localStorage.setItem('hideDemoPopup', 'true');
        }
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        rtl: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        rtl: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

