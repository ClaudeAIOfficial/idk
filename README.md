# Grand Theft Auto VI: Launch Gallery recreation

A static, editable recreation based on the HTML page snapshot and images you provided. It uses plain HTML, CSS and JavaScript. No build tool or API key is required.

## Run it locally

1. Unzip this project.
2. Run `python -m http.server 8000` from the project folder.
3. Open `http://localhost:8000`.

You can also upload the entire folder to Netlify, Vercel, GitHub Pages, or another static host. On Vercel, choose **Other** as the framework preset and use the project root as the output directory.

## Features

- Responsive fullscreen landing page, gallery and footer.
- Gallery images in the sequence extracted from the original page.
- Click-to-enlarge lightbox with keyboard arrows, Escape, and mobile swipe support.
- Mobile navigation, smooth scrolling and scroll progress.
- The original source archive and recovered image assets remain available in the downloadable ZIP from ChatGPT. This Git-connected deployment serves public Rockstar media URLs so images load without checking recovered binary assets into GitHub.
- Images missing from the ZIP request their original public Rockstar media URLs. If those images are unavailable, the gallery may show placeholders.

## Limitations

The supplied ZIP archive is partially corrupted/truncated: 55 entries could not be recovered, including several hero/gallery screenshots and font files. As a result, the layout is a faithful *recreation*, not a pixel-exact copy of the original production page. The missing image files will work when Rockstar's media endpoints are accessible. The provided webpage snapshot also included third-party tracking scripts, browser extensions and original app bundles, which this version deliberately avoids.

All Grand Theft Auto VI artwork, names and marks belong to Rockstar Games / Take-Two Interactive. This is an independent recreation, not an official Rockstar Games website. Do not present it as an official Rockstar source.