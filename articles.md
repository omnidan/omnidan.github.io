---
layout: default
title: Articles
permalink: /articles/
---

<noscript>
Oh, you don't have javascript? Just head to my medium page, then: <a href="https://medium.com/@omnidan">https://medium.com/@omnidan</a>

<meta http-equiv="refresh" content="0;URL='https://medium.com/@omnidan'" />    
</noscript>

<div class="ui basic segment">
  <div class="ui active loader" id="loading"></div>
  <div class="ui two column grid">
    <div class="row" id="articles">
      {% for article in site.data.articles %}
      <div class="column">
        <a class="m-story" data-collapsed="true" href="{{ article.url }}">{{ article.title }}</a>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<script>
document.getElementById('articles').style.display = 'none';

function finishLoading() {
  document.getElementById('loading').className = 'ui disabled loader';
  document.getElementById('articles').style.removeProperty('display');
  clearInterval(interval);
}

function isLoaded() {
  return document.getElementsByTagName('iframe').length > 0;
}

function ifThen(f, then) {
  return function () {
    if (f()) {
      then();
    }
  };
}

var interval = setInterval(ifThen(isLoaded, finishLoading), 10);
</script>

<script async src="https://static.medium.com/embed.js"></script>
