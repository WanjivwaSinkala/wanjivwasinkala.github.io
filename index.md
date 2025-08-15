---
layout: splash
title: "Wanjivwa Sinkala"
header:
  overlay_image: /assets/images/black_pic.jpg
  overlay_filter: rgba(0,0,0,0.7)
  actions:
    - label: "About Me"
      url: "/aboutme/"
    - label: "Projects"
      url: "/projects/"
    - label: "Resources"
      dropdown:
        - label: "Photos"
          url: "/resources/photos/"
        - label: "Videos"
          url: "/resources/videos/"
    - label: "Download CV"
      url: "/assets/Wanjivwa_Sinkala_CV.pdf"
---

{% raw %}
<style>
/* General Styling */
body {
  color: black;
  font-family: Arial, sans-serif;
}

section {
  padding: 60px 20px;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<!-- Hero Section -->
<section class="fade-in" style="background:#f4f4f4; padding:100px 20px;">
  <img src="{{ '/assets/images/hero_placeholder.jpg' | relative_url }}" alt="Hero Image">
  <h1>Welcome to My Portfolio</h1>
  <p>Highlighting my professional experience, projects, and publications.</p>
</section>

<!-- Features -->
<section class="fade-in">
  <h2>Core Expertise</h2>
  <img src="{{ '/assets/images/features_placeholder.jpg' | relative_url }}" alt="Features">
  <p>Areas of focus including development economics, M&E, and risk management.</p>
</section>

<!-- Projects -->
<section class="fade-in" style="background:#f9f9f9;">
  <h2>Selected Projects</h2>
  <img src="{{ '/assets/images/projects_placeholder.jpg' | relative_url }}" alt="Projects">
</section>

<!-- Experience -->
<section class="fade-in">
  <h2>Work Experience</h2>
  <img src="{{ '/assets/images/experience_placeholder.jpg' | relative_url }}" alt="Experience">
</section>

<!-- Articles -->
<section class="fade-in" style="background:#f9f9f9;">
  <h2>Articles & Publications</h2>
  <img src="{{ '/assets/images/articles_placeholder.jpg' | relative_url }}" alt="Articles">
</section>

<script>
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
</script>
{% endraw %}
