
// Fade-in on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const windowBottom = window.innerHeight + window.scrollY;
  elements.forEach(el => {
    if (windowBottom > el.offsetTop + 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
