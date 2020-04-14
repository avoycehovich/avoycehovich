$(document).ready(function () {
    $('.main_btna').click(animate);
    $('.main_btn').click(animate);
    $('a[href="#sheldure"]').click(animate);

    function animate() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    }

    $('.close').click(function () {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});