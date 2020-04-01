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
    $('.select').select2({ width: '100%' })
});


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