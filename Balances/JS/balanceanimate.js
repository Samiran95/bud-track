gsap.to(".screen-name" ,{
    y: -100,
    opacity: 1,
    duration : 0.5,
    ease: Power2.easeOut,
    stagger: 0.05
})

gsap.to(".screen-name" ,{
    y: -200,
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

gsap.from(".heading2" , {
    duration: 1,
    y: 100,
    ease: Power4.easeOut,
    delay : 1.85,
    opacity: 0
})

gsap.from(".main-balance" ,{
    y : "101vh",
    duration : 1,
    delay : 1.8
})

gsap.from(".balance-available-word" ,{
    y : 100,
    duration : 0.8,
    opacity: 0,
    delay : 2.3,
})

gsap.from(".balance-amount" ,{
    y : 100,
    duration : 0.8,
    opacity: 0,
    delay : 2.5,
})

gsap.from(".main-balance-lower" ,{
    y : 100,
    duration : 0.8,
    opacity: 0,
    delay : 2.7,
})

gsap.from (".lower",{
    y: "101vh",
    duration : 1,
    delay: 2.1,
    stagger : 0.1,
})

gsap.from (".lower-first",{
    y: "101vh",
    duration : 1.2,
    delay: 2.2,
})

gsap.from (".lower-second",{
    y: "101vh",
    duration : 1.2,
    delay: 2.35,
})

gsap.from (".lower-third",{
    y: "101vh",
    duration : 1.2,
    delay: 2.5,
})

gsap.from (".lower-fourth",{
    y: "101vh",
    duration : 1.2,
    delay: 2.65,
})

