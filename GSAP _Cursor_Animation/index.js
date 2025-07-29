let cursor = document.querySelector(".cursor")
let main = document.querySelector(".main")
let images = document.querySelector(".image")

main.addEventListener("mousemove", function(e) {
gsap.to(cursor, {
   x: e.x,
   y: e.y,
   duration: 1,
   ease: "back.out"
})   
})


images.addEventListener("mouseenter", function() {
   cursor.innerHTML = "View More"
   gsap.to(cursor, {
      scale: 2
   });
});

images.addEventListener("mouseleave", function() {
   cursor.innerHTML = ""
   gsap.to(cursor, {
      scale: 1
   });
});