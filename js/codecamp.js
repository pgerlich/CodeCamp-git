$("#backToTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#bodyTop").offset().top
    }, 750);
});

