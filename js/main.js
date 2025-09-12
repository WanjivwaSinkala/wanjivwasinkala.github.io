// =============================
// Wanjivwa Sinkala Portfolio JS
// =============================

// 1. Fade-in Elements on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2
  });

  fadeInElements.forEach(el => observer.observe(el));
});

// 2. Add Shadow to Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Optional: Add style for navbar-scrolled class in your CSS:
// .navbar-scrolled {
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// }

// 3. Optional: Scroll to Top Button (uncomment if needed)
/*
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
*/

// Optional CSS:
/*
.scroll-to-top {
  position: fixed;
  bottom: 80px;
  right: 30px;
  background: #d4af37;
  color: #001f3f;
  border: none;
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: none;
  z-index: 1000;
  transition: background 0.3s ease;
}
.scroll-to-top:hover {
  background: #c49b2f;
}
*/

