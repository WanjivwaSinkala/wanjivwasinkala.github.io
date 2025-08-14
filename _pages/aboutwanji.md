---
permalink: /aboutme/
title: "About Wanji"
layout: splash
classes: wide
---

<style>
/* Stretch container almost full width */
.page__content {
  max-width: 95% !important;
  margin: auto;
  color: #000; /* Black text */
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* About section layout */
.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem 0;
}

/* Profile picture styling */
.about-section img {
  width: 350px; /* Bigger profile */
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 4px solid #d4af37; /* Stylish gold border */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover animation for profile */
.about-section img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* About text area */
.about-text {
  flex: 1;
  min-width: 300px;
  opacity: 0; /* Hidden initially for fade-in */
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Class added when visible */
.about-text.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Headings */
.about-text h1 {
  font-size: 2em;
  margin-bottom: 1rem;
  color: #000;
}

.about-text p {
  margin-bottom: 1rem;
  color: #000;
}

blockquote {
  font-style: italic;
  border-left: 4px solid #d4af37;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #333;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

blockquote.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Skills list layout */
.skills {
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.skills.visible {
  opacity: 1;
  transform: translateY(0);
}

.skills h2 {
  font-size: 1.8em;
  margin-bottom: 1rem;
  color: #000;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem 1rem;
  list-style: disc inside;
  padding: 0;
  color: #000;
}

/* Education section */
.education {
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.education.visible {
  opacity: 1;
  transform: translateY(0);
}

.education h2 {
  font-size: 1.8em;
  margin-bottom: 1rem;
  color: #000;
}

.education ul {
  list-style: disc inside;
  padding: 0;
  color: #000;
}

/* Mobile layout */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-text {
    max-width: 100%;
  }

  .skills-list {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="about-section">
  <img src="/assets/images/wanji_pic.jpg" alt="Wanjivwa Sinkala">

  <div class="about-text">
    <h1>About Me</h1>
    <p>I am Wanjivwa Sinkala, a Zambian development economist and operations professional dedicated to advancing institutional integrity, results-based practice, and inclusive growth. I hold a Master of Arts in Economic Policy Management, a Postgraduate Diploma in Monitoring and Evaluation Methods, and a Bachelor of Arts in Development Studies with Economics, all awarded by the University of Zambia.</p>

    <p>Over the past seven years, I’ve worked at the intersection of development programming, operational systems, and risk management. My professional journey spans roles in the development, retail, and banking sectors, where I’ve strengthened administrative structures, enhanced internal controls, and ensured compliance across diverse programmatic and financial functions.</p>

    <p>From coordinating reforestation and climate resilience efforts with Plant A Million Zambia, in collaboration with Care International and Standard Chartered Bank, to overseeing procurement and compliance in Zambia’s fast-paced retail environment, I have consistently contributed to initiatives that are both impact-driven and ethically grounded.</p>

    <p>My core competencies include process evaluation, risk mitigation, stakeholder coordination, and resource accountability. I have hands-on experience with Microsoft Office tools and foundational exposure to M&E systems and reporting platforms, which support my ability to deliver structured insights and performance tracking.</p>

    <p>I approach development with the belief that impact must be measurable, sustainable, and people-centered. Whether reviewing operational frameworks or supporting frontline implementation, my focus remains clear: to enable systems that are transparent, responsive, and purpose-driven.</p>

    <blockquote>
      “The best way to find yourself is to lose yourself in the service of others.”<br>– Mahatma Gandhi
    </blockquote>

    <blockquote>
      “True development is not only achieved through policies and plans, but through the quiet discipline of systems that serve people with fairness and purpose.”<br>– WS
    </blockquote>
  </div>
</div>

<div class="skills">
  <h2>Core Competencies</h2>
  <ul class="skills-list">
    <li>Process Evaluation & Impact Assessment</li>
    <li>Risk Mitigation & Compliance</li>
    <li>Stakeholder Coordination</li>
    <li>Resource Accountability</li>
    <li>Operational Systems Strengthening</li>
    <li>Procurement & Contract Administration</li>
    <li>Project & Program Management</li>
    <li>Monitoring & Evaluation Foundations</li>
    <li>Climate Resilience & Reforestation Initiatives</li>
    <li>Microsoft Office (Excel, Word, PowerPoint)</li>
  </ul>
</div>

<div class="education">
  <h2>Education</h2>
  <ul>
    <li><strong>Postgraduate Diploma in Monitoring and Evaluation Methods</strong>, University of Zambia, 2025</li>
    <li><strong>Master of Arts in Economic Policy Management</strong>, University of Zambia, 2021</li>
    <li><strong>Bachelor of Arts in Development Studies with Economics</strong>, University of Zambia, 2013</li>
  </ul>
</div>

<script>
// Fade-in on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.about-text, blockquote, .skills, .education');
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    if (windowBottom > el.offsetTop + 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
</script>
