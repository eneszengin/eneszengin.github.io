---
page_id: publications
layout: page
permalink: /publications/
title: publications
description: publications grouped by type, in reverse chronological order.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-type">Journal articles</h2>

{% bibliography --query @article %}

<h2 class="bibliography-type">Book chapters</h2>

{% bibliography --query @incollection %}

<h2 class="bibliography-type">Conference papers</h2>

{% bibliography --query @inproceedings %}

<h2 class="bibliography-type">Theses</h2>

{% bibliography --query @phdthesis %}

{% bibliography --query @mastersthesis %}

</div>
