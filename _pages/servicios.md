---
layout: page
title: Servicios
permalink: /servicios/
description: Servicios del Centro de Imagenología Avanzada Mérida
nav: true
nav_order: 2
display_categories: [Ultrasonido, Doppler, Especializados, Intervencionista]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <section id="{{ category | slugify }}" class="mb-5">
        <h2 class="category mb-4">{{ category }}</h2>

        {% assign categorized_services = site.projects | where: "category", category %}
        {% assign sorted_services = categorized_services | sort: "importance" %}

        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for project in sorted_services %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-3">
            {% for project in sorted_services %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        {% endif %}
      </section>
    {% endfor %}
  {% else %}
    <!-- Display all projects without categories -->
    {% assign sorted_services = site.projects | sort: "importance" %}

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_services %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_services %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
