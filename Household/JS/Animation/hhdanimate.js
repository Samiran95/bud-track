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

gsap.from(".hh-card" , {
    duration: 1,
    y: "101vh",
    delay : 1.8,
})

gsap.from(".hh-balance-word" , {
    duration: 1,
    y: "100",
    delay : 1.9,
    opacity: 0
})

gsap.from(".hh-balance-amount" , {
    duration: 1,
    y: "100",
    delay : 2.1,
    opacity: 0
})

gsap.from(".investment" , {
    duration: 1,
    y: "100",
    delay : 2.3,
    opacity: 0
})

gsap.from(".lower-button" , {
    duration: 1,
    y: "101vh",
    delay : 1.9,
})


gsap.from(".hhlist-word" , {
    duration: 1,
    y: "101vh",
    delay : 2,
})

gsap.from(".hh-add" , {
    duration: 1,
    y: "101vh",
    delay : 2.05,
})

gsap.from(".hhlist" , {
    duration: 1,
    y: "101vh",
    delay : 2.15,
})

gsap.from(".list-container" , {
    duration: 0.8,
    y: 300,
    delay : 2.6,
    stagger: 0.15

})



