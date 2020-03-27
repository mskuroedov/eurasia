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
})

$(document).ready(function () {
    $('select').niceSelect();
});