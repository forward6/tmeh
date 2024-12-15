---
layout: default
title: "Episodes - The Multiverse Employee Handbook"
description: "Explore the latest episodes of The Multiverse Employee Handbook, a podcast blending humor and science fiction."
permalink: /episodes/
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
        {% for episode in sorted_episodes %}

        <article class="episodes-card">
            <div class="episodes-meta">
                <span class="episode-date">{{ episode.date | date: "%B %d, %Y" }}</span>
            </div>

            <h2><a href="{{ episode.url }}">{{ episode.title }}</a></h2>

            <div class="episodes-excerpt">
                {{ episode.excerpt }}
            </div>

            <a href="{{ episode.url }}" class="latest-listen-button">Listen now</a>

        </article>
        {% endfor %}
    </section>



    {% include newsletter.html %}
</div>

<div id="quantum-field" class="quantum-field"></div>
