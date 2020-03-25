//auth modals
$('.modal-title[data-title]').on('click', function () {
    if(!$(this).hasClass('not-active')){
        return;
    }
    let target = $(this).attr('data-title'),
        secondary = $(this).attr('data-title') === 'login' ? 'register' : 'login';

    $(this).removeClass('not-active');
    $('.modal-title[data-title='+secondary+']').addClass('not-active')
    $('.' + target).show();
    $('.' + secondary).hide();
})

$('#register').on('click',function () {
    $('#auth_modal').modal('hide')
    $('#reg_success_modal').modal('show')
})