---
layout: default
title: Projects
permalink: /projects/
---

<div class="ui projects">
  <div class="ui cards projectbox projectCards">
    {% for project in site.data.projects %}
      {% include project.html %}
    {% endfor %}
  </div>
</div>
