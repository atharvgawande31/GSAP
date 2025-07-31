const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const boxes = document.querySelectorAll(".box");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power2.out",
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    const bgColor = box.getAttribute("data-cursor-bg");
    const textColor = box.getAttribute("data-cursor-text");
    const textContent = box.getAttribute("innerHTML")
    cursor.innerHTML = textContent;
    cursor.style.backgroundColor = bgColor;
    cursor.style.color = textColor;
    

    gsap.to(cursor, { scale: 2 });
  });

  box.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";

    cursor.style.backgroundColor = "rgb(31, 31, 31)";
    cursor.style.color = "#fff";
    gsap.to(cursor, { scale: 0 });
  });
});
