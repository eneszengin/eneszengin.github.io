---
page_id: about
layout: about
title: hakkımda
permalink: /
subtitle: Doç. Dr.<br>İTÜ Maden Fakültesi, Jeoloji Mühendisliği Bölümü · <a href='mailto:eneszengin@itu.edu.tr'>eneszengin@itu.edu.tr</a><br><a href='https://akademi.itu.edu.tr/eneszengin/'>akademi.itu.edu.tr/eneszengin</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

İstanbul Teknik Üniversitesi Maden Fakültesi Jeoloji Mühendisliği Bölümü’nde öğretim üyesi olarak görev yapıyorum.

Araştırmalarım genel olarak mühendislik jeolojisi, kaya mekaniği ve yer bilimlerinde mekânsal analiz konularında yoğunlaşıyor. Mühendislik Jeolojisi-Kaya Mekaniği-Hidrojeoloji Çalışma Grubu (MJKMH) olarak arazi gözlemleri, laboratuvar deneyleri, sayısal analizler ve mekânsal veri işleme yöntemlerini birlikte kullanarak kaya ve zemin ortamlarının mühendislik davranışını, jeolojik tehlikeleri ve bu tehlikelerin altyapı sistemleri, yerleşim alanları ve kültürel miras yapıları üzerindeki etkileri üzerinde çalışıyoruz.

<!-- son bölümler, temadaki ana sayfa kutuları gibi fotoğrafın altından başlar -->
<div style="clear: both"></div>

<div class="home-latest">

<h2>
  <a href="{{ '/publications/' | relative_url }}" style="color: inherit">son makaleler</a>
</h2>

<div class="publications">
{% bibliography --group_by none --max 3 --query @article %}
</div>

<p><a href="{{ '/publications/' | relative_url }}#makaleler">Tüm makaleler →</a></p>

<h2>
  <a href="{{ '/publications/' | relative_url }}" style="color: inherit">son bildiriler</a>
</h2>

<div class="publications">
{% bibliography --group_by none --max 3 --query @inproceedings %}
</div>

<p><a href="{{ '/publications/' | relative_url }}#bildiriler">Tüm bildiriler →</a></p>

<h2>
  <a href="{{ '/projects/' | relative_url }}" style="color: inherit">son projeler</a>
</h2>

{% include project_list.liquid limit=3 plain=true %}

<p><a href="{{ '/projects/' | relative_url }}">Tüm projeler →</a></p>

</div>
