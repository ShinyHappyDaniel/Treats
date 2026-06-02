# perks — Brand Guidelines

The Perks visual identity guidelines as a single-page website, ready to publish on GitHub Pages.

## Contents

```
index.html      → the page (GitHub Pages serves this by default)
perks.css       → styles
perks.js        → icon set + graphic elements (inline SVG)
assets/         → downloadable logo, app-icon & favicon SVGs
```

All files use clean, space-free relative paths, so the folder works as-is.

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `perks-brand`).
2. Upload the **contents of this folder** to the repository root — `index.html` must sit at the top level, not inside a subfolder.
   - Via the web UI: open the repo → **Add file → Upload files** → drag everything in → **Commit**.
   - Via git:
     ```bash
     git init
     git add .
     git commit -m "Perks brand guidelines"
     git branch -M main
     git remote add origin https://github.com/<username>/<repo-name>.git
     git push -u origin main
     ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** / **/ (root)**, and **Save**.
5. Wait a minute, then your site is live at:
   ```
   https://<username>.github.io/<repo-name>/
   ```

## Note on fonts

The page loads **Bricolage Grotesque**, **Geist** and **Geist Mono** from Google Fonts, so the published site needs an internet connection to render type correctly (this is always true for Pages). If you ever need a fully offline copy, use the standalone single-file export instead.
