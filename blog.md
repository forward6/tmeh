---
layout: default
title: "Blog - The Multiverse Employee Handbook"
description: "Explore articles about quantum physics, workplace humor, and the intersection of science and corporate life"
permalink: /blog/
type: blog
---

<div class="background-container">
    <div class="background-overlay"></div>
</div>

<div class="main-container">
    <section class="blog-header">
        <h1>The Quantum Blog</h1>
        <p class="blog-intro">Exploring the multiverse of corporate culture and quantum physics, one article at a time.</p>
    </section>

    <section class="blog-grid">
        {% for post in site.posts %}
        <article class="blog-card">
            <div class="post-meta">
                <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                {% if page.department %}
                <span class="post-department">{{ page.department }}</span>
                {% endif %}
            </div>

            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>

            <div class="post-excerpt">
                {{ post.excerpt }}
            </div>

            <a href="{{ post.url }}" class="read-more-button">Read More →</a>

            {% if post.categories %}
            <br/><br/>
            <div class="post-categories">
                {% for category in post.categories %}
                <span class="category-tag">{{ category }}</span>
                {% endfor %}
            </div>
            {% endif %}

            {% if post.department %}
            <div class="post-footer">
                <span class="post-department">Filed by: {{ post.department }}</span>
            </div>
            {% endif %}
        </article>
        {% endfor %}
    </section>

    {% include newsletter.html %}
</div>

<div id="quantum-field" class="quantum-field"></div>
