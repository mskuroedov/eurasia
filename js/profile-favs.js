$('.catalog-view-control a').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.catalog-view-control a').removeClass('active');
    $(this).addClass('active');
    let mode = $(this).attr('data-set')
    if (mode === 'rows') {
        $('.auto-items-container').removeClass('tiles')
    } else {
        $('.auto-items-container').addClass('tiles')
    }
})