var latestSlider = $('.latest-items-slider');
latestSlider.owlCarousel({
    items: 4,
    nav: true,
    margin: 40,
    dots: true,
    navText: ["<img src='./assets/icons/arrow_prev.svg'>", "<img src='./assets/icons/arrow_next.svg'>"],
    onInitialized: function () {
        $('.latest-items-slider .owl-dots').insertBefore($('.latest-items-slider .owl-nav .owl-next'))
    },
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        768: {
            items: 2,
            slideBy: 2
        },
        993: {
            items: 3,
            slideBy: 3
        },
        1200: {
            items: 4,
            slideBy: 4
        }
    }
});
$(document).ready(function () {
    $('select').niceSelect();
});