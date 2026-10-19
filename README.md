# DoNotKYC

Directory of crypto platforms that let you trade without sending ID: https://www.donotkyc.com

## How the site is built

- Source: `site/` (Astro, static). A local build writes HTML to `docs/` (not committed). On every push to `main`, GitHub Actions builds the site and publishes it to GitHub Pages.
- Data: one file, `site/src/data/platforms.json`. The homepage, the 42 platform pages (`/p/<slug>`),
  the sitemap and the public API (`/nokyc_directory.json`) are all generated from it.
- No tracker, no third-party request: fonts, icons and logos are served from the site.

## Change something

```bash
cd site
npm install        # first time only
npm run dev        # preview on http://localhost:4321
npm run build      # writes ../docs
```

Commit `site/` and push to `main`: the site updates in a few minutes.

To add or edit a platform, edit `site/src/data/platforms.json` (`kyc_level` is `none`, `light` or `tiered`)
and put its logo, if any, in `site/public/logos/<slug>.webp`.
