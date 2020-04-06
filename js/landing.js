//banner
let banner_slider = $('.l1__banner')
banner_slider.owlCarousel({
    margin: 0,
    items: 1,
    dots: true,
    loop:true,
    navText: [
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
    responsive: {
        0: {
            nav: false,
        },
        1200: {
            nav: true,
        }
    }
})

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
