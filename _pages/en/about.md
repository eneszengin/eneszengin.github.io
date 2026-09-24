---
page_id: about
layout: about
title: about
permalink: /
subtitle: Assoc. Prof. Dr. · ITU Faculty of Mines, Department of Geological Engineering · <a href='mailto:eneszengin@itu.edu.tr'>eneszengin@itu.edu.tr</a>

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

I am a faculty member at the Department of Geological Engineering, Faculty of Mines, Istanbul Technical University.

My research focuses on engineering geology, rock mechanics and spatial analysis in the earth sciences. As the Engineering Geology–Rock Mechanics Research Group (MJKM), we combine field observations, laboratory experiments, numerical analyses and spatial data processing to study the engineering behaviour of rock and soil, geological hazards, and the impact of these hazards on infrastructure systems, settlements and cultural heritage structures.

<h2>
  <a href="{{ '/publications/' | relative_url }}" style="color: inherit">latest articles</a>
</h2>

<div class="publications">
{% bibliography --group_by none --max 3 --query @article %}
</div>

<p><a href="{{ '/publications/' | relative_url }}#articles">All articles →</a></p>

<h2>
  <a href="{{ '/publications/' | relative_url }}" style="color: inherit">latest conference papers</a>
</h2>

<div class="publications">
{% bibliography --group_by none --max 3 --query @inproceedings %}
</div>

<p><a href="{{ '/publications/' | relative_url }}#conference-papers">All conference papers →</a></p>

<h2>
  <a href="{{ '/projects/' | relative_url }}" style="color: inherit">latest projects</a>
</h2>

{% include project_list.liquid limit=3 %}

<p><a href="{{ '/projects/' | relative_url }}">All projects →</a></p>
