$(document).ready(function () {
    $('#nav-btn').click(function () {
        $('.main-nav ul').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } else {
            $('.is-active').addClass('not-active').removeClass('is-active');
        }
    });


    $('#main-button').click(function () {
        $('.quick-order').addClass('is-active').removeClass('not-active');
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } else {
            $('.is-active').addClass('not-active').removeClass('is-active');
        }
    });
});




