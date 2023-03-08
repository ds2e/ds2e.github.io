// window.addEventListener('DOMContentLoaded', () => {

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         const id = entry.target.getAttribute('id');
//         if (entry.isIntersecting) {
//           document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
//         } else {
//           document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
//         }
//       });
//     });

//     // Track all sections that have an `id` applied
//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//   });

// $(window).scroll(function(){
//     document.querySelectorAll('section[id]').forEach((section) => {
//         console.log(section.id);
//     });
// });


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 5) {
            $('#navbarSupportedContent ul li a.active').removeClass('active');
            $('#navbarSupportedContent ul li a').eq(i).addClass('active');
        }
    });
});