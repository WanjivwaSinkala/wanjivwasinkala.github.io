---
layout: splash
title: "Wanjivwa Sinkala"
header:
  overlay_image: /assets/images/white_pic.jpg
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
excerpt: "Development Economist | M&E Practitioner | Policy Analyst"
permalink: /
author_profile: true
---

<style>
/* Global black text */
body, h1, h2, h3, h4, h5, h6, p, span, li, a {
  color: #000 !important;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Links styling */
a {
  color: #000 !important;
  text-decoration: underline;
}

a:hover {
  color: #d4af37 !important;
}

/* Fade-in effect */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hero intro */
.hero-intro {
  text-align: center;
  margin-bottom: 3rem;
}
.hero-intro h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero-intro p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: auto;
}

/* Feature Grid */
.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}
.feature-card {
  flex: 1 1 250px;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.feature-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
}

/* Project cards */
.projects-preview .project-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  gap: 1.5rem;
}
.project-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}

/* Section dividers */
.section-divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 3rem 0;
}

/* Experience section */
.experience-section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.experience-section img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}
.experience-section .experience-text {
  flex: 1 1 300px;
}

/* Footer CTA */
.footer-cta span {
  display: block;
  text-align: center;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid, .experience-section {
    flex-direction: column;
    align-items: center;
  }
  .feature-card img, .project-card img, .experience-section img {
    width: 120px;
    height: 120px;
  }
}
</style>

<!-- Hero Intro -->
<div class="hero-intro fade-in">
  <h1>Driving Inclusive Growth & Evidence-Based Policy</h1>
  <p>I help shape strategies, assess impact, and strengthen institutions to deliver sustainable outcomes.</p>
</div>

<!-- Feature Grid -->
<section class="features-grid">
  <div class="feature-card fade-in">
    <img src="/assets/images/evaluation_icon.png" alt="Program Evaluation">
    <h3>Program Evaluation</h3>
    <p>Using evaluation as a tool for learning and improvement. I design and apply M&E frameworks that generate insights, support accountability, and drive better program performance.</p>
  </div>
  <div class="feature-card fade-in">
    <img src="/assets/images/policy_icon.png" alt="Policy and Economics">
    <h3>Policy and Economics</h3>
    <p>Bridging analysis and action. I provide economic policy guidance rooted in data, helping leaders craft solutions that foster equity, resilience, and long-term development.</p>
  </div>
  <div class="feature-card fade-in">
    <img src="/assets/images/institution_icon.png" alt="Institutional Strengthening">
    <h3>Institutional Strengthening</h3>
    <p>Empowering systems to work better. I work with public, private, and nonprofit institutions to build capacity, enhance operations, and improve their ability to deliver results.</p>
  </div>
</section>

<hr class="section-divider"/>

<!-- Projects Preview -->
<section class="projects-preview fade-in">
  <h2>Selected Projects</h2>
  <article class="project-card fade-in">
    <img src="/assets/images/project_placeholder.png" alt="Project Image">
    <div>
      <div class="project-tag">Institutional Strengthening</div>
      <h3>Project Title Placeholder</h3>
      <p>I am currently documenting selected projects from my professional and academic journey. Details will be updated soon. 
      <a href="#" class="read-more">Read more →</a></p>
    </div>
  </article>
</section>

<hr class="section-divider"/>

<!-- Experience Section -->
<section class="experience-section fade-in">
  <img src="/assets/images/experience_placeholder.png" alt="Experience">
  <div class="experience-text">
    <h2>Professional Experience</h2>
    <p>With over seven years’ experience across development, banking, and retail, I’ve partnered with organizations like Edcon Zambia, Standard Chartered Bank, and Access Bank to drive results and impact.</p>
    <p><a href="/aboutme/" class="cta-link">Read more about my professional journey →</a></p>
  </div>
</section>

<!-- Latest Articles Section -->
<section class="latest-articles-section">
  <h2 class="fade-in">Latest Articles</h2>

  <div class="articles-grid">
    <article class="article-card fade-in">
      <img src="/assets/images/article1_placeholder.png" alt="Article 1">
      <div class="article-text">
        <h3>Article Title 1</h3>
        <p>Brief excerpt from the article to give readers an idea of the content. Keep it concise and engaging.</p>
        <a href="#" class="read-more">Read more →</a>
      </div>
    </article>

    <article class="article-card fade-in">
      <img src="/assets/images/article2_placeholder.png" alt="Article 2">
      <div class="article-text">
        <h3>Article Title 2</h3>
        <p>Brief excerpt from the article to give readers an idea of the content. Keep it concise and engaging.</p>
        <a href="#" class="read-more">Read more →</a>
      </div>
    </article>

    <article class="article-card fade-in">
      <img src="/assets/images/article3_placeholder.png" alt="Article 3">
      <div class="article-text">
        <h3>Article Title 3</h3>
        <p>Brief excerpt from the article to give readers an idea of the content. Keep it concise and engaging.</p>
        <a href="#" class="read-more">Read more →</a>
      </div>
    </article>
  </div>
</section>

<style>
/* Articles Grid */
.articles-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

/* Article Cards */
.article-card {
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  flex: 1 1 250px;
  max-width: 300px;
}

.article-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.article-card h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.article-card p {
  font-size: 1rem;
  line-height: 1.4;
}

.article-card a.read-more {
  margin-top: 0.5rem;
  display: inline-block;
  color: #000;
  text-decoration: underline;
}

.article-card a.read-more:hover {
  color: #d4af37;
}

/* Responsive */
@media (max-width: 768px) {
  .articles-grid {
    flex-direction: column;
    align-items: center;
  }

  .article-card {
    max-width: 100%;
  }
}
</style>

