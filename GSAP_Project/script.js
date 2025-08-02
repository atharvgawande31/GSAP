gsap.registerPlugin(ScrollTrigger);

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu ul li a");

// Open mobile menu
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent body scroll
});

// Close mobile menu
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto"; // Restore body scroll
});

// Close menu when clicking on a link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Animation

function pageAnimation() {
  const tl = gsap.timeline();

  tl.from("nav h1, nav ul li", {
    y: -20,
    opacity: 0,
    delay: 0.3,
    duration: 0.3,
    stagger: 0.2,
  });

  tl.from(".left-content h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".left-content p ", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    x: -100,
  });

  tl.from(".left-content .hero-cta", {
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    x: -100,
  });

  tl.from(
    ".right-content",
    {
      x: 100,
      opacity: 0,
      duration: 0.4,
    },
    "-=.5"
  );

  tl.from(".testamonials .logo-container img", {
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
    y: 50,

    ease: "Power-InOut",
  });
}

pageAnimation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".services span" , {
  y:30,
  opacity:0,
})

tl2.from(".service-list .service-box", {
  x: -100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,

})
