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

gsap.from(".apps-heading" ,{
    opacity: 0,
    y : 100,
    duration : 0.5,
    delay : 1.7
})

gsap.from(".lower-container" ,{
    y : "101vh",
    duration : 1,
    delay : 1.9
})

gsap.from (".lower-left>#container",{
    y: "101vh",
    duration : 1,
    delay: 2.2,
    stagger : 0.1,
})

gsap.from (".lower-right>#container",{
    y: "101vh",
    duration : 1,
    delay: 2.3,
    stagger : 0.1,
})

