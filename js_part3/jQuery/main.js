$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').click(function () {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').click(function () {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            },
            3000
        );
    })
});