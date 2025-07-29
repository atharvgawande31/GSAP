let cursor = document.querySelector(".cursor")
let main = document.querySelector(".main")

main.addEventListener("mousemove", function(e) {
gsap.to(cursor, {
   x: e.x,
   y: e.y,
   duration: 1,
   ease: "back.out"


})   
})

