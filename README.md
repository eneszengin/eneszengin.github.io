# eneszengin.com

Doç. Dr. Enes Zengin'in kişisel akademik web sitesi. İstanbul Teknik Üniversitesi, Maden Fakültesi, Jeoloji Mühendisliği Bölümü.

Personal academic website of Assoc. Prof. Dr. Enes Zengin, Department of Geological Engineering, Faculty of Mines, Istanbul Technical University.

**Site:** [eneszengin.com](https://eneszengin.com) · Türkçe (`/`) ve İngilizce (`/en/`)

## Yapı / Structure

Düz HTML; derleme adımı yok. `main` dalına yapılan her değişiklik GitHub Actions ile `gh-pages` dalına kopyalanır ve GitHub Pages üzerinden yayınlanır.

Plain HTML, no build step. Every push to `main` is copied to the `gh-pages` branch by GitHub Actions and served by GitHub Pages.

| Dosya / File | İçerik / Content |
| --- | --- |
| `index.html` | Türkçe ana sayfa (tüm içerik tek sayfada) / Turkish home page |
| `en/index.html` | İngilizce sayfa / English page |
| `atama/` | İTÜ atama kriterleri aracı / ITU appointment criteria tool (arama motorlarına kapalı) |
| `publications/`, `projects/`, `teaching/`, `cv/` ve `en/…` | Eski adreslerden ana sayfadaki bölümlere yönlendirme / redirects from old URLs |
| `data/` | Yayın ve proje kaynak verileri (papers.bib, projects.yml); sitede doğrudan kullanılmıyor / source data, not used by the site directly |
| `assets/img/prof_pic.jpg` | Profil fotoğrafı / profile photo |
| `googlecf423349834dbe9a.html` | Google Search Console doğrulaması — silinmemeli / do not delete |

Bing ve Yandex doğrulama etiketleri ile Google Analytics kodu `index.html` ve `en/index.html` içindedir.

## Güncelleme / Updating

Yeni yayın, proje veya ders: `index.html` ve `en/index.html` içindeki ilgili bölüme satır eklenir. `data/papers.bib` de güncel tutulur.
