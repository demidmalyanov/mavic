$(function(){
    
    

$('.products__slider').slick({

    prevArrow:'<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
    nextArrow:'<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
    infinite:false,
});

// $('.questions__item-title').on('click',function(){

//     $('.questions__item').removeClass('questions__item--active')
//     $(this).parent().addClass('questions__item--active')
// })


$('.questions__item .questions__item-title').on('click',function(){

    $('.questions__item-text').not($(this).next()).slideUp(450);
    $(this).next().slideToggle(450);

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().toggleClass('questions__item--active');





});
const deleteLog = false;
// const top = $('.top__title');
// const topInner = $('.top__inner');
const products = $('.products__title');
const inner = $('.products__inner');
const benefits = $('.benefits__title');
const specification = $('.specification__title');
const questions = $('.questions__title');
const contacts = $('.contacts__title');
const benefitsItems = $('.benefits__items');
const specificationInner = $('.specification__inner');
const questionsItems = $('.questions__items');
const contactsInner=$('.contacts__inner');


$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    
    sectionSelector:'.page-section',
    animateAnchor:false,
    scrollingSpeed: 900,
    scrollOverflow:true,
    anchors:['top','products','benefits','specification','questions','contacts'],
    menu:'#header__nav',
   
   
    
    afterLoad: function(direction) {
        if (deleteLog) {
          placeHolder.html('');
        }

        // top.toggleClass('animate__animated animate__slideInDown  animate__delay-0.1s');
        // topInner.toggleClass('animate__animated animate__slideInRight  animate__delay-0.5s ');
       

        products.removeClass('animate__animated animate__slideInLeft animate__delay-0.7s');
        inner.removeClass('animate__animated animate__slideInRight animate__delay-0.7s');

        benefits.removeClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        benefitsItems.removeClass('animate__animated animate__slideInRight animate__delay-0.5s');

        specification.removeClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        specificationInner.removeClass('animate__animated animate__slideInRight animate__delay-0.5s');

        questions.removeClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        questionsItems.removeClass('animate__animated animate__slideInRight animate__delay-0.5s');

        contacts.removeClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        contactsInner.removeClass('animate__animated animate__slideInRight animate__delay-0.5s');
        

    },
    onLeave: function() { 
        
        products.toggleClass('animate__animated animate__slideInLeft animate__delay-0.7s');
        inner.toggleClass('animate__animated animate__slideInRight animate__delay-0.7s');

        benefits.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        benefitsItems.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

        specification.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        specificationInner.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

        questions.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        questionsItems.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

        contacts.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
        contactsInner.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

    },
    // afterRender: function(){
    //     top.removeClass('animate__animated animate__slideInLeft  animate__delay-0.5s');
    //     topInner.removeClass('animate__animated animate__slideInRight  animate__delay-0.5s ');
    //     products.toggleClass('animate__animated animate__slideInLeft  animate__delay-0.5s ');
    //     inner.toggleClass('animate__animated animate__slideInRight  animate__delay-0.5s');

    //     benefits.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
    //     benefitsItems.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

    //     specification.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
    //     specificationInner.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

    //     questions.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
    //     questionsItems.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');

    //     contacts.toggleClass('animate__animated animate__slideInLeft animate__delay-0.5s');
    //     contactsInner.toggleClass('animate__animated animate__slideInRight animate__delay-0.5s');
        
        
    // }
});

$('.menu__btn').on('click',function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');

})

$('.menu__link').on('click',function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');

})




    
});

// ScrollReveal().reveal('.top',{delay:2000})
// ScrollReveal().reveal('.products',{delay:1500})