const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    560: {
        items: 2,
    },
    960: {
        items: 3,
    },
};
$(document).ready(function() {
    $nav = $(".Navigasi");
    $toggleCollapse = $(".toggle-collapse");

    /** click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass("collapse");
    });

    // owl-crousel for blog
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [
            $(".owl-navigation .owl-nav-prev"),
            $(".owl-navigation .owl-nav-next"),
        ],
        responsive: responsive,
    });
});