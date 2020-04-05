var specsSlider = $('.specs-slider');
specsSlider.owlCarousel({
    items: 4,
    margin: 2,
    dots: false,
    responsive: {
        0: {
            items: 1.73,
            autoWidth: true,
            slideBy: 1
        },
        800: {
            items: 2.5,
            autoWidth: true,
            slideBy: 3
        },
        1200: {
            items: 5,
            slideBy: 3
        },
    }
});

//collapsing map
let control = $('.trade-in__map .link'),
    map = $('.trade-in__map .map');
control.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).attr('aria-expanded') === 'true') {
        $(this).attr('aria-expanded', false)
        map.removeClass('--open')
    } else {
        $(this).attr('aria-expanded', true)
        map.addClass('--open')
    }
});

//cars sliders
let car_sliders = $('.trade-in__models .owl-carousel');

car_sliders.owlCarousel({
    dots: false,
    responsive: {
        0: {
            autoWidth: true,
            margin: 2,
            slideBy: 1
        },
        800: {
            margin: 2,
            autoWidth: true,
            slideBy: 3
        },
        1200: {
            // items: 5,
            autoWidth: true,
            margin: 2,
            nav: true,
            navText: [
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
            slideBy: 2,

        },
    }
});