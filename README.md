# Jerry Yang · 杨子豪

A bilingual personal portfolio with a warm graphite / amber design, an interactive SVG graph, responsive sections and accessible motion preferences. No package installation or framework build is needed.

## Run locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:4173`. Serve the site over HTTP rather than opening the HTML as a local file, because it uses native JavaScript modules.

## Edit content

- `dist/content.js`: all English and Chinese copy, skills, projects, and the four link placeholders. Replace `EMAIL_HERE`, `GITHUB_URL_HERE`, `LINKEDIN_URL_HERE`, and `PROJECT_URL_HERE` here. Valid links activate automatically. Placeholder links display a localized notice instead of opening a broken URL.
- `dist/index.html`: page shell, hero, metadata, and SVG favicon.
- `dist/styles.css`: base layout, shared tokens, and responsive hero/navigation.
- `dist/refinements.css`: section layouts, warm visual treatment, responsive refinements, and animations.
- `dist/app.js`: reusable section and project renderers, language preference, navigation, and graph interaction.
- `dist/interactions.js`: pointer-based lighting, subtle project tilt, and magnetic buttons.

To add a project, append an entry to `projects` with a unique `id`, English and Chinese content, and its demo/source URLs. Set `previewImage` to a local image URL, such as `./assets/fortune-preview.webp`, to replace the abstract diagram. Add the image file under `dist/assets/`. The built-in visual is a conceptual Five Elements diagram, not a screenshot of a deployed application. Project technologies have not been inferred.

English is the default. The chosen language is saved under `jerry-portfolio-language` in localStorage and restored after reload. If browser storage is blocked, language switching still works for the current page. Navigation, accessible labels, metadata and notices also translate.

The final **Beyond the code / 另一面的我** section sits between Contact and the footer. Edit `translations.en.personal` and `translations.zh.personal` in `dist/content.js` to add your writing. Each string in `paragraphs` becomes one paragraph, and newlines within a string are preserved. Set `status` to an empty string to remove the “More to come / 待续” note. It starts with neutral placeholder text, with no invented personal interests or experiences.

Mouse effects run only with a fine pointer and hover support. Touch layouts and `prefers-reduced-motion` suppress motion. Hero animation pauses offscreen and in hidden tabs. Scroll reveals happen once for each observed element.

## Hosting

`dist/` is the complete static website and can be served by any static hosting provider. `.openai/hosting.json` binds this checkout to its existing Sites project. Keep that project ID when publishing edits.

The favicon is an editable JY monogram. Open Graph title, description, locale and URL are supplied without inventing an image. Replace contact placeholders before using the portfolio for applications. Sites publication is owner-private until you choose to change its audience.
