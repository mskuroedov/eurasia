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

//search input
let search = $('.catalog__search .input input'),
    search_results = $('.catalog__search .input .search-results'),
    search_clear = $('.catalog__search .input .clear');
search.on('focusin', function () {
    search_results.addClass('shown')
});
search.on('focusout', function (e) {
    if (e.target.value === '') {
        search_results.removeClass('shown');
    }
});
search.on('input', function (e) {
    if (e.target.value !== '') {
        search_clear.addClass('active');
        //here any async call .then((res)=>
        search_results.addClass('shown')
        console.log(search_results)
    } else {
        search_clear.removeClass('active');
    }
});
search_clear.on('click', function () {
    search_clear.removeClass('active');
    search_results.removeClass('shown');
    search.val('')
})

//filters tab menu
const catalog_filters = {
    0: {
        mark: '',
        model: '',
        year_from: '',
        yarn_to: '',
        price_from: '',
        price_to: '',
        value_from: '',
        value_to: '',
        engine_type: '',
        box: '',
        transmission: ''

    },
    1: {
        mark: 1,
        model: 1,
        year_from: 1,
        yarn_to: 1,
        price_from: 1,
        price_to: 1,
        value_from: 1,
        value_to: 1,
        engine_type: 1,
        box: 1,
        transmission: 1
    }
};

function setFilters(filter_id) {
    Object.keys(catalog_filters[filter_id]).forEach((item, i) => {
        let select = $('[name=' + item + ']')
        select.val(catalog_filters[filter_id][item]);
        select.trigger('change');
    })
}

$('.catalog__filters__tabs .item').on('click', function () {
    $('.catalog__filters__tabs .item').removeClass('--active')
    $(this).addClass('--active');
    setFilters(+$(this).attr('filter'));
})

$('.catalog__row .sort .item').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).hasClass('primary')) {
        $('.catalog__row .sort .item').removeClass('sort-desc')
        return;
    }
    if ($(this).hasClass('sort-desc')) {
        $(this).removeClass('sort-desc')
    } else {
        $(this).addClass('sort-desc')
    }
})