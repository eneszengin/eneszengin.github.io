# eneszengin.com

Doç. Dr. Enes Zengin'in kişisel akademik web sitesinin kaynak deposu. İstanbul Teknik Üniversitesi, Maden Fakültesi, Jeoloji Mühendisliği Bölümü.

Source repository of the personal academic website of Assoc. Prof. Dr. Enes Zengin, Department of Geological Engineering, Faculty of Mines, Istanbul Technical University.

**Site:** [eneszengin.com](https://eneszengin.com) · Türkçe (varsayılan) ve İngilizce (`/en/`)

## İçerik nerede? / Where is the content?

| İçerik / Content | Dosya / File |
| --- | --- |
| Yayınlar / Publications | `_bibliography/papers.bib` |
| Projeler / Projects | `_data/projects.yml` (iki dil tek dosyada / both languages in one file) |
| Özgeçmiş / CV | `_data/tr/cv.yml`, `_data/en/cv.yml` |
| Dersler / Teaching | `_pages/tr/teaching.md`, `_pages/en/teaching.md` |
| Hakkımda / About | `_pages/tr/about.md`, `_pages/en/about.md` |
| Sosyal ve akademik profiller / Profiles | `_data/socials.yml` |
| Arayüz metinleri / Interface strings | `_data/tr/strings.yml`, `_data/en/strings.yml` |
| Profil fotoğrafı / Profile photo | `assets/img/prof_pic.jpg` |
| Site ayarları / Site settings | `_config.yml` |

Türkçe sayfalar `_pages/tr/`, İngilizce karşılıkları aynı adla `_pages/en/` altındadır.

Turkish pages live in `_pages/tr/` and their English counterparts, with the same file names, in `_pages/en/`.

## Yayına alma / Deployment

`main` dalına yapılan her değişiklik GitHub Actions ile derlenir ve `gh-pages` dalına yayınlanır. Site GitHub Pages üzerinde `eneszengin.com` alan adıyla sunulur.

Every change on `main` is built with GitHub Actions and published to the `gh-pages` branch, served by GitHub Pages at `eneszengin.com`.

## Tema ve lisans / Theme and license

Site, [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) temasıyla hazırlanmıştır. Tema, [al-folio](https://github.com/alshedivat/al-folio) temelinde geliştirilmiştir ve [MIT Lisansı](LICENSE) ile dağıtılmaktadır. Temanın kurulum ve özelleştirme belgeleri bu depodaki `INSTALL.md`, `CUSTOMIZE.md` ve `FAQ.md` dosyalarındadır.

Built with the [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) theme, based on [al-folio](https://github.com/alshedivat/al-folio) and distributed under the [MIT License](LICENSE). The theme's installation and customization guides are kept in `INSTALL.md`, `CUSTOMIZE.md` and `FAQ.md`.

Sitenin içeriği (metinler, yayın listesi, fotoğraflar) Enes Zengin'e aittir ve tema lisansının kapsamında değildir.

The site's content (text, publication list, photographs) belongs to Enes Zengin and is not covered by the theme's license.
