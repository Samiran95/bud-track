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
    duration: 0.5,
    y: 100,
    delay : 1.7,
    opacity : 0
})

gsap.from(".anal-container" , {
    duration: 1.2,
    y: "102vh",
    delay : 1.8,
    stagger : 0.12
})
