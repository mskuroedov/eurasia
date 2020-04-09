let chat_empty_block = $('.chat__view__empty')
$('.chat__nav__list__item').on('click', function () {
    $(chat_empty_block).hide();
    let chat = $(this).attr('data-chat');
    $('[data-chat]').removeClass('active');
    $(this).addClass('active');
    $('.chat__view').removeClass('--open')
    $(chat).addClass('--open');
    if (window.innerWidth < 800) {
        $('body').addClass('mobile-menu-opened')
    }
})
$('.close-chat').on('click', function () {
    let chat = $(this).parent().parent(),
        id = $(chat).attr('id'),
        link = $('[data-chat=' + id + ']');
    $(chat).addClass('closing');
    setTimeout(function () {
        $('[data-chat]').removeClass('active');
        $(link).removeClass('active');
        $(chat).removeClass('--open');
        $(chat).removeClass('closing');
        $('body').removeClass('mobile-menu-opened');
    }, 200)
})