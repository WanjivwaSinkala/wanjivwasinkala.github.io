---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash
title: "Wanjivwa Sinkala"
header:
  overlay_image: /assets/images/zambia_pic.png
  overlay_filter: rgba(0,31,63,0.6)
  actions:
    - label: "About Me"
      url: "/aboutme/"
    - label: "Projects"
      url: "/projects/"
    - label: "Download CV"
      url: "/assets/Wanjivwa_Sinkala_CV.pdf"
excerpt: "Development Economist | M&E Practitioner | Policy Analyst"
permalink: /
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Portfolio - Warm Orange Theme</title>
<style>
  body, html {
    margin: 0; padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
  }
  
  .image-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: hidden;
    z-index: -2;
  }
  .image-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
  
  .overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: -1;
  }

  main {
    position: relative;
    max-width: 960px;
    margin: 3rem auto;
    padding: 0 1rem;
    z-index: 1;
  }

  h2 {
    color: #f39c12; /* softer warm orange */
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 1.8rem;
  }

  .card {
    background: rgba(0,0,0,0.6);
    border-radius: 12px;
    padding: 2rem 1.5rem;
    box-shadow: 0 6px 15px rgba(243, 156, 18, 0.3);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .card:hover {
    transform: translateY(-7px);
    box-shadow: 0 14px 28px rgba(243, 156, 18, 0.6);
  }
  .card h3 {
    color: #f39c12;
    margin-top: 0;
    margin-bottom: 0.6rem;
    font-weight: 700;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  }
  .card p.tagline {
    font-style: italic;
    color: #f39c12cc;
    margin-bottom: 1rem;
    font-weight: 600;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
  }
  .card p {
    font-size: 1rem;
    line-height: 1.5;
    color: #eee;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
  }

  .icons {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #f39c12cc;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  }

  .experience {
    margin-top: 4rem;
    text-align: center;
  }
  .experience p {
    font-size: 1.1rem;
    max-width: 650px;
    margin: 0.5rem auto 1.5rem auto;
    line-height: 1.6;
    color: #f39c12dd;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
  }
  a.btn-link {
    color: #f39c12;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
  }
  a.btn-link:hover {
    border-color: #f39c12;
  }

  @media (max-width: 600px) {
    main {
      margin: 2rem 1rem;
    }
  }
</style>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

<div class="image-bg" aria-hidden="true" role="img" aria-label="Forest background">
  <img src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190624_01_Drone_Forest_04_preview.jpg" alt="" />
</div>
<div class="overlay"></div>

<main>
  <h2>My Expertise Areas</h2>
  <div class="grid" role="list">
    <article class="card" role="listitem" tabindex="0" aria-labelledby="evalTitle">
      <div class="icons"><i class="fas fa-search"></i></div>
      <h3 id="evalTitle">Program Evaluation</h3>
      <p class="tagline">Insights for continuous growth.</p>
      <p>I design monitoring and evaluation frameworks to ensure learning, accountability, and improved program outcomes.</p>
    </article>

    <article class="card" role="listitem" tabindex="0" aria-labelledby="policyTitle">
      <div class="icons"><i class="fas fa-chart-pie"></i></div>
      <h3 id="policyTitle">Policy &amp; Economics</h3>
      <p class="tagline">Data-driven economic strategy.</p>
      <p>I advise on policies that promote equitable and sustainable development, backed by rigorous data analysis.</p>
    </article>

    <article class="card" role="listitem" tabindex="0" aria-labelledby="institutionTitle">
      <div class="icons"><i class="fas fa-cogs"></i></div>
      <h3 id="institutionTitle">Institutional Strengthening</h3>
      <p class="tagline">Building resilient organizations.</p>
      <p>I collaborate with institutions across sectors to enhance capacity, efficiency, and impact delivery.</p>
    </article>
  </div>

  <section class="experience" aria-label="Professional Experience">
    <p>With over seven years working with organizations including Edcon Zambia, Standard Chartered Bank, and Access Bank, I help drive meaningful change.</p>
    <p><a href="/aboutme/" class="btn-link">Discover my journey &rarr;</a></p>
  </section>
</main>

</body>
</html>
