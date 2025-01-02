document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 767) {
        const navLinks = document.querySelectorAll('.nav-item');
        const menuToggle = document.getElementById('navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    }
});

document.addEventListener("resize", function () {
    if (window.innerWidth <= 767) {
        const navLinks = document.querySelectorAll('.nav-item');
        const menuToggle = document.getElementById('navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    }
});

document.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 100) {
            $('#navbarSupportedContent ul li a.active').removeClass('active');
            $('#navbarSupportedContent ul li a').eq(i).addClass('active');
        }
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    // loopAdditionalSlides: 2,
    // loopAddBlankSlides: false,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 5,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 15,
        depth: -100,
        slideShadows: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 575px
        991: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

    }

});
