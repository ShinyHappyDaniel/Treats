# Perks — Brand Guidelines

Self-contained brand guidelines site for **Perks**.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## GitHub Pages

Push this folder to a repo and enable **Settings → Pages → Deploy from branch**
(root). The page is served as `index.html` with no build step.

## Structure

```
index.html      Brand guidelines page
perks.css       Styles
perks.js        Smooth-scroll / nav behaviour
assets/
  perks-logo-ink.svg     Ink wordmark + coral dot
  perks-logo-cream.svg   Cream wordmark (for dark backgrounds)
  perks-appicon.svg      App icon
  perks-favicon.svg      Favicon
```

Fonts (Bricolage Grotesque, Geist, Geist Mono) load from Google Fonts and
require an internet connection.
