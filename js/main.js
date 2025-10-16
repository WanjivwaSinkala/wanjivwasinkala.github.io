// Back to Top - Show on hover near bottom-right
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  if (!backToTop) return;

  // Track mouse position
  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // If mouse is within 100px of bottom-right corner
    if (x > windowWidth - 120 && y > windowHeight - 120) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Scroll to top on click
  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
