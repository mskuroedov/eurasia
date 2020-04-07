$('.profile-page__tabs .tab').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).hasClass('active')) {
        return false;
    }
    let href = $(this).attr('href');
    $('.profile-page-block').hide();
    $('.profile-page-block' + href).show();

    $('.profile-page__tabs .tab').removeClass('active');
    $(this).addClass('active');


})