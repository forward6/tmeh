---
layout: default
title: "Episodes - The Multiverse Employee Handbook"
description: "Explore the latest episodes of The Multiverse Employee Handbook, a podcast blending humor and science fiction."
permalink: /episodes/
type: podcast
---

{% comment %} Build timestamp: {{ site.time | date: "%Y-%m-%d %H:%M:%S" }} {% endcomment %}

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
        {% assign now = 'now' | date: '%s' | plus: 0 %}

        {% for episode in sorted_episodes %}
            {% unless episode.hidden %}  
            {% assign release_time = episode.date | date: '%s' | plus: 0 %}
            <article class="episodes-card">
                <div class="episodes-meta">
                    <span class="episode-date">{{ episode.date | date: "%B %d, %Y" }}</span>
                </div>

                {% if release_time > now %}
                    <h2>{{ episode.title }}</h2>
                    <div class="episodes-excerpt">
                        {{ episode.excerpt }}
                    </div>
                    <button class="latest-listen-button" disabled>Materializing on {{ episode.date | date: "%B %d" }} at 3:14 AM ET</button>
                {% else %}
                    <h2><a href="{{ episode.url }}">{{ episode.title }}</a></h2>
                    <span class="episode-duration">
                        <i class="far fa-clock"></i>
                        Temporal Length: {{ episode.duration-en }}
                    </span>
                    <div class="episodes-excerpt">
                        {{ episode.excerpt }}
                    </div>
                    <a href="{{ episode.url }}" class="latest-listen-button">Listen now</a>
                {% endif %}
            </article>
            {% endunless %}
        {% endfor %}
    </section>

    {% include newsletter.html %}
</div>

<div id="quantum-field" class="quantum-field"></div>
