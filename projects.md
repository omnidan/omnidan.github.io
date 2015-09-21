---
layout: default
title: Projects
permalink: /projects/
---

<div class="ui projects">
  <div class="ui buttons filter">
    <div class="ui blue basic button active">All</div>
    <div class="ui blue basic button">Business</div>
    <div class="ui blue basic button">Project</div>
    <div class="ui blue basic button">Development</div>
    <div class="ui blue basic button">Social</div>
  </div>
  <div class="ui cards projectbox">
    {% for project in site.data.projects %}
      {% include project.html %}
    {% endfor %}
  </div>
</div>
