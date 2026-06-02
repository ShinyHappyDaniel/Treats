# Kindly & Co — Brand Guidelines

A single-page brand guidelines site for Kindly & Co. Static HTML/CSS/JS — no build step.

## Contents

```
index.html        ← entry point (GitHub Pages serves this by default)
styles.css        ← all styling
icons.js          ← inline icons + decorative tiles
assets/           ← logos and downloadable brand assets
  logo-teal.png, logo-white.png, logo-coral.png
  kindly/         ← SVG/PNG logos, colour + type specimens
    fonts/        ← Plus Jakarta Sans + Inclusive Sans (TTF)
```

All paths are relative and space-free, so the site works from any sub-path.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Push the **contents** of this folder to the repo root (so `index.html` sits at the top level):
   ```bash
   git init
   git add .
   git commit -m "Add Kindly brand guidelines"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Build and deployment**.
4. Set **Source** to **Deploy from a branch**, then choose **main** / **/ (root)** and save.
5. After a minute it will be live at:
   ```
   https://<username>.github.io/<repo-name>/
   ```

## Note on fonts

The display/body fonts load from **Google Fonts** via `styles.css`, so the published
page needs an internet connection to render type correctly (always true for Pages).
The TTF files in `assets/kindly/fonts/` are provided as downloadable assets, not for
self-hosting — swap the `@import` in `styles.css` for `@font-face` rules if you want
a fully self-hosted, offline copy.
