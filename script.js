// event saat nav diklik
$('.page-scroll').on('click', function (e) {
    // ambil isi href atrr
    var href = $(this).attr('href');
    var elemenHref = $(href);

    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 60
    }, 1250, 'easeOutCirc');

    e.preventDefault();
});

// PARALLAX
// PORTFOLIO
$(window).scroll(function () {
    var ws = $(this).scrollTop();

    // HEADER
    $('.header .motto').css({
        'transform': 'translate(0px,' + ws / 1.45 + '%)'
    });

    if (ws > $('.about').offset().top - 540) {
        $('.left-p').addClass('appear-p');
        $('.right-p').addClass('appear-p');
    }

    if (ws > $('.skills').offset().top - 500) {
        $('.left-sp').addClass('appear-sp');
        $('.right-sp').addClass('appear-sp');
    }

    if (ws > $('.services').offset().top - 500) {
        $('.service-1').addClass('appear-service');
        $('.service-2').addClass('appear-service');
        $('.service-3').addClass('appear-service');

    }

    if (ws > $('.contact').offset().top - 500) {
        $('.contact-card').addClass('contact-appear');
        $('.contact-form').addClass('contact-appear');
    }

    if (ws > $('.portfolio').offset().top - 400) {
        $('.portfolio .single-works').each(function (i) {
            setTimeout(function () {
                $('.portfolio .single-works').eq(i).addClass('appear');
            }, 300 * i + 1)
        });
    }

});
// END PORTFOLIO

// END PARALLAX