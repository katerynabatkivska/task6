const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
  const animationClass = circle.getAttribute("data-anim");
  circle.classList.add(animationClass);
  
  circle.addEventListener("animationend", () => {
    circle.classList.remove(animationClass);
  });
});
