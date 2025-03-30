---
layout: page
title: Proyectos
permalink: /proyectos/
description: Proyectos del Centro de Imagenología Avanzada Mérida
nav: true
nav_order: 7

display_categories: [Mama, Testicular, Utero]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <section id="{{ category | slugify }}" class="mb-5">
        <h2 class="category mb-4">{{ category }}</h2>

        {% assign categorized_projects = site.projects | where: "category", category %}
        {% assign sorted_projects = categorized_projects | sort: "importance" %}

        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for project in sorted_projects %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-md-3">
            {% for project in sorted_projects %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        {% endif %}
      </section>
    {% endfor %}
  {% else %}
    <!-- Display all projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>

