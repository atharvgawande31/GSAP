let aniPause = document.querySelector(".nav i");
let aniCross = document.querySelector(".full i")

var tl = gsap.timeline()

tl.to(".full", {
    right: 0,
    duration: .5,
    ease: "power2.inOut"
})

tl.from(".full h4", {
    x: 150,
    opacity: 0,
    duration: .5,
    stagger: .2

})

tl.from(".full i", {
    opacity: 0
})

tl.pause()

aniPause.addEventListener("click", function() {
    tl.play();
});

aniCross.addEventListener("click", function() {
    tl.reverse();
});