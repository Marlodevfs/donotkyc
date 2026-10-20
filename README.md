# DoNotKYC

Directory of crypto platforms that let you trade without sending ID, plus a list of privacy tools: https://www.donotkyc.com

Each platform is sorted by how much identity it asks for. Each fact comes from the platform's own terms or help pages, and the listing links that page when we have one. We do not test platforms with real money: see [how we check](https://www.donotkyc.com/methodology).

## How the site is built

- `site/` is an Astro static site in 9 languages (EN, FR, ES, DE, PT, IT, RU, TR, ZH). A local build writes HTML to `docs/` (not committed). On every push to `main`, and every night, GitHub Actions builds the site and publishes it to GitHub Pages.
- Data lives in `site/src/data/`:
  - `platforms.json`: the directory. The home page, the platform pages (`/p/<slug>`), the comparisons, the sitemap and the public API (`/nokyc_directory.json`) are all generated from it.
  - `tools.json`: the privacy tools pages (`/tools`).
  - `changelog.json`: the public changelog and RSS feed.
  - `sponsors.json`: sponsored tiles, see [SPONSORS.md](SPONSORS.md).
- Texts and translations are in `site/src/i18n/`.
- No tracker and no third-party request: fonts, icons and logos are served from the site. Visits are counted with GoatCounter, without cookies.
- A weekly workflow (`link-check.yml`) checks the listed sites and source pages and updates one issue, "Weekly listing check".

## Run it locally

```bash
cd site
npm ci             # first time only
npm run dev        # preview on http://localhost:4321
npm run build      # writes ../docs
```

## Fix or add something

- Wrong or outdated listing: open a [report a change](https://github.com/Marlodevfs/donotkyc/issues/new?template=report-change.yml) issue.
- Missing platform: open a [submit a platform](https://github.com/Marlodevfs/donotkyc/issues/new?template=submit-platform.yml) issue.
- Pull requests are welcome. For a platform, edit `site/src/data/platforms.json` (`kyc_level` is `none`, `light` or `tiered`) and link the official page that backs the change in `kyc_source`. Put a logo, if any, in `site/public/logos/<slug>.webp`. A fact with no official source stays out.

## Contact

Issues on this repository, or Telegram: https://t.me/donotkyc55
