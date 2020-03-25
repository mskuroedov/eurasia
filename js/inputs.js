let form_input = $('.form-input input'),
    form_label = $('.form-input label');
form_label.on('click',function () {
    $(this).next().focus();
})
form_input.on('focusin',function () {
    let label = $(this).parent().find('label');
    label.addClass('up')
})
form_input.on('focusout',function () {
    if(!$(this).val()){
        let label = $(this).parent().find('label');
        label.removeClass('up')
    }

})

$('.reveal-input-icon').on('click', function () {
    let input = $(this).parent().find('input')
    input.attr('type', 'text');
    $(this).parent().addClass('revealed');
    input.focus();
});
$('.password-input-icon').on('click', function () {
    let input = $(this).parent().find('input')
    input.attr('type', 'password');
    $(this).parent().removeClass('revealed');
    input.focus();
});
