<script>
document.addEventListener("DOMContentLoaded", function () {
  // ========================= Back to Top =========================
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    document.addEventListener("mousemove", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (x > windowWidth - 120 && y > windowHeight - 120) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ========================= Scroll Fade-In Effect =========================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

  // ========================= Featured Projects Carousel =========================
  const carouselItems = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const intervalTime = 10000; // 10 seconds

  function showSlide(index) {
    carouselItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(prevIndex);
  }

  let autoRotate = setInterval(nextSlide, intervalTime);

  // Navigation buttons
  const navButtons = document.querySelectorAll('.nav-buttons button');
  if (navButtons.length === 2) {
    navButtons[0].addEventListener('click', () => { prevSlide(); resetAutoRotate(); });
    navButtons[1].addEventListener('click', () => { nextSlide(); resetAutoRotate(); });
  }

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { showSlide(i); resetAutoRotate(); });
  });

  // Reset auto-rotation timer
  function resetAutoRotate() {
    clearInterval(autoRotate);
    autoRotate = setInterval(nextSlide, intervalTime);
  }

  // Initialize first slide
  showSlide(currentIndex);
});
</script>
