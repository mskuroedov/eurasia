//auth modals
$('.modal-title[data-title]').on('click', function () {
    if (!$(this).hasClass('not-active')) {
        return;
    }
    let target = $(this).attr('data-title'),
        secondary = $(this).attr('data-title') === 'login' ? 'register' : 'login';

    $(this).removeClass('not-active');
    $('.modal-title[data-title=' + secondary + ']').addClass('not-active')
    $('.' + target).show();
    $('.' + secondary).hide();
})

$('#recover_password').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#auth_modal').modal('hide')
    $('#recover_password_modal').modal('show')
});
$('#recover_password--1').on('click', function (e) {
    $('.verify-step-1').hide();
    $('.verify-step-2').show();
})
$('#recover_password').on('hidden.bs.modal', function () {
    $('.verify-step-2').hide();
    $('.verify-step-1').show();
})
$('#cancel_recover_password').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#recover_password_modal').modal('hide')
    $('#auth_modal').modal('show')
});

$('#register').on('click', function () {
    $('#auth_modal').modal('hide')
    $('#reg_success_modal').modal('show')
});

$('#request_success').on('click', function () {
    $('#request_modal').modal('hide')
    $('#request_success_modal').modal('show')
});