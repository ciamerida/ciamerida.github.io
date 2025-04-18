---
layout: page
title: Servicios
permalink: /servicios/
description: 
nav: true
nav_order: 3
display_categories: [Especializados, Intervencionista, Ultrasonido, Doppler]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <section id="{{ category | slugify }}" class="mb-5">
        <h2 class="category mb-4">{{ category }}</h2>

        {% assign categorized_services = site.services | where: "category", category %}
        {% assign sorted_services = categorized_services | sort: "importance" %}

        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for service in sorted_services %}
                {% include service_horizontal.liquid service=service %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-3">
            {% for service in sorted_services %}
              {% include service.liquid service=service %}
            {% endfor %}
          </div>
        {% endif %}
      </section>
    {% endfor %}
  {% else %}
    {% assign sorted_services = site.services | sort: "importance" %}

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for service in sorted_services %}
            {% include service_horizontal.liquid service=service %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for service in sorted_services %}
          {% include service.liquid service=service %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
