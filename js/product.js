//product slider
$(document).ready(function () {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        // nav: true,
        autoplay: false,
        dots: false,
        loop: false,
        responsive: {
            0: {
                nav: false
            },
            1200: {
                nav: true
            }
        },
        responsiveRefreshRate: 200,
        navText: [
            '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
            '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            loop: false,
            smartSpeed: 200,
            slideSpeed: 500,
            responsive: {
                0: {
                    autoWidth: true,
                    // items:3.8,
                    margin: 1.5
                },
                800: {
                    autoWidth: true,
                    margin: 2
                },
                1200: {
                    autoWidth: true,
                    margin: 2
                }
            },
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var current = el.item.index;

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start && window.innerWidth < 1200) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {

        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
$('.product__slider .show-more').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).attr('data-expanded') === 'false') {
        $('.product__slider .thumbs-carousel .owl-stage').addClass('expanded')
        $(this).attr('data-expanded', 'true')
    } else {
        $('.product__slider .thumbs-carousel .owl-stage').removeClass('expanded')
        $(this).attr('data-expanded', 'false')
    }
});
//product slider end

//mark popover on desktop
$('.product__variants-to-buy .product__mark img').popover({
    html: true,
    placement: 'bottom',
    trigger: 'hover',
    offset: '-40, 0',
    template: '<div class="popover product-mark-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
});

//more info under slider on desktop
$('.product__more-data-desktop .nav a').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let view = $('.product__more-data-desktop .view'),
        ref = $(this).attr('href');
    view.find('.view-content').hide();
    $('.product__more-data-desktop .nav a').removeClass('--active');
    view.find('.view-content' + ref).show();
    $(this).addClass('--active')
})

//show-more mobile description
let sm_link = $('.product__characteristics .show-more'),
    sm_container = $('.product__characteristics__container');
sm_link.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (sm_container.hasClass('expanded')) {
        sm_container.removeClass('expanded');
        sm_link.attr('aria-expanded', 'false')
    } else {
        sm_container.addClass('expanded');
        sm_link.attr('aria-expanded', 'true')
    }
})

//calculator
let money_input = $('#range-money'),
    time_input = $('#range-time');
let price = +$('.product__price-block .main').text().replace(/\s/g, '').replace(/₽/g, '');
$("#range-money-control").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
        // console.log('Position', position, 'Value', value);
        let formatted_val = (price * value / 100).toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$& ')
            .replace('.00', '')
        money_input.val(`${formatted_val} ₽`)
    }
});
$("#range-time-control").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
        // console.log('Position', position, 'Value', value);
        time_input.val(`${value} месяцев`)
    }
});
$('#range-money-control').val(50).change();
$('#range-time-control').val(12).change();
money_input.on('focusin', function () {
    $(this).val('');
})
money_input.on('focusout', function (e) {
    if ($(this).val() === '') {
        $('#range-money-control').change();
    }else{
        // let val = parseInt(e.target.value),
        //     range_val = parseInt(price / val),
        //     formatted_val = (range_val/100 * price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ').replace('.00', '');
        // $('#range-money-control').val(range_val).change();
        // money_input.val(`${formatted_val} ₽`)
    }
})
time_input.on('focusin', function () {
    $(this).val('');
})
time_input.on('focusout', function (e) {
    if ($(this).val() === '') {
        $('#range-time-control').change();
    } else {
        let val = e.target.value,
            range_val = e.target.value;
        $('#range-time-control').val(range_val).change();
        time_input.val(`${val} месяцев`)
        $('#range-time-control').change();

    }
})


//bottom sliders
let sameSlider = $('.product__look-a-like-slider .owl-carousel');
let recentSlider = $('.product__recent-views-slider .owl-carousel');
sameSlider.owlCarousel({
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
            slideBy: 3,
            nav: true,
            navText: [
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
        },
    }
});
recentSlider.owlCarousel({
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
            slideBy: 3,
            nav: true,
            navText: [
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
        },
    }
});