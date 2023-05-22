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
    y: 200,
    ease: Power4.easeOut,
    delay : 1.8,
    opacity: 0
})

gsap.from(".trip-card" , {
    duration: 1,
    y: "101vh",
    delay : 1.4,
})

gsap.from(".trip-balance-word" , {
    duration: 1,
    y: "100",
    delay : 1.5,
    opacity: 0
})

gsap.from(".trip-balance-amount" , {
    duration: 1,
    y: "100",
    delay : 1.65,
    opacity: 0
})

gsap.from(".investment" , {
    duration: 1,
    y: "100",
    delay : 1.8,
    opacity: 0
})

gsap.from(".lower-button" , {
    duration: 1,
    y: "101vh",
    delay : 1.5,
})

gsap.from(".triplist-word" , {
    duration: 1,
    y: "101vh",
    delay : 1.6,
})

gsap.from(".trips-add" , {
    duration: 1,
    y: "101vh",
    delay : 1.65,
})

gsap.from(".triplist" , {
    duration: 1,
    y: "101vh",
    delay : 1.75,
})

gsap.from(".list-container" , {
    duration: 1,
    y: 300,
    delay : 2,
    stagger : 0.9

})



