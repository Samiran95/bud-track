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


gsap.from(".transactions-word" , {
    y : "101vh",
    duration : 1,
    delay : 1.4,
})

gsap.from(".delete" , {
    y : "100vh",
    duration : 1,
    delay : 1.45,
})



gsap.from(".lower" , {
    y : "101vh",
    duration : 1,
    delay : 1.55
})

gsap.from(".transaction-data" , {
    y : "101vh",
    duration : 1.6,
    delay : 1.6,
    stagger: 0.15
})



