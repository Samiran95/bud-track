//common Entry Animation
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

gsap.from(".upper" , {
    duration: 1,
    y: "100",
    delay : 1.4,
    opacity : 0
})

gsap.from(".small-back" , {
    duration: 1,
    y: "300",
    delay : 1.3,
})

gsap.from(".mid-middle" , {
    duration: 1,
    y: "500",
    delay : 1.3,
})

gsap.from(".container" , {
    duration: 1,
    y: "101vh",
    delay : 1.4,
    stagger : 0.05
})