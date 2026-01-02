---
layout: default
title: "You Were Not the Intended Recipient | The Multiverse Employee Handbook"
description: "A mildly suspicious QR landing page that leads to The Multiverse Employee Handbook, a science comedy podcast."
---

<div class="background-container">
  <div class="background-overlay"></div>
</div>

<section class="hero">
  <h1>You were not the intended recipient of this page.</h1>

  <p class="tagline">
    That said, you’re here now, and it would be rude to ignore you.
    <br><br>
    This QR code connects to <strong>The Multiverse Employee Handbook</strong> — a science comedy podcast about physics,
    reality, and why the universe insists on being complicated.
  </p>

  <p class="tagline">
    <small>
      You may close this tab and nothing will happen. Statistically, this is what most people do.
    </small>
  </p>
</section>

<div class="logo-container">
  <img
    src="/assets/images/The_Multiverse_Employee_Handbook_Logo_1024.jpeg"
    alt="The Multiverse Employee Handbook Logo"
    class="logo-image">
</div>

{% assign episodes = site.episodes | sort: 'date' | reverse %}
{% assign now = 'now' | date: '%s' | timezone: 'America/New_York' %}
{% assign latest_valid_episode = nil %}

{% for episode in episodes %}
  {% assign release_time = episode.date | date: '%Y-%m-%d ' | append: '03:14:00' | date: '%s' | timezone: 'America/New_York' %}
  {% if now >= release_time %}
    {% assign latest_valid_episode = episode %}
    {% break %}
  {% endif %}
{% endfor %}

{% if latest_valid_episode %}
  <div class="homepage-player">
    <h2>Proceed anyway</h2>

    <audio controls class="quantum-player">
      <source src="{{ latest_valid_episode.audio_url }}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <p>
      <strong>{{ latest_valid_episode.title }}</strong><br>
      <small>Published {{ latest_valid_episode.date | date: "%B %d, %Y" }} | About {{ latest_valid_episode.duration-en }}</small>
    </p>

    <p style="margin-top: 1rem;">
      <a href="{{ latest_valid_episode.url }}" class="cta-button">I regret nothing</a>
    </p>

    <p style="margin-top: 0.75rem;">
      <a href="/" class="latest-listen-button">Return to the main site</a>
    </p>
  </div>
{% else %}
  <div class="homepage-player">
    <h2>Proceed anyway</h2>
    <p class="tagline">No episodes appear to be available yet. Reality is still compiling.</p>
    <p style="margin-top: 1rem;">
      <a href="/" class="cta-button">Return to the main site</a>
    </p>
  </div>
{% endif %}

<section class="platforms">
  <h2>Or take the boring, responsible route:</h2>
  <div class="platform-grid">
    <a href="https://podcasts.apple.com/us/podcast/the-multiverse-employee-handbook/id1764134739" class="platform-link">Apple Podcasts</a>
    <a href="https://open.spotify.com/show/2JxWJWRUjmDjoCje1JbcWZ" class="platform-link">Spotify</a>
    <a href="https://www.youtube.com/playlist?list=PLCK79HTuWuA409l7x6iRN_icn0xZFzamp" class="platform-link">YouTube</a>
  </div>

  <p class="tagline" style="margin-top: 1rem;">
    <small>
      This page is intentionally low-pressure. The universe already has enough funnels.
    </small>
  </p>
</section>

<div id="quantum-field" class="quantum-field"></div>
