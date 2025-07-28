---
layout: default
title: "The Multiverse Employee Handbook | Science Comedy Podcast (Official Site)"
description: "The official website for The Multiverse Employee Handbook – a science comedy podcast about physics, quantum absurdities, and bureaucratic space exploration. Listen now."
---
<div class="background-container">
    <div class="background-overlay"></div>
</div>

<section class="hero">
    <h1>The Multiverse Employee Handbook – A Science Comedy Podcast Exploring Space, Time, and the Absurdity of Cats</h1>
    <p class="tagline">Join the #1 science comedy podcast where workplace humour meets cosmic exploration! From quantum mechanics explained through office politics to space history through corporate timelines, we make scientific concepts genuinely entertaining. Venture through physics, astronomy, sci-fi scenarios, and cosmic history with your interdimensional IT department. Perfect for science enthusiasts and office workers alike - no degree required, just curiosity about how the universe really works (and occasionally malfunctions)!</p>
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
    <h2>Listen to the Latest Episode</h2>
    <audio controls class="quantum-player">
      <source src="{{ latest_valid_episode.audio_url }}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <p><strong>{{ latest_valid_episode.title }}</strong><br>
    <small>Published {{ latest_valid_episode.date | date: "%B %d, %Y" }} | About {{ latest_valid_episode.duration-en }}</small></p>
    <p><a href="{{ latest_valid_episode.url }}" class="latest-listen-button">Full Episode Page →</a></p>

  </div>
{% else %}
  <p>No episodes available yet.</p>
{% endif %}

<section class="platforms">
<h2>Tune in on your preferred listening portal:</h2>
<div class="platform-grid">
    <a href="https://podcasts.apple.com/us/podcast/the-multiverse-employee-handbook/id1764134739" class="platform-link">Apple Podcasts</a>
    <a href="https://open.spotify.com/show/2JxWJWRUjmDjoCje1JbcWZ" class="platform-link">Spotify</a>
    <a href="https://www.youtube.com/playlist?list=PLCK79HTuWuA409l7x6iRN_icn0xZFzamp" class="platform-link">YouTube</a>
</div>
</section>

<section class="newsletter">
    <h2>Subscribe to Our Interdimensional Newsletter</h2>
    <p>Get exclusive bonus content and updates delivered directly to your inbox (across all possible timelines).</p>
    <div class="ml-embedded" data-form="vWaNNz"></div>
</section>

<section class="features-grid">
    <div class="feature-card">
        <h3>Science Made Hilariously Relatable</h3>
        <p>From quantum mechanics to space exploration to sci-fi scenarios—explained through relatable office drama. Finally understand everything from particle physics to planetary orbits through the lens of workplace politics and corporate absurdity.</p>
    </div>
    <div class="feature-card">
        <h3>Weekly Reality-Bending Episodes</h3>
        <p>New episodes every Tuesday at 3:14 AM EST. Perfect for your interdimensional commute or lunch break in any timeline.</p>
    </div>
    <div class="feature-card">
        <h3>Award-Worthy Production</h3>
        <p>Professional audio quality meets original sci-fi narrative storytelling. Experience office humor that transcends dimensions. Learn quantum physics with humor.</p>
    </div>
</section>
<!-- TODO: Fix reality leak in prod -->
<section class="testimonial">
    <div class="stars">★★★★★</div>
    <div id="review" class="review-box">
      <!-- Review will be injected here -->
    </div>
</section>

<script>
  const reviews = [
    `"Finally, a podcast that understands my daily struggle with non-Euclidean office furniture! Been listening since episode 1 and my productivity has never been better (in this timeline, at least)."<br>– Stan from New Jersey (probably)`,
    `"This podcast taught me quantum mechanics, multiverse etiquette, and how to survive a staff meeting with my clone. Five stars."<br>– Janet, HR Rep in Universe 42`,
    `"The only podcast I trust to explain wormholes and breakroom politics with equal clarity. My toaster also listens."<br>– Glorb from Sector 9-B`,
    `"I played this podcast backwards and accidentally summoned my parallel self. We now co-host a morning briefing on Tuesdays."<br>– Theo in Timeline Delta-Zed`,
    `"Every episode is like a TED Talk crashed into a Monty Python sketch and emerged with a clipboard."<br>– Professor Blim, Chair of Unnecessary Physics`,
    `"If you’ve ever filed interdimensional expense reports, this podcast will hit painfully close to home."<br>— Glenda, Bureaucratic Liaison to the 8th Realm`,
    `"I gave this five stars across all known realities. Except one, but that version of me is kind of a jerk."<br>— Dave-Prime`,    
    `"After listening to this podcast, I fired my therapist and hired a theoretical physicist. My existential dread now glows in the dark."<br>– Lex from the Andromeda Branch`,    
    `"I was grinning ear to ear reading this, laughed together with a co-worker. What a brilliant, beautiful, thought provoking, ridiculous genius of a comedy. Thank you, I felt both my intelligent and comic parts of the brain were hanging out in a bar."<br>— Onewildgamer, Hacker News`
  ];

  const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
  document.getElementById('review').innerHTML = randomReview;
</script>


{% include latest-episodes.html %}


<div id="quantum-field" class="quantum-field"></div>

<!-- Warning: Do not observe quantum CSS -->
