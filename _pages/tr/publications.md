---
page_id: publications
layout: page
permalink: /publications/
title: yayınlar
description: yayınlar türüne göre, yeniden eskiye doğru sıralı.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-type">Makaleler</h2>

{% bibliography --query @article %}

<h2 class="bibliography-type">Kitap bölümleri</h2>

{% bibliography --query @incollection %}

<h2 class="bibliography-type">Bildiriler</h2>

{% bibliography --query @inproceedings %}

<h2 class="bibliography-type">Tezler</h2>

{% bibliography --query @phdthesis %}

{% bibliography --query @mastersthesis %}

</div>
