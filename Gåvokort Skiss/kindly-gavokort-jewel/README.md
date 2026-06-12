# Kindly — Gåvokort · Jewel & foil

Presentationssida för Kindlys digitala gåvokort: fem gåvonivåer i Jewel & foil
plus mottagarens öppningsbara kort (band & rosett) i tre pappersvarianter.
Statisk HTML/CSS/JS — ingen byggprocess.

## Innehåll

```
index.html      ← presentationssidan (GitHub Pages serverar denna som standard)
styles.css      ← all styling
app.js          ← bygger korten + öppna/stäng-interaktionen
assets/
  kindly-logo.svg   ← Kindly-logotyp (används som CSS-mask)
  ribbon.png        ← sidenrosetten på mottagarkorten
```

Alla sökvägar är relativa och utan mellanslag, så sidan fungerar från valfri undersökväg.

## Publicera med GitHub Pages

1. Skapa ett nytt repo på GitHub.
2. Pusha **innehållet** i den här mappen till repots rot (så att `index.html` ligger överst):
   ```bash
   git init
   git add .
   git commit -m "Kindly gåvokort — Jewel & foil"
   git branch -M main
   git remote add origin https://github.com/<användarnamn>/<repo-namn>.git
   git push -u origin main
   ```
3. Gå till **Settings → Pages → Build and deployment**.
4. Välj **Deploy from a branch**, sedan **main** / **/ (root)** och spara.
5. Efter någon minut är sidan live på:
   ```
   https://<användarnamn>.github.io/<repo-namn>/
   ```

## Interaktion

Mottagarkorten i Steg 2 öppnas med klick (eller Enter/mellanslag när kortet har
fokus): bandet tonar bort och dörrarna viks ut i 3D och avslöjar hälsningen.

## Notera

Typsnitten (Plus Jakarta Sans + Inclusive Sans) laddas från Google Fonts, så
sidan behöver internetanslutning för att rendera typografin korrekt — vilket
alltid gäller för Pages ändå.
