/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
 
/* MENU SHOW */ 
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}
/* MENU HIDE */ 
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(n => n.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
}))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: 'true',
  grabCursor: 'true',
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  // scrollY = number of pixels scrolled 
}

window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".bev-swiper", {
  centeredSlides: 'true',
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50  // move the trigger upwards by 50px 
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
window.addEventListener('scroll', () =>{
  const scrollup = document.getElementById('scrollup')
  if(this.scrollY >= 460) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  // reset: true
})

sr.reveal('.home-swiper, .bev-swiper')
sr.reveal('.category__data, .food__content, .footer__content', {interval: 100}) // for multiple(?)
sr.reveal('.about__data, .discount__img', {origin: 'left'})
sr.reveal('.about__img, .discount__data', {origin: 'right'})
sr.reveal('.newsletter__container', {origin: 'bottom'})

/*=============== Fold Header ===============*/
const nav = document.querySelector(".header")
let lastScroll = 0
 
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= 0) {
    nav.classList.remove('fold');
    return;
  } 
  // ±10 to make it less sensitive, something I hated in mangahere.co 
  if (currentScroll > lastScroll + 20 && !nav.classList.contains('fold')) {
    // down
    nav.classList.add('fold');
  } else if (currentScroll < lastScroll - 20 && nav.classList.contains('fold')) {
    // up
    nav.classList.remove('fold');
  }
  lastScroll = currentScroll;
});