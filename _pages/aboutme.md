---
permalink: /aboutme/
title: "About Me"
layout: splash
classes: wide
---

<style>
/* Make the container stretch almost full screen */
.page__content {
  max-width: 95% !important;
  margin: auto;
}

/* About Me section layout */
.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
}

/* Profile picture styling */
.about-section img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

/* About text area */
.about-text {
  flex: 1;
  min-width: 300px;
}

/* Skills list layout */
.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  list-style: disc inside;
  padding: 0;
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
  <img src="/assets/images/profile.jpg" alt="Wanjivwa Sinkala">

  <div class="about-text">
    <h1>About Me</h1>
    <p>I am Wanjivwa Sinkala, a Zambian development economist and operations professional dedicated to advancing institutional integrity, results-based practice, and inclusive growth. I hold a Master of Arts in Economic Policy Management, a Postgraduate Diploma in Monitoring and Evaluation Methods, and a Bachelor of Arts in Development Studies with Economics, all awarded by the University of Zambia.</p>

    <p>Over the past seven years, I’ve worked at the intersection of development programming, operational systems, and risk management. My professional journey spans roles in the development, retail, and banking sectors, where I’ve strengthened administrative structures, enhanced internal controls, and ensured compliance across diverse programmatic and financial functions.</p>

    <p>From coordinating reforestation and climate resilience efforts with Plant A Million Zambia, in collaboration with Care International, and Standard Chartered Bank, to overseeing procurement and compliance in Zambia’s fast-paced retail environment, I have consistently contributed to initiatives that are both impact-driven and ethically grounded.</p>

    <p>My core competencies include process evaluation, risk mitigation, stakeholder coordination, and resource accountability. I have hands-on experience with Microsoft Office tools and foundational exposure to M&E systems and reporting platforms, which support my ability to deliver structured insights and performance tracking.</p>

    <p>I approach development with the belief that impact must be measurable, sustainable, and people-centered. Whether I am reviewing operational frameworks or supporting frontline implementation, my focus remains clear: to enable systems that are transparent, responsive, and purpose-driven.</p>

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

<div class="education" style="margin-top:3rem;">
  <h2>Education</h2>
  <ul>
    <li><strong>Postgraduate Diploma in Monitoring and Evaluation Methods</strong>, University of Zambia, 2025</li>
    <li><strong>Master of Arts in Economic Policy Management</strong>, University of Zambia, 2021</li>
    <li><strong>Bachelor of Arts in Development Studies with Economics</strong>, University of Zambia, 2013</li>
  </ul>
</div>
