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
        {% assign now = 'now' | date: '%Y-%m-%d %H:%M' | timezone: 'America/New_York' %}
        {% for episode in sorted_episodes %}
        {% assign episode_datetime = episode.date | date: '%Y-%m-%d 03:14' | timezone: 'America/New_York' %}

        <article class="episodes-card">
            <div class="episodes-meta">
                <span class="episode-date">{{ episode.date | date: "%B %d, %Y" }}</span>
            </div>

            <h2><a href="{% if episode_datetime > now %}#{% else %}{{ episode.url }}{% endif %}">{{ episode.title }}</a></h2>

            <span class="episode-duration">
                <i class="far fa-clock"></i>
                Temporal Length: {{ episode.duration-en }}
            </span>

            <div class="episodes-excerpt">
                {{ episode.excerpt }}
            </div>

            {% if episode_datetime > now %}
                <button class="latest-listen-button" disabled>Materializing on {{ episode.date | date: "%B %d" }} at 3:14 AM ET</button>
            {% else %}
                <a href="{{ episode.url }}" class="latest-listen-button">Listen now</a>
            {% endif %}
        </article>
        {% endfor %}
    </section>

    {% include newsletter.html %}
</div>

<div id="quantum-field" class="quantum-field"></div>
