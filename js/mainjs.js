const SECTIONSID = Object.freeze({
    BIO: "Bio",
    EXPERIENCE: "Experience",
    PHYLOSOPHIE: "Phylosophie",   
    INFO: "Info",
});

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

document.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        const navLinks = document.querySelectorAll('.nav-item');
        const menuToggle = document.getElementById('navbarSupportedContent');
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })

        document.querySelector('header nav').classList.remove('w-50', 'rounded-pill', 'nav-lighting')
    }
});

// scroll sections detection
document.addEventListener("scroll", function () {
    var position = window.scrollY;

    if(position == 0 && window.innerWidth > 767){
        document.querySelector('header nav').classList.add('w-50', 'rounded-pill', 'nav-lighting')
    }
    else {
        document.querySelector('header nav').classList.remove('w-50', 'rounded-pill', 'nav-lighting')
    }

    const sections = document.querySelectorAll('section');

    if (position <= sections[0].offsetTop - 100) {
        document.querySelectorAll('#navbarSupportedContent > ul > li > a').forEach((link) => {
            if (link.classList.contains("active")) {
                link.classList.remove('active')
            }
        });
    }

    sections.forEach(function (ele, ind) {
        var target_id = ele.getAttribute("id");

        if (position >= ele.offsetTop - 200 && position < ele.offsetTop + ele.offsetHeight - 200) {
            document.querySelectorAll('#navbarSupportedContent > ul > li > a').forEach((link) => {
                if (link.getAttribute("href") == `#${target_id}`) {
                    link.classList.add('active');
                }
                else if (link.getAttribute("href") !== `#${target_id}` && link.classList.contains("active")) {
                    link.classList.remove('active')
                }
            });
        }

        if (position + window.innerHeight >= ele.offsetTop + 100 && position < ele.offsetTop + ele.offsetHeight - 250) {
            TriggerSectionEffect(target_id);
        } else {
            ReverseSectionEffect(target_id);
        }

    });
});

function TriggerSectionEffect(sec_id) {
    switch (sec_id) {
        case SECTIONSID.BIO:
            document.querySelector('#Bio .effect-zoom-in').classList.add('appear-zoom-in');
            document.querySelector('#Bio .effect-flip-card-horizontal').classList.add('appear-flip-card-horizontal');
            break;
        case SECTIONSID.EXPERIENCE:
            document.querySelectorAll('#Experience .effect-lr').forEach((ele) => {
                ele.classList.add('appear-lr');
            })

            document.querySelectorAll('#Experience .effect-rl').forEach((ele) => {
                ele.classList.add('appear-rl');
            });
            break;
        case SECTIONSID.INFO:
            document.querySelector('#Info .effect-top-down').classList.add('appear-top-down');
            break;
        default:
            break;
    }
}

function ReverseSectionEffect(sec_id) {
    switch (sec_id) {
        case SECTIONSID.BIO:
            document.querySelector('#Bio .effect-zoom-in').classList.remove('appear-zoom-in');
            document.querySelector('#Bio .effect-flip-card-horizontal').classList.remove('appear-flip-card-horizontal');
            break;
        case SECTIONSID.EXPERIENCE:
            document.querySelectorAll('#Experience .effect-lr').forEach((ele) => {
                ele.classList.remove('appear-lr');
            })

            document.querySelectorAll('#Experience .effect-rl').forEach((ele) => {
                ele.classList.remove('appear-rl');
            });

            break;
        case SECTIONSID.INFO:
            document.querySelector('#Info .effect-top-down').classList.remove('appear-top-down');
            break;
        default:
            break;
    }
}

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
