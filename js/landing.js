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
var fbSlider = $('.feedback-slider');
fbSlider.owlCarousel({
    margin: 1,
    dots: false,
    responsive: {
        0: {
            items: 1.23,
            autoWidth: true,
            slideBy: 1
        },
        800: {
            items: 1.23,
            autoWidth: true,
            margin: 20,
            slideBy: 1
        },
        1200: {
            items: 1.23,
            autoWidth: true,
            margin: 20,
            slideBy: 1
        }
    }
})
var newsSlider = $('.news-slider');
newsSlider.owlCarousel({
    margin: 2,
    dots: false,
    responsive: {
        0: {
            items: 1.23,
            slideBy: 1,
            autoWidth: true,
        },
        800: {
            items: 3,
            slideBy: 3
        },
        1200: {
            items: 3,
            slideBy: 3
        }
    }
})

var animate_car_block = new Animate({
    target: '.l-desktop',
    offset: [1, 0.25]
});
animate_car_block.init();

// var animate_timeline_block = new Animate({
//     target: '.--first',
//     offset: [1, 0.25]
// });
// animate_timeline_block.init();
