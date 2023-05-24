//common Entry Animation
gsap.to(".screen-name" ,{
    y: -125,
    opacity: 1,
    duration : 0.5,
    ease: Power2.easeOut,
    stagger: 0.05
})

gsap.to(".screen-name" ,{
    y: -250,
    opacity: 0,
    duration : 0.5,
    delay: 0.8,
    ease: Power2.easeOut,
    stagger: 0.05
})

gsap.to(".loaderenter" , {
    duration: 1,
    y: "-102vh",
    ease: Power4.easeOut,
    delay : 1.3
})

//common Entry Animation


gsap.from(".heading" , {
    duration: 1,
    y: 100,
    ease: Power4.easeOut,
    delay : 1.8,
    opacity: 0
})

gsap.from(".trends-word" , {
    duration: 1,
    y: "101vh",
    delay : 1.9,
    ease: Power2.easeOut,
})

gsap.from(".month-option" , {
    duration: 1,
    y: "101vh",
    delay : 1.95,
    ease: Power2.easeOut,
})

gsap.from(".filter-button" , {
    duration: 1,
    y: "101vh",
    delay : 2.0,
    ease: Power2.easeOut,
})

gsap.from(".middle-middle" , {
    duration: 1,
    y: "101vh",
    delay : 2.15,
})

gsap.from(".lower" , {
    duration: 1,
    y: "101vh",
    delay : 2.35,
})

gsap.from(".trend-data-container" , {
    duration: 1,
    y: 300,
    delay : 2.8,
    stagger: 0.1

})



