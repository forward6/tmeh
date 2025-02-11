---
layout: default
title: "Episodes - The Multiverse Employee Handbook"
description: "Explore the latest episodes of The Multiverse Employee Handbook, a podcast blending humor and science fiction."
permalink: /episodes/
type: podcast
---

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<div class="main-container">
    <section class="episodes-header">
        <h1>The Multiverse Employee Handbook Podcast</h1>
        <p class="episodes-intro">Your guide to navigating quantum corporate chaos, one dimension at a time. Listen to the latest episodes below.</p>
    </section>

    <section class="episodes-grid">
        {% assign sorted_episodes = site.episodes | sort: "date" | reverse %}
        {% assign now = 'now' | date: '%s' | timezone: 'America/New_York' %}

        {% for episode in sorted_episodes %}
            {% assign release_time = episode.date | date: '%Y-%m-%d ' | append: '03:14:00' | date: '%s' | timezone: 'America/New_York' %}

            <article class="episodes-card">
                <div class="episodes-meta">
                    <span class="episode-date">{{ episode.date | date: "%B %d, %Y" }}</span>
                </div>

                <h2><a href="{% if now < release_time %}#{% else %}{{ episode.url }}{% endif %}">{{ episode.title }}</a></h2>

                <span class="episode-duration">
                    <i class="far fa-clock"></i>
                    Temporal Length: {{ episode.duration-en }}
                </span>

                <div class="episodes-excerpt">
                    {{ episode.excerpt }}
                </div>

                {% raw %}
                {% if now < release_time %}
                  <button class="latest-listen-button" disabled data-release-time="{{ release_time | date: '%s' }}">
                    Materializing on {{ episode.date | date: "%B %d" }} at 3:14 AM ET
                  </button>
                {% else %}
                  <a href="{{ episode.url }}" class="latest-listen-button">Listen now</a>
                {% endif %}
                {% endraw %}


            </article>
        {% endfor %}
    </section>

    {% include newsletter.html %}
</div>

<div id="quantum-field" class="quantum-field"></div>

<script>
    document.querySelectorAll('[data-release-time]').forEach(button => {
      const releaseTime = parseInt(button.dataset.releaseTime) * 1000; // Convert to milliseconds
      const currentTime = Date.now();

      if (currentTime >= releaseTime) {
        const link = document.createElement('a');
        link.href = "{{ episode.url }}"; // Replace with dynamic URL if needed
        link.className = "latest-listen-button";
        link.textContent = "Listen now";
        button.replaceWith(link);
      }
    });
</script>
