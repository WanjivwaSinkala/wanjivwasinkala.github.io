---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---
layout: splash
title: "Wanjivwa Sinkala"
excerpt: "Development Economist | M&E Practitioner | Policy Analyst"
permalink: /
---

<style>
  /* Background image container */
  .page-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: hidden;
    z-index: -2;
  }
  .page-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }

  /* Overlay to darken background */
  .page-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: -1;
  }

  main.page-content {
    position: relative;
    max-width: 960px;
    margin: 3rem auto;
    padding: 0 1rem;
    color: #eee;
    z-index: 1;
  }

  h2 {
    text-align: center;
    color: #f39c12;
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
  .card:hover,
  .card:focus {
    outline: none;
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
  .card p {
    font-size: 1rem;
    line-height: 1.5;
    color: #eee;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
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
  a.btn-link:hover,
  a.btn-link:focus {
    border-color: #f39c12;
    outline: none;
  }

  @media (max-width: 600px) {
    main.page-content {
      margin: 2rem 1rem;
    }
  }
</style>

<div class="page-bg" aria-hidden="true" role="img" aria-label="Forest background">
  <img src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190624_01_Drone_Forest_04_preview.jpg" alt="" />
</div>
<div class="page-overlay"></div>

<main class="page-content" role="main" tabindex="-1">

  <h2>My Expertise Areas</h2>
  <div class="grid" role="list">
    <article class="card" role="listitem" tabindex="0" aria-labelledby="evalTitle">
      <h3 id="evalTitle">Program Evaluation</h3>
      <p>I design monitoring and evaluation frameworks to ensure learning, accountability, and improved program outcomes.</p>
    </article>

    <article class="card" role="listitem" tabindex="0" aria-labelledby="policyTitle">
      <h3 id="policyTitle">Policy &amp; Economics</h3>
      <p>I advise on policies that promote equitable and sustainable development, backed by rigorous data analysis.</p>
    </article>

    <article class="card" role="listitem" tabindex="0" aria-labelledby="institutionTitle">
      <h3 id="institutionTitle">Institutional Strengthening</h3>
      <p>I collaborate with institutions across sectors to enhance capacity, efficiency, and impact delivery.</p>
    </article>
  </div>

  <section class="experience" aria-label="Professional Experience">
    <p>With over seven years working with organizations including Edcon Zambia, Standard Chartered Bank, and Access Bank, I help drive meaningful change.</p>
    <p><a href="/aboutme/" class="btn-link">Discover my journey &rarr;</a></p>
  </section>

</main>

