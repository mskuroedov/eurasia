$(document).ready(function () {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
    };
    $('.countupthis').each(function () {
        var num = $(this).attr('numx'); //end count
        var nuen = $(this).text();
        if (nuen === "") {
            nuen = 0;
        }
        var counts = new CountUp(this, nuen, num, 0, 1.5, options);
        counts.start();
    });
});
var animate_car_block = new Animate({
    target: '.l-desktop',
    offset: [1, 0.25]
});
animate_car_block.init();

var animate_timeline = new Animate({
    target: '[animate-timeline]',
    offset: [0.5, 0.5],
    animatedClass: [''],
    delay: 0,
    callbackOnInView: () => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(function (e) {
                $('.timeline-' + i).addClass('js-animated');
            }, 1000 * (i - 1))
        }
    }
});
animate_timeline.init();

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
