$(document).ready(function () {
    showMenu();
});

function showMenu() {
    $('menu>ul>li.title').after('<span class="arrow dashicons dashicons-arrow-right-alt2"></span>')

    $('.menu>ul>li').click(function () {
        if ($(this).hasClass('active')) {
            $(this).children('.submenu').slideUp();
            $(this).removeClass('active');
        } else {
            $('.submenu').slideUp();
            $('.menu>ul>li').removeClass('active');
            $(this).children('.submenu').slideDown();
            $(this).addClass('active');
        }
    });
}