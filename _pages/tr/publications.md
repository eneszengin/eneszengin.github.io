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

<h2 class="bibliography-type" id="makaleler">Makaleler</h2>

{% bibliography --query @article %}

<h2 class="bibliography-type" id="kitap-bolumleri">Kitap bölümleri</h2>

{% bibliography --query @incollection %}

<h2 class="bibliography-type" id="bildiriler">Bildiriler</h2>

{% bibliography --query @inproceedings %}

<h2 class="bibliography-type" id="tezler">Tezler</h2>

{% bibliography --query @phdthesis %}

{% bibliography --query @mastersthesis %}

</div>
