$('.header .menu-btn').on('click', function () {
    $('.mobile__menu').addClass('--open');
    $('body').addClass('mobile-menu-opened')
})
$('.mobile__menu .menu-btn').on('click', function () {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.level.second').addClass('d-none');
        $('.level.main').removeClass('d-none');
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
})
$('.mobile__menu__bg').on('click', function () {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.level.second').addClass('d-none');
        $('.level.main').removeClass('d-none');
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
});
$('[mm-data]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let section = $(this).attr('mm-data');
    $('.level.second' + section).removeClass('d-none');
    $('.level.main').addClass('d-none');
})
$('.level.second .back').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let id = $(this).parent().parent().attr('id');
    $('.level.second#' + id).addClass('d-none');
    $('.level.main').removeClass('d-none');

})
//header highlight on scroll
$(window).on('scroll', function (e) {
    if (window.innerWidth < 1200) {
        return;
    }
    if (window.pageYOffset > 50) {
        $('.header .desktop').addClass('--highlighten')
    } else {
        $('.header .desktop').removeClass('--highlighten')
    }
});
$(document).ready(function () {
    if (window.innerWidth < 1200) {
        return;
    }
    if (window.pageYOffset > 50) {
        $('.header .desktop').addClass('--highlighten')
    } else {
        $('.header .desktop').removeClass('--highlighten')
    }
})
//header desktop menu managing
let menu_content = {
    buy: '<a href="#">Каталог автомобилей</a>\n' +
        '                    <a href="#">Подбор автомобиля</a>\n' +
        '                    <a href="#">Trade-in/Обмен автомобиля</a>\n' +
        '                    <a href="#">Спецпредложения</a>\n' +
        '                    <a href="#">Срочная продажа</a>\n' +
        '                    <a href="#">Лучшая цена</a>\n' +
        '                    <a href="#">Новое на сайте</a>\n' +
        '                    <a href="#">Скоро в продаже</a>',
    sell: '<a href="#">Обмен автомобиля</a>\n' +
        '                    <a href="#">Комиссионная продажа</a>\n' +
        '                    <a href="#">Выкуп автомобилей</a>\n' +
        '                    <a href="#">Прием на онлайн продажу</a>',
    all: '<a href="#">Покупка авто с пробегом</a>\n' +
        '                    <a href="#">Продажа авто с пробегом</a>\n' +
        '                    <a href="#">Подбор автомобиля с пробегом</a>\n' +
        '                    <a href="#">Оценка</a>\n' +
        '                    <a href="#">Выкуп</a>\n' +
        '                    <a href="#">Trade-in</a>\n' +
        '                    <a href="#">Оформление документов</a>',
    company: '<a href="#">О компании</a>\n' +
        '                    <a href="#">История</a>\n' +
        '                    <a href="#">Новости</a>\n' +
        '                    <a href="#">Галерея</a>\n' +
        '                    <a href="#">Партнёры</a>\n' +
        '                    <a href="#">Вакансии</a>\n' +
        '                    <a href="#">Отзывы</a>\n' +
        '                    <a href="#">Наша команда</a>\n' +
        '                    <a href="#">Контакты</a>'
}
$('.header .popup-link[data-popover="buy"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.buy
})
$('.header .popup-link[data-popover="sell"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.sell
})
$('.header .popup-link[data-popover="all"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.all
})
$('.header .popup-link[data-popover="company"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.company
})

//logged user popup
$('.header [data-popover="user"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    offset: -25,
    template: '<div class="popover header-user-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: '<a href="#">Профиль</a>\n' +
        '                    <a href="#">Мои объявления</a>\n' +
        '                    <a href="#">Мои фильтры</a>\n' +
        '                    <a href="#">Сообщения</a>\n' +
        '                    <a href="#">Избранное</a>\n' +
        '                    <a href="#">История просмотров</a>\n' +
        '                    <a href="#">Выйти</a>'
})