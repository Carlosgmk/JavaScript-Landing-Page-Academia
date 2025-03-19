let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const elements = document.querySelectorAll('.hidden-left, .hidden-top, .hidden-right')
const myOberver = new IntersectionObserver( (entries) => {
    entries.map( (entry) => {
         if(entry.isIntersecting){
            if (entry.target.classList.contains('hidden-left')) {
                entry.target.classList.add('show-left');
            } else if (entry.target.classList.contains('hidden-top')) {
                entry.target.classList.add('show-top');
            } else if (entry.target.classList.contains('hidden-right')) {
                entry.target.classList.add('show-right');
            }
         } else {
              entry.target.classList.remove('show-left', 'show-top', 'show-right');
         }
    })
})

elements.forEach( (element) => myOberver.observe(element))


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
/* Slides */

let homeSwiper  = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let reviewSwiper  = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

let blogsSwiper  = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});